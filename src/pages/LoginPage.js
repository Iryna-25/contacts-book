import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

import { Wrapper, Form, Input } from "../styles/Elements.styled.jsx";


export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
      <h2>Login</h2>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Log In</button>
      </Form>
    </Wrapper>
  );
}
