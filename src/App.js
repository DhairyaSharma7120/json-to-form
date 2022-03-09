import logo from "./logo.svg";
import CodeView from "./components/codeView/codeView";
import FormView from "./components/formView/formView";
import JsonContainer from "./components/jsonContainer/jsonContainer";
import { Resizable } from "re-resizable";
import CodeIcon from "@mui/icons-material/Code";
import "./App.css";

function App() {
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
          <JsonContainer />
        </Resizable>

        <div className="view rightView">
          <div className="viewControl">
            <CodeIcon />
          </div>
          <div className="outputView">
            <FormView />
            <CodeView />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
