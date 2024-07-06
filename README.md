# SWYT App

SWYT App developed on React TypeScript frontend and a Node.js JavaScript backend. It allows users to create products, list them, and filter products by category.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)

## Prerequisites

- Node.js (version 20 or higher)
- MongoDB

## Installation

1. Clone the repository:
git clone https://github.com/Visanth-fullStack/swyt-app.git
2. cd swyt-app
3. Install the dependencies:
npm install
4. Set up environment variables:
Create a `.env` file in the `swyt-app` directory with the following content:
MONGODB_URI=mongodb://localhost:27017/products-listing

## Running the Application
1. Start the backend server: node app.js
The server will run on `http://localhost:5000`.

## API Endpoints
### Create Product
```
Endpoint:POST /api/products
Content-Type: multipart/form-data
Form Data:
  name: string
  description: string
  price: number
  categories: JSON string of category IDs
  image: file
```
### GetProducts
```
Endpoint: GET /api/products
Query Parameters:
  categoryName: String (optional) //Filters products based on category name
  sortPrice: asc (optional) // List based on Ascending or descending order
```
### Get Categories
```
Endpoint: GET /api/categories
```

