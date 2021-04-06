  /* import React from 'react';
import {Text,View}from  'react-native';

const HelloWorld = () => {
  return(
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
      
    }}>
    <Text>Hello,World</Text>
   </View>
  )
}
export default HelloWorld;  */

 ////2
/* 
import React from 'react';
import{ Text, View, StyleSheet } from  'react -native';

const styles =StyleSheet.create({
  center: {
  alignItems: 'center'  
  }
})
const Greeting = (props) => {
  return(
    <View style={steyles.center}>
      <Text> llello {props.name}!</Text>
      </View>
  );
}

 const Lots0fGreetings = ()  =>{

 return (
   <View style={[steyles.center, {top:50}]}>
     <Greeting name='Lilianeth'/>
     <Greeting name='Alicia'/>
     <Greeting name='Herrera'/>
     </View>
 );

 export default Lots0fGreetings;
 }   */
 
///////3

 /* import React,{ useState } from  'react';
 import {View,Text,Button , StyleSheet } from 'react-native'; 

 const App = ()=>{
   const [count,setCount]=useState(0);
   return(
     <View style={styles.container}>
       <Text> you clicked {count} times</Text>
< Button
onPress={() => setCount(count + 1)}
title="click me!"
/>
</View>
   );
 };

 ///react native styles
 const styles = StyleSheet.create({
   container: {
    flex:1,
     justifyContent: 'center',
     alignItems:'center'

   }
 });
export default App; */

/////4
/* 
 import React  from 'react';
import {View,Text,Image,ScrollView, TextInput } from 'react-native';


const App = ()=>{
  return (
    <ScrollView>
  <Text>some text</Text>
 <View>
   <Text> some more text</Text>
 <Image
 source={{
   uri: 'https://reactnative.dev/docs/assets/p_cat2.png',

 }}
 style={{ width:200, height: 200 }}
 />
 </View>
 <Textinput
 style={{
   height: 40,
   borderColor: 'gray',
   borderWidth: 1
 }}
defaultValue="you can type in me"
/>
</ScrollView>
  );
}
export default App; 


 5 ULTIMO DE LA PRIMERA DIAPOSITIBA-

 /*
import * as React from 'react';
import{Button, View, Text}from 'react-native';
import{NavigationContainer}from '@react-navigation/native';
import{CreateStackNavigator}from '@react-navigation/stack';


const Stack =createStackNavigator();
function HomeScreen ({navigation}) {

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>pantalla de inicio</Text>
      <Button
        title="ir a la pantalla detalles"
onPress={() => navigation.navigate('Detalles')}

/>
</View>
  );
}

function DetailsScreen() {
return(
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Pantalla de Detalles</Text>
    </View>
);
}
const Stack = createStackNavigator();

function App() {
  return (


    <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalles" component={DetailsScreen} />
        </Stack.Navigator>
        </NavigationContainer>
          );
          }


 export default App;
 

//////////Componentes///// segunda diapositiva-----------------

import * as React from 'react';
import{View, Text}from 'react-native';
import{NavigationContainer}from '@react-navegation/native';
import{CreateStackNavigator}from '@react-navegation/stack';


const Stack = createStackNavigator();

function HomeScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>pantalla de inicio</Text>
      </View>
        );
       } 
        
        function App() {
          return(
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
              name="Home"
              components={HomeScreen}
              options={{title: 'Inicio'}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
 }
   export default App;

////////////////////////////////////////2
   import * as React from 'react';
   import{Button, View, Text}from 'react-native';
   import{NavigationContainer}from '@react-navigation/native';
   import{CreateStackNavigator}from '@react-navigation/stack';
   
   function HomeScreen ({navigation}) {
   
     return(
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Text>pantalla de inicio</Text>
         <Button
           title="ir a la pantalla detalles"
   onPress={() => navigation.navigate('Detalles')}
   
   />
   </View>
     );
   }
   
   function DetailsScreen() {
   return(
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Text>Pantalla de Detalles</Text>
       </View>
   );
   }
   const Stack = createStackNavigator();
   
   function App() {
     return (
   
   
       <NavigationContainer>
       <Stack.Navigator initialRouteName="Inicio">
           <Stack.Screen name="Inicio" component={HomeScreen} />
           <Stack.Screen name="Detalles" component={DetailsScreen} />
           </Stack.Navigator>
           </NavigationContainer>
             );
             }
   
   
    export default App; */

////////////3
 /* 
 import React from "react-native";
import {View, Text} from "react-native";

const ViewBoxesWithColorAndText = ()=> {
  return(
    <View
    style={{
      flexDireccion: "row",
      height: 100,
      padding:30

    }}
    >
<View style={{ backgroundColor: "red", flex: 0.3}}/>
<View style={{ backgroundColor :"blue", flex: 0.3}}/>
<Text> Estudiantes</Text>

    </View>
  );
}; 

export default ViewBoxesWithColorAndText; */   


/////// Componetes para mostrar texto4


import  React, {useState} from  "react";
import {Text,StyleSheet, ImageBackground} from "react-native";

