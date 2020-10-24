import React from 'react';
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {globalStyle} from '../../assets/styles/global';

// ICON
import UserBlack from '../../assets/image/icons/user-black-20.svg';
import Logout from '../../assets/image/icons/logout-black-20.svg';
import {logout} from '../../redux/_actions/auth';
import {connect} from 'react-redux';
import {getCityName, getDetailUser} from '../../redux/_actions/user';
import ProfilePlaceholder from './ProfilePlaceholder';

class Profil extends React.Component {
    constructor() {
        super();
        this.state = {
            nama: '',
            username: '',
            id_tinggal: '',
            id_quran: '',
            foto_profile: '',
            tinggal: '',
            loading: true,
        };
    }
    componentDidMount() {
        this.getData();
    }
    componentDidUpdate() {
        console.log('UPDATE');
    }
    getData = () => {
        this.props.getDetail().then((res) => {
            let response = res.value;
            this.setState({
                nama: response.nama,
                username: response.username,
                id_tinggal: response.id_tinggal,
                id_quran: response.id_quran,
                foto_profile: response.foto_profile,
            });
            this.getNamaKota(response.id_tinggal);
        });
    };
    getNamaKota = (city_code) => {
        this.props.getKota(city_code).then((res) => {
            this.setState({tinggal: res.value[0].nama, loading: false});
        });
    };
    handleLogout = () => {
        this.props.logout();
    };
    render() {
        const user = this.state;
        return (
            <View style={globalStyle.page}>
                <ImageBackground
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                    source={require('../../assets/image/background.png')}
                />
                <View style={styles.container}>
                    {/* Profile */}
                    {user.loading ? (
                        <ProfilePlaceholder />
                    ) : (
                        <View style={styles.profile}>
                            <Image
                                style={styles.imageProfile}
                                source={{uri: user.foto_profile}}
                            />
                            <View style={styles.detailProfile}>
                                <Text style={styles.nama}>{user.nama}</Text>
                                <Text style={styles.lokasi}>
                                    {user.tinggal}
                                </Text>
                            </View>
                        </View>
                    )}
                    {/* MENU */}
                    <TouchableOpacity
                        onPress={() =>
                            this.props.navigation.navigate('EditProfile')
                        }
                        style={styles.itemMenu}>
                        <UserBlack />
                        <Text style={styles.textMenu}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleLogout}
                        style={styles.itemMenu}>
                        <Logout />
                        <Text style={styles.textMenu}>Keluar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: -60,
        marginHorizontal: 20,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    imageProfile: {
        width: 100,
        height: 100,
        borderRadius: 5,
    },
    detailProfile: {
        marginLeft: 10,
    },
    nama: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
    },
    lokasi: {
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        marginTop: -5,
    },
    itemMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomColor: '#ECECEC',
        borderBottomWidth: 1,
    },
    textMenu: {
        marginLeft: 10,
        fontSize: 15,
        fontFamily: 'Poppins-Light',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        getDetail: () => dispatch(getDetailUser()),
        getKota: (city_code) => dispatch(getCityName(city_code)),
    };
};
export default connect(null, mapDispatchToProps)(Profil);
