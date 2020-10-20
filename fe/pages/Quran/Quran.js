import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// ICON
import QuranBlack from '../../assets/image/icons/quran-black-25.svg';
import NextBlack from '../../assets/image/icons/next-black-10.svg';
import CardQuran from '../components/CardQuran';

class Quran extends React.Component {
    constructor() {
        super();
        this.state = {
            quran: [
                {
                    nomor: '1',
                    nama: 'Al Fatihah',
                    asma: 'الفاتحة',
                    name: 'Al-Faatiha',
                    start: '0',
                    ayat: '7',
                    type: 'mekah',
                    urut: '5',
                    rukuk: '1',
                    arti: 'Pembukaan',
                },
                {
                    nomor: '2',
                    nama: 'Al Baqarah',
                    asma: 'البقرة',
                    name: 'Al-Baqara',
                    start: '7',
                    ayat: '286',
                    type: 'madinah',
                    urut: '87',
                    rukuk: '40',
                    arti: 'Sapi Betina',
                },
                {
                    nomor: '3',
                    nama: 'Ali Imran',
                    asma: 'آل عمران',
                    name: 'Aal-i-Imraan',
                    start: '293',
                    ayat: '200',
                    type: 'madinah',
                    urut: '89',
                    rukuk: '20',
                    arti: 'Keluarga Imran',
                },
                {
                    nomor: '4',
                    nama: 'An Nisaa',
                    asma: 'النساء',
                    name: 'An-Nisaa',
                    start: '493',
                    ayat: '176',
                    type: 'madinah',
                    urut: '92',
                    rukuk: '24',
                    arti: 'Wanita',
                },
                {
                    nomor: '5',
                    nama: 'Al Maidah',
                    asma: 'المائدة',
                    name: 'Al-Maaida',
                    start: '669',
                    ayat: '120',
                    type: 'madinah',
                    urut: '112',
                    rukuk: '16',
                    arti: 'Hidangan',
                },
                {
                    nomor: '6',
                    nama: "Al An'am",
                    asma: 'الأنعام',
                    name: "Al-An'aam",
                    start: '789',
                    ayat: '165',
                    type: 'mekah',
                    urut: '55',
                    rukuk: '20',
                    arti: 'Binatang Ternak',
                },
                {
                    nomor: '7',
                    nama: "Al A'raf",
                    asma: 'الأعراف',
                    name: "Al-A'raaf",
                    start: '954',
                    ayat: '206',
                    type: 'mekah',
                    urut: '39',
                    rukuk: '24',
                    arti: 'Tempat Tertinggi',
                },
            ],
        };
    }
    render() {
        return (
            <ScrollView style={styles.page}>
                {/* header */}
                <View style={styles.header}>
                    <QuranBlack />
                    <Text style={styles.pageTitle}>Al Qur'an</Text>
                </View>
                {/* last read */}
                <TouchableOpacity style={styles.lastRead}>
                    <View>
                        <Text style={styles.title}>Terakhir Dibaca:</Text>
                        <Text style={styles.subtitle}>Surat Al Baqarah</Text>
                    </View>
                    <NextBlack />
                </TouchableOpacity>
                {/* list */}
                <View style={{marginBottom: 40}}>
                    {this.state.quran.map((item, i) => (
                        <CardQuran
                            navigation={this.props.navigation}
                            key={i}
                            i={i}
                            surat={item}
                        />
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        paddingVertical: 25,
        backgroundColor: '#FFF',
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    pageTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        marginLeft: 10,
    },
    lastRead: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#A7EBC7',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 15,
        fontFamily: 'Poppins-Medium',
    },
    subtitle: {
        fontSize: 13,
        fontFamily: 'Poppins-Light',
    },
});
export default Quran;
