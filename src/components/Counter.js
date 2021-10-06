import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../actions";

import { Button, Card, Badge } from "react-bootstrap";
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Counter: </Card.Title>
          <Card.Text>
            <Button
              variant="primary"
              style={{ width: "100%", fontSize: "100px" }}
            >
              <Badge bg="secondary">{count.countReducers}</Badge>
            </Button>
          </Card.Text>
        </Card.Body>
      </Card><br/>
      <Button
        variant="outline-success"
        size="lg"
        onClick={() => dispatch(increment())}
      >
        Increment (+)
      </Button>  {' '}
      <Button variant="outline-warning" size="lg" onClick={() => dispatch(decrement())}>
        Decrement (-)
      </Button>
    </>
  );
};

export default Counter;
