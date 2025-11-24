import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  taskInstaConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: 'rgba(223, 223, 223, 1)',
  },
  taskInsta: {
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 20,
  },
});
