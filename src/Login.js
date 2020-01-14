import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
  TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux';


const dWidth = Dimensions.get('window').width;
const dHeight = Dimensions.get('window').height;


export default class Ridenow extends Component<Props> {
  render(){
    return (
    <View style={styles.container}>
      <View>
        <Image source={require('./signin.jpeg')} style={{width:dWidth,height:200}} />
        <TouchableOpacity onPress={Actions.Homescreen}>
          <View style={{borderRadius:7,backgroundColor:'royalblue',marginHorizontal:20,alignItems:'center',marginTop:20}}>
            <Text style={{color:'white',paddingVertical:15,fontSize:17,fontWeight:'bold'}}>Sign in</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    backgroundColor: '#FFFFFF',
    paddingBottom:100,
  },
  blocktext:{fontSize:20,padding:10},
  block:{backgroundColor:'#E9E9E9',marginVertical:5,borderRadius:5,flexDirection:'row',justifyContent:'space-between'}
});
