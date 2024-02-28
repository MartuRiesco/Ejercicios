import React, { useState } from 'react'

function DiveForm({addDive}) {
    const [formData, setFormData] = useState({
        depth: '',
        time: '',
        oxygenStart: '',
        oxygenEnd: '',
        location: '',
        date: '',
        outsideTemperature: '',
        waterTemperature: '',
        description: ''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const newDive = { ...formData };
        addDive(newDive);
        setFormData({
          depth: '',
          time: '',
          oxygenStart: '',
          oxygenEnd: '',
          location: '',
          date: '',
          outsideTemperature: '',
          waterTemperature: '',
          description: ''
        });
      };
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
        <input type='number' name='depth' placeholder='Profundidad' value={formData.depth} onChange={handleInputChange} required/>
        <input type='number' name='time' placeholder='Tiempo' value={formData.time} onChange={handleInputChange} required/>
        <input type='number' name='oxygenStart' placeholder='Oxígeno al inicio' value={formData.oxygenStart} required onChange={handleInputChange} />
        <input type='number' name='oxygenEnd' placeholder='Oxígeno al final' value={formData.oxygenEnd} required onChange={handleInputChange} />
        <input type='text' name='location' placeholder='Ubicación' value={formData.location}  required onChange={handleInputChange} />
        <input type='date' name='date' value={formData.date} onChange={handleInputChange} required />
        <input type='number' name='outsideTemperature' placeholder='Temperatura exterior' required value={formData.outsideTemperature} onChange={handleInputChange} />
        <input type='number' name='waterTemperature' placeholder='Temperatura del agua' required value={formData.waterTemperature} onChange={handleInputChange} />
        <input type='text' name='description' placeholder='Descripción' required value={formData.description} onChange={handleInputChange} />
            <button type='submit' value='submit'>Agregar Inmersion</button>
        </form>
    </div>
  )
}

export default DiveForm