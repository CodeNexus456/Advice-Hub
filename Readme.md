# 💡 AdviceHub – Random Advice Generator

AdviceHub is a modern and responsive **Random Advice Generator** web application that fetches random pieces of advice using the **Advice Slip API**.

The project is built using **HTML, CSS, and Vanilla JavaScript** and demonstrates practical JavaScript concepts such as API integration, Fetch API, async/await, DOM manipulation, error handling, Clipboard API, and Web Share API.

## 🚀 Features

* 🎲 Generate random advice with one click
* 🌐 Fetch real-time data from Advice Slip API
* 📋 Copy advice to clipboard
* 📤 Share advice using Web Share API
* ⏳ Loading state while fetching data
* ⚠️ API error handling
* 📱 Fully responsive design
* ✨ Modern glassmorphism UI
* 🔄 Generate unlimited random advice
* 🆔 Display Advice ID
* 🎨 Smooth hover and transition effects

## 🛠️ Technologies Used

* **HTML5** – Website structure
* **CSS3** – Styling, responsive design, animations and glassmorphism
* **JavaScript (ES6+)** – Application logic and API integration
* **Fetch API** – Fetch data from the API
* **Advice Slip API** – Random advice provider
* **Clipboard API** – Copy advice
* **Web Share API** – Share advice

## 🔗 API Used

AdviceHub uses the Advice Slip API:

`https://api.adviceslip.com/advice`

Example response:

```json
{
  "slip": {
    "id": 157,
    "advice": "Don't watch the clock; do what it does. Keep going."
  }
}
```

## 📂 Project Structure

```text
AdviceHub/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How It Works

```text
User clicks "Get New Advice"
            ↓
JavaScript event listener
            ↓
Fetch API request
            ↓
Advice Slip API
            ↓
JSON response
            ↓
Extract advice and ID
            ↓
Update DOM
            ↓
Display advice card
```

## 🧠 JavaScript Concepts Used

This project demonstrates:

1. Variables – `let`, `const`
2. Functions
3. Arrow Functions
4. DOM Manipulation
5. `getElementById()`
6. `querySelector()`
7. Event Listeners
8. Template Literals
9. Objects
10. Destructuring
11. Arrays
12. Promises
13. `async/await`
14. Fetch API
15. JSON Parsing
16. `try/catch/finally`
17. Conditional Statements
18. Error Handling
19. Clipboard API
20. Web Share API
21. Loading State Management
22. Dynamic HTML Rendering

## 📋 Copy Advice

The project uses the Clipboard API:

```javascript
await navigator.clipboard.writeText(advice);
```

When the user clicks the **Copy** button, the current advice is copied to the clipboard and the button temporarily changes to **Copied!**.

## 📤 Share Advice

The application uses the browser's native Web Share API when available:

```javascript
navigator.share({
    title: "AdviceHub",
    text: advice
});
```

If Web Share is not supported, the application can provide a suitable fallback.

## ⚠️ Error Handling

API errors are handled using `try...catch...finally`.

```javascript
try {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch advice");
    }

    const data = await response.json();

} catch (error) {
    console.error(error);

} finally {
    // Hide loading state
}
```

## 📱 Responsive Design

AdviceHub is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📲 Tablet

CSS media queries are used to adapt the layout to different screen sizes.

## ▶️ Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/advicehub.git
```

### 2. Open the project

```bash
cd advicehub
```

### 3. Run the project

Open `index.html` in your browser.

For the best development experience, use **VS Code + Live Server**.

## 🌐 Deployment

The project can be deployed easily using:

* GitHub Pages
* Netlify
* Vercel

Since this is a frontend project, no backend server is required.

## 🎯 Project Purpose

This project was created to practice real-world **JavaScript API integration** and frontend development.

It demonstrates how a frontend application can:

* Send an API request
* Receive JSON data
* Process API responses
* Dynamically update the webpage
* Handle loading and errors
* Copy data to the clipboard
* Share content with users

## 🔮 Future Improvements

Possible future features:

* 🔍 Search advice by keyword
* ❤️ Save favorite advice
* 📚 Advice history
* 🌙 Dark/Light mode
* 🔗 Share directly to social media
* 💾 Store favorites using LocalStorage
* 📊 Advice statistics
* 🔔 Daily advice notification
* 🎨 Multiple UI themes

## 👨‍💻 Author

**Suraj Kumar**

B.Tech Computer Science & Engineering
Frontend / Full Stack Developer

### ⭐ If you like this project

Give the repository a ⭐ on GitHub and feel free to contribute!

---

**Built with ❤️ using HTML, CSS, JavaScript & Advice Slip API.**
