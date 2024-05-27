import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Recommend0 from "./routes/Recommend0";
import Recommend1 from "./routes/Recommend1";
import Recommend2 from "./routes/Recommend2";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #FFF3F3;
  }
  #root {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FFF3F3;
    border: 1px solid blue;
  }
  ::-webkit-scrollbar {
    display:none;
  }
`;

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Mainpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/reco0" element={<Recommend0 />}></Route>
        <Route path="/reco1" element={<Recommend1 />}></Route>
        <Route path="/reco2" element={<Recommend2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
