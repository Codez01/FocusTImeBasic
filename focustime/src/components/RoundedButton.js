import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 150,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
    <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size/2,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor :"white",
      borderWidth: 2,

    },
    text:{
      color:'#fff',
      fontSize: size /4,
      padding: 13,
      paddingTop: 20

    },
  });
