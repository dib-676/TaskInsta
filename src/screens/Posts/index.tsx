import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DUMMY_POSTS } from './data';
import PostCard from '../../components/PostCard';
import { useThemeColors } from '../../static';

const Posts = () => {
  const { colors } = useThemeColors();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
      edges={{}}
    >
      <FlatList
        data={DUMMY_POSTS}
        renderItem={({ item }) => <PostCard post={item} key={item.id} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
