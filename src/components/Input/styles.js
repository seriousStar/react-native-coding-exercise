import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    flex: 1,
  },
  rocket1Icon: {
    width: 25,
    height: 30,
    resizeMode: 'contain',
    marginRight: 15,
  },
  secondaryText: {
    flex: 1,
    fontSize: 14,
    color: colors.secondary,
  },
});
