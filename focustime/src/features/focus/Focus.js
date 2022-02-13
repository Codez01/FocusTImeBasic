import React, { useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [temp, setTemp] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>What Would You Like To Focus On ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: 20 }}
            onSubmitEditing={({ nativeEvent }) => {
              setTemp(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={80}
            title="+"
            style= {{color : "white" }}
            onPress={() => {
              addSubject(temp);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },

  text: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  textView: {
    flex: 0.5,
    padding: 10,
    justifyContent: 'center',
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
