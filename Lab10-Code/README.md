# Lab 10: Server-side technologies - C# WebAPI Basics

## Prerequisites

- Visual Studio 2022+
- .NET 8.0 SDK
- Administrator privileges

---

## Setup Instructions (Visual Studio)

### Step 1: Create ASP.NET Core Web API Project

1. Open **Visual Studio 2022**
2. Click **Create a new project**
3. Search: `ASP.NET Core Web API`
4. Click **Next**
5. Project name: `LabWebAPI`
6. Location: Choose your folder
7. Click **Next**
8. Framework: `.NET 8.0 (Long-term support)` ✅
9. Authentication: **None**
10. Click **Create**

### Step 2: Copy Program.cs

1. In **Solution Explorer**, open `Program.cs`
2. Delete all content
3. Copy-paste from repo's `Program.cs` file
4. Save (Ctrl+S)

### Step 3: Copy ProductsController.cs

1. Right-click **Controllers** folder
2. Add → Class → `ProductsController.cs`
3. Delete default content
4. Copy-paste from repo's `ProductsController.cs` file
5. Save (Ctrl+S)

### Step 4: Run Project

1. Press **Ctrl + F5** (Run without debugging)
2. Browser opens automatically
3. If HTTPS error appears → Use `http://localhost:<port>` instead

---

## Testing Lab Tasks

### Task 1: POST Method for Adding Products

**Test in Swagger UI:**

1. Application loads → `/swagger/index.html` appears automatically
2. Click **POST /api/products** → Expand section
3. Click **Try it out**
4. Enter JSON body:

    ```json
    {
    "name": "New Laptop",
    "price": 50000
    }
    ```

5. Click **Execute**

6. Expected Response (201 Created):

    ```json
    {
    "id": 77,
    "name": "New Laptop",
    "price": 50000
    }
    ```

**Verify with GET:**

- Click **GET /api/products**
- Execute
- New product should appear in list

---

### Task 2: Validation Testing

- **Test 1: Missing Name (Should Fail)**

1. POST /api/products
2. Enter: `{"name": "", "price": 5000}`
3. Click Execute
4. Expected: **400 Bad Request** with validation error

- **Test 2: Missing Price (Should Fail)**

1. POST /api/products
2. Enter: `{"name": "Test", "price": null}`
3. Click Execute
4. Expected: **400 Bad Request**

- **Test 3: Invalid Price (Should Fail)**

1. POST /api/products
2. Enter: `{"name": "Test", "price": -100}`
3. Click Execute
4. Expected: **400 Bad Request** (Price must be > 0)

- **Test 4: Valid Request (Should Pass)**

1. POST /api/products
2. Enter: `{"name": "Valid Product", "price": 1500}`
3. Click Execute
4. Expected: **201 Created** with product details

---

## Testing All Endpoints

### GET - Retrieve All Products

**Request:** `/api/products`  
**Expected:** Returns array of products  

### GET - Retrieve by ID

**Request:** `/api/products/69`  
**Expected:** Returns single product  

### PUT - Update Product

**Request:** `/api/products/69`  
**Body:** `{"name": "Updated Shirt", "price": 4000}`  
**Expected:** 200 OK with updated data  

### DELETE - Remove Product

**Request:** `/api/products/75`  
**Expected:** 204 No Content  

---

## Project Structure

```bash
LabWebAPI/
├── Controllers/
│   └── ProductsController.cs     (Copy from repo)
├── Program.cs                     (Copy from repo)
├── appsettings.json
└── Properties/
    └── launchSettings.json
```

---

## Theory Answers

See `THEORY_ANSWERS.md` file

---

## Troubleshooting

```bash
| Issue | Solution |
|-------|----------|
| HTTPS Error | Remove HTTPS in `launchSettings.json` line |
| Port Already in Use | Change port in `launchSettings.json` |
| Swagger Not Loading | Ensure `Program.cs` has `app.UseSwagger()` |
| Validation Not Working | Check `[Required]` and `[Range]` attributes in DTO |
```

---

## Success Checklist

- ✅ Project created in Visual Studio
- ✅ Files copied from repo
- ✅ Application runs without errors
- ✅ Swagger UI loads
- ✅ Task 1: POST creates products with 201 response
- ✅ Task 2: Validation rejects invalid data with 400 errors
- ✅ All 5 HTTP methods work (GET, GET by ID, POST, PUT, DELETE)
