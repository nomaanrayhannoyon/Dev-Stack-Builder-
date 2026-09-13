# Dev Stack - Custom Tech Stack Builder

A responsive React & TypeScript web application designed to help developers explore, select, and manage technologies to build their ideal software stack.

---

## 🚀 Features
- **Responsive Navigation & Banner:** Smooth sticky navigation with mobile hamburger menu and banner overview.
- **Technology Showcase:** Dynamic cards rendering technologies with detailed ratings, badges, and categories.
- **Stack Builder Sidebar:** Real-time adding/removing of technologies with duplicate check and clear-all functionality.
- **Modern UI/UX:** Built with Tailwind CSS following an Orange to Violet gradient brand theme.

---

## 🛠️ Technologies Used
- **Frontend Framework:** React (Vite)
- **Language:** TypeScript / JavaScript
- **Styling:** Tailwind CSS

---

## ❓ React Conceptual Questions

### 1. What is JSX, and why is it used in React?
**Answer:** JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code inside JavaScript. It makes writing and understanding component UI structure easier and cleaner.

### 2. What is the difference between props and state?
**Answer:**
- **Props:** Read-only data passed from a parent component to a child component.
- **State:** Internal data managed within a component that can change over time and trigger re-renders.

### 3. What does the useState hook do, and where did you use it in this project?
**Answer:** `useState` tracks and manages dynamic data in functional components. In this project, I used it inside `Playcard.tsx` to keep track of the array of selected technologies in the `selectedStack` state.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` handles side effects such as fetching data from external or local JSON files. It runs after the component renders to load technology data dynamically.

### 5. Why does every item in a .map() list need a unique key prop?
**Answer:** React uses the `key` prop to track and identify which items have changed, been added, or removed. It optimizes performance by updating only the specific elements in the Virtual DOM rather than re-rendering the whole list.

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering means displaying UI elements based on certain conditions. In my sidebar, I used conditional rendering to show "No items added yet" when the `selectedStack` list is empty, and show the list of items when technologies are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:**
- **Parent to Child:** Data is passed down directly using `props`.
- **Child to Parent:** The parent passes a function as a prop to the child, and the child calls that function with data as arguments.