# RNDemo5 - Authentication

1. Walk through the code:

   - Show them the `LoginForm` and the state.
   - Show them the `handleChange` method. It is still not wired, so let's go ahead and work on that.
   - Type in the fields, show that in the console, nothing is being updated in the state.

#### onChangeText

2. add `onChangeText` to both form inputs.

````jsx
          <Form>
            <Item>
              <Input
                name="username"
                value={username}
                placeholder="Username"
                onChangeText={username => this.handleChange({ username })}
              />
            </Item>
            <Item last>
              <Input
                value={password}
                placeholder="Password"
                name="password"
                onChangeText={password => this.handleChange({ password })}
              />
            </Item>
            <Button>
              <Text>Login</Text>
            </Button>
          </Form>
          ```
````

3. Type to show them that the console is logging now. The state is being updated.
