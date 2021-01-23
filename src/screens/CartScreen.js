import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, SafeAreaView} from 'react-native';
import Empty from '../components/Empty';
import {useSelector} from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';



const CartScreen = ({navigation}) =>{
    const {transactions}  = useSelector ((state) => state.transactions);
   

    const Item = ({ name, image, state, total }) => (
        <View style={stymes.container}>
          <Image style= {stymes.Image} source={{uri:image}}/>
          <Text style={stymes.Text}>{name}</Text>
          <Text style={stymes.Text}>{state} KG</Text>
          <Text style={stymes.Text}>{total} EGP</Text>
          
        </View>
      )

 return (
    
    <SafeAreaView >
        <View >
            {transactions.length > 0?
                <FlatList
                
                data ={transactions} 
                renderItem ={({item}) =>(
                    <Item name={item.name} image={item.image} state={item.state} total={item.total} />
                )}
                keyExtractor={(item) => item.image}

                />
                : <Empty />
}
        </View>
        <View  style={{ justifyContent: 'flex-end'}}>
            <TouchableOpacity style={stymes.button}>
                <Text style={{color: 'white', fontSize: 22}}>Purchase</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};

const stymes = StyleSheet.create ({
   
    container:{
        margin:10,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center'
    },
    Image:{
        
        width: '25%',
        aspectRatio: 1.5,
    },

    Text:{
        fontSize: 18,
        fontWeight: '100'
    },
    button:{
        width: '100%',
            height: 50,
            backgroundColor: '#D95500',
            alignItems: 'center',
            justifyContent: 'center',
           
        
    },
});

export default CartScreen;
















// const CartScreen=({navigation}) =>{  
//     //const [tips, setTips] = useState([]);
//      const name = navigation.getParam('name');
//     const state = navigation.getParam('state');
//     const price = navigation.getParam('price');
//     const image = navigation.getParam('image');
//     const data = [{
//         name,
//         state,
//         image,
//     }]

//     console.log("BOOM", data.name, data.state)
// //    const teto= navigation.getParam('tips');
// //     console.log("HAMADA", teto)
// //     const img = teto[2];
// //     console.log("img", img);
// //     const names  = teto[0];
// //     console.log("names", names);
// //     const states=teto[1];
    
       
    
//     return(
        
//         <View style={styles.container} >
//         <FlatList
//         showsVerticalScrollIndicator = {true}
//         keyExtractor = {(name) => name }
//         data = {data} 
//         renderItem = {({ item }) => {
//          return(
            
//               <Text style = {styles.text}>
//              {item.name} 
//              </Text>
//          )
//      }}
//      />
//             {/* <Image style= {styles.Image} source={{uri:img}}/>
//              <Text style={styles.text}>{names}</Text>
//             <Text style={styles.text}>{states}KG</Text>
//             <Text style={styles.text}>TotalPrice = {100*states}</Text> */}
            

//         </View>
        
        
//     )
// };

const styles=StyleSheet.create({
    container:{
        margin:5,
        flex:1,
        flexDirection: 'row', 
        justifyContent:'space-evenly'
    },
    Image:{
        
        width: '30%',
        height: undefined,
        aspectRatio: 1.5,
    },
    text:{
        fontSize:16
    }
});

// export default CartScreen;