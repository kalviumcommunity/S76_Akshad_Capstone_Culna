# CLUNA AI

CLUNA AI is an intelligent AI-powered recipe generator that creates personalized recipes based on user-provided ingredients, dietary preferences, and cuisine choices. The platform helps users reduce food waste and discover creative meal ideas instantly.

---

## Overview

CLUNA AI solves a common problem:  
**“What can I cook with the ingredients I already have?”**

Using AI, the system generates structured recipes that include:
- Ingredients list
- Step-by-step cooking instructions
- Preparation time
- Serving suggestions

---

## Features

- AI-powered recipe generation
- Ingredient-based search
- Dietary preference filtering (Vegetarian, Vegan, etc.)
- Cuisine-based suggestions
- Clean and responsive UI
- REST API backend integration

---

## Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### AI Integration
- OpenAI API (or any AI model used)

---

## Project Structure

CLUNA-AI/
│
├── client/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── server.js
│   ├── routes/
│   └── models/
│
├── .env
├── package.json
└── README.md

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cluna-ai.git
cd cluna-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_api_key
```

### 4. Run the Server

```bash
npm start
```

Server runs on:
```
http://localhost:5000
```

---

## How It Works

1. User enters available ingredients.
2. User selects dietary preference or cuisine (optional).
3. Frontend sends request to backend.
4. Backend calls AI API.
5. AI generates a structured recipe.
6. Recipe is returned and displayed.

---

## API Endpoint

### Generate Recipe

**POST** `/api/recipe/generate`

#### Request Body

```json
{
  "ingredients": ["tomato", "onion", "rice"],
  "diet": "vegetarian",
  "cuisine": "Indian"
}
```

#### Response

```json
{
  "title": "Tomato Rice Delight",
  "ingredients": ["tomato", "onion", "rice", "spices"],
  "instructions": ["Step 1...", "Step 2..."],
  "prepTime": "30 minutes"
}
```

---

## Future Enhancements

- User authentication
- Save favorite recipes
- Nutrition calculator
- Meal planner
- Voice input support
- Mobile application

---

## Problem Statement

Many people struggle with deciding what to cook using available ingredients. CLUNA AI reduces food waste and provides instant cooking inspiration through AI-generated recipes.

---

## License

This project is open-source and available under the MIT License.

This is my project plan