//@flow
import React from 'react';
import type {Node} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const ButtonPositions = Object.freeze({
  next: 'next',
  pref: 'prev',
});

type Props = {
  onPress: () => void,
  position: $Values<typeof ButtonPositions>,
  disabled: boolean,
};

const NavButton = (props: Props): Node => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <View style={[styles.imageContainer, props.disabled && styles.disabled]}>
        <Image
          source={require('../assets/images/chevron.png')}
          style={[
            styles.iconImage,
            props.position === ButtonPositions.next && styles.rotate180,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

NavButton.defaultProps = {
  position: 'prev',
  disabled: false,
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
  },
  rotate180: {
    transform: [{rotate: '180deg'}],
  },
  disabled: {
    opacity: 0.5,
  },
});

export default NavButton;
