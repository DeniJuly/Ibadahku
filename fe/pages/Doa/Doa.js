import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {globalStyle} from '../../assets/styles/global';
import CardDoa from './component/CardDoa';
import Search from './component/Search';

class Doa extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            doa: [
                {
                    id: 1,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
                {
                    id: 2,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
                {
                    id: 3,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
                {
                    id: 4,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
                {
                    id: 5,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
                {
                    id: 6,
                    ilustrasi: 'doa-sebelum-makan.svg',
                    judul: 'Doa Sebelum Makan',
                },
            ],
        };
    }
    handleChangeSearch = (key) => {
        console.log(key);
    };
    handleSearch = () => {
        console.log();
    };
    render() {
        return (
            <View style={globalStyle.page}>
                {/* search */}
                <View style={styles.search}>
                    <Search input={this.state.search} handleChange />
                </View>
                {/* list */}
                <FlatList
                    keyExtractor={(item) => item.id.toString()}
                    data={this.state.doa}
                    renderItem={({item}) => (
                        <CardDoa
                            doa={item}
                            navigation={this.props.navigation}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    search: {
        paddingHorizontal: 20,
        marginVertical: 15,
    },
});
export default Doa;
