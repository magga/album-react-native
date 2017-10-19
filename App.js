import { Text, View, ScrollView } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Text style={myStyle}> My Blog Post Spot! </Text>
      </View>
    </ScrollView>
  );
};

const myStyle = { 
  color: 'red', 
  fontSize: 40,
  padding: 15
};

export default App;
