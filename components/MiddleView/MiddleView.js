import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const middleView = (props) =>{
    return(
            <View style={{margin:15}}>
            <View style={styles.container}>
                <Image source={props.image} style={{width:40,height:40}}></Image>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontWeight:'500'}}>{props.title}</Text>
            </View>
            </View>
    )
}


const styles = StyleSheet.create({
 container:{
     width:60,
     height:60,
     borderRadius:30,
     backgroundColor:'white',
     elevation:8,
     justifyContent:'center',
     alignItems:'center'
 }

})

export default middleView