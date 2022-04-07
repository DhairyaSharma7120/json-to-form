import React, { useEffect, useState } from 'react'
import prettier from "prettier/standalone";
import html from "prettier/parser-html"
// import babylon from "prettier/parser-babel";
import "./codeView.css"
function CodeView({refresh}) {
  const [codeView,setCodeView] = useState()
    useEffect(()=>{
      let form = document.getElementById("formContainer").innerHTML
      console.log(form)
      formatCode(String(form))
      // formatCode()
    },[refresh])
    
    const formatCode = (code) => {
      const formattedCode = prettier.format(code, {
        parser: "html",
        plugins:[html],
        printWidth :80,
        tabWidth: 2,

      });
  
      setCodeView(formattedCode);
    };
    console.log(codeView," ======= ")
  return (
    <>
        <pre style={{textAlign:"initial"}} className='prettyprint'>{codeView}</pre>
    </>
  )
}

export default CodeView