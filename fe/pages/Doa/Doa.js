import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {globalStyle} from '../../assets/styles/global';
import {getAllDoa} from '../../redux/_actions/doa';
import CardDoa from './component/CardDoa';
import Search from './component/Search';

class Doa extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
            doa: [],
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = async () => {
        await this.props.getAllDoa().then((res) => {
            this.setState({
                doa: res.value,
            });
        });
    };
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

const mapDispatchToProps = (dispatch) => {
    return {
        getAllDoa: () => dispatch(getAllDoa()),
    };
};
export default connect(null, mapDispatchToProps)(Doa);
