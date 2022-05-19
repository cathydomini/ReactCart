//https://designcode.io/react-hooks-handbook-usereducer-with-usecontext-1
import styled from 'styled-components';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {ShopProvider} from './ShopContext';
import Products from './Products';
import Cart from './Cart';

const App = () => {
  return (
    <ShopProvider>
      {
        <Router>
          <Wrapper>
            <TitleWrapper>
              <h1>Cathy's Store</h1>
            </TitleWrapper>
            <LinksWrapper>
              <Link to="/">Home</Link>
              <Link to="/cart">Cart</Link>
            </LinksWrapper>

            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>

          </Wrapper>
        </Router>
      }
    </ShopProvider>
  );
};

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
