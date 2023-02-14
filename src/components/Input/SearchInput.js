import React from 'react';
import {Image, View, TextInput} from 'react-native';
import colors from '../../themes/colors';
import {styles} from './styles';

export const SearchInput = ({label, onPress, icon, value, onChange}) => {
  return (
    <View style={styles.container} onPress={onPress}>
      <Image source={icon} style={styles.rocket1Icon} />
      <TextInput
        style={styles.secondaryText}
        placeholder={label}
        placeholderTextColor={colors.secondary}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
