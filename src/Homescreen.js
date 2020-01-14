import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Image,
} from 'react-native';

import { Router, Scene ,Drawer, ActionConst} from 'react-native-router-flux';
import Icon from "react-native-vector-icons/Ionicons"
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

import Login from './Login.js';
import Course from './Course.js';

class TabIcon extends Component {
  render() {
    var color = this.props.focused ? '#000000' : '#999999';

    return (
      <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
        <Icon name={this.props.iconName} style={{color: color}} size={25}/>
        <Text style={{fontSize: 12,color:color}}>{this.props.title}</Text>
      </View>
    );
  }
}






const App: () => React$Node = () => {
  return (
    <Router navigationBarStyle={{justifyContent: 'center'}} titleStyle={{color:'#29303B'}}>
          <Scene key="root"  renderTitle={() => (
              <View style={{alignItems: 'center',justifyContent: 'center',}}>
                <Image style={{height:40,width:180}} source={require('./logo.jpeg')} />
              </View>
            )}
            >

                <Scene key="tabbar" tabs={true} showLabel={false} title="tabber_101"
                  onRight={ ()=> Alert.alert('hello') }
                  rightTitle="Search"
                >

                  <Scene  title="Course"
                            iconName="md-book"
                            icon={TabIcon}
                            hideNavBar={true}
                            component={Course}
                            initial={true}
                    />

                    <Scene  title="My Course"
                              iconName="md-cart"
                              icon={TabIcon}
                              hideNavBar={true}
                              component={Login}
                              initial={true}
                      />

                      <Scene  title="Whishlist"
                                iconName="md-heart"
                                icon={TabIcon}
                                hideNavBar={true}
                                component={Login}
                                initial={true}
                        />

                        <Scene  title="Account"
                                  iconName="md-contact"
                                  icon={TabIcon}
                                  hideNavBar={true}
                                  component={Login}
                                  initial={true}
                          />

                </Scene>
          </Scene>
          </Router>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
        shadowColor: '#000', shadowOpacity: 0.5, shadowRadius: 1
    },
});
export default App;
