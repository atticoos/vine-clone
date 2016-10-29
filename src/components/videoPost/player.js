import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux';
import Thumbnail from './thumbnail';
import Video from './video';

class VinePlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {loaded: false};
  }
  render () {
    var {
      video,
      style,
      activated,
      playing,
      onPlay,
      onPause,
      onLoop,
      ...props
    } = this.props;
    var {loaded} = this.state;

    return (
      <View style={style} {...props}>
        {activated &&
          <Video
            style={styles.scene}
            url={video.videoUrl}
            paused={!playing}
            onPress={playing ? onPause : onPlay}
            onEnd={onLoop}
            onLoad={() => this.setState({loaded: true})}
          />
        }
        {!loaded &&
          <Thumbnail
            style={styles.scene}
            url={video.thumbnailUrl}
            onPress={onPlay}
          />
        }
        {!loaded && activated &&
          <Loader style={styles.scene} />
        }
      </View>
    );
  }
}

function Loader ({style, ...props}) {
  return (
    <View style={[styles.indicatorContainer, style]} {...props}>
      <ActivityIndicator
        style={styles.indicator}
        size="large"
        color="#fff"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  scene: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  },
  indicator: {

  }
});

const selector = (state, props) => ({
  activated: state.feed.videosActivated[props.video.postId]
});

export default connect(selector)(VinePlayer);

/*

{!playing &&
  <Thumbnail
    style={styles.thumbnail}
    url={video.thumbnailUrl}
    onPress={this.props.onPlay}
  />
}
{playing &&
  <Video
    style={styles.thumbnail}
    url={video.videoUrl}
    paused={paused}
    onPress={paused ? onPlay : onPause}
    onEnd={onLoop}
  />
}
 */
