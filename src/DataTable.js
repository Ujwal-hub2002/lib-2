import React from 'react'
import {AiFillDelete} from "react-icons/ai"
const DataTable = ({data,deleteAllData}) => {
    if(data.length===0) 
    return <div className='bg-white py-2 px-2'>No Books are added yet</div>
    
  return (
    <div className='table'>
    <table >
      <thead>
        <tr className='tr'>
          <th className='td'>ISBN#</th>
          <th className='td'>Title</th>
          <th className='td'>Author</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index} className="tr">
            <td>{data.title}</td>
            <td>{data.author}</td>
            <td>{data.isbn}</td>
            <td ><AiFillDelete/></td>
          </tr>
        ))}
      </tbody>
    </table>
    <button className='remove-btn'
    onClick={deleteAllData}
    >Remove All</button>
    </div>
  )
}

export default DataTable