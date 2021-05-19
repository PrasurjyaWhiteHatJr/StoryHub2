import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen'
import ReadStoryScreen from './screens/ReadStoryScreen.js'
//import MyHeader from './components/MyHeader'

export default class App extends React.Component {
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
  );
}
}
const tabNavigator = createBottomTabNavigator({
  WriteStory:WriteStoryScreen,
  ReadStory:ReadStoryScreen,
},

{
  defaultNavigationOptions:({navigation})=>{
    tabBarIcon:()=>{
      const routeName=navigation.state.routeName
      if(routeName === "WriteStory"){
        return(<Image source={require("./assets/write.jpg")}
        style={{width:40, height:40}}/>
        )
      }
      else if(routeName === "ReadStory"){
        return(<Image source={require("./assets/read.png")}
        style={{width:40, height:40}}/>
        )
    }
  }
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
