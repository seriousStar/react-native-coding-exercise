import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, Image, Alert} from 'react-native';
import {gql, useQuery} from '@apollo/client';

import common from '../../themes/common';
import {styles} from './styles';
import {SearchInput} from '../../components/Input/SearchInput';
import {NormalButton} from '../../components/Buttons';
import {Header} from './components/Header';
import {FilterAndSort} from './components/FilterAndSort';
import {FILTER_OPTIONS} from '../../constants';
import {LaunchList} from './components/LaunchList';
import {Indicator} from '../../components/Indicator';

const GET_LAUNCHESPAST = gql`
  query ($limit: Int, $offset: Int, $sort: String, $find: LaunchFind) {
    launchesPast(limit: $limit, offset: $offset, sort: $sort, find: $find) {
      id
      mission_name
      rocket {
        rocket_type
        rocket_name
      }
    }
  }
`;

const LauchnesPast = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER_OPTIONS[2]);
  const [sortBy, setSortBy] = useState('asc');
  const [selectedLaunchItem, setSelectedLaunchItem] = useState(null);
  const insets = useSafeAreaInsets();

  const {loading, error, data, fetchMore, refetch} = useQuery(GET_LAUNCHESPAST, {
    variables: {
      limit: 10,
      offset: 0,
      sort: 'asc',
      find: {mission_name: null},
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const onSortBy = () => {
    setSortBy(_sortBy => (_sortBy === 'asc' ? 'desc' : 'asc'));
    refetch({
      limit: 10,
      offset: 0,
      sort: sortBy === 'asc' ? 'desc' : 'asc',
      find: {mission_name: searchValue || null},
    });
  };

  const onSetCurrentFilter = index => {
    setFilter(FILTER_OPTIONS[index]);
  };

  const onSelectedLaunchItem = (id, index) => setSelectedLaunchItem(id);

  const onDetailScreen = () => navigation.navigate('LaunchDetail');

  const onSearch = async () => {
    await refetch({limit: 10, offset: 0, sort: sortBy, find: {mission_name: searchValue || null}});
  };

  const onLoadMore = async () => {
    if (!data.launchesPast) {
      return Alert.alert('SpaceX', 'unable to load. something went wrong');
    }
    await fetchMore({
      variables: {
        offset: data.launchesPast.length,
        limit: data.launchesPast.length + 10,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        console.info('prev', prev);
        console.info('fetchmore', fetchMoreResult);
        if (!fetchMoreResult) return prev;
        return {launchesPast: [...prev.launchesPast, ...fetchMoreResult.launchesPast]};
      },
    });
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
          <NormalButton label="Search" btnStyle={styles.searchBtn} onPress={onSearch} />
        </View>
        <FilterAndSort
          filterOptions={FILTER_OPTIONS}
          currentFilter={filter}
          sortBy={sortBy}
          onSortBy={onSortBy}
          onSetCurrentFilter={onSetCurrentFilter}
        />
        {data?.launchesPast && (
          <LaunchList
            data={data?.launchesPast || []}
            onSelectedLaunchItem={onSelectedLaunchItem}
            selectedLaunchItem={selectedLaunchItem}
            onDetailScreen={onDetailScreen}
          />
        )}
        <View style={[styles.paginationContainer, {marginBottom: insets.bottom || 30}]}>
          <Text style={styles.primaryText}>6 of 45</Text>
          <NormalButton label="LOAD MORE" onPress={onLoadMore} />
        </View>
      </View>
      <Indicator isLoading={loading} />
    </SafeAreaView>
  );
};

export default LauchnesPast;
