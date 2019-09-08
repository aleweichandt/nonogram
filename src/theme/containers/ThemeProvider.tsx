import React from 'react';
import {
  StyleProvider, Root,
} from 'native-base';
import theme from '../styles';

type PropsType = {
  children?: React.ReactNodeArray[] | React.ReactNode
};

const ThemeProvider = ({ children }: PropsType) => (
  <StyleProvider style={theme}>
    <Root>
      {children}
    </Root>
  </StyleProvider>
);
ThemeProvider.defaultProps = {
  children: null,
};

export default ThemeProvider;
