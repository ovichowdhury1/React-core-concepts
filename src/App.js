import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person ={
    name: "Dr. Mahfuz",
    job:"singer"
  } 
  var person2={
    name: "Eva",
    job:"kokil"
  } 
  var style={
    color: 'red',
    backgroundColor: 'yellow'
  }
  const nayok = ['ovi','kobi','Robi']
  const product = [
    {name:'photoshop',price:'$90.99'},
    {name:'Apple',price:'$90.99'},
    {name:'orange',price:'$90.99'},
    {name:'miri',price:'$99.99'}
    
  ]
  const nayokName = nayok.map(product=>product);
  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <User></User>
        <ul>
            {
              nayok.map(nayok=><li>{nayok}</li>)
            }
            {
                product.map(product=><li>{product.name}</li>)
            }
            {
              product.map(pd=><Product product={pd}></Product>)
            }
          
        </ul>

      </header>
    </div>
  );
}

function User(){
    const[user,setUser]= useState([]);
    useEffect(
      ()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(res=>res.json())
         .then(data=>setUser(data));
      },[])
  return(
       <div>
          <h2>Dynamic Data:{user.length}</h2>
          <ul>
            {
              user.map(user=><li>{user.phone}</li>)
            }
          </ul>
       </div>
   )

}
function Counter(){
   const [count,setCount] = useState(10);
   const handleIncrease = () =>setCount(count+1);
  return(
    <div>
        <h1>Count:{count} </h1>
        <button onMouseMove={()=>setCount(count-1)}>Decrease</button>
        <button onClick={() =>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Product(props){
  const productStyle= {
    height: '200px',
    width:'200px',
    border:'5px solid gray',
    margin:'10px',
    
    borderRadius:'5px',
    backgroundColor:'lightgray'
  }
  const {name,price} = props.product;
  console.log(name,price);
  return(
    <div style={
      productStyle
    }>
         <h3>{name}</h3> 
         <h5>{price}</h5> 
         <button type="button">Buy Now</button>
    </div>
  )
}
export default App;
