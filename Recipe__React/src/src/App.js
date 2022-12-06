import Pages from "./pages/Pages";
import Search from "./components/Search";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from 'react-icons/gi'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>
            Deliciouss
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration:none;
  font-weight: 400 ;
  font-size: 1.5rem;
  font-family: 'Lobster Two', cursive ;

`
const Nav = styled.div`
  padding: 4rem 0rem ;
  display: flex;
  justify-content:flex-start ;
  align-items:center ;
  svg{
    font-size:2rem ;
  }
`

export default App;