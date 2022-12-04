// import{useState,useEffect} from 'react'; //they are now used in usefetch.js file
import Bloglist from './bloglist';
import useFetch from './usefetch';
const Home = () => {

//     // const [name,setName]=useState('mario');
//     // const [age,setAge]=useState(25);
//     // const handleClick=()=>{
//     //     setName('luigi');
//     //     setAge(30);
//     const [blogs, setBlogs] = useState(null);
//     const [isPending,setIsPending]=useState(true); //variable that determines 
//     //whether to display loading message while fetching data on screen 
//     //or not

//     //   const  [name,setName]=useState('mario');
//     const [error,setError]=useState(null)



//       const handleDelete=(id)=>{
//         const newBlogs=blogs.filter(blog=>blog.id!==id);
//         setBlogs(newBlogs);
//       }
// // useEffect(()=>{
// //     console.log('use effect ran !');
// //     console.log(blogs);    
// // })  //here useEffect hook function will run everytime a change is made in the
// // //blogs array via useState hook

// useEffect(()=>{
//     // setTimeout(() => { //settime out implemented to
//         //test if loading message is being displayed 
//         //in case the fetching of data takes time 
//         fetch('http://localhost:8000/blogs')
//         .then(res=>{
//                 if(!res.ok ){
//                     throw Error('Data could not be fetched !')
//                 }
//                 return res.json();
//         })
//         .then(data=>{
//                 setBlogs(data);
//                 setIsPending(false);
//                 setError(null);
//         }).catch(err=>{
            
//             setIsPending(false);
//             setError(null);
//             setError(err.message);
            
//         })
        
//     // },1000)

// },[]) //here empty array is passed as a dependency so that this function 
// //runs only on the initial render

// // useEffect(()=>{
// //     console.log('use effect ran !');
// //     console.log(name);   

// // },[name]) //Here name becomes a dependency and the function runs only for initial render or
// //         //when name is changed 

const {data:blogs,isPending,error}=useFetch('http://localhost:8000/blogs');



return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {/* <h1>Home page content</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))} */}
            { isPending && <div>Loading...</div>} 
            {/* loading message while 
            loading data on screen if fetching of data takes some time  */}
            {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
            {/* <button onClick={()=>setName('luigi')}>Click me</button>//button to 
            //run useEffect function when name is changed  */}
        </div>
    );
}
 
export default Home ;