https://react-state-checkpoint-rho.vercel.app/
# CRA Profile Toggle

A simple React application that demonstrates state management in a class component by toggling a profile card on and off.

The app also tracks and displays how many seconds have passed since the component mounted, making it a compact example of lifecycle methods plus UI interactivity.

## What This Project Demonstrates

- Class-based React component structure
- Local component state for UI visibility and data storage
- Event handling through a toggle button
- Lifecycle usage with `componentDidMount` and `componentWillUnmount`
- Timer management with `setInterval` and cleanup to prevent memory leaks

## App Behavior

When the app starts:

1. A heading and toggle button are shown.
2. A timer begins counting seconds since mount.
3. The profile card is hidden by default.

When you click **Show Profile**:

- The profile card appears with:
  - Name
  - Profession
  - Bio
  - Profile image

When you click **Hide Profile**:

- The profile card is removed from the view.

## Tech Stack

- React 19
- Create React App (`react-scripts` 5)
- JavaScript (ES6+)
- CSS

## Project Structure

```text
cra-profile-toggle/
|- public/
|  |- index.html
|- src/
|  |- App.js            # Main class component and profile toggle logic
|  |- App.css           # App styling
|  |- index.js          # React entry point
|  |- index.css         # Global styles
|  |- App.test.js       # Test scaffold
|  |- setupTests.js     # Testing setup
|  |- reportWebVitals.js
|- package.json
|- README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Run Locally

```bash
npm start
```

Then open http://localhost:3000 in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode with hot reload.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Creates an optimized production build in the `build/` directory.

### `npm run eject`

Exports CRA configuration files for full customization (irreversible).

## Core State Shape

The main component manages this state:

```js
{
	Person: {
		fullName,
		bio,
		imgSrc,
		profession
	},
	shows,
	secondsSinceMount
}
```

## Learning Notes

This project is useful if you want a quick reference for:

- Conditional rendering with boolean flags
- Organizing profile-like data in state
- Safe timer cleanup in class components
- Building small interactive UI behavior without external state libraries

## Future Improvements

- Convert the class component to a functional component using hooks
- Add PropTypes or TypeScript for stronger typing
- Improve responsive styling for smaller screens
- Add dedicated tests for toggle behavior and timer updates

## License

This project is provided for learning and demo purposes.
