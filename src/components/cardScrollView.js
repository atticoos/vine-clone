import React from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  View
} from 'react-native';

const CELL_HEIGHT = 400;
const START_OFFSET = 0;
const VELOCITY_THRESHOLD = 0.2;
const DURATION = 300;

const velocityToDuration = x => {
  // var x = Math.abs(velocity);
  return Math.abs(x * 200);
};

const velocityToDistance = x => {
  // var x = Math.abs(velocity);
  return x * 100;
};

class CardScrollView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      offset: new Animated.Value(START_OFFSET)
    };
    this.cardPositions = [];
    this.lastY = START_OFFSET;
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponder: (e) => {
        return this.approved;
      },
      onMoveShouldSetPanResponderCapture: (e, gestureState) => {
        this.approved = gestureState.dx != 0 && gestureState.dy != 0;
        return this.approved;
      },
      onPanResponderTerminationRequest: () => true,
      onShouldBlockNativeResponder: () => true,
      onPanResponderGrant: () => true,
      onPanResponderStart: (evt, gestureState) => this.initialY = gestureState.y0,
      onPanResponderMove: (evt, gestureState) => {
        this.state.offset.setValue(this.lastY + gestureState.dy);
      },
      onPanResponderEnd: (evt, gestureState) => {
        this.lastY = this.lastY + gestureState.dy;

        if (gestureState.vy < -VELOCITY_THRESHOLD) {
          // next card
          this.flickUp();
        } else if (gestureState.vy > VELOCITY_THRESHOLD) {
          // prev card
          this.flickDown();
        }
      }
    });
  }

  // next card
  flickUp () {
    var currentPosition = -this.state.offset._value;
    var nearestCard = this.cardPositions
      .reduce((nearestPosition, cardPosition) => {
        if (cardPosition < currentPosition) {
          return nearestPosition;
        }
        if (nearestPosition < currentPosition) {
          return cardPosition;
        }

        var nearestDiff = nearestPosition - currentPosition;
        var cardDiff = cardPosition - currentPosition;
        if (cardDiff > 0 && cardDiff < nearestDiff) {
          return cardPosition;
        }
        return nearestPosition;
      }, 0);

    if (nearestCard === 0) {
      nearestCard = this.cardPositions[this.cardPositions.length - 1];
    }

    Animated.timing(this.state.offset, {
      toValue: -nearestCard,
      duration: DURATION
    }).start(() => {
      this.lastY = -nearestCard;
      this.props.onCardChanged(this.cardPositions.indexOf(nearestCard));
    });
  }

  flickDown () {
    var currentPosition = -this.state.offset._value;
    var nearestCard = this.cardPositions
      .reverse()
      .reduce((nearestPosition, cardPosition) => {
        if (cardPosition > currentPosition) {
          return nearestPosition;
        }
        if (nearestPosition > currentPosition) {
          return cardPosition;
        }

        var nearestDiff = currentPosition - nearestPosition;
        var cardDiff = currentPosition - cardPosition;
        if (cardDiff > 0 && cardDiff < nearestDiff) {
          return cardPosition;
        }
        return nearestPosition;
      }, this.cardPositions[this.cardPositions.length - 1]);

    Animated.timing(this.state.offset, {
      toValue: -nearestCard,
      easing: Easing.out(Easing.linear),
      duration: DURATION
    }).start(() => {
      this.lastY = -nearestCard;
      this.props.onCardChanged(this.cardPositions.indexOf(nearestCard));
    });
  }

  onCardLayout (card, index, e) {
    this.cardPositions[index] = e.layout.y;
  }

  render () {
    return (
      <View
        style={[styles.container, this.props.style]}
        {...this.panResponder.panHandlers}
      >
        <Animated.View style={[styles.stage, {top: this.state.offset}]}>
          {this.props.children.map((child, i) => React.cloneElement(child, {
            onLayout: ({nativeEvent}) => this.onCardLayout(child, i, nativeEvent)
          }))}
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden'
  },
  stage: {
    position: 'absolute',
    left: 0
  }
});

export default CardScrollView;
