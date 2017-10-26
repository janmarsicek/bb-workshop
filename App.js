import React from 'react';
import glamorous, { ThemeProvider } from 'glamorous-native';
import { StyleSheet, Text } from 'react-native';

import TermsAndConditions from './src/TermsAndConditions'
import content from './src/TermsAndConditions/content';
import theme from './src/theme';

const AppWrapper = glamorous.view(({ theme }) => ({
  paddingTop: 10,
  flex: 1,
  backgroundColor: theme.colors.appBackground,
}));

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <TermsAndConditions title={content.title} body={content.body} />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}
