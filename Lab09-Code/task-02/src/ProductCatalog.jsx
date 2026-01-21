import React, { useState } from 'react';
import './ProductCatalog.css';

/**
 * TASK 2: Product Catalog
 * 
 * Requirements:
 * 1. Fetch product data from a JSON array
 * 2. Display the product name, price, and description in a grid layout
 * 3. Add a "Show More" button for each product that expands to display additional details (like reviews)
 * 4. Use useState for dynamic state updates
 */

// Product data - JSON array with product information
// REQUIREMENT 1: Fetch product data from JSON array
const productsData = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 79.99,
        description: "High-quality wireless headphones with active noise cancellation",
        image: "🎧",
        specifications: "Bluetooth 5.0, 40-hour battery, ANC technology",
        availability: "In Stock",
        stock: 15,
        reviews: [
            { author: "John D.", rating: 5, comment: "Excellent sound quality!" },
            { author: "Sarah M.", rating: 4.5, comment: "Very comfortable for long sessions" },
            { author: "Mike T.", rating: 5, comment: "Best headphones I've ever owned" }
        ],
        rating: 4.8
    },
    {
        id: 2,
        name: "Smartwatch Pro",
        category: "Electronics",
        price: 299.99,
        description: "Advanced smartwatch with health tracking and fitness features",
        image: "⌚",
        specifications: "AMOLED display, 7-day battery, Water resistant 50m",
        availability: "In Stock",
        stock: 8,
        reviews: [
            { author: "Emily C.", rating: 5, comment: "Amazing health tracking features" },
            { author: "Alex R.", rating: 4.5, comment: "Great battery life" }
        ],
        rating: 4.75
    },
    {
        id: 3,
        name: "Winter Jacket",
        category: "Clothing",
        price: 129.99,
        description: "Premium warm winter jacket with waterproof technology",
        image: "🧥",
        specifications: "Waterproof, Insulated with down, Multiple colors available",
        availability: "In Stock",
        stock: 22,
        reviews: [
            { author: "David L.", rating: 5, comment: "Very warm and stylish" },
            { author: "Lisa K.", rating: 4.5, comment: "Perfect for winter" },
            { author: "Tom H.", rating: 5, comment: "Great value for money" }
        ],
        rating: 4.83
    },
    {
        id: 4,
        name: "Running Shoes",
        category: "Footwear",
        price: 89.99,
        description: "Comfortable running shoes with superior grip and cushioning",
        image: "👟",
        specifications: "Gel cushioning, Breathable mesh, Lightweight design",
        availability: "In Stock",
        stock: 18,
        reviews: [
            { author: "Chris M.", rating: 5, comment: "Very comfortable for running" },
            { author: "Nina P.", rating: 4.5, comment: "Good grip and support" }
        ],
        rating: 4.75
    },
    {
        id: 5,
        name: "Laptop Stand",
        category: "Electronics",
        price: 49.99,
        description: "Adjustable ergonomic laptop stand for better posture",
        image: "💻",
        specifications: "Aluminum construction, Adjustable height, Universal compatibility",
        availability: "In Stock",
        stock: 25,
        reviews: [
            { author: "Ryan B.", rating: 5, comment: "Great for ergonomics" },
            { author: "Sophie D.", rating: 5, comment: "Sturdy and well-built" },
            { author: "James W.", rating: 4, comment: "Good value product" }
        ],
        rating: 4.67
    },
    {
        id: 6,
        name: "Summer Dress",
        category: "Clothing",
        price: 54.99,
        description: "Light and breathable summer dress perfect for warm weather",
        image: "👗",
        specifications: "100% cotton, Comfortable fit, Multiple sizes available",
        availability: "In Stock",
        stock: 12,
        reviews: [
            { author: "Jessica L.", rating: 5, comment: "Very comfortable in summer" },
            { author: "Amanda H.", rating: 4.5, comment: "Great quality fabric" }
        ],
        rating: 4.75
    },
    {
        id: 7,
        name: "Portable Charger",
        category: "Electronics",
        price: 34.99,
        description: "High-capacity portable power bank with fast charging",
        image: "🔋",
        specifications: "20000mAh, USB-C, Fast charging support, Compact design",
        availability: "In Stock",
        stock: 30,
        reviews: [
            { author: "Mark S.", rating: 5, comment: "Fast charging is excellent" },
            { author: "Rachel G.", rating: 5, comment: "Charges my phone 5 times" },
            { author: "Kevin N.", rating: 4.5, comment: "Reliable and durable" }
        ],
        rating: 4.83
    },
    {
        id: 8,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 99.99,
        description: "Portable Bluetooth speaker with immersive 360-degree sound",
        image: "🔊",
        specifications: "360-degree sound, 12-hour battery, Waterproof IPX7",
        availability: "In Stock",
        stock: 11,
        reviews: [
            { author: "Tom R.", rating: 5, comment: "Amazing sound quality" },
            { author: "Lisa M.", rating: 4.5, comment: "Perfect for outdoor use" },
            { author: "David C.", rating: 5, comment: "Best portable speaker" }
        ],
        rating: 4.83
    }
];

