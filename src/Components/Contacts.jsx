import { useState } from "react"
import inputs from "../Constants/inputs"


function Contacts() {
    const [contact ,setContact] = useState(
        {
          name:"", 
          lastName:"",  
          email:"",
          phone:"",  
        }
    )

    const changeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value

        setContact((contact)=>({...contact,[name]:value}))
    }

    const AddHandler = () =>{
        console.log(contact);
    }
  return (
    <div>
        {inputs.map((input,index)=>(
            <input 
            key={index}
            type={input.type} 
            placeholder={input.placeholder} 
            name={input.name} 
            onChange={changeHandler} 
            value={contact[input.name]}
            />
            ))}
        <button onClick={AddHandler}>Add Contact</button>
    </div>
  )
}

export default Contacts