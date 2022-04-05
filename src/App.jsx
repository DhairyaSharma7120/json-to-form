import { useEffect, useState } from "react";
import CodeView from "./components/codeView/codeView";
import FormView from "./components/formView/formView";
import JsonContainer from "./components/jsonContainer/jsonContainer";
import { Resizable } from "re-resizable";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import "./App.css";

function App() {
  const [showCode, setShowCode] = useState(false);
  const [jsonData, setJsonData] = useState("");
  const [parsedJson, setParseJson] = useState({});
  const [formData, setFormData] = useState([]);
  const [refreshCodeView , setRefreshCodeView] = useState(true)
  useEffect(() => {
    try {
      let formJson = JSON.parse(jsonData);
      setParseJson(formJson);
      setFormData(Object.keys(formJson));
    } catch (e) {
      console.log(e);
    }
  }, [jsonData]);

  return (
    <div className="App">
      <h1>Json to Form </h1>
      <main className="container">
        <Resizable
          minHeight={450}
          maxHeight={450}
          className="view leftView"
          defaultSize={{ width: "35%" }}
        >
          <JsonContainer setJsonData={setJsonData} />
        </Resizable>

        <div className="view rightView">
          <div className="viewControl">
            {!showCode && <CodeIcon onClick={() => setShowCode(true)} />}
            {showCode && <CodeOffIcon onClick={() => setShowCode(false)} />}
          </div>
          <div className="outputView">
            <div className={`outputContainer ${!showCode ? "d-flex" : "d-none"}`}>
              <FormView formData={formData} parsedJson={parsedJson} setRefreshCodeView={setRefreshCodeView} />
            </div>

            <div className={`outputContainer ${showCode ? "d-flex" : "d-none"}`}>
              <CodeView refresh={refreshCodeView}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
