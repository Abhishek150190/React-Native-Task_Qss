import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const bottomView = (props) =>{
    return(
            <View style={{margin:10,justifyContent:'center',alignItems:'center'}}>
            <View style={styles.container}>
                <View style={{width:150,height:150,backgroundColor:'lavender',margin:5}}></View>
                <View style={{justifyContent:'center',alignItems:'center',padding:5}}>
                <Text style={{fontSize:17,fontWeight:'500'}}>{props.title}</Text>
                </View>
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
 container:{
     width:150,
     height:200,
     backgroundColor:'white',
     elevation:4,
     justifyContent:'center',
     alignItems:'center',
     position:'relative'
 }

})

export default bottomView