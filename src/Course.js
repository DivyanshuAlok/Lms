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
  ScrollView,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/Ionicons"

const dWidth = Dimensions.get('window').width;
const dHeight = Dimensions.get('window').height;

const list = [
                  {name:'WordPress Theme Development with Bootstrap'},
                  {name:'Adobe Illustrator CC - Essentials Training Course'},
                  {name:'Supreme Photoshop Training: From Beginner to Expert'},
                  {name:'User Experience Design Essentials - Adobe XD UI UX Design'},
                  {name:'Adobe Illustrator CC - Essentials Training Course'},
                  {name:'Supreme Photoshop Training: From Beginner to Expert'},
                  {name:'User Experience Design Essentials - Adobe XD UI UX Design'},
              ];

export default class Ridenow extends Component<Props> {
  render(){
    return (

    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={{margin:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Top Course</Text>
            <TouchableOpacity>
              <Text style={{color:'blue',marginTop:10}}>All Courses ></Text>
            </TouchableOpacity>
          </View>

          <View>
            <ScrollView horizontal={true}>
                  {
                   list.map((item, index) => (
                      <TouchableOpacity>
                        <View style={{margin:10,borderWidth:0.5,borderRadius:10,width:201,elevation:3,backgroundColor:'white',borderColor:'#DDDDDD'}}>
                          <Image style={{height:150,width:200,borderTopLeftRadius:10,borderTopRightRadius:10}} source={require('./img1.jpg')} />
                          <Text numberOfLines={2} style={{color:'#444444',fontSize:20,justifyContent:'center',padding:10}}>
                            {item.name}
                          </Text>
                          <View style={{alignItems:'flex-end',padding:10}}>
                            <Text style={{color:'#777777'}}>$10</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                   ))
                }
              </ScrollView>
          </View>
        </View>

        <View style={{padding:15}}>
          <View style={{margin:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={{fontSize:25,fontWeight:'bold'}}>Categories</Text>
            <TouchableOpacity>
              <Text style={{color:'blue',marginTop:10}}>All Courses ></Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'royalblue',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Web Design</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'tomato',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Graphic Design</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'darkcyan',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>User Experience</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'indigo',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Interior Design</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'royalblue',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>3D and Animation</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

          <View style={{flexDirection:'row',backgroundColor:'tomato',justifyContent:'space-between',borderRadius:10,marginTop:20,elevation:3}}>
            <Image style={{height:90,width:140,borderTopLeftRadius:10,borderBottomLeftRadius:10}} source={require('./img1.jpg')} />
            <View style={{justifyContent:'center',width:145}}>
              <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>Frontend Development</Text>
              <Text style={{color:'white'}}>3 Courses</Text>
            </View>
            <View style={{marginHorizontal:20,justifyContent:'center'}}>
              <Icon name="md-play" color="#FFFFFF" size={30} />
            </View>
          </View>

        </View>


      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
  }
});
