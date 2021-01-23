import axios from 'axios';
import {useState, useEffect} from 'react';


export default () => {
    const [results, setResults] = useState ([])
    const [errorMessage, setErrorMessage] = useState ('')

    const searchApi = async (searchTerm) =>{
       try{ 
        const response = await axios.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories",{
            params:{
                name: searchTerm,
                
                
            }});
        
        setResults(response.data);
    
    } catch (err){
        setErrorMessage('Something went wrong');
    }
    };

    useEffect(() => {
        searchApi('');
    }, []);

    return [searchApi, results, errorMessage];
};