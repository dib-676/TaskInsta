import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/profile.jpeg')}
        style={styles.avatar}
      />
      <Text style={styles.name}>TaskInsta</Text>
      <Text style={styles.bio}>
        Simplifying tasks. Connecting people. Delivering value.
      </Text>
      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Contact Information</Text>

      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
          }}
        />
        <Text style={styles.info}>support@taskinsta.com</Text>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/724/724664.png',
          }}
        />
        <Text style={styles.info}>+91 9876543210</Text>
      </View>

      <View style={styles.row}>
        <Image
          style={styles.icon}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          }}
        />
        <Text style={styles.info}>Noida, India</Text>
      </View>

      <View style={styles.divider} />
      <Text style={styles.sectionTitle}>Find Us Online</Text>

      <View style={styles.socialRow}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://instagram.com')}
        >
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://facebook.com')}
        >
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL('https://twitter.com')}
        >
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
            }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>
          © 2025 TaskInsta. All rights reserved.
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  bio: {
    textAlign: 'center',
    color: '#777',
    marginTop: 4,
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#333',
    marginRight: 10,
  },
  info: {
    fontSize: 14,
    color: '#444',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    marginVertical: 10,
  },
  socialIcon: {
    width: 35,
    height: 35,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footer: {
    color: '#aaa',
    fontSize: 12,
  },
});
