import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MenuButton from 'react-native-vector-icons/Feather';

const Menu = () =>{

    return(
        <View>
             <TouchableOpacity style={styles.MenuButton}>
                  <MenuButton name= "menu" size = {30}/>
                  </TouchableOpacity>  
           
        </View>
    );
}

const styles = StyleSheet.create ({
    MenuButton:{
        position: 'absolute',
        left: 10,
        marginBottom: 10,
        marginTop: 15,
        flexDirection: 'row',
    },

 
})

export default Menu;