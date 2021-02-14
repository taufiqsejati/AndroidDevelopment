import React, {Component} from 'react';
import {Text, View} from 'react-native';
import I18n, {getLanguages} from 'react-native-i18n';
import {Button} from '../../components';
// import Budi from '../Translatev2';

class Demo extends Component {
  // sample = () => {
  //   getLanguages().then((languages) => {
  //     console.log(languages);
  //   });
  // };
  render() {
    return <View>{/* <Budi kata={} /> */}</View>;
  }
}
//       <View>
//         <Text>{I18n.t('greeting')}</Text>
//         <Button title="wew" onPress={() => this.sample()} />
//       </View>
//     );
//   }
// }

// // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
// I18n.fallbacks = true;

// I18n.translations = {
//   en: {
//     greeting: 'Hi!',
//   },
//   'en-US': {
//     greeting: 'Holaa!',
//   },
//   'id-ID': {greeting: 'selamat pagi'},
//   fr: {
//     greeting: 'Bonjour!',
//   },
// };

export default Demo;
