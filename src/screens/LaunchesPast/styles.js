import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  parentHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 140,
    backgroundColor: colors.secondary,
  },
  headerContainer: {
    height: 120,
    position: 'absolute',
    backgroundColor: colors.primary,
    top: 0,
    left: 0,
    right: 0,
  },
  planetIcon: {
    flex: 1,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  logoIcon: {
    flex: 6,
    height: 100,
    resizeMode: 'contain',
  },
  rocketIcon: {
    width: 60,
    resizeMode: 'contain',
    height: 140,
  },
  bannerIcon: {
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginHorizontal: 10,
  },
  searchBtn: {
    marginLeft: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  primaryText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  filterBtn: {
    flex: 1,
    marginRight: 20,
  },
  sortBtn: {
    flex: 1,
    marginLeft: 20,
  },
  filterItemContainer: {
    backgroundColor: colors.lightYellow,
    marginHorizontal: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  filterDropdownStyle: {
    backgroundColor: colors.primary,
    height: 220,
    borderRadius: 10,
    marginTop: 20,
  },
  filterSeparator: {
    height: 6,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 3,
  },
  launchItemContainer: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  launchItemBtn: {
    height: 70,
    width: (metrics.width / 3) * 2,
    minWidth: 90,
    backgroundColor: colors.lightYellow,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedLaunchItemBtn: {
    height: 70,
    width: (metrics.width / 3) * 2,
    minWidth: 150,
    backgroundColor: colors.red,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 10,
  },
  list: {
    marginTop: 20,
  },
  grayText: {
    color: colors.gray,
    fontSize: 15,
  },
  whiteText: {
    color: colors.white,
    fontSize: 15,
  },
  rightIcon: {
    width: 30,
    height: 30,
  },
  rightBtnIcon: {
    width: 30,
    height: 30,
    position: 'absolute',
    right: metrics.width / 14,
    top: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
});
