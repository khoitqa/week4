import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? '#2f95dc' : '#ccc'}
    />
  );
}
