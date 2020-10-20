import React, {Component} from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import {connect} from 'react-redux';
import {globalStyle} from '../../assets/styles/global';
import {login} from '../../redux/_actions/auth';
import MButton from './component/MButton';

// ICON
import InputPassword from './component/InputPassword';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            hide_password: true,
            submit: false,
            disabled: false,
        };
    }
    handleChange = (state, value) => {
        let disabled = true;
        if (this.state.username.length > 0 && this.state.password.length > 0) {
            disabled = false;
        }
        this.setState({
            [state]: value,
            disabled: disabled,
        });
    };
    handleSubmit = () => {
        this.setState(
            {
                submit: true,
            },
            () => this.submit(),
        );
    };
    submit = () => {
        const data = {
            username: this.state.username,
            password: this.state.password,
        };
        try {
            this.props.login(data);
            this.setState({
                submit: false,
            });
        } catch (error) {
            ToastAndroid.show('Login Failed', ToastAndroid.CENTER);
        }
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
                    Masuk
                </Text>
                <Text
                    style={{
                        marginTop: -5,
                        fontFamily: 'Poppins-Light',
                        fontSize: 15,
                        marginBottom: 20,
                    }}>
                    Masukkan username dan password Kamu
                </Text>
                <TextInput
                    onChangeText={(val) => this.handleChange('username', val)}
                    value={this.state.username}
                    style={globalStyle.input}
                    placeholder="Username"
                />
                <InputPassword
                    handleChange={this.handleChange}
                    password={this.state.password}
                    hide_password={this.state.hide_password}
                    onPress={this.handleChangeHidePassword}
                />
                <MButton
                    disabled={this.state.disabled}
                    submit={this.state.submit}
                    onPress={this.handleSubmit}
                    label="Login"
                />
                <Text
                    style={{
                        fontFamily: 'Poppins-Light',
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#C4C4C4',
                        marginTop: 15,
                    }}>
                    Belum punya akun ?
                </Text>
                <Text
                    onPress={() => this.props.navigation.navigate('Register')}
                    style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 15,
                        textAlign: 'center',
                        color: '#50D890',
                    }}>
                    Daftar
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
        login: (data) => dispatch(login(data)),
    };
};
export default connect(null, mapDispatchToProps)(Login);
