import { useState,useEffect } from "react";

const useFetch=(url)=>{ //url is the address from where the data is to be fetched 

    // const [blogs, setBlogs] = useState(null);
    const [data, setdata] = useState(null);   //since it is a reusable component so setdata 
    //is used in place of setblogs so it can be used to set some other data in future as well

     
    const [isPending,setIsPending]=useState(true); //variable that determines 
    //whether to display loading message while fetching data on screen 
    //or not
    const [error,setError]=useState(null);

    useEffect(()=>{
        // setTimeout(() => { //settime out implemented to
        //test if loading message is being displayed 
        //in case the fetching of data takes time 
        fetch(url)
        .then(res=>{
                if(!res.ok ){
                    throw Error('Data could not be fetched !')
                }
                return res.json();
        })
        .then(data=>{
                setdata(data);
                setIsPending(false);
                setError(null);
        }).catch(err=>{
            
            setIsPending(false);
            setError(null);
            setError(err.message);
            
        })
            
        // },1000)
    
    },[url]); //here url is passed as the dependency so that the function useEffect runs 
    // and the page renders as soon as the change in url is made 
    return {data,isPending,error};      

}
export default useFetch;