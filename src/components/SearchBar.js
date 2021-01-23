import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Search from 'react-native-vector-icons/Feather';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {

    return(
        <View style = {styles.backgroundStyle}>
            <Search name="search" style = {styles.iconStyle} />
            <TextInput 
            style = {styles.InputStyle} 
            autoCapitalize = "none"
            autoCorrect = {false}
            placeholder= "Search"
            value= {term}
            onChangeText= {onTermChange}
            onEndEditing = {onTermSubmit}
            />
               
              </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
    marginTop: 10,
    backgroundColor : '#DCDCDC',
    height: 40,
    borderRadius: 5,
    marginHorizontal: 50,
    flexDirection: 'row',
    marginBottom: 10,
    
    
    
    },
    InputStyle: {
        
        flex: 1,
        fontSize: 16

    },
    iconStyle:{
        fontSize: 24,
        alignSelf: 'center',
        position: 'absolute',
        right: 0
    },
  
});

export default SearchBar;