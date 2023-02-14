import React from 'react';
import {View, Image} from 'react-native';
import {styles} from '../styles';

export const Header = () => {
  return (
    <View style={styles.parentHeaderContainer}>
      <View style={styles.headerContainer} />
      <Image source={require('../../../../assets/icons/planent.png')} style={styles.planetIcon} />
      <Image source={require('../../../../assets/icons/logo.png')} style={styles.logoIcon} />
      <Image source={require('../../../../assets/icons/rocket1.png')} style={styles.rocketIcon} />
    </View>
  );
};
