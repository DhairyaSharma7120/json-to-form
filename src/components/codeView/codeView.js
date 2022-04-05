import React, { useEffect, useState } from 'react'
import "./codeView.css"
function CodeView({refresh}) {
  const [codeView,setCodeView] = useState()
    useEffect(()=>{
      let form = document.getElementById("form")
      console.log(form)
      setCodeView(String(form))
    },[refresh])
    
  return (
    <pre className='prettyprint'>{codeView}</pre>
  )
}

export default CodeView