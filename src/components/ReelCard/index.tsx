import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const { height } = Dimensions.get('window');

interface Props {
  item: any;
  isVisible: boolean;
}

const ReelCard: React.FC<Props> = ({ item, isVisible }) => {
  const slide = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(slide, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: 100,
        duration: 180,
        useNativeDriver: true,
      }).start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <Animated.View
      style={{
        height: height,
        transform: [{ translateY: slide }],
      }}
    >
      <Video
        source={item.video}
        style={styles.videoContainer}
        resizeMode="cover"
        repeat
        paused={!isVisible}
      />
    </Animated.View>
  );
};

export default ReelCard;

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: '100%',
  },
});
