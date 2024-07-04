import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Recommend0 from "./routes/Recommend0";
import Recommend1 from "./routes/Recommend1";
import Recommend2 from "./routes/Recommend2";
import RecommendLogPage from "./routes/RecommendLogPage";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState, useEffect } from "react";
import axios from "axios";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #FFF3F3;
    font-family: "Gowun Batang", serif;
    font-weight: 400;
    font-style: normal;
    
  }
  #root {
    width: 100%;
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
        <Route path="/" element={<Mainpage login={false} />}></Route>
        <Route path="/auth" element={<Mainpage login={true} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
        <Route path="/reco0" element={<Recommend0 login={false}/>}></Route>
        <Route path="/reco0/auth" element={<Recommend0 login={true}/>}></Route>
        <Route path="/reco1" element={<Recommend1 login={false}/>}></Route>
        <Route path="/reco1/auth" element={<Recommend1 login={true}/>}></Route>
        <Route path="/reco2" element={<Recommend2 login={false}/>}></Route>
        <Route path="/reco2/auth" element={<Recommend2 login={true}/>}></Route>
        <Route  
          path="/mypage/recommend_log"
          element={<RecommendLogPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
