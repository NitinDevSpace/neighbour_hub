# Neighborhood Resource Sharing 🌍

A React-based community sharing platform for neighborhoods. Users can list, browse, and request items to borrow, promoting sustainable and collaborative living. This is a fully client-side mock project built without authentication or a backend.

---

## 🔗 Live Demo

You can check out the live project here: [Live Demo Link](https://neighbourshub.vercel.app/)

---

## 🧩 Features

- 🔄 Add new items with name, image, description, category, and condition
- 📦 View all items in a paginated catalog (10 per page)
- 🔍 View item details and request to borrow (mocked)
- 📁 Items can be marked as **sold** (updates React state)
- 🧾 My Requests section:
  - Statuses: `Pending`, `Approved`, `Returned`, `Cancelled`
  - Cancel a request (mocked)
  - Dynamic + hardcoded requests supported
- 👤 User Profile section:
  - Static user details (name, email, trust score)
  - Client-side profile editing
  - List of items lent & borrowed
- ❌ Custom 404 page
- 📱 Fully responsive layout with collapsible mobile navbar (slide-in panel)
- 🎨 Styled with Tailwind CSS
- 📚 Icon library: `lucide-react`
- 🧠 Global shared state via React Context API

---

## 🏗️ Tech Stack

- **React.js** (Create React App)
- **Tailwind CSS**
- **React Router DOM**
- **React Context API**
- **Lucide React** for clean UI icons

---

## 📁 Project Structure

```
neighbour_hub/
├── public/
├── src/
│   ├── Components/         # Reusable UI elements (Navbar, ItemCard, etc.)
│   ├── Pages/              # All route-level pages (Home, Profile, etc.)
│   ├── context/            # React Context for shared state
│   ├── App.js              # Routes and layout
│   └── index.js            # Entry point
```

---

## 🛠️ Getting Started

1. **Clone the repo**
```bash
git clone <repo-url>
cd neighbour_hub
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the dev server**
```bash
npm start
```

Then open `http://localhost:3000` in your browser.

---

## 📌 Notes

- 🔐 No backend or authentication implemented
- 🧪 All data is mocked in memory using React state
- 🗺️ Map functionality is intentionally excluded

---

Built with 💙 by **Nitin Kumar**
