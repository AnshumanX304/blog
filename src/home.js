import{useState,useEffect} from 'react';
import Bloglist from './bloglist';
const Home = () => {
    // const [name,setName]=useState('mario');
    // const [age,setAge]=useState(25);
    // const handleClick=()=>{
    //     setName('luigi');
    //     setAge(30);
    const [blogs, setBlogs] = useState(null);

    //   const  [name,setName]=useState('mario');

      const handleDelete=(id)=>{
        const newBlogs=blogs.filter(blog=>blog.id!==id);
        setBlogs(newBlogs);
      }
// useEffect(()=>{
//     console.log('use effect ran !');
//     console.log(blogs);    
// })  //here useEffect hook function will run everytime a change is made in the
// //blogs array via useState hook

useEffect(()=>{
   fetch('http://localhost:8000/blogs')
   .then(res=>{
        return res.json();
   })
   .then(data=>{
        setBlogs(data);
   })

},[]) //here empty array is passed as a dependency so that this function 
//runs only on the initial render

// useEffect(()=>{
//     console.log('use effect ran !');
//     console.log(name);   

// },[name]) //Here name becomes a dependency and the function runs only for initial render or
//         //when name is changed
    return ( 
        <div className="home">
            {/* <h1>Home page content</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))} */}
            {blogs && <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
            {/* <button onClick={()=>setName('luigi')}>Click me</button>//button to 
            //run useEffect function when name is changed  */}
        </div>
    );
}
 
export default Home ;