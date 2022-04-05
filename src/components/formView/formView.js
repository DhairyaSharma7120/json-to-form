import React, { useEffect, useState } from 'react'
import "./formView.css"
function FormView({formData,parsedJson,setRefreshCodeView}) {
  console.log(parsedJson ,formData , "this")
  const [formDataState,setFormDataState] = useState([])
  useEffect(()=>{
    setFormDataState(formData)
    setRefreshCodeView(state=>!state)
  },[parsedJson,formData])
  return (
    <div className='formContainer' id="formContainer">
      <form className="form" id="form">
        <div className='formControlContainer'>
        {formDataState?.map((ele,index)=>{
          return <div className='formControl'>
            <label for={ele}>{ele}</label>
            <input type="text" name={ele} placeholder={parsedJson[ele]} id={ele}/>
          </div>
        })}
        </div>
        {formDataState?.length>0 && <button type="button" className="formSubmitBtn">Submit</button>}
      </form>
    </div>
  )
}

export default FormView

