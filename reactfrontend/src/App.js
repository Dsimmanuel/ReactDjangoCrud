import './App.css';
import axios from 'axios'
import React , { useState }  from 'react'

function App() {
  const [state, setState] = useState([])

  const fetchData = async () => {
    try {
      axios.get('http://127.0.0.1:8000').then((response)=>{
      console.log(response.data)
      setState(response.data)
    })} catch (error) {
      console.log(error)
    }
    
    }
  
  return (
    <div className="App">
      <div>
      <h1>Student Details</h1>
        <button onClick={fetchData}>show details</button>
      </div>   
      <div> 
      {state.map((obj,index)=>{
      return(
        <div> 
          <h1>{index}</h1>
          <h2>{obj.stu_name}</h2>
          <h4>{obj.department}</h4>
        </div>
      )
    })}
    </div>
    </div>

  );
}

export default App;



