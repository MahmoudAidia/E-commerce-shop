import { Outlet } from "react-router-dom";

import styled from "styled-components";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
