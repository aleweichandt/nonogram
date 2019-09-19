import React from 'react';
import {StyleProvider, Root} from 'native-base';
import theme from '../styles';

type Props = {
  children?: React.ReactNodeArray[] | React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({children}) => (
  <StyleProvider style={theme}>
    <Root>{children}</Root>
  </StyleProvider>
);
ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
