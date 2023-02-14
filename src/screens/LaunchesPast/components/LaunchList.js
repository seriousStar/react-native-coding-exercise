import React from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {IconButton} from '../../../components/Buttons';
import {styles} from '../styles';

export const LaunchList = ({selectedLaunchItem, onSelectedLaunchItem, data, onDetailScreen}) => {
  const renderLaunchItem = ({item, index}) => {
    const isSelected = selectedLaunchItem === item.id;
    return (
      <View style={styles.launchItemContainer}>
        <TouchableOpacity
          style={isSelected ? styles.selectedLaunchItemBtn : styles.launchItemBtn}
          onPress={() => onSelectedLaunchItem(item.id, index)}>
          <Text style={isSelected ? styles.whiteText : styles.grayText}>{item.mission_name}</Text>
        </TouchableOpacity>
        {isSelected ? (
          <IconButton
            icon={require('../../../../assets/icons/right.png')}
            iconStyle={styles.rightIcon}
            btnStyle={styles.rightBtnIcon}
            onPress={() => onDetailScreen(item)}
          />
        ) : null}
      </View>
    );
  };

  const renderItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => item.id}
      renderItem={renderLaunchItem}
      ItemSeparatorComponent={renderItemSeparator}
      style={styles.list}
    />
  );
};
