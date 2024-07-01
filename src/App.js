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
import { useState } from "react";
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
  const [userInfo, setUserInfo] = useState();

  const handleLogin = () => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const memberId = localStorage.getItem("member_id");
    fetchData(accessToken, memberId);
  };

  const fetchData = async (accessToken, memberId) => {
    const response = await axios.get(
      `http://3.36.169.209:8080/member/${memberId}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    console.log(response.data);
    setUserInfo(response.data);
    console.log(userInfo);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Mainpage login={false} />}></Route>
        <Route
          path="/auth"
          element={<Mainpage login={true} handleLogin={handleLogin} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<Mypage userInfo={userInfo} />}></Route>
        <Route path="/reco0" element={<Recommend0 />}></Route>
        <Route path="/reco1" element={<Recommend1 />}></Route>
        <Route path="/reco2" element={<Recommend2 />}></Route>
        <Route
          path="/mypage/recommend_log"
          element={<RecommendLogPage />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
