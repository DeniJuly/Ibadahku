import React, {Component} from 'react';
import {
    ActivityIndicator,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {connect} from 'react-redux';
import {getDetailQuran, updLastRead} from '../../redux/_actions/quran';
import {getDetailUser} from '../../redux/_actions/user';
import ItemQuran from './ItemQuran';

class QuranDetail extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                ar: [],
                idt: [],
                id: [],
            },
            start: 1,
            end: 10,
            isLoading: true,
            surat: '',
        };
    }
    componentDidMount() {
        this.getData();
    }
    updLastQuran = () => {
        const {NOMOR} = this.props.route.params;
        const data = {
            id_quran: NOMOR,
        };
        this.props.updLastQuran(data);
    };
    getData = async () => {
        const {NOMOR} = this.props.route.params;
        const data = {
            nomor: NOMOR,
            start: this.state.start,
            end: this.state.end,
        };
        const user = await this.props.getDetailUser();
        const quran = await this.props.getDetailQuran(data);
        if (user.value.id_quran != NOMOR) {
            this.updLastQuran();
        }
        if (quran.value) {
            this.setState(
                {
                    data: {
                        ar: this.state.data.ar.concat(quran.value.ayat.data.ar),
                        idt: this.state.data.idt.concat(
                            quran.value.ayat.data.idt,
                        ),
                        id: this.state.data.id.concat(quran.value.ayat.data.id),
                    },
                    isLoading: false,
                    surat: quran.value.surat.nama,
                },
                () =>
                    this.props.navigation.setOptions({title: this.state.surat}),
            );
        } else {
            this.setState({
                isLoading: false,
            });
        }
    };
    loadMoreIndicator = () => {
        return this.state.isLoading ? (
            <View style={styles.loadMore}>
                <ActivityIndicator size="large" color="#50d890" />
            </View>
        ) : null;
    };
    handleLoadMore = () => {
        this.setState(
            {
                start: this.state.end + 1,
                end: this.state.end + 10,
                isLoading: true,
            },
            this.getData,
        );
    };
    render() {
        return (
            <View style={styles.page}>
                <FlatList
                    keyExtractor={(item) => item.ayat}
                    data={this.state.data.ar}
                    renderItem={({item, index}) => (
                        <ItemQuran
                            nomor={item.ayat}
                            ayat={item.teks}
                            arti={this.state.data.id[index].teks}
                        />
                    )}
                    onEndReached={this.handleLoadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={this.loadMoreIndicator}
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
    loadMore: {
        marginVertical: 10,
        alignItems: 'center',
    },
});

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailQuran: (nomor) => dispatch(getDetailQuran(nomor)),
        updLastQuran: (data) => dispatch(updLastRead(data)),
        getDetailUser: () => dispatch(getDetailUser()),
    };
};
export default connect(null, mapDispatchToProps)(QuranDetail);
