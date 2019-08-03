// @flow
import React from 'react';
import { createAppContainer } from 'react-navigation';
import NavigatorRouter from './root';

// $FlowFixMe react-navigation types
const AppContainer = createAppContainer(NavigatorRouter);
export type PropsType = {
  setRef: () => void,
}
export default ({ setRef }: PropsType) => (<AppContainer ref={setRef} />);
