import React,{useState} from 'react'

  function App() {
  const [Data,setData]=useState(0)
  

    
  
  


  
  
  return(
    <div>
      <input text=""></input>
      <button>add</button>

      <h3> do some work out !!</h3>
      <h4>talk to sahil !!</h4>
     
      
     
      <h2> {Data}</h2>


      <button on onClick={()=>setData(Data+1)}>increase count </button>   {'\n'} 
      
      
      <button on onClick={()=>setData(Data-1)}>decrease count </button>  {'\n'} 

      <h1>my name is Amit </h1>
      <button onclick="wxy">change name</button>

     
      
    </div>
  )
  } 
  function wxy(){
    return <h1>my name is akash</h1>
  }
  



  

export default App;
