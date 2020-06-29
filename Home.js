import React,{Suspense,Component,lazy} from 'react'
import {View,Image, ScrollView,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import TopView from './components/TopView/TopView'
import MiddleView from './components/MiddleView/MiddleView'
import BottomView from './components/BottomView/BottomView'
import Main from './Main'
import axios from 'axios'

export default class Home extends Component{
 constructor(props){
   super(props)
   this.state={
     text:'',
     posts:[],
     tp:[
      {
         id:1,
         title:"Kids Dress",
         uri:require('./asset/TopView/one.png')
         

      },
      {
         id:2,
         title:"Mens Wear",
         uri:require('./asset/TopView/two.png')
         
      },
      {
         id:3,
         title:"Womens Wear",
         uri:require('./asset/TopView/three.png')
        
      },
     
    ],
     md:[
       {
          id:1,
          title:"Food",
          uri:require("./asset/dish.png")

       },
       {
          id:2,
          title:"Clothes",
          uri:require("./asset/clothes.png")
       },
       {
          id:3,
          title:"Travel",
          uri:require("./asset/travel.png")
       },
       {
          id:4,
          title:"Beauty",
          uri:require("./asset/beauty.png")
       },
       {
          id:5,
          title:"Gifts",
          uri:require("./asset/gift.png")
       },
     ],
    
   }

   this.arrayholder=[]
 }




 componentDidMount() {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      this.setState({ posts: res.data });
      this.arrayholder = res.data
    })
    .catch(error => console.log(error))
}



/**********************Search-Functionality********************** */
 handleSearch(text) {
  const newData = this.arrayholder.filter(function (item) {
    const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
  this.setState({
    posts:newData,
    text:text
  });
}
/************************************************************** */


  render(){

  const loadingImg = <View>
    <Image alt="loading" source="https://google.com" />
  </View>

    const Bottom =  this.state.posts.map(btData=>{
      return(
      <Suspense key={btData.id} fallback={loadingImg}>
      <BottomView
        key={btData.id}
        title={btData.name}/>
      </Suspense>
      );
      });


    return(
    <View style={{flex:1}}>


    {/*************************Search-Text-Input*********************************/}
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.handleSearch(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
    {/************************************************************************/}



    {/***************************Top-View***************************************/}
        <View style={{height:200}}>
        <ScrollView horizontal={true} style={{margin:10}} showsHorizontalScrollIndicator={false}>
        {this.state.tp.map(mdData=>
        <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('Main')}>
        <TopView
            key={mdData.id}
            image={mdData.uri}
            title={mdData.title}>
        </TopView>
        </TouchableOpacity>)}
        </ScrollView>
        </View>
    {/********************************************************************************/}



    {/*********************************Middle-View*********************************/}
        <View style={{height:130}}>
        <ScrollView horizontal={true} style={{margin:10,}} showsHorizontalScrollIndicator={false}>
        {this.state.md.map(mdData=>
        <MiddleView
            key={mdData.id}
            title={mdData.title}
            image={mdData.uri}>
        </MiddleView>)}
        </ScrollView>
        </View>
      {/*******************************************************************************/}



      {/***********************************Bottom-View************************************/}
        <View style={{flex:1}}>
        <ScrollView style={{margin:'8%',position:'relative',flex:1}} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:'row',flexWrap:'wrap'}}>
            {Bottom}
        </View>
        </ScrollView>
        </View>
        </View>
    // {/****************************************************************************************** */}

    )
  }
}

const styles = StyleSheet.create({

  textInputStyle: {
    margin:30,
    height: 50,
    borderWidth: 1,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius:25,
    paddingLeft:20
  },
});