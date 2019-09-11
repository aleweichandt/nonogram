import React from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import NavigatorRouter from './root';

const AppContainer = createAppContainer(NavigatorRouter);

export type PropsType = {
  setRef: (ref: NavigationContainerComponent | null) => void;
};
const AppRouter: React.FC<PropsType> = ({setRef}: PropsType) => (
  <AppContainer ref={setRef} />
);

export default AppRouter;
