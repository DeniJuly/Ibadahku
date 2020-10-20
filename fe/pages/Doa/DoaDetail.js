import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyle} from '../../assets/styles/global';

export default class DoaDetail extends Component {
    constructor() {
        super();
        this.state = {
            doa: {
                arab:
                    'اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ',
                id: 1,
                ilustrasi: 'doa-sebelum-makan.png',
                indonesia:
                    'Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka',
                judul: 'Doa Sebelum Makan',
                latin:
                    "Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar",
            },
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({
            title: this.state.doa.judul,
        });
    }
    render() {
        return (
            <View style={globalStyle.page}>
                <Image
                    style={{
                        width: '100%',
                        height: 200,
                    }}
                    source={{
                        uri: `https://ramadhankuapi.iamdeni.com/img/surat/${this.state.doa.ilustrasi}`,
                    }}
                />
                <View style={styles.content}>
                    <Text style={styles.ayat}>{this.state.doa.arab}</Text>
                    <Text style={styles.latin}>{this.state.doa.latin}</Text>
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
    },
});
