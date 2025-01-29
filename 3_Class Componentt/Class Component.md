## Class-Based Components

A class-based component in React is defined using a JavaScript class that extends `React.Component`. These components can manage state and lifecycle events through methods.

### Example of a Class-Based Component

```javascript
import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyClassComponent;
```

### Advantages of Class-Based Components

1. **State Management**: Class components allow you to use `this.state` to manage local state.
   
2. **Lifecycle Methods**: Class components provide lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

3. **Method Binding**: Event handlers (like `handleIncrement`) need to be explicitly bound to the component, either in the constructor or by using arrow functions.

4. **Extensibility**: Class components allow you to define methods and handle complex logic within the class body.