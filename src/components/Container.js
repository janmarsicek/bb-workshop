/**
 * @flow
 */

import React from 'react';
import { View, StyleSheet } from 'react-native';

type ContainerProps = {
  children: React.Node,
  style: Object | Array<Object>,
  noHorizontalPadding: boolean,
}

const Container = ({ children, style, noHorizontalPadding }: ContainerProps) => (
  <View style={[
    styles.container,
    noHorizontalPadding && styles.noHorizontalPadding,
    style
  ]}>{children}</View>
)

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  noHorizontalPadding: {
    paddingHorizontal: 0
  }
});

export default Container;
