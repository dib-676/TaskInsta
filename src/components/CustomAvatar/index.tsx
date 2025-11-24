import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  size?: number;
  source: any;
  onPress: () => void;
}

const CustomAvatar: React.FC<Props> = ({ size = 40, source, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <Image
        source={source}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
    </TouchableOpacity>
  );
};

export default CustomAvatar;
