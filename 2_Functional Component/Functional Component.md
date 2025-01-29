# Functional Components in React

Functional Components are React components defined as plain JavaScript functions. They are stateless by nature but can manage state using React Hooks. Functional Components are widely used for building UI components in modern React applications.

## Syntax

### Basic Functional Component
```javascript
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

export default Greeting;
```

## Features of Functional Components

1. **Simpler Syntax**: Defined as functions.
2. **Stateless by Default**: Cannot manage state without hooks.
3. **React Hooks**: Can use hooks (like `useState`, `useEffect`) for state and side-effects.
4. **Performance**: Lightweight and easier to test and debug.

## Default Export

### Explanation
Default exports allow exporting a single value or entity from a module. A default export is imported without curly braces.

### Example of Default Export
```javascript
// Greeting.js
const Greeting = () => {
  return <h1>Hello!</h1>;
};

export default Greeting;
```

#### Importing a Default Export
```javascript
import Greeting from './Greeting';

function App() {
  return <Greeting />;
}

export default App;
```

## Named Export

### Explanation
Named exports allow exporting multiple values from a module. Named exports must be imported using the exact name inside curly braces.

### Example of Named Export
```javascript
// utilities.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

#### Importing Named Exports
```javascript
import { add, subtract } from './utilities';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

#### Re-Naming During Import
```javascript
import { add as sum } from './utilities';

console.log(sum(5, 3)); // Output: 8
```

## Comparison of Default vs Named Export

| Feature              | Default Export                     | Named Export                      |
|----------------------|-------------------------------------|------------------------------------|
| Syntax               | `export default`                   | `export`                          |
| Import Style         | Without curly braces               | With curly braces                 |
| Renaming at Import   | Allowed                            | Allowed using `as` syntax         |
| Multiple Exports     | Not Supported                      | Supported                         |
| Use Case             | When exporting one main entity     | When exporting multiple entities  |

## Usage Example with Both Export Types
```javascript
// Greeting.js
export const WelcomeMessage = () => {
  return <h1>Welcome!</h1>;
};

const Greeting = () => {
  return <h1>Hello!</h1>;
};

export default Greeting;

// App.js
import Greeting, { WelcomeMessage } from './Greeting';

function App() {
  return (
    <div>
      <Greeting />
      <WelcomeMessage />
    </div>
  );
}

export default App;
