import React from 'react';
import {
    Alert,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Icons
import Date from '../../assets/image/icons/date-green-20.svg';
import Mosque from '../../assets/image/icons/mosque-70.svg';
import ButtonIbadah from '../components/ButtonIbadah';
import ProgressBar from '../components/ProgressBar';
import CardIbadah from '../components/CardIbadah';

class Ibadahku extends React.Component {
    constructor() {
        super();
        this.state = {
            ibadah: [
                {
                    id: 1,
                    nama: 'subuh',
                    created_at: '2020-06-16T13:12:09.000000Z',
                    updated_at: '2020-06-16T13:12:10.000000Z',
                },
                {
                    id: 2,
                    nama: 'dhuha',
                    created_at: '2020-06-16T13:33:37.000000Z',
                    updated_at: '2020-06-16T13:33:38.000000Z',
                },
                {
                    id: 3,
                    nama: 'dzuhur',
                    created_at: '2020-06-16T13:12:40.000000Z',
                    updated_at: '2020-06-16T13:12:40.000000Z',
                },
                {
                    id: 4,
                    nama: 'ashar',
                    created_at: '2020-06-16T13:12:54.000000Z',
                    updated_at: '2020-06-16T13:12:54.000000Z',
                },
                {
                    id: 5,
                    nama: 'maghrib',
                    created_at: '2020-06-16T13:13:05.000000Z',
                    updated_at: '2020-06-16T13:13:05.000000Z',
                },
                {
                    id: 6,
                    nama: 'isya',
                    created_at: '2020-06-16T13:13:13.000000Z',
                    updated_at: '2020-06-16T13:13:13.000000Z',
                },
            ],
            jadwal: {
                ashar: '14:42',
                dhuha: '05:50',
                dzuhur: '11:34',
                imsak: '04:01',
                isya: '18:48',
                maghrib: '17:39',
                subuh: '04:11',
                tanggal: 'Rabu, 30 Sep 2020',
                terbit: '05:24',
            },
            dikerjakan: {
                id: 22,
                id_ibadah: 1,
                id_user: 1,
                tanggal: '2020-10-11',
            },
            ibadahActive: {
                id: 1,
                nama: 'subuh',
                created_at: '2020-06-16T13:12:09.000000Z',
                updated_at: '2020-06-16T13:12:10.000000Z',
            },
        };
    }
    render() {
        return (
            <ScrollView style={{backgroundColor: '#f7f7f7', flex: 1}}>
                {/* Header */}
                <View style={styles.header}>
                    {/* Tanggal */}
                    <View style={styles.tanggal}>
                        <Date />
                        <Text style={styles.tanggalText}>
                            Selasa, 15 September 2020
                        </Text>
                    </View>
                    {/* Waktu Ibadah */}
                    <LinearGradient
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        colors={['#FFD064', '#42B883', '#FFD064']}
                        style={styles.waktuIbadah}>
                        <View>
                            <Text style={styles.textBig}>Shalat Dzuuhr</Text>
                            <Text style={styles.textBig}>11:37</Text>
                            <Text style={styles.countdown}>
                                03:21:53 menuju Shalat Dzuhur
                            </Text>
                        </View>
                        <Mosque />
                    </LinearGradient>
                    {/* ButtonAction */}
                    <View>
                        <View style={styles.buttonAction}>
                            {/* <ButtonIbadah color="#FF6C1A" text="BELUM" /> */}
                            <ButtonIbadah color="#42B883" text="SUDAH" />
                        </View>
                    </View>
                </View>
                {/* Content */}
                <View style={styles.content}>
                    {/* header */}
                    <View style={styles.headerContent}>
                        <View style={styles.headerTextContent}>
                            <Text style={styles.headerText}>dikerjakan: 4</Text>
                            <Text style={styles.headerText}>semua: 6</Text>
                        </View>
                        {/* progrss */}
                        <ProgressBar bgColor="#42B883" completed={10} />
                    </View>
                    {/* mainContent */}
                    {this.state.ibadah.map((item) => (
                        <CardIbadah
                            key={item.id}
                            ibadah={item}
                            jadwal={this.state.jadwal}
                        />
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        height: 265,
    },
    tanggal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tanggalText: {
        marginLeft: 10,
    },
    waktuIbadah: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        padding: 15,
        borderRadius: 3,
    },
    textBig: {
        fontSize: 25,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        marginBottom: -15,
    },
    countdown: {
        fontSize: 12,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',
        marginTop: 15,
    },
    buttonAction: {
        marginTop: 15,
    },
    content: {
        backgroundColor: '#FFFFFF',
    },
    headerContent: {
        padding: 20,
    },
    headerTextContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerText: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
    },
    listIbadah: {
        paddingHorizontal: 20,
        paddingBottom: 30,
        backgroundColor: '#ddd',
    },
});
export default Ibadahku;