/**
 * ProductCard Component
 * REQUIREMENT 3: "Show More" button that reveals additional details like reviews
 * REQUIREMENT 4: Use useState for dynamic state updates
 */
function ProductCard({ product }) {
    // State to manage showing more details
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="product-card">
            {/* Product Image and Category Badge */}
            <div className="product-image">
                <div className="image-emoji">{product.image}</div>
                <span className="category-badge">{product.category}</span>
            </div>

            {/* Product Basic Information */}
            <div className="product-header">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-rating">
                    <span className="rating-stars">
                        {'★'.repeat(Math.floor(product.rating))}
                    </span>
                    <span className="rating-value">({product.rating})</span>
                </div>
            </div>

            {/* REQUIREMENT 2: Display product name, price, and description in grid */}
            <div className="product-info">
                <p className="product-description">{product.description}</p>
                <div className="product-meta">
                    <div className="meta-item">
                        <span className="meta-label">Price:</span>
                        <span className="product-price">${product.price.toFixed(2)}</span>
                    </div>
                    <div className="meta-item">
                        <span className="meta-label">Stock:</span>
                        <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                            {product.stock > 0 ? `${product.stock} units` : 'Out of Stock'}
                        </span>
                    </div>
                </div>
            </div>

            {/* Additional Details - Shown on Show More */}
            {showMore && (
                <div className="product-details slide-in">
                    <div className="details-section">
                        <h4>Specifications</h4>
                        <p>{product.specifications}</p>
                    </div>

                    <div className="reviews-section">
                        <h4>Customer Reviews</h4>
                        <div className="reviews-list">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="review-item">
                                    <div className="review-header">
                                        <span className="reviewer-name">{review.author}</span>
                                        <span className="review-rating">
                                            {'★'.repeat(Math.floor(review.rating))} {review.rating}
                                        </span>
                                    </div>
                                    <p className="review-comment">{review.comment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Show More/Less Button */}
            <button 
                className="show-more-btn"
                onClick={() => setShowMore(!showMore)}
            >
                <i className={`fas fa-chevron-${showMore ? 'up' : 'down'}`}></i>
                {showMore ? 'Show Less' : 'Show More Details'}
            </button>
        </div>
    );
}

/**
 * ProductCatalog Component - Main product list
 * REQUIREMENT 2: Display products in a grid layout
 * REQUIREMENT 4: Use useState for filtering and state management
 */
function ProductCatalog() {
    const [products] = useState(productsData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [priceRange, setPriceRange] = useState(500);

    // Get unique categories
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter products based on category and price
    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const priceMatch = product.price <= priceRange;
        return categoryMatch && priceMatch;
    });

    // Calculate statistics
    const totalProducts = products.length;
    const visibleProducts = filteredProducts.length;
    const averageRating = (products.reduce((sum, p) => sum + p.rating, 0) / totalProducts).toFixed(2);

    return (
        <div className="product-catalog-container">
            {/* Header */}
            <div className="catalog-header">
                <h1>Product Catalog</h1>
                <p>Explore our wide range of high-quality products</p>
            </div>

            {/* Filters Section */}
            <div className="filters-section">
                <div className="filter-card">
                    <label>Category:</label>
                    <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="filter-select"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="filter-card">
                    <label>Max Price: ${priceRange}</label>
                    <input 
                        type="range" 
                        min="0" 
                        max="500" 
                        value={priceRange}
                        onChange={(e) => setPriceRange(parseInt(e.target.value))}
                        className="price-slider"
                    />
                </div>

                <div className="filter-stats">
                    Showing <strong>{visibleProducts}</strong> of <strong>{totalProducts}</strong> products
                </div>
            </div>

            {/* REQUIREMENT 2: Grid layout for products */}
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* No Products Message */}
            {filteredProducts.length === 0 && (
                <div className="no-products">
                    <i className="fas fa-search"></i>
                    <p>No products found matching your filters.</p>
                </div>
            )}

            {/* Statistics Section */}
            <div className="stats-section">
                <div className="stat-card">
                    <h4>Total Products</h4>
                    <p className="stat-value">{totalProducts}</p>
                </div>
                <div className="stat-card">
                    <h4>Average Rating</h4>
                    <p className="stat-value">{averageRating} ⭐</p>
                </div>
                <div className="stat-card">
                    <h4>In Stock</h4>
                    <p className="stat-value">
                        {products.filter(p => p.stock > 0).length}
                    </p>
                </div>
            </div>
        </div>
    );
}

/**
 * Main App Component
 */
function ProductApp() {
    return (
        <div className="app">
            <ProductCatalog />
        </div>
    );
}

export default ProductApp;