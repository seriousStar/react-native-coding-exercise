import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, Image} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import common from '../../themes/common';
import {styles} from './styles';
import {SearchInput} from '../../components/Input/SearchInput';
import {IconButton, NormalButton} from '../../components/Buttons';
import {Header} from './components/Header';
import colors from '../../themes/colors';
import {FilterAndSort} from './components/FilterAndSort';
import {FILTER_OPTIONS} from '../../constants';
import {LaunchList} from './components/LaunchList';

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

const DUMMY_DATA = [
  {
    mission_name: 'FalconSat',
    rocket: {
      rocket_type: 'rocket',
      rocket_name: 'Falcon 1',
    },
    id: '5eb87cd9ffd86e000604b32a',
  },
  {
    mission_name: 'DemoSat',
    rocket: {
      rocket_type: 'rocket',
      rocket_name: 'Falcon 1',
    },
    id: '5eb87cdaffd86e000604b32b',
  },
  {
    mission_name: 'Trailblazer',
    rocket: {
      rocket_type: 'rocket',
      rocket_name: 'Falcon 1',
    },
    id: '5eb87cdbffd86e000604b32c',
  },
  {
    mission_name: 'RatSat',
    rocket: {
      rocket_type: 'rocket',
      rocket_name: 'Falcon 1',
    },
    id: '5eb87cdbffd86e000604b32d',
  },
  {
    mission_name: 'RazakSat',
    rocket: {
      rocket_type: 'rocket',
      rocket_name: 'Falcon 1',
    },
    id: '5eb87cdcffd86e000604b32e',
  },
];

const LauchnesPast = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER_OPTIONS[2]);
  const [sortBy, setSortBy] = useState('asc');
  const [selectedLaunchItem, setSelectedLaunchItem] = useState(null);
  const insets = useSafeAreaInsets();
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

  const onSelectedLaunchItem = (id, index) => setSelectedLaunchItem(id);

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
        <LaunchList
          data={DUMMY_DATA}
          onSelectedLaunchItem={onSelectedLaunchItem}
          selectedLaunchItem={selectedLaunchItem}
        />
        <View style={[styles.paginationContainer, {marginBottom: insets.bottom || 30}]}>
          <Text style={styles.primaryText}>6 of 45</Text>
          <NormalButton label="LOAD MORE" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LauchnesPast;
