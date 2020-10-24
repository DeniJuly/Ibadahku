import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class QuranDetail extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ar: [
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '1',
                        teks: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '2',
                        teks: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '3',
                        teks: 'الرَّحْمَٰنِ الرَّحِيمِ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '4',
                        teks: 'مَالِكِ يَوْمِ الدِّينِ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '5',
                        teks: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '6',
                        teks: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
                    },
                    {
                        id: 'ar',
                        surat: '1',
                        ayat: '7',
                        teks:
                            'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
                    },
                ],
                id: [
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '1',
                        teks:
                            'Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. {1}\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '2',
                        teks:
                            'Segala puji {2} bagi Allah, Tuhan semesta alam. {3}\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '3',
                        teks: 'Maha Pemurah lagi Maha Penyayang.\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '4',
                        teks: 'Yang menguasai {4} di Hari Pembalasan {5}\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '5',
                        teks:
                            'Hanya Engkaulah yang kami sembah, {6} dan hanya kepada Engkaulah kami meminta pertolongan. {7}\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '6',
                        teks: 'Tunjukilah {8} kami jalan yang lurus,\n',
                    },
                    {
                        id: 'id',
                        surat: '1',
                        ayat: '7',
                        teks:
                            "(yaitu) Jalan orang-orang yang telah Engkau beri ni'mat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat. {9}\n",
                    },
                ],
            },
        };
    }
    componentDidMount() {
        this.props.navigation.setOptions({title: 'Al Fatihah'});
    }
    render() {
        return (
            <View style={styles.page}>
                <FlatList
                    keyExtractor={(item) => item.ayat}
                    data={this.state.data.ar}
                    renderItem={({item, index}) => (
                        <View
                            style={{
                                width: '100%',
                                borderBottomColor: '#ECECEC',
                                borderBottomWidth: 1,
                                paddingTop: 15,
                                paddingHorizontal: 25,
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}>
                                <View
                                    style={{
                                        backgroundColor: '#ECECEC',
                                        borderRadius: 3,
                                        paddingVertical: 2,
                                        paddingHorizontal: 7,
                                    }}>
                                    <Text
                                        style={{
                                            fontFamily: 'Poppins-Light',
                                            fontSize: 12,
                                        }}>
                                        {item.ayat}
                                    </Text>
                                </View>
                                <Text style={{marginLeft: 8}}>{item.teks}</Text>
                            </View>
                            <Text
                                style={{
                                    marginTop: 8,
                                    fontSize: 12,
                                    fontFamily: 'Poppins-Light',
                                }}>
                                {this.state.data.id[index].teks}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
});

export default QuranDetail;
