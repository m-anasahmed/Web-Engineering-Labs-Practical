# Task-02: Product Catalog

An interactive e-commerce product catalog with dynamic filtering and expandable product cards showing customer reviews and specifications.

## 📋 Requirements

1. **JSON Product Data** - 8 products with complete information
2. **Responsive Grid Layout** - Products display in responsive CSS grid
3. **Show More Button** - Expand cards to reveal reviews & specifications
4. **Multiple useState Hooks** - Manage category, price, and visibility states
5. **Dynamic Filtering** - Filter by category and price range in real-time

---

## 📁 Folder Structure

```bash
task-02/
├── public/
│   ├── index.html              ✅ (Updated)
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── ProductCatalog.jsx      (Copy from provided files)
│   ├── ProductCatalog.css      (Copy from provided files)
│   ├── App.js                  ✅ (Created)
│   ├── index.js                ✅ (Created)
│   └── index.css               ✅ (Created)
├── package.json
└── .gitignore
```

---

## 🚀 Setup Steps

### Step 1: Create App

```bash
npx create-react-app task-02
cd task-02
```

### Step 2: Copy Component Files

Copy these files into `src/` folder:

- `ProductCatalog.jsx`
- `ProductCatalog.css`

(Other files: App.js, index.js, index.css, index.html already created for you)

### Step 3: Run

```bash
npm start
```

Opens at `http://localhost:3000`

---

## ✨ Features

✅ Display 8 products in responsive grid
✅ Show: name, price, description, rating, stock status
✅ Category filter dropdown (auto-generated from data)
✅ Price range slider (0-500)
✅ "Show More" button reveals:

- Product specifications
- Customer reviews with ratings
- Stock availability

✅ Real-time statistics (total, average rating, in stock count)
✅ "No products found" message for no matches
✅ Smooth slide animations
✅ Fully responsive (mobile, tablet, desktop)

---

## 🎯 Key Concepts

### Multiple useState States

```javascript
const [selectedCategory, setSelectedCategory] = useState('All');
const [priceRange, setPriceRange] = useState(500);
const [showMore, setShowMore] = useState(false);
```

### Filtering Products

```javascript
const filteredProducts = products.filter(product => {
  const categoryMatch = selectedCategory === 'All' || 
                       product.category === selectedCategory;
  const priceMatch = product.price <= priceRange;
  return categoryMatch && priceMatch;
});
```

### Rendering with map()

```javascript
{filteredProducts.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```

### Nested map() for Reviews

```javascript
{product.reviews.map((review, index) => (
  <div key={index} className="review">
    <p>{review.author} - {review.rating}⭐</p>
    <p>{review.comment}</p>
  </div>
))}
```

---

## 📊 Product Data Example

```javascript
{
  id: 1,
  name: "Wireless Headphones",
  category: "Electronics",
  price: 79.99,
  description: "High-quality wireless headphones with noise cancellation",
  rating: 4.8,
  image: "🎧",
  specifications: "Bluetooth 5.0, 40-hour battery, Active noise cancellation",
  availability: "In Stock",
  stock: 15,
  reviews: [
    { author: "John D.", rating: 5, comment: "Excellent sound quality!" },
    { author: "Sarah M.", rating: 4.5, comment: "Very comfortable!" }
  ]
}
```

---

## 🧪 Testing Checklist

- [ ] All 8 products display in grid
- [ ] Product cards show: name, price, description, rating
- [ ] "Show More" button toggles smoothly
- [ ] Specifications display when expanded
- [ ] Reviews display with author and rating
- [ ] Category filter dropdown works
- [ ] Price slider filters correctly
- [ ] Both filters work together
- [ ] Statistics update in real-time
- [ ] "No products" message shows for no matches
- [ ] Responsive on mobile (shrinks to 1 column)
- [ ] No console errors
- [ ] No console warnings

---

## 📚 Categories in Sample Data

- Electronics (5 products)
- Clothing (2 products)
- Footwear (1 product)

---

## ❓ Troubleshooting

**Filter not working?**

```javascript
// Check: Both conditions must be true
categoryMatch && priceMatch
```

**Reviews not showing?**

```javascript
// Make sure: key prop in map()
{reviews.map((r, i) => <div key={i}>...</div>)}
```

**"Show More" not toggling?**

```javascript
// Use setState correctly
onClick={() => setShowMore(!showMore)}  // ✓ Correct
```

**CSS not applying?**

```javascript
// Import CSS at top of component
import './ProductCatalog.css';
```

---

## 📝 Files You Create

```bash
| File | Purpose | Lines |
|------|---------|-------|
| ProductCatalog.jsx | Main component | ~280 |
| ProductCatalog.css | Styling & animations | ~500 |
| App.js | Root component | ~10 |
| index.js | Entry point | ~10 |
| index.css | Global styles | ~15 |
```

---

## 🚀 Next Steps

1. ✅ Complete Task-01 first
2. ✅ Complete Task-02
3. 📚 Learn useEffect for API fetching
4. 🔗 Combine both apps into one with routing
5. 🎨 Add more features (search, sorting, favorites)

---

## 📖 Key Learning Outcomes

After completing this task, you'll understand:

- ✅ Managing multiple state variables
- ✅ Array filtering with conditions
- ✅ Dynamic component rendering
- ✅ Event handling (dropdown, slider, button)
- ✅ Responsive CSS Grid layout
- ✅ Nested component rendering
- ✅ Real-time state updates

---

- **Happy Coding! 🚀**

Need help? Check troubleshooting section or review the code comments in ProductCatalog.jsx

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
