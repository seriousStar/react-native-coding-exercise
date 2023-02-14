import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import common from '../../themes/common';
import {styles} from './styles';
import {SearchInput} from '../../components/Input/SearchInput';
import {IconButton, NormalButton} from '../../components/Buttons';
import {Header} from './components/Header';
import colors from '../../themes/colors';
import {FilterAndSort} from './components/FilterAndSort';
import {FILTER_OPTIONS} from '../../constants';

const GET_LAUNCHESPAST = gql`
  query ($limit: Int) {
    launchesPast(limit: $limit) {
      id
      details
      mission_name
      rocket {
        rocket_type
        rocket_name
      }
    }
  }
`;

const LauchnesPast = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER_OPTIONS[2]);
  const [sortBy, setSortBy] = useState('asc');

  // const {loading, error, data} = useQuery(GET_LAUNCHESPAST, {
  //   variables: {limit: 10},
  // });
  // console.info('loading', loading);
  // console.info('error', error);
  // console.info('data', data);

  const onSortBy = () => {
    setSortBy(_sortBy => (_sortBy === 'asc' ? 'desc' : 'asc'));
  };

  const onSetCurrentFilter = index => {
    setFilter(FILTER_OPTIONS[index]);
  };

  return (
    <SafeAreaView style={styles.parentContainer} edges={['left', 'right', 'top']}>
      <Header />
      <View style={common.container}>
        <Image source={require('../../../assets/icons/banner.png')} style={styles.bannerIcon} />
        <View style={styles.buttonsContainer}>
          <SearchInput
            icon={require('../../../assets/icons/rocket.png')}
            label="Search for flights"
            value={searchValue}
            onChange={setSearchValue}
          />
          <NormalButton label="Search" btnStyle={styles.searchBtn} />
        </View>
        <FilterAndSort
          filterOptions={FILTER_OPTIONS}
          currentFilter={filter}
          sortBy={sortBy}
          onSortBy={onSortBy}
          onSetCurrentFilter={onSetCurrentFilter}
        />
      </View>
    </SafeAreaView>
  );
};

export default LauchnesPast;
