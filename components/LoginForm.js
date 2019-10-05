import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text
} from "native-base";

import { connect } from "react-redux";

// Actions
// import { login } from "./redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = event => {
    this.setState(event);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { username, password } = this.state;
    console.log(this.state);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input name="username" value={username} placeholder="Username" />
            </Item>
            <Item last>
              <Input value={password} placeholder="Password" name="password" />
            </Item>
            <Button>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
export default LoginForm;
