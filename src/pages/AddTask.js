import React from 'react'

import { useGlobal } from '../Context'
import {toast,ToastContainer} from "react-toastify"
function AddTask() {
   const {handleChange,handleSubmit,formValues,setFormValues}=useGlobal(); //custom hook

  
  return (
    < form  className=" container col-sm-8 mx-auto"onSubmit={handleSubmit}>
    
    <div className='container col-sm-8 mx-auto' >
    <div className='mb-3'>
<label htmlFor='title'>Task Title</label>
<input type='text'id='title' placeholder='enter task title' 
required className='form-control'  name='title'
value={formValues.title} onChange={handleChange}/>

</div>

<div className='mb-3'>
<label htmlFor='title'>Description</label>
<textarea  type='text' rows={5} id='description' required  className="form-control"
placeholder='enter task description'  name='description' value={formValues.description} onChange={handleChange} />

</div>

<div className='mb-3'>
<h3>Priority:</h3>
<div  style={{display:"flex",justifyContent:"center",  alignItems:"center", flexDirection:"column",gap:"15px"}}>

<label>
<input  type='radio'  required  value="High" checked={formValues.priority==="High"}
onChange={handleChange} name='priority'/>
High </label>

<label >
<input  type='radio'  required  name="priority"
onChange={handleChange}   value="Medium" checked={formValues.priority==="Medium"}/>
Medium </label>

<label htmlFor='radio'>
<input  type='radio'  name="priority"
 onChange={handleChange}  required 
 value="Low" checked={formValues.priority==="Low"}/>
Low </label>
</div>


</div>
<div className='mb-3'>
<button className='btn btn-primary' >Submit</button>
</div>
    </div>
    <ToastContainer/>
    </form>
    
  )
}

export default AddTask
