import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,TouchableOpacity} from 'react-native';
import {StartImage, ScrollPg3 } from "../constants/images";
import LeftCircle from 'react-native-vector-icons/AntDesign';

const Splash4 =({navigation}) =>{
   
    return(
      <View style={styles.Container}>
            <Image style={styles.Image} source = {StartImage}>   
            </Image>
            <Text style={styles.Text}>Lorem Ipsum</Text>
            <Text>Lorem Ipsum dolor set amet........</Text>
        <View style={styles.ViewButton}>
            <TouchableOpacity style={styles.StartButton} onPress ={()=>{navigation.navigate('Main')}}>
                <Text style={{color:'white'}}>Get started</Text>
            </TouchableOpacity>
        </View>

            <TouchableOpacity style={styles.PreviousButton} onPress ={()=>{navigation.navigate('Splash3')}}>
            <LeftCircle name = "leftcircle" size={40} color='#D95500' />
            </TouchableOpacity>
            <Image style={styles.ScrollImage} source = {ScrollPg3}/>
      
      </View>
    )
};


const styles = StyleSheet.create ({
    Image:{
         marginTop: 150,
         marginBottom: 20,
       
    },
    Container:{
        flex: 1,
        alignItems: 'center',
        
    },
    Text:{
        fontSize: 30,
        padding: 10,
        fontWeight: 'bold'
    },

    ScrollImage:{
        position: 'absolute',
        bottom: 50
    },
    ViewButton:{
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 35,
        right: 10,     
    },
    StartButton:{
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor:'#D95500',
    },

    PreviousButton:{
        justifyContent:'flex-start',
        alignItems: 'flex-start',
        position: 'absolute',
        bottom: 40,
        left: 10
    }
});
export default Splash4;