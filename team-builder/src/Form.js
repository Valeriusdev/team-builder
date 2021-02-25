import React from "react";

const Form = (props) =>{

   const { values, onInputChange, onSubmit } = props;

   return(
       <div>
          <form className='member-form' onSubmit = {onSubmit} >
           <div className='member-info'>
               <h2> Fill in the form </h2>
           </div>   
           <div className='member-info'>
               <label>
                   Name
                   <input
                        type='text'
                        placeholder='Name of the teammate'
                        maxLength='20'
                        name = 'teammate'
                        value = {values.teammate}
                        onChange = {onInputChange}
                   />
               </label>
            </div>
            <div className='member-info'>   
               <label>
                   Email
                   <input
                        type='text'
                        placeholder='Email of the teammate'
                        maxLength='20'
                        name = 'email'
                        value = {values.email}
                        onChange = {onInputChange}
                   />
               </label>
            </div>
            <div className='member-info'>
               <label>
                   Role
                   <select name = 'role' value={values.role} 
                   onChange={onInputChange} >
                       <option value=''> Select a Role </option>
                       <option value='Frontend'> Frontend Web Developer </option>
                       <option value='Backend'> Backend Web Developer </option>
                       <option value='Designer'> Designer </option>
                       <option value='Intern'> Intern </option>
                       <option value='Data'> Data Scientist </option> 
                       <option value='Mobile'> Mobile Developer </option>

                   </select>
         
                  
                </label>
             

            </div> 
            <h2> Add member </h2>
            <button> Submit </button>
            </form>              
       </div>
   );

};

export default Form;
