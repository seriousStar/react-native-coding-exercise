import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

export const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.red,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  txtStyle: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
