import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar';
import Menu from '../components/Menu';
import useResults from '../hooks/useResults';
import {ScrollView} from 'react-native-gesture-handler';
import ResultsDetails from '../components/ResultsDetails';
import ShoppingCart from 'react-native-vector-icons/AntDesign';

const Main = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  
    
  return (
    <>
      <Menu />
     
      <TouchableOpacity style={styles.Cart}   onPress={()=>navigation.navigate('Cart')}>
              <ShoppingCart name= "shoppingcart" size = {30}/>
              </TouchableOpacity>
      
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    

      {results.map((category) => {
       
        return (
          <ScrollView  horizontal={true}>
            
            <ResultsDetails results={{product_img:category.category_img, name:category.name}}/>
            {category.products.map((product) => {
                
                return(
                
                <TouchableOpacity onPress={()=>navigation.navigate('ResultScreen',
                {Image:product.product_img, name:product.name,weight:product.weight, price:product.price})}>
                
              <ResultsDetails
                results={{
                  product_img: product.product_img,
               
                }}
              />
                
                </TouchableOpacity>
                )
            })}
            
          </ScrollView>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
      
    width: 250,
    borderRadius: 4,
    height: 159,
    marginBottom: 5,
  },
  Cart:{
    position: 'absolute',
    right: 10,
    marginBottom: 10,
    marginTop: 15,
    flexDirection: 'row',
},
});

export default Main;
