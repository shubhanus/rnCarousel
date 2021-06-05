//@flow
import React, {type Node} from 'react';
import {View, FlatList, StyleSheet, Dimensions} from 'react-native';

import Banner, {type BannerType} from './Banner';
import NavButton from './NavButton';

const {width}: {width: number, height: number} = Dimensions.get('window');
const height = width * 0.4;

type Props = {
  banners: Array<BannerType>,
  blocks: number,
};

const Carousel = (props: Props): Node => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const sliderRef = React.useRef();

  const getBanner = React.useCallback(
    ({item}) => {
      return <Banner {...item} width={width / props.blocks} height={height} />;
    },
    [props.blocks],
  );

  const getBannerKey = React.useCallback(({id}) => id, []);

  const onPrevPress = React.useCallback(() => {
    const prevIndex = activeSlide - props.blocks;
    setActiveSlide(prevIndex);
  }, [activeSlide, props.blocks]);

  const onNextPress = React.useCallback(() => {
    const nextIndex = activeSlide + props.blocks;
    setActiveSlide(nextIndex);
  }, [activeSlide, props.blocks]);

  React.useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollToIndex({index: activeSlide});
    }
  }, [activeSlide]);

  return (
    <View style={[styles.root, {width, height}]}>
      <View style={[styles.navWrapper, styles.prev]}>
        <NavButton
          onPress={onPrevPress}
          position="prev"
          disabled={activeSlide === 0}
        />
      </View>
      <FlatList
        style={{
          width,
          height,
        }}
        data={props.banners}
        renderItem={getBanner}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={sliderRef}
        keyExtractor={getBannerKey}
      />
      <View style={[styles.navWrapper, styles.next]}>
        <NavButton
          onPress={onNextPress}
          position="next"
          disabled={
            (Math.ceil(props.banners.length / props.blocks) - 1) *
              props.blocks ===
            activeSlide
          }
        />
      </View>
    </View>
  );
};

Carousel.defaultProps = {
  blocks: 4,
};

const styles = StyleSheet.create({
  root: {
    marginTop: 50,
  },
  navWrapper: {
    position: 'absolute',
    zIndex: 1,
    top: height / 2,
  },
  next: {right: 0},
  prev: {
    left: 0,
  },
});

export default Carousel;
