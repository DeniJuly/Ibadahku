import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {globalStyle} from '../../assets/styles/global';
import {API} from '../../config/api';
import {getDetailDoa} from '../../redux/_actions/doa';

class DoaDetail extends Component {
    constructor() {
        super();
        this.state = {
            doa: {
                arab: '',
                ilustrasi: '',
                indonesia: '',
                judul: '',
                latin: '',
            },
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        const id = this.props.route.params.ID;
        await this.props.getDetailDoa(id).then((res) => {
            const doa = res.value;
            this.setState({
                doa: {
                    id: doa.id,
                    arab: doa.arab,
                    ilustrasi: doa.ilustrasi,
                    indonesia: doa.indonesia,
                    judul: doa.judul,
                    latin: doa.latin,
                },
            });
            this.props.navigation.setOptions({
                title: doa.judul,
            });
        });
    };
    render() {
        return (
            <View style={globalStyle.page}>
                <Image
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                    source={{
                        uri: this.state.doa.ilustrasi,
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.ayat}>{this.state.doa.arab}</Text>
                    <Text style={styles.latin}>{this.state.doa.latin}</Text>
                    <Text style={styles.latin}>{this.state.doa.indonesia}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
    },
    ayat: {
        fontSize: 18,
        marginBottom: 10,
    },
    latin: {
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        marginBottom: 5,
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailDoa: (id) => dispatch(getDetailDoa(id)),
    };
};
export default connect(null, mapDispatchToProps)(DoaDetail);