const TextInANest = ()=>{
  const [titleText,SetTitleText] =useState("dar click aqui");
  const bodyText =useState("otro texto");

  const onPressTitle =()=> {
    SetTitleText("ingenieros en sistema");
  };
  return (
    <Text style={Style.baseText}>  
    <Text style={style.titleText} onPress={onPressTitle}>
      {titleText}
      {'\n'}
      {'\n'}
    </Text>
      <Text numberOfLines={6}>{bodyText}</Text>
    </Text>
  );
};

const styles =StyleSheet.create({
  baseText: {
    fontFamily: "cochin"
  },
  titleText: {
    fontSize:20,
    fontWeight: "bold"
  }
});

export default TextInANest; 
/*



  //////////5........____________ACTIVITY INDICATOR......

  import  React, { Component } from "react";
  import { ActivityIndicator, StyleSheet, Text, View, _Text } from "react-native";


  class App extends Component {
  render() {
   return (
 <View style={[styles.container, styles.horizontal]}>
   <ActivityIndicator color="#0000ff" />
   <ActivityIndicator size="large" color="#0000ff"/>
   <ActivityIndicator size="small" color="#0000ff"/>
   <ActivityIndicator size="large" color="#00ff00"/>
 </View>
   );
  }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center"
   },
   horizontal: {
     flexDirection: "row",
     justifyContent: "space-around",
     padding: 50
   }
  });
  export default App; 
////////////////////////ultimmo de la segunda diapositiva6



import  React from "react";
  import {  View,  StyleSheet, Text,ProgressBarAndroid } from "react-native";
  

const App = () => {
   return (
    
    <View style={[styles.container]}>
    <View style={styles.example}>
      <Text>Circle Progress Indicator</Text>
      <ProgressBarAndroid/>
   </View>
   <View style={styles.example}>
     <Text>Horizontal Progress Indicator</Text>
     <ProgressBarAndroid styleAttr="Horizontal"  />
     </View>
     <View Style={styles.example}>
       <Text>Colored Progress Indicator</Text>
       <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3"  />
      </View>
      <View Style={styles.example}>
         <Text>Fixed progress value</Text>
         <ProgressBarAndroid
         styleAttr="Horizontal"
         indeterminate={false}
         progress={0.5}
         />
        </View> 
    </View>

   );
  }
 
const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
  example:{
    marginVertical: 24,
  }
   
  }); 
  export default App; 
  



  ///////Diapositiva3





  import React,{useState} from "from react";
  import propsTypes from "prop-types";
  import {Text,TextInput,view} from "react-native";
  import styles from "./styles";

  function Input(props){
    return (
      <view style={styles.textInputContainer}>
        <Text style={styles.textInputLarabel}> {props.larabel}</Text>
        <TextInput style={styles.textInput} {...props}/>
      </view>
    );
  }

  Input.propsTypes = {
    label: propsTypes.string
  };

  export default function collectingTextInput(){
    const [changedText,setChangedText] = useState("");
    

  }

  import {Platform,StyleSheet,StatuBar} from "react-native";
  export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-around",
      backgroundColor:"ghostwhite",
      ...platform.select({
        ios: {padding: 20},
        android: {paddingTop: StatuBar.currentHeight }
      })
    },
    box:{
      width:300,
      height:100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgray",
      borderWidth: 1,
      borderStyle: "dashed",
      borderTopColor: "darkslategray"
    },
    boxText: {
      color: "darkslategray",
    fontWeight: "bold"
    }
  });









*/
/*
import React, { useState} from "react";
import PropTypes from "prop-types";
import { Text, TextInput, View } from "reec t-netìve";
import styles from "./styles";
function Input(props) {
return (
<View style={styles.textinputContainer}>
<Text style={styles.textlnputlabel}>{props.label}</Text>
<Textinput style={styles.textlnput} { ... props}/>
</View>
);
}
Input.propTypes = {
label: PropTypes.string
};
export default function Collectinglextinput() {
const [changedlext, setChangedText] = useState("");
const [submittedlext, setSubmittedText] = useState("");
return (
<View style={styles.container}>
<Input label="Input Basico:"/>
<Input Iabel =" Input clave:" secureTextEntry />
<Input label="Return Key: "returnKeylype="search"/>
<Input label="Placeholder  Text: " placeholder="Search">
<Input
label="Input Events:"
onChangelext={e => {
setChangedlext(e);
}}
onSubmitEditing={e => {
setSubmittedîext(e.nativeEvent.text);
}}
onfocus={() => {
setChangedlext ( "");
setSubmittedlext("");
}}
/>
<Text>Changed: {changedlext}</Text>
<Text>Submitted: {submittedlext}</Text>
</Input>
);
}
*/
/*

import {Platform,StyleSheet,StatuBar} from "react-native";
  export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent:"space-around",
      backgroundColor:"ghostwhite",
      ...platform.select({
        ios: {padding: 20},
        android: {paddingTop: StatuBar.currentHeight }
      })
    },
    box:{
      width:300,
      height:100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "lightgray",
      borderWidth: 1,
      borderStyle: "dashed",
      borderTopColor: "darkslategray"
    },
    boxText: {
      color: "darkslategray",
    fontWeight: "bold"
    }
  });
*/