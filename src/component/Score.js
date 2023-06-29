import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import "../component/style/score.css"

function Score(){
    const [info,setInfo]=useState([])
    const [btn,setBtn]=useState('')
    const [set,getset]=useState('')
    
    // useEffect(()=>{
     
    // },[])
     
function submit(){
    // setBtn(set)
    // console.log(btn)
    console.log(set)
     fetch(`https://backend-student.onrender.com/score/${set}` )
    // fetch(`http://localhost:4000/score/${set}` )
    .then((data) => data.json())
    .then((responce) => {console.log(responce)
       
    setInfo(responce)
    })
    .catch(() => console.log("error"))
}

    return(
        
        <>
        <Nav/>
     <div className="tab">
        <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" value={set} onChange={(e)=>getset(e.target.value)}/>  
        <button onClick={submit}>click</button>
        </form>
            <table>
                <thead>
            <tr>
            <th className="t1"> Name </th>
                <th className="t1"> Math </th>
                <th className="t1"> English </th>
                <th className="t1"> Science </th>
                <th className="t1"> Hindi </th>
                <th className="t1"> History </th>
                <th className="t1"> Total percentage </th>    
            </tr>
            </thead>
            <tbody>
            {/* <tr> */}
               
             {info.map((a)=>(
               <tr> <td className="t1">{a.name}</td>
                <td>{a.math}</td>
                <td>{a.english}</td>
                <td>{a.sci}</td>
                <td>{a.hindi}</td>
                <td>{a.history}</td>
                <td>{a.percentage}</td></tr>
             ))}
           
          
            {/* </tr> */}
            </tbody>
        </table>
     </div>
     </>
    )
    }
    export default Score