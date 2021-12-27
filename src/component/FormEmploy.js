import React,{useState} from 'react'
import Outfit from './Outfit'

export default function FormEmploy() {
    const [status, setstatus] = useState({
        name:"",
        department:"",
        rating:""
    })
    const [show,setshow]=useState(true)
    const [collection, setcollection] = useState([])
    
    const change=(event)=>{
     setstatus({...status,[event.target.name]:event.target.value})   
    }
    const handle=(e)=>{
        e.preventDefault()
        setshow(false)
        setcollection([...collection,{...status,id:collection.length}])
        

    }
    const reset=(data)=>{
        setshow({data})

    }
    
    let result;     
    result=<div className='main'>
        <h1>Employee Feedback Form</h1>
        <form onSubmit={handle}>
            <label name="name" >Name :</label><br />
            <input type="text" name="name" value={status.name} onChange={change} />
            <br /><br />
            <label name="department" >Department :</label><br />
            <input type="text" name="department" value={status.department} onChange={change} />

            <br /><br />
            <label name="department" >Rating :</label><br />
            <input type="number" name="rating" value={status.rating} onChange={change} />
            <br /><br />
            <button type='submit'>submit</button>

        </form>
    </div>
    
    return (
        <>
         {show?result:<Outfit dataset={collection} fun={reset} />}
         </>
    )
}
