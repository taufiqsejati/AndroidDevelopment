import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {connect} from 'react-redux';
import Api from '@services/Api';
import {CommonActions} from '@react-navigation/native';
import {
  faBook,
  faDownload,
  faEye,
  faSync,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.UserBookmarkFunction();
  }
  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state, callback) => {
      return;
    };
  }
  UserBookmarkFunction() {
    const {Email} = this.props;
    Api.bookmark_api(Email)
      .then((responseJson) => {
        //console.log('login', responseJson.data.list_bookmark);
        this.setState({loading: false, data: responseJson.data.list_bookmark});
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.data}
          onRefresh={this.handleRefresh}
          ListHeaderComponent={
            <View
              style={{
                justifyContent: 'center',
                margin: 20,

                // marginHorizontal: 17,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#222222',
                }}>
                Bookmark List {this.props.Email}
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                marginHorizontal: 20,
                marginBottom: 10,
                borderRadius: 6,
                backgroundColor: 'white',
                shadowColor: 'rgba(208, 224, 217, 0.5)',
                elevation: 2,
              }}>
              <View style={styles.listItemContainer}>
                <TouchableOpacity
                  style={{marginBottom: 5}}
                  // onPress={() =>
                  //   this.props.navigation.navigate('Detail', {
                  //     id: item.id,
                  //   })
                  // }
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      color: '#1B8f65',
                      textTransform: 'capitalize',
                    }}>
                    {item.judul.toLowerCase()}
                  </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon
                    icon={faBook}
                    color={'#58595B'}
                    size={12}
                    style={{}}
                  />
                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: '900',
                      color: '#999999',
                      paddingStart: 5,
                    }}>
                    {item.jenis === '3'
                      ? 'Produk Hukum Tingkat Pusat'
                      : item.jenis === '1'
                      ? 'Tematik'
                      : item.jenis === '2'
                      ? 'Produk Hukum Tingkat Daerah'
                      : item.jenis === '4'
                      ? 'Produk Hukum Era Colonial'
                      : item.jenis === '5'
                      ? 'Monografi Hukum'
                      : item.jenis === '6'
                      ? 'Artikel/ Majalah'
                      : item.jenis === '7'
                      ? 'Putusan'
                      : item.jenis === '8'
                      ? 'Produk Hukum Angkatan Darat'
                      : item.jenis === '9'
                      ? 'Produk Hukum Angkatan Udara'
                      : item.jenis === '10'
                      ? 'Produk Hukum Angkatan Laut'
                      : item.jenis}
                  </Text>

                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: '900',
                      color: '#999999',
                      paddingStart: 5,
                    }}>
                    No. {item.nomor}
                  </Text>
                  <Text
                    style={{
                      fontSize: 9,
                      fontWeight: '900',
                      color: '#999999',
                      paddingStart: 5,
                    }}>
                    Tahun {item.tahun}
                  </Text>
                </View>
                <View
                  style={{
                    marginVertical: 5,
                    borderBottomColor: '#CFD9E0',
                    borderBottomWidth: 1,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: 'normal',
                      color: '#555555',
                      textTransform: 'capitalize',
                    }}>
                    {item.abstrak.toLowerCase()}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 23,
                  }}>
                  <View
                    style={{
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      alignContent: 'center',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <FontAwesomeIcon
                        icon={faEye}
                        color={'#58595B'}
                        size={12}
                        style={{}}
                      />
                      <Text
                        style={{
                          fontSize: 9,
                          fontWeight: '900',
                          color: '#999999',
                          marginLeft: 5,
                        }}>
                        {item.count_view} Dilihat
                      </Text>
                      <FontAwesomeIcon
                        icon={faDownload}
                        color={'#58595B'}
                        size={12}
                        style={{marginLeft: 5}}
                      />
                      <Text
                        style={{
                          fontSize: 9,
                          fontWeight: '900',
                          color: '#999999',
                          marginLeft: 5,
                        }}>
                        {item.count_download} Unduhan
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'flex-end',
                      // borderWidth: 1,
                      // borderColor: '#CFD9E0',
                      // borderRadius: 19,
                      paddingVertical: 6,
                      paddingHorizontal: 16,
                    }}>
                    <Text
                      style={{
                        fontSize: 11,
                        fontWeight: '900',
                        color: '#58595B',
                      }}>
                      Lihat Selengkapnya
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )}
          ListFooterComponent={
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [{name: 'Login'}],
                    }),
                  );
                }}>
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonLabel}>Log Out</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={({id}, index) => index.toString()}
          ListEmptyComponent={this.ListEmptyView}
        />
      </View>

      // <View
      //   style={{
      //     flex: 1,

      //     alignItems: 'center',
      //   }}>
      //   <Text
      //     style={{
      //       fontSize: 20,
      //       backgroundColor: 'blue',
      //       color: '#fff',
      //       width: '100%',
      //       padding: 5,
      //       textAlign: 'center',
      //     }}>
      //     User Profile
      //   </Text>
      //   <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
      //     User Name: {this.props.Name}
      //   </Text>
      //   <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
      //     Telp: {this.props.Telp}
      //   </Text>
      //   <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 20}}>
      //     Email: {this.props.Email}
      //   </Text>

      //   <TouchableOpacity
      //     onPress={() => {
      //       this.props.navigation.dispatch(
      //         CommonActions.reset({
      //           index: 0,
      //           routes: [{name: 'Login'}],
      //         }),
      //       );
      //     }}>
      //     <View style={styles.buttonContainer}>
      //       <Text style={styles.buttonLabel}>Log Out</Text>
      //     </View>
      //   </TouchableOpacity>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#00e3cf',
    marginHorizontal: 20,

    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    marginTop: 100,
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  listItemContainer: {
    flex: 1,
    padding: 15,
  },
});

HomeScreen.defaultProps = {
  Name: '',
  Telp: '',
  Email: '',
  Image: '',
};

const mapStateToProps = (state) => {
  return {
    Name: state.user.Name,
    Telp: state.user.Telp,
    Email: state.user.Email,
    // image: state.user.image,
    network: state.network,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
