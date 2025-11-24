import { useColorScheme } from 'react-native';

export const useThemeColors = () => {
  const scheme = useColorScheme(); // "light" or "dark"

  const colors = {
    background: scheme === 'dark' ? '#000' : '#fff',
    text: scheme === 'dark' ? '#fff' : '#000',
    subText: scheme === 'dark' ? '#888' : '#555',
    card: scheme === 'dark' ? '#000' : '#fff',
    border: scheme === 'dark' ? '#222' : '#ddd',
  };

  return { scheme, colors };
};
