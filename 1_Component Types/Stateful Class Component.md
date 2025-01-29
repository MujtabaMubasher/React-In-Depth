# Stateful Class Components

Stateful Class Components are React components defined as ES6 classes. They are ideal for components that:
- Manage their own internal state.
- Require lifecycle methods for advanced functionality.

## Syntax

```javascript
import React, { Component } from 'react';

class MyComponent extends Component {
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
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
```

## Key Features

1. **State Management**: Can hold and update their own internal state using `this.state`.
2. **Lifecycle Methods**: Can use lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc.
3. **Event Handling**: Typically bind event handlers or use arrow functions.

## Usage Example

```javascript
import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

export default App;
```

## Pros

- Capable of managing complex interactions and state.
- Full support for React lifecycle methods.

## Limitations

- More verbose compared to functional components.
- May require additional setup for performance optimization.
- Encourages less functional programming.
