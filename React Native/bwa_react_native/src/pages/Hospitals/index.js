import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, View, StyleSheet} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILHospitalBG,
} from '../../assets';
import {ListHospital} from '../../components';
import {Fire} from '../../config';
import {colors, fonts} from '../../utils';

const Hospitals = ({params}) => {
  const [hospital, setHospital] = useState([]);
  useEffect(() => {
    Fire.database()
      .ref('hospital/')
      .once('value')
      .then((res) => {
        // console.log('data: ', res.val());
        if (res.val()) {
          setHospital(res.val());
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  }, []);
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {hospital.map((item) => {
          return (
            <ListHospital
              type={item.type}
              name={item.name}
              address={item.address}
              image={item.image}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Hospitals;
const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
