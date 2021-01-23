import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ShoppingImage, ScrollPg1 } from "../constants/images";
import RightCircle from 'react-native-vector-icons/AntDesign';

const Splash2 =({navigation}) =>{
   
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Splash3')
        }, 2000);
      }, [])

    return(
      <View style={styles.Container}>
        <Image style={styles.Image} source = {ShoppingImage}>   
        </Image>
        <Text style={styles.Text}>Lorem Ipsum</Text>
        <Text>Lorem Ipsum dolor set amet........</Text>
        <TouchableOpacity style={styles.NextButton} onPress ={()=>{navigation.navigate('Splash3')}}>
            <RightCircle  name= "rightcircle" size={40} color='#D95500' />
            </TouchableOpacity>   

        <Image style={styles.ScrollImage} source = {ScrollPg1}>
        </Image>
      
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
    NextButton:{
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        position: 'absolute',
        bottom: 40,
        right: 10
    }
});
export default Splash2;