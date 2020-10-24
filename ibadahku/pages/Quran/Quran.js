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
import {getAllQuran} from '../../redux/_actions/quran';
import {connect} from 'react-redux';
import PlaceholderQuran from './PlaceholderQuran';
import {getDetailUser} from '../../redux/_actions/user';
import {getNamaSurat} from '../../redux/_actions/surat';

class Quran extends React.Component {
    constructor() {
        super();
        this.state = {
            quran: [],
            loading: true,
            last_read: '',
            surat: {
                nama: '',
            },
        };
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        const user = await this.props.getDetailUser();
        const quran = await this.props.getAllQuran();

        if (user.value.id_quran != null) {
            this.getSurat(user.value.id_quran);
        }

        this.setState({
            quran: quran.value,
            last_read: user.value.id_quran,
            loading: false,
        });
    };

    getSurat = (id_quran) => {
        this.props.getSuratUser(id_quran).then((res) => {
            this.setState({
                surat: res.value,
            });
        });
    };

    render() {
        return (
            <ScrollView style={styles.page}>
                {/* header */}
                <View style={styles.header}>
                    <QuranBlack />
                    <Text style={styles.pageTitle}>Al Qur'an</Text>
                </View>
                {/* last read */}
                {this.state.loading ? (
                    <PlaceholderQuran />
                ) : (
                    <>
                        {this.state.surat.nama != '' ? (
                            <TouchableOpacity
                                style={styles.lastRead}
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'QuranDetail',
                                        {NOMOR: this.state.last_read},
                                    )
                                }>
                                <View>
                                    <Text style={styles.title}>
                                        Terakhir Dibaca:
                                    </Text>
                                    <Text style={styles.subtitle}>
                                        {this.state.surat.nama}
                                    </Text>
                                </View>
                                <NextBlack />
                            </TouchableOpacity>
                        ) : null}
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
                    </>
                )}
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

const mapDispatchToProps = (dispatch) => {
    return {
        getAllQuran: () => dispatch(getAllQuran()),
        getDetailUser: () => dispatch(getDetailUser()),
        getSuratUser: (id_quran) => dispatch(getNamaSurat(id_quran)),
    };
};
export default connect(null, mapDispatchToProps)(Quran);
