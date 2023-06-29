import react, { useState } from 'react'
import "../component/style/stud.css"
import Nav from './Nav'
function Students(){
    const [data,setData]=useState({

        name:"",
        dob:'',
        address:'',
        standard:'',
        city:'',
        phonenumber:'',
        math: 0,
        english: 0,
        sci: 0,
        hindi: 0,
        history: 0
      
    })

    function display(e,prop){
     setData((a)=>({
      ...a,
      [prop]:e.target.value
     }))
    }

    function submitData() {
        console.log(data);
        fetch('https://backend-student.onrender.com/', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),
        })
            .then((data) => data.json())
            .then((responce) => console.log(responce))
            .catch(() => console.log("uploading error"))

        setData({
            name:"",
        dob:'',
        address:'',
        standard:'',
        city:'',
        phonenumber:'',
        math: 0,
        english: 0,
        sci: 0,
        hindi: 0,
        history: 0
        })
    }



    return(
        <>
   <Nav/>

  <div className='container'>
    <h1>Student Information</h1>
    <form>
        <div className='imp'>
            <div className='name'>
     <label>Name:
        <input type='text' value={data.name} onChange={(e)=>display(e,"name")}></input>
     </label>
     </div>
     <div className='dob'>
     <label>Date of Birth:
        <input type='text'  value={data.dob} onChange={(e)=>display(e,"dob")}></input>
     </label>
     </div>
     </div>
     <div className='imp1'>
        <div >
     <label>address:
        <input type='text'  value={data.address} onChange={(e)=>display(e,"address")}></input>
     </label>
     </div>
     
     <div className='imp5'>
     <label>standard:
       <select  value={data.standard} onChange={(e)=>display(e,"standard")}>
        <option>select </option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
       </select>
     </label>
     </div>
     </div>

     <div className='imp2'>
        <div className='city'>
     <label>city:
        <input type='text'  value={data.city} onChange={(e)=>display(e,"city")}></input>
     </label>
     </div>
    
     <div className='imp3'>
     <label>Phonenumber:
        <input type='text'  value={data.phonenumber} onChange={(e)=>display(e,"phonenumber")}></input>
     </label>
     </div>
     </div>
   
    </form>
    </div>
<br/>
    <div className='table1'>
        <h2>Enter your marks</h2>
        <table>
            <tr>
                <th> Math </th>
                <th> English </th>
                <th> Science </th>
                <th> Hindi </th>
                <th> History </th>  
            </tr>
            <tr>
            <td><input type='text' value={data.math} onChange={(e)=>display(e,"math")}/></td>
            <td><input type='text' value={data.english} onChange={(e)=>display(e,"english")}/></td>
            <td><input type='text' value={data.sci} onChange={(e)=>display(e,"sci")}/></td>
            <td><input type='text' value={data.hindi} onChange={(e)=>display(e,"hindi")}/></td>
            <td><input type='text' value={data.history} onChange={(e)=>display(e,"history")}/></td>
            </tr>
        </table>
        <button type='submit' id='btn' onClick={submitData}>Submit</button>
    </div>
  </>
    )
}
export default Students