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
import { login, signup, checkForExpiredToken } from "../redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handleSubmit = event => {
    this.props.login(this.state);
  };

  render() {
    const { username, password } = this.state;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username =>
                  this.handleChange({ username: username })
                }
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                secureTextEntry
                name="password"
                onChangeText={password =>
                  this.handleChange({ password: password })
                }
              />
            </Item>
            <Button
              full
              success
              onPress={() =>
                this.props.login(this.state, this.props.navigation)
              }
            >
              <Text>Login</Text>
            </Button>
            <Button
              full
              warning
              onPress={() =>
                this.props.signup(this.state, this.props.navigation)
              }
            >
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    checkForToken: navigation => dispatch(checkForExpiredToken(navigation))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
