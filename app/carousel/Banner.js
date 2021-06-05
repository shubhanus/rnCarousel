//@flow
import React from 'react';
import type {Node} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export type BannerType = {
  images: Array<string>,
  title: 'text',
  id: string,
};

type Props = {
  ...BannerType,
  width: number,
  height: number,
};

const Banner = (props: Props): Node => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        {props.images.map((imgSrc, index) => {
          return (
            <Image
              key={index} // No other option according to data
              source={{url: imgSrc}}
              style={[
                styles.bannerImage,
                {
                  width: props.width / props.images.length,
                  height: props.height,
                },
              ]}
            />
          );
        })}
      </View>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
  },
  bannerImage: {resizeMode: 'cover'},
  title: {
    position: 'absolute',
    bottom: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Banner;
