const request = require('request');
const fs = require('fs');
const path = require('path');

var headers = {
  'vine-session-id': '937490693683855360-2c538f97-c9c9-4bc3-ac52-84a81dd16717',
  'x-vine-client': 'vinewww/2.1'
};

function get (url) {
  return request({
    url,
    headers
  });
}

function assetPath (filename) {
  return path.resolve(
    path.join(__dirname, 'assets', encodeURIComponent(filename))
  );
}

var loaded = {};

function loadAllCommentAvatars () {
  var commentFiles = fs.readdirSync('./comments');
  console.log(commentFiles.length);

  function loadCommentAvatars (collection) {
    var filename = collection.pop();
    if (!filename) {
      return;
    }
    var fileConents = fs.readFileSync(path.join('comments', filename));
    var data = JSON.parse(fileConents.toString());

    console.log('loaded comment thread', data.anchorStr);

    function loadAvatars(comments) {
      var comment = comments.pop();
      if (!comment) {
        return loadCommentAvatars(collection);
      }
      if (loaded[comment.avatarUrl]) {
        console.log('skipping', comment.username);
        return loadAvatars(comments);
      }

      console.log('loading comment avatar', comment.username)

      get(comment.avatarUrl)
        .on('error', e => console.error('failed', e))
        .on('end', () => {
          loaded[comment.avatarUrl] = true;
          loadAvatars(comments)
        })
        // .pipe(fs.createWriteStream(assetPath(comment.avatarUrl)))
    }

    loadAvatars(data.data.records);
  }

  loadCommentAvatars(commentFiles)
  // function loadComm
}

if (process.argv[2] === 'avatars') {
  loadAllCommentAvatars();
}




function loadProfile (profileFileName) {
  var fileContents = fs.readFileSync(profileFileName);
  var data = JSON.parse(fileContents.toString());

  function fetch (collection) {
    var item = collection.pop();
    var propertiesToDownload = [
      'videoDashUrl',
      'thumbnailUrl',
      'avatarUrl',
      'videoLowURL',
    ];
    console.log('loading', item.postIdStr);
    function fetchAssets (props) {
      var prop = props.pop();
      if (!prop) {
        return fetchVideoUrls(item.videoUrls);
      }

      if (!item[prop]) {
        console.log('no', prop, 'on', item.postIdStr);
        return fetchAssets(props);
      }

      if (loaded[item[prop]]) {
        console.log('already loaded', prop, 'for', item.postIdStr);
        return fetchAssets(props);
      }
      console.log('loading file', prop, 'for', item.postIdStr);

      request(item[prop])
        .on('error', e => console.error('failed to load', e))
        .on('end', () => {
          fetchAssets(props)
          loaded[item[prop]] = true;
        })
        // .pipe(fs.createWriteStream(assetPath(item[prop])))

    }

    function fetchVideoUrls(urls) {
      var url;
      if (urls) {
        url = urls.pop();
      }
      if (!url) {
        return fetch(collection);
      }
      if (loaded[url.videoUrl]) {
        return fetchVideoUrls(urls);
      }
      console.log('loading video', url.format, url.id, 'for', item.postIdStr);
      request(url.videoUrl)
        .on('error', e => console.error('failed to load video', e))
        .on('end', () => {
          loaded[url.videoUrl] = true;
          fetchVideoUrls(urls)
        })
        // .pipe(fs.createWriteStream(assetPath(url.videoUrl)));
    }

    fetchAssets(propertiesToDownload);
    // if (item.videoUrls) {
    //   fetchVideoUrls(item.videoUrls.slice());
    // }

    // fetch(collection);
  }


  fetch(data.data.records);
}
if (process.argv[2] === 'videos') {
  loadProfile('./profile.gx.json')
}
//

function loadComments (fileName) {
  var fileContents = fs.readFileSync(path.resolve(path.join(__dirname, fileName)));
  var data = JSON.parse(fileContents.toString());

  function fetch (collection) {
    var record = collection.pop();

    if (!record) {
      console.log('done')
    }

    console.log('loading comment thread', record.postIdStr);

    get(`https://vine.co/api/posts/${record.postIdStr}/comments?size=100`)
    .on('error', e => console.error('encountered an error', e))
    .on('end', () => fetch(collection))
      // .pipe(fs.createWriteStream(path.resolve(path.join(__dirname, 'comments', `${record.postIdStr}.json`))))
  }

  fetch(data.data.records);
}


// function loadComments(profileFileName) {
//   var fileContents = fs.readFileSync(path.resolve(path.join(__dirname, profileFileName)));
//
//   var data = JSON.parse(fileContents.toString());
//   data.data.records.forEach(record => {
//     console.log('getting', record.postIdStr);
//     get(`https://vine.co/api/posts/${record.postIdStr}/comments?size=100`)
//       .pipe(fs.createWriteStream(
//       path.resolve(path.join(__dirname, 'comments', `${record.postIdStr}.json`)
//     )))
//   })
// }
if (process.argv[2] === 'comments') {
  loadComments('./profile.aw.json');
}


//loadProfile('./profile.aw.json');
