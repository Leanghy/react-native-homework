import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

export default class Logo extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
                <Image style={{
                        justifyContent:'center',
                        width: 90,
                        height: 90
                    }}
                source={require('../images/logo.jpeg')} />
                <Text style={{
                    fontSize:22,
                    marginVertical:8,
                    paddingVertical:8,
                    // color:'#ffffff'
                }}>Welcome Chhour Leanghy</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    //   flex:1,
      alignItems:'center',
      justifyContent:'center'
    }
  });