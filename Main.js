import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default class Main extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Blank Screen</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
})
