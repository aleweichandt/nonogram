import React from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import NavigatorRouter from './root';

const AppContainer = createAppContainer(NavigatorRouter);

type Props = {
  setRef: (ref: NavigationContainerComponent | null) => void;
};
const AppRouter: React.FC<Props> = ({setRef}) => <AppContainer ref={setRef} />;

export default AppRouter;
