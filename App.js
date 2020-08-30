import React, {useState} from 'react';
import {View, StyleSheet,Text, FlatList, TextInput,Button } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
     <Text>Email/Phone</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />
    <Text>Password</Text>
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
     
    />
    <Text>confirm Password</Text>
     <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
    />

<Button
        title="Press me"
         style = {{
          paddingBottom: 100,
         }}
      />
    </View>
     
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#637CFB",
    flex: 1,
  },
});

export default App;
