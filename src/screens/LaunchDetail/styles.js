import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  imgContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
  backIconBtn: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  backIcon: {
    width: 50,
    height: 50,
  },
  ticketImg: {
    flex: 1,
    resizeMode: 'contain',
    width: metrics.width - 40,
  },
  btnContainer: {
    alignItems: 'center',
  },
  printBtn: {
    width: 150,
    marginTop: 30,
  },
});
