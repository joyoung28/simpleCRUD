import { BrowserRouter, Route } from "react-router-dom";
import FirstPage from "./view/FirstPage";
import WritePage from "./view/WritePage";
import UpdatePage from "./view/UpdatePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={FirstPage} />
        <Route path="/Write" exact component={WritePage} />
        <Route path="/Update/:data" exact component={UpdatePage} />
      </BrowserRouter>
    </>
  );
}

export default App;
