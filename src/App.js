import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const getNumbers = (count) => {
  let numbers = []
  for(let i = 0; i < count; i++){
    let num = Math.floor(Math.random() * 100)
    let node = {
          id:i ,
          num, 
          isVisited: false,
          isFound: false
    }
    numbers.push(node)
  }
  return numbers;
}

function App() {
  const[number,setNumbers] = useState(getNumbers(20))
  const[input, setInput] = useState('');

  const prevNumber = useRef();

  useEffect(() => {
    prevNumber.current = number;
  })


  const handleSearch = (e) => {
    e.preventDefault();
    
    let t;

    for(let i = 0; i < number.length; i++){

      const tempNumber = [...prevNumber.current]
      const item = {...tempNumber[i]}
      
      setTimeout(()=> {
        if(Number(input) === item.num)
        {
            setNumbers(prevNumber => prevNumber.map(num => {
              if(num.id === item.id)
                return ({
                  id:num.id, num: num.num, isFound: true
                })
                return num;
            }))
            return;
  
        } 
        else {
          setNumbers(prevNumber => prevNumber.map(num => {
            if(num.id === item.id)
              return ({
                id:num.id, num: num.num, isVisited: true
              })
            return num;
          }))
        }
        
        }, i * 500)
      
        if(Number(input) === item.num)
          break;
      
    }
  }
  
  return (
    <div className="container">
      <div className="row">
      {
        number.map(item => <div key={item.id} className={item.isFound ? 'node-found' : false || item.isVisited ? 'node-visited' : 'node'}>{item.num}</div>)
      }
      </div>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSearch}>
          <div className="form-group mt-5">
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} className="form-control" id="search" placeholder="Searc..."/>
            <div className='d-flex justify-content-center'>
              <input type="submit" value="Search" className='btn btn-primary mt-2' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
