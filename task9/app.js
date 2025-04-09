const express = require('express');
const app = express();
const PORT = 3000;

// ==============================
// 1. Callback Function
// ==============================
function fetchDataFromDB(callback) {
    console.log("📡 [DB] Fetching user from database...");

    setTimeout(() => {
        const user = {
            id: 1,
            name: "Alice",
            hobby: "📚 Reading, 🎵 Music"
        };
        console.log("✅ [DB] User data fetched successfully.");
        callback(user);
    }, 2000);
}

// ==============================
// 2. Event Loop Demo
// ==============================
console.log("🔁 [Loop] Event Loop Demo Starts");

setTimeout(() => {
    console.log("⏳ [setTimeout] Executed after delay (0ms)");
}, 0);

Promise.resolve().then(() => {
    console.log("📌 [Promise] Microtask executed");
});

console.log("🔁 [Loop] Event Loop Demo Ends");

// ==============================
// 3. Express Routes
// ==============================

// 🏠 Home Route
app.get('/', (req, res) => {
    res.send(`
        <h1>👋 Welcome to the Creative Node.js Express App 🚀</h1>
        <p>Explore the endpoints:</p>
        <ul>
            <li><a href="/user">/user</a> – Get user data (via callback)</li>
            <li><a href="/about">/about</a> – Learn about this app</li>
        </ul>
    `);
});

// 👤 User Route using Callback
app.get('/user', (req, res) => {
    fetchDataFromDB((user) => {
        res.json({
            message: "🎉 User fetched using a callback!",
            data: user
        });
    });
});

// 📘 About Route
app.get('/about', (req, res) => {
    res.send(`
        <h2>About This App 💡</h2>
        <p>This app showcases:</p>
        <ul>
            <li>✅ Callbacks</li>
            <li>🔁 Event Loop Behavior</li>
            <li>🚀 Express.js Basics</li>
        </ul>
        <p>All in one file – clean, simple, and fun!</p>
    `);
});

// 🚀 Start the Server
app.listen(PORT, () => {
    console.log(`\n🚀 Server is live at: http://localhost:${PORT}`);
    console.log("🌐 Try visiting: '/', '/user', or '/about'\n");
});
