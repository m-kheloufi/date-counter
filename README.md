# DateCounter with useReducer

This project demonstrates how to use **React's `useReducer` hook** instead of `useState` to manage more complex state logic.
In TypeScript
---

## 🔹 Why useReducer?

- `useState` is great for simple, independent pieces of state.
- `useReducer` shines when:
  - You have **multiple related state values** (e.g. `count` and `step` here).
  - You want to **centralize state logic** inside a `reducer` function.
  - Your updates depend on the **previous state** or require more structured logic.

Instead of having multiple `setState` functions, you **dispatch actions** to update the state.

---

## 🔹 Example

We want a counter that:
- Increases or decreases a date by a number of days.
- Allows changing the `step` (how many days to move at a time).
- Has a reset button.

---

### State Shape
```ts
type State = {
  count: number; // number of days to add/subtract
  step: number;  // increment/decrement step
};
