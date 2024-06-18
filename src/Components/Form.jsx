
import React from 'react'

const Form = ({contact, setContact, contacts, setcontacts,setEditingIndex, editingIndex }) => {
 

    function hold(e){

        

        e.preventDefault();
        if (editingIndex !== null) {
            // Update existing contact
            setcontacts(contacts.map((item, index) => (index === editingIndex ? contact : item)));

            setEditingIndex(null);
        } else {
            // Add new contact
            setcontacts([...contacts, contact]);
        }
        setContact({ first: '', second: '', third: '' });

    }



  return (
   
<form onSubmit={(e)=> hold(e) } className='' action="">

<input type="text"  className='  mr-4 focus:outline-none' onChange={(e)=>setContact({...contact, first:e.target.value})} placeholder='Name' value={contact.first} required/>
<input type="email"  className='  mr-4 focus:outline-none' onChange={(e)=>setContact({...contact, second:e.target.value})} placeholder='Mail' value={contact.second} required />
<input type="number"  name="phone" className='   focus:outline-none ' onChange={(e)=>setContact({...contact, third:e.target.value})} placeholder='Phone number' value={contact.third} required/>

<button className='border bg-green-200 text-green-950 border-green-950 mt-4 px-2 block focus:outline-none font-bold rounded-md'  >Submit</button>
</form> 
  )
}

export default Form