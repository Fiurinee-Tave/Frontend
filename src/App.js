import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./routes/Mainpage";
import Login from "./routes/Login";
import Mypage from "./routes/Mypage";
import Recommend0 from "./routes/Recommend0";
import Recommend1 from "./routes/Recommend1";
import Recommend2 from "./routes/Recommend2";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
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
