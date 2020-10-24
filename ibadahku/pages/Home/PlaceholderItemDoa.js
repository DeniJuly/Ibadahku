import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Placeholder from 'react-native-loading-placeholder/src/Placeholder';
import PlaceholderContainer from 'react-native-loading-placeholder/src/PlaceholderContainer';
import {globalStyle} from '../../assets/styles/global';

const PlaceholderItemDoa = ({id}) => {
  return (
    <PlaceholderContainer
      key={id}
      animatedComponent={<Gradient />}
      style={{...globalStyle.placeholderContainer, ...styles.doaItem}}>
      <Placeholder style={{...globalStyle.placeholder, ...styles.doaItem}} />
    </PlaceholderContainer>
  );
};

const Gradient = () => {
  return (
    <LinearGradient
      colors={['#eeeeee', '#dddddd', '#eeeeee']}
      start={{x: 1.0, y: 0.0}}
      end={{x: 0.0, y: 0.0}}
      style={{
        flex: 1,
        width: 120,
      }}
    />
  );
};

const styles = StyleSheet.create({
  doaItem: {
    marginRight: 5,
    width: 84,
    height: 117,
    borderRadius: 3,
  },
});

export default PlaceholderItemDoa;
