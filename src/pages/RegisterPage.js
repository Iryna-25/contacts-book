import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

import {  Wrapper, Form, Input } from "../styles/Elements.styled.jsx";


export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <h2>Signup</h2>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <Input 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}>
          </Input>
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}>
          </Input>
        </label>

        <button type="submit">Sign Up</button>
      </Form>
    </Wrapper>
  );
}
