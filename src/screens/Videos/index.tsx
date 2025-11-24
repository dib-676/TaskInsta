import React from 'react';
import { FlatList, View, Pressable, Image, useColorScheme } from 'react-native';
import { mediaData } from './data';
import styles from './styles';
import { MediaItem } from '../../utils/interface';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const Videos: React.FC = () => {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? '#000' : '#fff';

  const renderItem = ({ item, index }: { item: MediaItem; index: number }) => (
    <View style={{ flexDirection: 'row' }}>
      {item.side === 'right' && (
        <Pressable
          key={index + item.side}
          style={({ pressed }) => [styles.itemX, pressed && { opacity: 0.9 }]}
        >
          <Image source={{ uri: item.data[4].url }} style={styles.image} />
          {item.data[4].type === 'video' && (
            <View style={styles.playIconOverlay}>
              <FontAwesome6 name="circle-play" size={50} color="#fff" />
            </View>
          )}
        </Pressable>
      )}
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Pressable
            key={index + item.side}
            style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
          >
            <Image source={{ uri: item.data[0].url }} style={styles.image} />
            {item.data[0].type === 'video' && (
              <View style={styles.playIconOverlay}>
                <FontAwesome6 name="circle-play" size={50} color="#fff" />
              </View>
            )}
          </Pressable>
          <Pressable
            key={index + item.side}
            style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
          >
            <Image source={{ uri: item.data[1].url }} style={styles.image} />
            {item.data[1].type === 'video' && (
              <View style={styles.playIconOverlay}>
                <FontAwesome6 name="circle-play" size={50} color="#fff" />
              </View>
            )}
          </Pressable>
        </View>
        <View>
          <Pressable
            key={index + item.side}
            style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
          >
            <Image source={{ uri: item.data[2].url }} style={styles.image} />
            {item.data[2].type && (
              <View style={styles.playIconOverlay}>
                <FontAwesome6 name="circle-play" size={50} color="#fff" />
              </View>
            )}
          </Pressable>
          <Pressable
            key={index + item.side}
            style={({ pressed }) => [styles.item, pressed && { opacity: 0.9 }]}
          >
            <Image source={{ uri: item.data[3].url }} style={styles.image} />
            {item.data[3].type && (
              <View style={styles.playIconOverlay}>
                <FontAwesome6 name="circle-play" size={50} color="#fff" />
              </View>
            )}
          </Pressable>
        </View>
      </View>
      {item.side === 'left' && (
        <Pressable
          key={index + item.side}
          style={({ pressed }) => [styles.itemX, pressed && { opacity: 0.9 }]}
        >
          <Image source={{ uri: item.data[4].url }} style={styles.image} />
          {item.data[4].type === 'video' && (
            <View style={styles.playIconOverlay}>
              <FontAwesome6 name="circle-play" size={50} color="#fff" />
            </View>
          )}
        </Pressable>
      )}
    </View>
  );

  return (
    <FlatList
      data={mediaData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[styles.container, { backgroundColor: bgColor }]}
    />
  );
};

export default Videos;
