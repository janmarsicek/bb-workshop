import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import content from './content';
import Container from '../components/Container';

const Button = ({ children, declineButton }) => (
  <TouchableOpacity
    style={[
      styles.button,
      declineButton && styles.declineButton
    ]}
  >
    <Text style={[
      styles.text,
      styles.buttonText,
      declineButton && styles.declineText
    ]}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default class TermsAndConditions extends React.Component {
  render() {
    const { title, body } = this.props;

    return (
      <Container>
        <Text style={[styles.text, styles.headline]}>{title}</Text>
        <Text style={[styles.text]}>{body}</Text>
        <Button>{content.accept}</Button>
        <Button declineButton>{content.decline}</Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Avenir',
    fontSize: 16
  },
  headline: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  button: {
    padding: 10,
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  declineButton: {
    backgroundColor: 'red',
  },
  declineText: {
    color: 'rgba(0, 0, 0, .6)'
  }
});
