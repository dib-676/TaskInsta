import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  item: {
    width: 140,
    height: 170,
    margin: 2,
    backgroundColor: '#ccc',
  },
  itemX: {
    width: 140,
    height: 340,
    margin: 2,
    backgroundColor: '#ccc',
  },
  image: {
    flex: 1,
    borderRadius: 4,
  },
  playIconOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
