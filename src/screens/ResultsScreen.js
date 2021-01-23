import React,{useState} from 'react';
import {View, Text, StyleSheet,Button, Image, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import ShoppingCart from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {addTransaction} from '../store/actions/transactionAction';

const ResultScreen =(props) =>{
    
const dispatch = useDispatch();
const image = props.route.params.Image;
 const name = props.route.params.name;
const weight = props.route.params.weight;
const price = props.route.params.price;

const[state, setState]= useState('1');    
const total= 100 * state;

const newTransaction={name, image, state, total};


 
    return(
        <>
        <Menu />
        <TouchableOpacity style={styles.Cart}   onPress={()=>navigation.navigate('Cart')}>
              <ShoppingCart name= "shoppingcart" size = {30}/>
              </TouchableOpacity>
    <SearchBar term={name}/>
        <View style={styles.container}>
            <Image style= {styles.Image} source={{uri:image}}/>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.text}>{weight}</Text>
            <Text style={styles.text}>{price}</Text>
        
            <View style={{marginTop:40, flexDirection:'row', justifyContent: 'space-evenly', }}>
                <Text style={{fontSize:18}}>QTY</Text>
                <Button title="+" onPress={()=>setState(state+1)}/>
                <Text style={{fontSize:18}}>{state}</Text>
                <Button  title="-" onPress={()=>setState(state-1)}/>
            </View>
            <View style={{marginTop:40,marginRight:150, flexDirection:'row', justifyContent:'space-evenly' }}>
                <Text style={{fontSize:18}}>Total</Text>
                <Text style={{fontSize:18}}>{100*state} LE</Text>
            </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
        
            <TouchableOpacity style={styles.button} onPress={()=>{dispatch(addTransaction({...newTransaction}));
                props.navigation.navigate('Main')}}>
          <Text style={{color: 'white', fontSize: 22}}>ADD TO CART</Text>
        </TouchableOpacity>
        </View>
            
        </View>
        </>
  );


};

const styles = StyleSheet.create ({
    container:{
        margin:10,
        flex:1
    },
    Image:{
        
        width: '100%',
        aspectRatio: 1.5,
    },
    name:{
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'
    },
    text:{
        fontSize:20,
        alignSelf:'center',
        marginBottom:10

    },
    button:{
        width: '100%',
            height: 50,
            backgroundColor: '#D95500',
            alignItems: 'center',
            justifyContent: 'center',
        
    },
    Cart:{
      position: 'absolute',
      right: 10,
      marginBottom: 10,
      marginTop: 15,
      flexDirection: 'row',
  },
});

export default ResultScreen;