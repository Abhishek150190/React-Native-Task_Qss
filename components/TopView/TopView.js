import React,{Component} from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

const topView = (props) =>{
    const {navigation} = props
    return(
          
            <View style={{margin:15,flex:1}}>
                    <View style={styles.container}>
                        <Image source={props.image} style={{width:100,height:100}}></Image>
                    <View style={{justifyContent:'flex-start',alignItems:'center'}}>
                    <Text style={{marginLeft:-100,fontSize:18,fontWeight:'bold',color:'white',fontFamily:'roboto'}}>{props.title}</Text>
                    </View>
                    </View>
            </View>
          
    )
}


const styles = StyleSheet.create({
 container:{
     width:250,
     height:150,
     borderRadius:20,
     backgroundColor:'aqua',
     elevation:8,
     justifyContent:'center',
     alignItems:'center'
 }

})

export default topView