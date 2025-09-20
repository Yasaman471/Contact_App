import { useState } from "react"
import inputs from "../Constants/inputs"
import ContactList from "./ContactList"
import { v4 } from "uuid"


function Contacts() {
    const [contacts,setContacts] = useState([])
    const [contact ,setContact] = useState(
        {
          id:"",
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
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
        alert("please Enter Valid Data!")
        }
        const newContact = {...contact,id:v4()}
        setContacts((contacts)=>[...contacts,newContact])
    }
  return (
    <div> 
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
    <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contacts