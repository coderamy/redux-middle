//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/Posts";
import { Provider } from "react-redux";
import store from "./store";
import { Container, Row, Col } from "react-bootstrap";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <Col>
            <Counter />
            <Posts />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
