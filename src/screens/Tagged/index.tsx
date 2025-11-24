import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { reelsData } from './data';
import ReelCard from '../../components/ReelCard';

const ReelsScreen = () => {
  const [currentId, setCurrentId] = useState<string>('1');

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        const visibleItem = viewableItems[0].item;
        setCurrentId(visibleItem.id);
      }
    },
  ).current;

  return (
    <FlatList
      data={reelsData}
      renderItem={({ item }) => (
        <ReelCard item={item} key={item.id} isVisible={currentId === item.id} />
      )}
      pagingEnabled
      snapToAlignment="center"
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 30,
      }}
    />
  );
};

export default ReelsScreen;
