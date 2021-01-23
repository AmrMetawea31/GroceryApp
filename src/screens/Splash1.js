import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {FMImage } from "../constants/images";

const Splash1 =({navigation}) =>{

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Splash2')
        }, 2000);
      }, [])

    return(
        <View style={styles.Container}>
        <Image style={styles.Image} source = {FMImage}>

        </Image>
        </View>
    );
  
};


const styles = StyleSheet.create ({
    Image:{
        height: 200,
        width: 300,
       
    },
    Container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D95500"
    }
});
export default Splash1;