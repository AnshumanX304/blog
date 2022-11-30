import{useState} from 'react';
const Home = () => {
    // const [name,setName]=useState('mario');
    // const [age,setAge]=useState(25);
    // const handleClick=()=>{
    //     setName('luigi');
    //     setAge(30);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    return ( 
        <div className="home">
            {/* <h1>Home page content</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id} >
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
     );
}
 
export default Home ;