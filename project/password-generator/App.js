import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button} from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
    retVal:""
    }
  }

 generatePassword() {

    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for (var i = 0, n = charset.length; i < length; ++i) {
        this.state.retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.setState({})
  
}
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.background}> <Card>
          <AssetExample />
        </Card></View>
      <View style={styles.button}> <Button
            onPress={() => this.generatePassword()}
            title="Press Me"
          /></View>   
      <View  style={styles.passwordtxt}><Text>{this.state.retVal}</Text></View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  background:{
    flex:7,
    backgroundColor:'black'
  },
  button:{
    width:200,
    justifyContent:'space-around',
    alignItems:'center',
    alignSelf:'center',
    fontSize:17,
    margin:20,
    
  },
  passwordtxt:{
    flex: 1,
    backgroundColor: 'green',
    fontSize:30,
    alignSelf:'center',
    alignItems:'stretch',
    justifyContent: 'stretch'
    }

});
