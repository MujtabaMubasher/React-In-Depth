# Event Handling in React

Event handling in React is similar to handling events in DOM elements, but with JSX syntax and some differences in binding `this`.

## Handling Events in Functional Components

```jsx
const ClickButton = () => {
    const handleClick = () => {
        console.log("Button Clicked!");
    };

    return <button onClick={handleClick}>Click Me</button>;
};
```

## Handling Events in Class Components

```jsx
import React, { Component } from 'react';

class ClassClick extends Component {
    eventHandler = () => {
        console.log("Class Button Clicked!");
    };

    render() {
        return <button onClick={this.eventHandler}>Click Me</button>;
    }
}

export default ClassClick;
```

## Binding Event Handlers in Class Components
Class components require `this` binding for event handlers.

### Method 1: Binding in Constructor
```jsx
constructor() {
    super();
    this.eventHandler = this.eventHandler.bind(this);
}
```

### Method 2: Arrow Function as Class Property
```jsx
eventHandler = () => {
    console.log("Button Clicked!");
};
```

## Passing Arguments to Event Handlers
```jsx
<button onClick={() => handleClick("Hello")}>Click Me</button>
