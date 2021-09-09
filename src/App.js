import "./App.css";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <img></img>
      <NavContainer>
        <Link>about</Link>
        <Link>work</Link>
        <Link>resume</Link>
        <Link>contact</Link>
      </NavContainer>
    </div>
  );
}

export default App;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  text-decoration: none;
`;
