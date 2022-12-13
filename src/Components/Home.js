import react,{useState} from'react';
import BasicExample from './Form';
const Home = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [Adress, setAdress] = useState();
    const [submit, setSubmit] = useState(false);
  
    const clicked = (e) => {
      e.preventDefault();
      setSubmit(true);
    };
    return (
      <div>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Name:</label>
          <input
            placeholder="enter your name"
            name="name"
            style={{ width: "200px" }}
            onChange={(e) => setName(e.target.value)}
          />
          {submit && !name ? (
            <p style={{ color: "red" }}>Please enter your name</p>
          ) : null}
  
          <label>Age:</label>
          <input
            placeholder="enter your name"
            name="name"
            style={{ width: "200px" }}
            onChange={(e) => setAge(e.target.value)}
          />
  
          {submit && !age ? (
            <p style={{ color: "red" }}>Please enter your age</p>
          ) : null}
  
          <label>Email:</label>
          <input
            placeholder="enter your name"
            name="name"
            style={{ width: "200px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          {submit && !email ? (
            <p style={{ color: "red" }}>Please enter your email</p>
          ) : null}
  
          <label>Adress:</label>
          <input
            placeholder="enter your name"
            name="name"
            style={{ width: "200px" }}
            onChange={(e) => setAdress(e.target.value)}
          />
          {submit && !Adress ? (
            <p style={{ color: "red" }}>Please enter your Adress</p>
          ) : null}
  
          <button type="submit" style={{ width: "200px" }} onClick={clicked}>
            Save
          </button>
        </form>
  
        <div>
          <p>Name:{name}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Address: {Adress}</p>
        </div>
        {name}
        <BasicExample/>
      </div>
    );
  };
  
  export default Home;