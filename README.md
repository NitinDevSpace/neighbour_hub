
# Neighborhood Resource Sharing 🌍

This is a web application that allows users to lend, borrow, and browse household items shared within a neighborhood. It is built using **React.js** (with Create React App) and styled with **Tailwind CSS**. The project simulates local community sharing without the need for a backend or user authentication.

## 🚀 Features

- ✅ Add new items to share (with name, description, category, image, and condition)
- ✅ View all available items on the Home page
- ✅ View item details with borrowing status
- ✅ Mark items as sold directly from the catalog
- ✅ Responsive design with Tailwind CSS
- ✅ Fully working routes and 404 page
- ✅ Global state managed with React Context API
- ✅ Pagination of items (10 per page)
- ✅ "My Requests" and "User Profile" sections (static for now)

## 📁 Folder Structure

```
neighbour_hub/
├── public/
├── src/
│   ├── Components/         # Reusable components (ItemCard, Navbar, etc.)
│   ├── Pages/              # Main pages (Home, AddItem, ItemDetails, etc.)
│   ├── context/            # Global state using React Context
│   ├── App.js              # Route definitions
│   └── index.js            # App entry point
```

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd neighbour_hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

Visit `http://localhost:3000` to see the app in action.

## 📦 Tech Stack

- **React.js** (CRA)
- **Tailwind CSS**
- **React Router**
- **React Context API**

---

Built with 💙 by Nitin kumar
