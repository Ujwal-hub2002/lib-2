
import { useState } from 'react';
import './App.css';
import DataTable from './DataTable';

function App() {
  const [dataArray, setDataArray] = useState([]);
  let [values,setValues]=useState({
    title:"",
    author:"",
    isbn:""
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataArray([...dataArray, values]);
    setValues({
      title:"",
      author:"",
      isbn:"",
    });
  };
  const handleChange=(e)=>{
    e.preventDefault();
   setValues({
    ...values,
   [e.target.name]:e.target.value
  })
}
// Delete all data
const deleteAllData=()=>{
 setDataArray([]);
}
// Delete based on id
// const deleteId=(isbn)=>{
//   console.log(isbn);
//   dataArray=dataArray.filter(isbn=>{
//     return dataArray.isbn!=isbn
//   })
// }

  return (
    <div className="App flex gap-10">
      <form className='form' onSubmit={handleSubmit}>
        <div className='flex flex-direction'>
          <label htmlFor="title" className='label'>Title</label>
          <input type="text" className='input' name="title" value={values.title} onChange={handleChange}/>
        </div>
        <div className='flex flex-direction'>
          <label htmlFor="author" className='label' >Author</label>
          <input type="text"  className='input' name="author" value={values.author} onChange={handleChange}/>
        </div>
        <div className='flex flex-direction'>
          <label htmlFor="isbn" className='label'>ISBN#</label>
          <input type="text"  className='input' name="isbn" value={values.isbn} onChange={handleChange}/>
        </div>
        <button className='button' onClick={handleSubmit}>Add</button>
      </form>
      <div>
      <DataTable data={dataArray} deleteAllData={deleteAllData} />
      </div>
    </div>
  );
}

export default App;
