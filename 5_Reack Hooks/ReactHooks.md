# React Hooks: A Comprehensive Guide

React Hooks are functions introduced in React 16.8 that let you use state and other React features without writing class components. They simplify component logic and promote reusability.

---

## Why Use Hooks?
- Avoid complexity of class components.
- Share stateful logic without higher-order components (HOCs) or render props.
- Enable better code reusability and readability.

---

## Basic Rules of Hooks
1. **Only Call Hooks at the Top Level**:
   - Do not call hooks inside loops, conditions, or nested functions.
   - Ensure they are always executed in the same order for each render.
   
2. **Only Call Hooks in React Functions**:
   - Use hooks in functional components or custom hooks, not regular JavaScript functions.

---

## Commonly Used Hooks

### 1. `useState`
Manages state in functional components.

**Syntax**:
```javascript
const [state, setState] = useState(initialValue);
```

**Example**:
```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}
```

---

### 2. `useEffect`
Handles side effects like fetching data, subscriptions, or manually changing the DOM.

**Syntax**:
```javascript
useEffect(() => {
  // effect code
  return () => {
    // cleanup code (optional)
  };
}, [dependencies]);
```

**Example**:
```javascript
import React, { useEffect, useState } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return <p>Elapsed time: {time}s</p>;
}
```

---

### 3. `useContext`
Access context values without needing a wrapper component.

**Syntax**:
```javascript
const value = useContext(Context);
```

**Example**:
```javascript
import React, { useContext, createContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}
```

---

### 4. `useRef`
Access and persist a mutable value or reference a DOM element.

**Syntax**:
```javascript
const ref = useRef(initialValue);
```

**Example**:
```javascript
import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

---

### 5. `useReducer`
Manages more complex state logic than `useState`.

**Syntax**:
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

**Example**:
```javascript
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

---

## Advanced Hooks

### 1. `useMemo`
Memoizes a value to improve performance for expensive calculations.

**Example**:
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

### 2. `useCallback`
Memoizes a callback function to prevent unnecessary renders.

**Example**:
```javascript
const memoizedCallback = useCallback(() => {
  doSomething();
}, [dependencies]);
```

---

### 3. `useLayoutEffect`
Similar to `useEffect`, but runs synchronously after all DOM mutations.

---

## Custom Hooks
Custom hooks let you extract and reuse component logic.

**Example**:
```javascript
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
```

---

## Conclusion
React Hooks are powerful tools that simplify your code, reduce boilerplate, and enable better state and side-effect management in functional components.
