import React from 'react'
import DiveRow from './DiveRow';

function DiveList({dives}) {
  return (
    <div>
      <h2>Lista de Inmersiones</h2>
      <table className='table'>
      <colgroup span="9"  className='colums'></colgroup>
<thead>
          <tr className='table-titles'>
            <th>Profundidad Máxima</th>
            <th>Tiempo Bajo la Superficie</th>
            <th>Niveles de Oxígeno al Inicio</th>
            <th>Niveles de Oxígeno al Final</th>
            <th>Ubicación</th>
            <th>Fecha y Hora</th>
            <th>Temperatura Exterior</th>
            <th>Temperatura del Agua</th>
            <th>Descripción</th>
          </tr>
          </thead>
        <tbody>
          {dives.map((dive, index) => (
            <DiveRow key={index} dive={dive} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiveList