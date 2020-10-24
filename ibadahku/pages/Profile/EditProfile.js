import {Picker} from '@react-native-community/picker';
import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {globalStyle} from '../../assets/styles/global';
import {
    editProfile,
    getAllCity,
    getDetailUser,
} from '../../redux/_actions/user';
import MButton from '../auth/component/MButton';
import ProfileEdit from './component/ProfileEdit';

class EditProfile extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                nama: '',
                id_tinggal: '',
                username: '',
                profile: '',
                foto_profile: '',
            },
            dataKota: [],
            disabled: true,
            submit: false,
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const kota = await this.props.getAllCity();
        const user = await this.props.getDetailUser();
        this.setState((prefState) => ({
            dataKota: kota.value,
            user: {
                ...prefState.user,
                nama: user.value.nama,
                id_tinggal: user.value.id_tinggal,
                username: user.value.username,
                profile: user.value.foto_profile,
            },
        }));
    };
    uploadPhoto = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true,
        }).then((image) => {
            this.setState(
                (prefState) => ({
                    user: {
                        ...prefState.user,
                        foto_profile: image.data,
                        profile: image.path,
                    },
                }),
                () => this.validate(),
            );
        });
    };
    validate = () => {
        const user = this.state.user;
        if (
            user.nama.length >= 4 &&
            user.username.length >= 4 &&
            user.id_tinggal != ''
        ) {
            this.setState({
                disabled: false,
            });
            return true;
        }
        this.setState({
            disabled: true,
        });
        return false;
    };
    handleChange = (state, val) => {
        this.setState(
            (prefState) => ({
                user: {
                    ...prefState.user,
                    [state]: val,
                },
            }),
            () => this.validate(),
        );
    };
    handleSubmit = () => {
        if (this.validate()) {
            const data = this.state.user;
            try {
                this.props.editProfile(data).then((res) => {
                    this.getData();
                    ToastAndroid.show(
                        'Berhasil Edit Profile',
                        ToastAndroid.CENTER,
                    );
                });
            } catch (error) {
                ToastAndroid.show('Gagal Edit Profile', ToastAndroid.CENTER);
            }
        } else {
            ToastAndroid.show('Isi Form Dengan Benar', ToastAndroid.CENTER);
        }
    };
    render() {
        const {user, dataKota} = this.state;
        return (
            <View style={globalStyle.page}>
                <View style={styles.container}>
                    <ProfileEdit
                        uploadPhoto={this.uploadPhoto}
                        profile={user.profile}
                    />
                    <Text style={styles.title}>Edit Data Profile</Text>
                    <TextInput
                        onChangeText={(val) => this.handleChange('nama', val)}
                        value={user.nama}
                        style={styles.input}
                    />
                    <TextInput
                        onChangeText={(val) =>
                            this.handleChange('username', val)
                        }
                        value={user.username}
                        style={styles.input}
                    />
                    <View style={{borderRadius: 5, overflow: 'hidden'}}>
                        <Picker
                            selectedValue={user.id_tinggal}
                            onValueChange={(val, index) =>
                                this.setState({id_tinggal: val})
                            }
                            style={globalStyle.inputSelect}>
                            {dataKota.map((item) => (
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
                        label="Simpan"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: 15,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginBottom: 8,
    },
    input: {
        padding: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 5,
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        marginBottom: 10,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCity: () => dispatch(getAllCity()),
        getDetailUser: () => dispatch(getDetailUser()),
        editProfile: (data) => dispatch(editProfile(data)),
    };
};
export default connect(null, mapDispatchToProps)(EditProfile);
