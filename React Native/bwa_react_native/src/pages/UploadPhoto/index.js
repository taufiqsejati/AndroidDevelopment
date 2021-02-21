import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {IconAddPhoto, IconRemovePhoto, nullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const componentName = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(nullPhoto);
  const getImage = () => {
    ImagePicker.launchImageLibrary({}, (response) => {
      console.log('response:', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'gajadi pilih photo ya?',
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
          </TouchableOpacity>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <Gap height={30} />
          <Link
            title="Skip fot this"
            align="center"
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default componentName;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 64,
    justifyContent: 'space-between',
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    color: colors.text.primary,
    fontFamily: fonts.primary.normal,
    textAlign: 'center',
    marginTop: 4,
  },
});
