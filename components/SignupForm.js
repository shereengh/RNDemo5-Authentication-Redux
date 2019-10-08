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

class SignupForm extends Component {
  state = {
    username: "",
    password: ""
  };
  handleChange = keyValue => {
    this.setState(keyValue);
  };

  handleSubmit = event => {
    this.props.signup(this.state);
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
            <Button onPress={this.handleSubmit}>
              <Text>Sign up</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signup: userData => dispatch(signup(userData))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignupForm);
