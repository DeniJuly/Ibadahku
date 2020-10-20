import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

// icons
import Location from '../../assets/image/icons/location.svg';
import QuranFitur from '../../assets/image/icons/quran-green-25.svg';
import IbadahkuFitur from '../../assets/image/icons/ibadahku-green-25.svg';
import DoaFitur from '../../assets/image/icons/doa-green-25.svg';
import MoreFitur from '../../assets/image/icons/more-green-25.svg';
import BacaQuran from '../../assets/image/icons/baca-quran-green-55.svg';
import BackgroundDoa from '../../assets/image/background-doa.svg';

// styles
import {globalStyle} from '../../assets/styles/global';
import {connect} from 'react-redux';
import {getCityName, getDetailUser} from '../../redux/_actions/user';
import {getIbadah} from '../../redux/_actions/ibadah';
import {getNamaSurat} from '../../redux/_actions/surat';
import {LOGIN} from '../../redux/constants/constants';
import {getLimitDoa} from '../../redux/_actions/doa';
import PlaceholderHome from './PlaceholderHome';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            doa: [],
            foto_profile: '',
            nama: '',
            id_tinggal: '',
            id_quran: '',
            tinggal: '',
            jadwal: {
                maghrib: '00:00',
                imsak: '00:00',
            },
            surat: {
                nama: '',
            },
            loading: true,
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const user = await this.props.getDetail();
        const doa = await this.props.getDoa(5);
        this.setState({
            foto_profile: user.value.foto_profile,
            nama: user.value.nama,
            id_tinggal: user.value.id_tinggal,
            id_quran: user.value.id_quran,
            doa: doa.value,
        });
        this.getNamaKota(user.value.id_tinggal);
        this.getJadwalIbadah(user.value.id_tinggal);
        if (user.value.id_quran != '') {
            this.getSurat(user.value.id_quran);
        }
    };

    getSurat = (id_quran) => {
        this.props.getSuratUser(id_quran).then((res) => {
            this.setState({
                surat: res.value,
            });
        });
    };

    getNamaKota = (city_code) => {
        this.props.getKota(city_code).then((res) => {
            this.setState({tinggal: res.value[0].nama, loading: false});
        });
    };

    getJadwalIbadah = (city_code) => {
        const date = new Date();
        let tanggal = date.getDate();
        let bulan = date.getMonth() + 1;
        let tahun = date.getFullYear();
        let fixTanggal =
            tahun + '-' + (bulan < 10 ? '0' + bulan : bulan) + '-' + tanggal;
        this.props.getIbadah(city_code, fixTanggal).then((res) => {
            this.setState({
                jadwal: res.value,
            });
        });
    };

    render() {
        const user = this.state;
        console.log(user.loading);
        return (
            <ScrollView style={globalStyle.bgWhite}>
                {user.loading ? (
                    <PlaceholderHome />
                ) : (
                    <>
                        <ImageBackground
                            source={require('../../assets/image/bg.jpg')}
                            style={styles.banner}>
                            {/* FILTER */}
                            <View style={styles.filter}>
                                {/* PROFIL */}
                                <View style={styles.profil}>
                                    <Image
                                        style={styles.fotoProfil}
                                        source={{uri: user.foto_profile}}
                                    />
                                    <View style={styles.textProfil}>
                                        <Text style={styles.salam}>
                                            Assalamu'allaikum Wr. Wb
                                        </Text>
                                        <Text style={styles.nama}>
                                            {user.nama}
                                        </Text>
                                    </View>
                                </View>
                                {/* INFO SHOLAT */}
                                <View style={styles.shalat}>
                                    {/* Header */}
                                    <View style={styles.headerShalat}>
                                        <Location />
                                        <Text style={styles.kotaSholat}>
                                            {user.tinggal}
                                        </Text>
                                    </View>
                                    {/* body */}
                                    <View style={styles.bodyShalat}>
                                        <View
                                            style={{
                                                ...styles.itemShalat,
                                                ...styles.itemLeft,
                                            }}>
                                            <Text style={styles.itemTitle}>
                                                Waktu Imsak
                                            </Text>
                                            <Text style={styles.itemText}>
                                                {this.state.jadwal.imsak}
                                            </Text>
                                        </View>
                                        <View style={styles.itemShalat}>
                                            <Text style={styles.itemTitle}>
                                                Waktu Berbuka
                                            </Text>
                                            <Text style={styles.itemText}>
                                                {this.state.jadwal.maghrib}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={styles.container}>
                            {/* fitur */}
                            <View style={styles.fitur}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate('Quran')
                                    }>
                                    <View style={styles.itemFitur}>
                                        <QuranFitur />
                                        <Text style={styles.itemFiturText}>
                                            al qur'an
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            'Ibadahku',
                                        )
                                    }>
                                    <View style={styles.itemFitur}>
                                        <IbadahkuFitur />
                                        <Text style={styles.itemFiturText}>
                                            Ibadahku
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate('Doa')
                                    }>
                                    <View style={styles.itemFitur}>
                                        <DoaFitur />
                                        <Text style={styles.itemFiturText}>
                                            Doa Harian
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.itemFitur}>
                                    <MoreFitur />
                                    <Text style={styles.itemFiturText}>
                                        lainnya
                                    </Text>
                                </View>
                            </View>
                            {/* quran */}
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'QuranDetail',
                                    )
                                }
                                style={styles.quran}>
                                <BacaQuran />
                                <View style={styles.quranContent}>
                                    {this.state.surat.nama != '' ? (
                                        <>
                                            <Text style={styles.quranTitle}>
                                                baca al quran yuk? surat
                                                terakhir dibaca
                                            </Text>
                                            <Text style={styles.quranText}>
                                                Al Baqarah
                                            </Text>
                                        </>
                                    ) : (
                                        <Text style={styles.quranTitle}>
                                            baca al quran yuk? biar keren
                                        </Text>
                                    )}
                                </View>
                            </TouchableOpacity>
                            {/* doa harian */}
                            <View style={styles.doa}>
                                <Text style={styles.titleDoa}>
                                    Doa-doa harian
                                </Text>
                                <FlatList
                                    data={this.state.doa}
                                    keyExtractor={(item) => item.key}
                                    renderItem={({item, index}) => (
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate(
                                                    'DoaDetail',
                                                )
                                            }
                                            key={index}
                                            style={styles.doaItem}>
                                            <BackgroundDoa />
                                            <Text style={styles.doaTitle}>
                                                {item.judul}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </>
                )}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 260,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        overflow: 'hidden',
    },
    filter: {
        backgroundColor: 'rgba(66, 184, 131, 0.85)',
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
    },
    profil: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    fotoProfil: {
        width: 35,
        height: 35,
        borderRadius: 35,
        overflow: 'hidden',
    },
    textProfil: {
        marginLeft: 10,
    },
    salam: {
        color: '#FFF',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
    nama: {
        color: '#FFF',
        fontFamily: 'Poppins-Light',
        fontSize: 12,
    },
    shalat: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: '100%',
        marginTop: 45,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    headerShalat: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingBottom: 10,
    },
    kotaSholat: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        marginLeft: 10,
    },
    bodyShalat: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
    },
    itemShalat: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
    },
    itemTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
    },
    itemLeft: {
        borderRightWidth: 1,
        borderRightColor: '#ECECEC',
    },
    itemText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 22,
    },
    container: {
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 20,
    },
    fitur: {
        marginTop: 20,
        flexDirection: 'row',
        paddingTop: 12,
        paddingBottom: 9,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'space-between',
        elevation: 3,
    },
    itemFitur: {
        alignItems: 'center',
    },
    itemFiturText: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
        marginTop: 5,
    },
    quran: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ececec',
        borderRadius: 5,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
    },
    quranContent: {
        marginLeft: 10,
    },
    quranTitle: {
        fontFamily: 'Poppins-Light',
        fontSize: 12,
    },
    quranText: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    doa: {
        marginTop: 15,
    },
    titleDoa: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        marginBottom: 10,
    },
    doaItem: {
        marginLeft: 5,
        width: 84,
        height: 117,
        alignItems: 'center',
    },
    doaTitle: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        width: 75,
        marginTop: -112,
        color: 'rgba(0,0,0,.8)',
    },
});

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail: () => dispatch(getDetailUser()),
        getKota: (city_code) => dispatch(getCityName(city_code)),
        getIbadah: (kota, tanggal) => dispatch(getIbadah(kota, tanggal)),
        getSuratUser: (id_quran) => dispatch(getNamaSurat(id_quran)),
        getDoa: (limit) => dispatch(getLimitDoa(limit)),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
