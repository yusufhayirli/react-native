import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, 
  TextInput,
  Button,
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);

    this.state={
      input1:'',
      input2:'',
      result:''
    }
    this.sum= this.sum.bind(this)
    this.subs= this.subs.bind(this)
    this.multi= this.multi.bind(this)
    this.divide= this.divide.bind(this) 
  }
  sum(){
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)

    const result = number1+number2;

    this.setState({
      result:result
    })
  }
  subs(){
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)

    const result = number1-number2;

    this.setState({
      result:result
    })
  }
  multi(){
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)

    const result = number1*number2;

    this.setState({
      result:result
    })
  }
  divide(){
    const number1 = parseInt(this.state.input1)
    const number2 = parseInt(this.state.input2)

    const result = number1/number2;

    this.setState({
      result:result
    })
  }
  render(){
  return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My App's Title !</Text> 
        </View>

        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
            placeholder='First Number'
            onChangeText={(text) => {
              this.setState({
                input1:text
              })
            }}
            value={this.state.input1}
          />

          <View style={styles.buttonWrapper}>
          <Button
            onPress={this.sum}
            title='+'
            color="#841584"
          />
          <Button
            onPress={this.subs}
            title='-'
            color="#841584"
          />
          <Button
            onPress={this.multi}
            title='*'
            color="#841584"
          />
          <Button
            onPress={this.divide}
            title='/'
            color="#841584"
          />
          </View>

          <TextInput style={styles.input}
            placeholder='Second Number'
            onChangeText={(text) => {
              this.setState({
                input2:text
              })
            }}
            value={this.state.input2}
          />

          <Text style={styles.sampleText}>Result: {this.state.result}</Text>

        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({

  welcome:{
    fontSize:20,
    textAlign:'center',
  },
  container: {
    flex:1,
    flexDirection:'column',
  },
  contentWrapper:{
    padding:20,
    flexDirection:'column',
    justifyContent:'center',
  },
  input:{
    height:40,
  },
  sampleText:{
    height:30,
    fontSize:14,
  },
  buttonWrapper:{
    flexDirection:'row',
    justifyContent:'center',
  },
  header: {
    height:80,
    paddingTop:30,
    shadowColor: '#000000',
    shadowOffset:{width:0 , height:2},
    shadowOpacity:0.3,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F5FCFF',
  },
});