import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from './styles';
import { useThemeColors } from '../../static';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

interface Props {
  post: any;
}

const PostCard: React.FC<Props> = props => {
  const { post } = props;
  const { colors } = useThemeColors();
  const [liked, setLiked] = useState(false);
  const [tap, setTap] = useState(0);

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 250;
    if (tap && now - tap < DOUBLE_PRESS_DELAY) {
      setLiked(true);
    } else {
      setTap(now);
    }
  };

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <View style={styles.headerRow}>
        <View style={styles.userRow}>
          <Image source={{ uri: post.user.avatar }} style={styles.avatar} />
          <View>
            <Text style={[styles.username, { color: colors.text }]}>
              {post.user.username}
            </Text>
            <Text style={[styles.subText, { color: colors.subText }]}>
              {post.user.name}
            </Text>
          </View>
        </View>
      </View>

      <Pressable onPress={handleDoubleTap}>
        <Image source={post.image} style={styles.postImage} />
      </Pressable>

      <View style={styles.actionsRow}>
        <View style={styles.actionsLeft}>
          <Pressable
            onPress={() => {
              setLiked(_liked => !_liked);
            }}
            style={({ pressed }) => [
              styles.pressableBtn,
              { opacity: pressed ? 0.9 : 1 },
            ]}
            android_ripple={{ color: '#ffffff22', borderless: true }}
          >
            <FontAwesome6
              name="heart"
              size={22}
              color={liked ? 'red' : '#0000'}
              selectionColor={'red'}
            />
          </Pressable>
        </View>
      </View>

      <Text style={[styles.likesText, { color: colors.text }]}>
        {post.likes} likes
      </Text>

      <View style={styles.captionRow}>
        <Text style={[styles.captionUsername, { color: colors.text }]}>
          {post.user.username}{' '}
        </Text>
        <Text style={[styles.captionText, { color: colors.text }]}>
          {post.caption}
        </Text>
      </View>

      <Text style={[styles.timeText, { color: colors.subText }]}>
        {post.timeAgo}
      </Text>
    </View>
  );
};

export default PostCard;
