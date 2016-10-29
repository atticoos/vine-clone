import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import Colors from '../../constants/colors';

class VideoDescription extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      segments: partitionByEntities(props.description, props.entities)
    };
  }
  render () {
    return (
      <Text style={this.props.style}>
        {this.state.segments.map(({message, entity}, i)=> (
          <Text
            key={i}
            style={!!entity ? styles.entity : null}>
            {message}
          </Text>
        ))}
      </Text>
    )
  }
}

function partitionByEntities (message, entities) {
  var tuple = {
    value: message,
    partitions: []
  };

  var output = entities.reduce(({message, position, ranges}, entity) => {
    var [start, end] = entity.range;
    var length = end - start + 1;
    start = start - position;
    end = end - position;
    var nextPosition = end + 1;
    var leftRange = message.substr(0, start);
    var rightRange = message.substr(start, length);

    ranges.push({message: leftRange, entity: null});
    ranges.push({message: rightRange, entity});

    return {
      message: message.substr(nextPosition),
      position: nextPosition,
      ranges
    };
  }, {message, position: 0, ranges: []});

  if (output.message) {
    output.ranges.push({message: output.message, entity: null});
  }

  return output.ranges;
}

const styles = StyleSheet.create({
  entity: {
    color: Colors.Green.NORMAL
  }
});

export default VideoDescription;
