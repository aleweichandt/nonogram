// @flow
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F00',
  },
});

export type PropsType = {
  next: () => void,
}

const Splash = ({ next }: PropsType) => (
  <View style={styles.container}>
    <Button title="NEXT" onPress={next} />
  </View>
);

export default Splash;
