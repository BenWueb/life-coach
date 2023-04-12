import Main from "./pages/Main";

import GlobalStyles from "./components/styles/GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Main />
      </Router>
    </>
  );
}

export default App;
