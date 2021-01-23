// import React from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
// import ResultsDetails from './ResultsDetails';
// import {withNavigation} from 'react-navigation';

// const ResultsList =({results, navigation}) => {
// console.log(results)
//     return (
//     <View styles={styles.container}>
        
        
//         <FlatList 
//         horizontal
//         showsHorizontalScrollIndicator ={false}
//         data ={results}
//         keyExtractor = {results => results.id}
//         renderItem= {({item}) => {
//             return (
//             <TouchableOpacity onPress = {() => navigation.navigate('ResultScreen', {id: item.id})}>
//             <ResultsDetails results={{product_img:category.category_img, name:category.name}}/>
//             </TouchableOpacity>
//             )
//         }}
        
//         />
//     </View>
// );
// };

// const styles = StyleSheet.create({
//     titleStyle:{
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginLeft: 15,
//     },
//     container:{
//         marginBottom: 5
//     }
    
// });

// export default withNavigation (ResultsList);