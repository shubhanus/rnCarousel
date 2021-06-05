/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Carousel from './app/carousel/Carousel';
import BannerResponse from './data/banner.json';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Carousel banners={BannerResponse} blocks={4} />
    </SafeAreaView>
  );
};

export default App;
