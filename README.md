# 🧮 React Glassmorphism Calculator
A sleek, functional calculator built with **React**, **TypeScript**, and **Tailwind CSS**.

![Preview](./screenshots/Sample.png

## 🚀 The Challenge: "State Explosion"
This project was a deep dive into complex state management. Since a Calculator has many condition that effect other components and the behaviour of all the states
i had to rethink about 150 lines of logic again and again. it wasn't only about stacking new code on to of each other but i had to think how 
each state will effect others, what will be the boolean value at a given moment, how state is managed with type safety across different components and not to forget 
State LifeCycle. React may stack the state or won't immediately update the value this leads so some unexpected behaviour if ignored.

### What I Learned:
* **The "New Truth" Pattern:** Instead of recalculating math on every click, I built a state machine that injects a "New Truth" into the UI(especially useful for the History feature).
                               I had this realization at the end that if you write a logically good code then later integration of a new features becomes easy now the logic is written
                               so well that it works perfectly fine even if new conditions are involved the core logic easily cooperates.
* **Categorized Logic:** I divided the keypad into **Operands, Operators, and Tools**. This kept the code modular and prevented "Spaghetti Code."
* **Flexbox Mastery:** I tackled the "Height Chain" issue where a scrolling history container would push the outer glass box. I solved this using `min-h-0` and viewport-based constraints.

## 🛠️ Key Features
* **History Management:** Click any past calculation to inject it back into the active display.
* **Responsive Glassmorphism:** A floating, blurred UI that adapts to screen size without breaking the layout.
* **Custom Scrollbars:** A faint, "stealth" scrollbar that matches the dark theme.
* **Type Safety:** Full TypeScript implementation to prevent runtime errors.

## 🏗️ Technical Stack
* **Framework:** React 18
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS (Flexbox & Arbitrary Variants)

## ⏭️ Future Roadmap (V2.0)
* [ ] Implement **Unary Special Operators** (%, √).
* [ ] Add Keyboard support (NumPad).
* [ ] Dark/Light mode toggle.
* [ ] Robust type safety
* [ ] infinity edge case is yet to be handled
* [ ] Memory feature is left untouched 

## final Note
i don't know when i will work on this project again but it taught me a lot of new things. Calculator seems easy to write project and it is easy if someone just wants basic
function but cloning Windows calculator is challanging it's not simple at all and scientific calculator is anotehr beast to handle, overall a great project to work on. Since it's 
taking a lot of my time i'll be moving on to the next project. **Chasing perfection without the experties to achive it leads to silence**
