import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {common} from '../../themes';

export const Indicator = ({isLoading}) => {
  if (isLoading) {
    return (
      <View style={common.indicatorStyle}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return null;
};
