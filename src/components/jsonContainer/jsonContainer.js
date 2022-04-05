import React from "react";
import "./jsonContainer.css";
function JsonContainer({setJsonData}) {
  return (
    <div className="jsonContainer">
      <div className="viewHeading">
        <p>Paste JSON here</p>
      </div>
      <textarea contentEditable={true} onChange={(e)=>setJsonData(e.target.value)} className="jsonCode">
        /paste json Here
      </textarea>
    </div>
  );
}

export default JsonContainer;
