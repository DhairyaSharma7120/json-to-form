import React from "react";
import "./jsonContainer.css";
function JsonContainer() {
  return (
    <div className="jsonContainer">
      <div className="viewHeading">
        <p>Paste JSON here</p>
      </div>
      <textarea contentEditable={true} className="jsonCode">
        /paste json Here
      </textarea>
    </div>
  );
}

export default JsonContainer;
