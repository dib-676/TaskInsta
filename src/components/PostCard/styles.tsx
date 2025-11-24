import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#000',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  username: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  subText: {
    color: '#aaa',
    fontSize: 12,
  },
  more: {
    color: '#fff',
    fontSize: 20,
  },
  postImage: {
    width: '100%',
    height: 350,
    backgroundColor: '#111',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  actionsLeft: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 22,
    color: '#fff',
    marginRight: 12,
  },
  likesText: {
    color: '#fff',
    fontWeight: '600',
    marginHorizontal: 12,
    marginTop: 8,
  },
  captionRow: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginTop: 4,
    flexWrap: 'wrap',
  },
  captionUsername: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 13,
  },
  captionText: {
    color: '#fff',
    fontSize: 13,
  },
  timeText: {
    color: '#777',
    fontSize: 11,
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
  },
  pressableBtn: {
    padding: 4,
    borderRadius: 20,
  },
});
