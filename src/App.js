import './App.css';
import DiveList from './components/DiveList';
import { useEffect, useState } from 'react';
import data from './data.json'
import DiveForm from './components/DiveForm';

function App() {

   const [dives, setDives]= useState(data)
   const addDive = (newDive)=>{
    let newItem= {id: dives.length+1, 
      depth:newDive.depth, 
      time: newDive.time,
      oxygenStart: newDive.oxygenStart,
      oxygenEnd: newDive.oxygenEnd,
      location: newDive.location,
      date: newDive.date,
      outsideTemperature: newDive.outsideTemperature,
      waterTemperature: newDive.waterTemperature,
      description: newDive.description, }
    setDives([...dives, newItem])
    localStorage.setItem('dives', JSON.stringify(newItem))

   }
   useEffect(() => {
    const storedDives = localStorage.getItem('dives');
    console.log('std',storedDives);
    if (storedDives) {
      try {
        setDives([...dives, JSON.parse(storedDives)]);
      } catch (error) {
        console.error('Error al analizar los datos de inmersión:', error);
      }
    }
  }, [])

  
  return (
    <div className="App">
      <div className='container'>
      <DiveList dives={dives}/></div>
        <DiveForm addDive={addDive}/>
    </div>
  );
}

export default App;
