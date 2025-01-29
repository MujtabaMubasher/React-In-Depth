# Stateless Functional Components

Stateless Functional Components are React components defined as simple JavaScript functions. They are ideal for components that:
- Only render UI elements based on props.
- Do not manage any state or lifecycle methods.

## Syntax

```javascript
import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
    </div>
  );
};

export default MyComponent;
```

## Key Features

1. **No State**: Does not maintain internal state (`this.state`).
2. **Pure Functions**: Outputs only depend on the input (props).
3. **Performance**: Lightweight, better for simpler components.
4. **Readability**: Easy to understand and write.

## Usage Example

```javascript
import React from 'react';
import MyComponent from './MyComponent';

function App() {
  return (
    <div>
      <MyComponent name="John" />
    </div>
  );
}

export default App;
```

## Pros

- Simplified syntax.
- Easier to test and debug.
- Promotes a functional programming approach.

## Limitations

- Cannot use `setState` or lifecycle hooks (e.g., `componentDidMount`).
- For advanced features, consider using React Hooks.
