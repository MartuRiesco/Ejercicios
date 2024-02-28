import React from 'react'

function DiveRow({ dive}) {
  return (
    <tr className='div-row'>
        <td>
        {dive.depth}
        </td>
        <td>
        {dive.time}
        </td>
        <td>
        {dive.oxygenStart}  
        </td>
        <td>
        {dive.oxygenEnd}
        </td>
        <td>
        {dive.location}
        </td>
        <td>
        {dive.date}
        </td>
        <td>
        {dive.outsideTemperature}
        </td>
        <td>
        {dive.waterTemperature}
        </td>
        <td>
        {dive.description}
        </td>
        


    </tr>
  )
}

export default DiveRow