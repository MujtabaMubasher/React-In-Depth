# Props Destructuring in React

In React, props destructuring is a clean and efficient way to extract values from `props` within a component. Instead of accessing `props.propertyName`, you can directly extract values using JavaScript object destructuring.

## Syntax

### Functional Component
```jsx
const UserProfile = ({ name, age, location }) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};
```

### Destructuring Inside Function Body
```jsx
const UserProfile = (props) => {
    const { name, age, location } = props;
    
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
        </div>
    );
};
```

## Benefits
- **Cleaner Code**: Eliminates `props.` prefix, making the code more readable.
- **Improved Maintainability**: Easier to update and modify components.
- **Reduces Repetition**: Avoids repeating `props.` multiple times.

Props destructuring is a best practice that enhances code readability and efficiency in React development!
