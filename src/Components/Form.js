import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
    <Form>
      {/* <label>Email:</label> */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="name"onChange={(e) => setEmail(e.target.value)}/>
       
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>
    <label>password:</label>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label></Form.Label>
        <Form.Control type="password" placeholder="Password" password="password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <div>
    <p>Email: {email}</p>
    <p>password:{password}</p>

    </div>
    </div>
  );
}

export default BasicExample;