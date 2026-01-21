# Task-01: Student Information App

A React application displaying student information with expandable cards showing skills.

## 📋 Requirements

1. **Functional Component** - Display list of students (name, age)
2. **useState Hook** - "Show More" button toggles additional details
3. **map() Function** - Dynamically render students and skills

## 📁 Folder Structure Setup

```bash
task-01/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── StudentApp.jsx
│   ├── StudentApp.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── .gitignore
```

## 🚀 Setup Instructions

### Step 1: Create React App

```bash
npx create-react-app task-01
cd task-01
```

### Step 2: Replace Files

Delete the default files and create:

- **src/App.js**

```javascript
import React from 'react';
import StudentApp from './StudentApp';
import './index.css';

function App() {
  return <StudentApp />;
}

export default App;
```

- **src/index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- **src/index.css**

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}
```

### Step 3: Copy Component Files

Get `StudentApp.jsx` and `StudentApp.css` from the provided files and save them in the `src/` folder.

### Step 4: Run the App

```bash
npm start
```

The app opens at `http://localhost:3000`

---

## ✨ Features

- Display 6 students with names, ages, and email
- Toggle "Show More" button to reveal skills
- Filter students by academic year
- Display statistics (total, average GPA, visible count)
- Responsive grid layout
- Smooth animations

---

## 📝 Key Concepts Used

### useState Hook

```javascript
const [showMore, setShowMore] = useState(false);
```

### map() Function

```javascript
{students.map(student => (
  <StudentCard key={student.id} student={student} />
))}
```

### Nested map()

```javascript
{student.skills.map((skill, index) => (
  <span key={index} className="skill-tag">{skill}</span>
))}
```

---

## 🧪 Testing

- [ ] All 6 students display
- [ ] "Show More" button toggles correctly
- [ ] Skills display as tags when expanded
- [ ] Filter by year works
- [ ] Statistics update dynamically
- [ ] Responsive on mobile
- [ ] No console errors

---

## 📚 File Sizes

```bash
| File | Lines | Purpose |
|------|-------|---------|
| StudentApp.jsx | ~250 | Main component with logic |
| StudentApp.css | ~400 | Styling & animations |
| App.js | ~10 | Root component |
| index.js | ~10 | Entry point |
| index.css | ~10 | Global styles |
```

---

## ❓ Troubleshooting

**CSS not loading?**

```javascript
// Make sure CSS is imported
import './StudentApp.css';
```

**map() not rendering?**

```javascript
// Always include unique key prop
{items.map(item => (
  <div key={item.id}>{item.name}</div>  // ✓ Correct
))}
```

**State not updating?**

```javascript
// Use setState function in onClick
onClick={() => setShowMore(!showMore)}  // ✓ Correct
onClick={setShowMore(!showMore)}         // ✗ Wrong
```

---

## 📖 Next Steps

1. Complete Task-01 first
2. Move to Task-02 (Product Catalog)
3. Learn useEffect for Task-03 (if available)
4. Practice with your own projects

---

- **Happy Coding! 🚀**

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
