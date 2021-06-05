/**
 * @format
 */

import 'react-native';
import React from 'react';
import Carousel from '../app/carousel/Carousel';
import data from '../data/banner.json';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly when data provided and blocks 4', () => {
  renderer.create(<Carousel banners={data} blocks={4} />);
});

it('renders correctly when data provided without blocks prop', () => {
  renderer.create(<Carousel banners={data} />);
});

it('renders correctly when data provided and blocks 1', () => {
  renderer.create(<Carousel banners={data} blocks={1} />);
});
