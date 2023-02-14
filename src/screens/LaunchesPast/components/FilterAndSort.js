import React from 'react';
import {View, Text, Image} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

import {IconButton} from '../../../components/Buttons';
import {styles} from '../styles';

export const FilterAndSort = ({filterOptions, currentFilter, sortBy, onSortBy, onSetCurrentFilter}) => {
  const renderFilterItem = rowData => {
    return (
      <View style={styles.filterItemContainer}>
        <Text style={styles.primaryText}>{rowData.name}</Text>
      </View>
    );
  };

  return (
    <>
      <View style={styles.filterContainer}>
        <View style={styles.filterBtn}>
          <ModalDropdown
            options={filterOptions}
            renderRow={renderFilterItem}
            renderSeparator={() => null}
            dropdownStyle={styles.filterDropdownStyle}
            onSelect={(index, value) => onSetCurrentFilter(index)}>
            <Image source={require('../../../../assets/icons/fillter.png')} style={styles.filterIcon} />
          </ModalDropdown>
        </View>
        <Text style={styles.primaryText}>{currentFilter.name}</Text>
        <IconButton
          icon={
            sortBy === 'asc' ? require('../../../../assets/icons/up.png') : require('../../../../assets/icons/down.png')
          }
          btnStyle={styles.sortBtn}
          onPress={onSortBy}
        />
      </View>
      <View style={styles.filterSeparator} />
    </>
  );
};
