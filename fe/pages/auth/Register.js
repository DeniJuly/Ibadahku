import {Picker} from '@react-native-community/picker';
import Axios from 'axios';
import React, {Component} from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import {Autocomplete} from 'react-native-dropdown-autocomplete';
import {connect} from 'react-redux';
import {globalStyle} from '../../assets/styles/global';
import {register} from '../../redux/_actions/auth';
import InputPassword from './component/InputPassword';
import MButton from './component/MButton';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            nama: '',
            password: '',
            id_tinggal: '',
            dataKota: [],
            submit: false,
            hide_password: true,
            disabled: false,
        };
    }
    componentDidMount() {
        Axios.get('https://api.banghasan.com/sholat/format/json/kota').then(
            (res) => {
                this.setState({
                    dataKota: res.data.kota,
                });
            },
        );
    }
    handleChange = (state, val) => {
        const user = this.state;
        if (
            user.username.length > 0 &&
            user.nama.length > 0 &&
            user.id_tinggal.length > 0 &&
            user.password.length >= 6
        ) {
            this.setState({
                [state]: val,
                disabled: false,
            });
        } else {
            this.setState({
                [state]: val,
                disabled: true,
            });
        }
    };
    handleSubmit = () => {
        console.log('submit');
        if (this.validation()) {
            this.setState({
                submit: true,
            });
            const user = this.state;
            const data = {
                username: user.username,
                nama: user.nama,
                password: user.password,
                id_tinggal: user.id_tinggal,
            };
            try {
                this.props.register(data);
                this.setState({
                    submit: false,
                });
            } catch (error) {
                ToastAndroid.show('gagal daftar', ToastAndroid.CENTER);
            }
        } else {
            ToastAndroid.show('lengkapi form', ToastAndroid.CENTER);
        }
    };
    validation = () => {
        const user = this.state;
        if (user.password.length <= 6) {
            ToastAndroid.show('minimal panjang password 6 karakter');
            return false;
        }
        if (
            user.username.length > 0 &&
            user.nama.length > 0 &&
            user.id_tinggal.length > 0
        ) {
            return true;
        }
        return false;
    };

    handleChangeHidePassword = () => {
        this.setState({
            hide_password: !this.state.hide_password,
        });
    };

    render() {
        return (
            <ScrollView
                style={{
                    ...globalStyle.page,
                    ...styles.page,
                }}>
                <Image
                    width={100}
                    height={50}
                    source={require('../../assets/image/logo.png')}
                />

                <Text
                    style={{
                        marginTop: 100,
                        fontFamily: 'Poppins-Light',
                        fontSize: 30,
                    }}>
                    Daftar
                </Text>
                <Text
                    style={{
                        marginTop: -5,
                        fontFamily: 'Poppins-Light',
                        fontSize: 15,
                        marginBottom: 20,
                    }}>
                    Isi form dan bergabung bersama kami
                </Text>
                <TextInput
                    value={this.state.nama}
                    onChangeText={(val) => this.handleChange('nama', val)}
                    style={globalStyle.input}
                    placeholder="Nama Lengkap"
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(val) => this.handleChange('username', val)}
                    style={globalStyle.input}
                    placeholder="Username"
                />
                <InputPassword
                    password={this.state.password}
                    hide_password={this.state.hide_password}
                    onPress={this.handleChangeHidePassword}
                    handleChange={this.handleChange}
                />
                <View style={{borderRadius: 5, overflow: 'hidden'}}>
                    <Picker
                        selectedValue={this.state.id_tinggal}
                        onValueChange={(val, index) =>
                            this.setState({id_tinggal: val})
                        }
                        style={globalStyle.inputSelect}>
                        {this.state.dataKota.map((item) => (
                            <Picker.Item
                                key={item.id}
                                value={item.id}
                                label={item.nama}
                            />
                        ))}
                    </Picker>
                </View>
                <MButton
                    disabled={this.state.disabled}
                    submit={this.state.submit}
                    onPress={this.handleSubmit}
                    label="DAFTAR"
                />
                <Text
                    style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#C4C4C4',
                        marginTop: 15,
                    }}>
                    Sudah punya akun ?
                </Text>
                <Text
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#50D890',
                    }}>
                    Masuk
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        register: (data) => dispatch(register(data)),
    };
};
export default connect(null, mapDispatchToProps)(Register);
