import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      totalCount:0,
      readingCount:0,
      readCount:0,
    };
  }
  render(){
    return(
      <View style={{flex:1}}>
        <SafeAreaView/>
        <View
          style={{
            height:70,
            borderBottomWidth:0.5,
            alignItems:'center',
            justifyContent:'center'
          }}
          >
            <Text style={{fontSize:24}}>Book</Text>
          </View>
          <View style={{flex:1}}/>
          <View 
            style={{
              height:70,
              borderTopWidth:0.5,
              borderTopColor:'#E9E9E9',
              flexDirection:'row'
            }}>
              <View
                style={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                  <Text style={{fontSize:20}}>TOTAL</Text>
                  <Text>{this.state.totalCount}</Text>
                </View>
                <View 
                  style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                  }}>
                     <Text style={{fontSize:20}}>READING</Text>
                  <Text>{this.state.readingCount}</Text>
                  </View>

                  <View
                  style={{
                  flex:1,
                  alignItems:'center',
                  justifyContent:'center'
                }}>
                  <Text style={{fontSize:20}}>READ</Text>
                  <Text>{this.state.readCount}</Text>
                </View>
            </View>
      </View>
    )
  }
}

export default App