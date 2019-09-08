import React from 'react';
import { createAppContainer, NavigationProp } from 'react-navigation';
import NavigatorRouter from './root';

const AppContainer = createAppContainer(NavigatorRouter);
export type PropsType = {
  // TODO fix types
  setRef: (ref: any) => void,
}
const AppRouter: React.FC<PropsType> = ({ setRef }: PropsType) => (
  <AppContainer ref={setRef} />
);

export default AppRouter;
