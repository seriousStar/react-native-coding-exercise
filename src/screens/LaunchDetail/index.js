import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ImageBackground, Image, View} from 'react-native';
import {common} from '../../themes';
import {styles} from './styles';
import {IconButton, NormalButton} from '../../components/Buttons';

const LaunchDetail = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const onBack = () => navigation.goBack();

  // return (
  //   <View style={styles.container}>
  //     <Image source={require('../../../assets/imgs/background.png')} style={styles.imgContainer} />
  //     <IconButton
  //       icon={require('../../../assets/icons/back.png')}
  //       btnStyle={[styles.backIconBtn, {marginTop: insets.top}]}
  //       iconStyle={styles.backIcon}
  //       onPress={onBack}
  //     />
  //     <View style={{flex: 1}}>
  //       <Image source={require('../../../assets/imgs/ticket.png')} style={styles.ticketImg} />
  //     </View>
  //     <View style={styles.btnContainer}>
  //       <NormalButton label="PRINT TICKET" btnStyle={[styles.printBtn, {marginBottom: insets.bottom || 30}]} />
  //     </View>
  //   </View>
  // );

  return (
    <ImageBackground
      source={require('../../../assets/imgs/background.png')}
      style={styles.container}
      resizeMode="cover">
      <IconButton
        icon={require('../../../assets/icons/back.png')}
        btnStyle={[styles.backIconBtn, {marginTop: insets.top}]}
        iconStyle={styles.backIcon}
        onPress={onBack}
      />
      <View style={{flex: 1}}>
        <Image source={require('../../../assets/imgs/ticket.png')} style={styles.ticketImg} />
      </View>
      <View style={styles.btnContainer}>
        <NormalButton label="PRINT TICKET" btnStyle={[styles.printBtn, {marginBottom: insets.bottom || 30}]} />
      </View>
    </ImageBackground>
  );
};

export default LaunchDetail;
