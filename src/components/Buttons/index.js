import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const NormalButton = ({label, onPress, btnStyle, txtStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnContainer, btnStyle]}>
      <Text style={[styles.txtStyle, txtStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};
