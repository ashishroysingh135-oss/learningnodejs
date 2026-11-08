
// =====================================
// NODE.JS LEARNING TOPICS
// =====================================

const basic = [
{
title: "Introduction to Node.js",
desc: "Understand what Node.js is and why developers use it.",
explain: "Node.js is an open-source JavaScript runtime environment. It allows developers to execute JavaScript outside the browser, especially for backend development.",
syntax: "node filename.js",
code: `console.log("Hello Node.js");`,
output: "Hello Node.js"
},
{
title: "Node.js Installation",
desc: "Install Node.js and start your development environment.",
explain: "Download Node.js from the official website. Choose the LTS version, install it, and verify the installation using your terminal.",
syntax: "node -v\nnpm -v",
code: `// Check Node.js version
node -v

// Check NPM version
npm -v`,
output: "Node.js and NPM version numbers"
},
{
title: "NPM",
desc: "Learn how to manage packages and dependencies.",
explain: "NPM stands for Node Package Manager. It helps developers install, manage and share JavaScript packages.",
syntax: "npm install package-name",
code: `npm init -y
npm install express`,
output: "A package.json file is created and Express is installed."
},
{
title: "Node.js Modules",
desc: "Understand how to organize code into reusable files.",
explain: "Modules allow developers to divide an application into separate files. Node.js supports CommonJS and ES Modules.",
syntax: "require() and module.exports",
code: `// math.js
function add(a, b) {
    return a + b;
}

module.exports = add;

// app.js
const add = require("./math");
console.log(add(10, 20));`,
output: "30"
},
{
title: "Callback Functions",
desc: "Understand functions passed into other functions.",
explain: "A callback is a function passed as an argument to another function. It can be executed after a particular operation completes.",
syntax: "function(first, callback) {}",
code: `function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("John", function() {
    console.log("Welcome!");
});`,
output: `Hello John
Welcome!`
},
{
title: "Promises",
desc: "Learn how JavaScript handles asynchronous operations.",
explain: "A Promise represents the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled and rejected.",
syntax: "new Promise((resolve, reject) => {})",
code: `const promise = new Promise((resolve, reject) => {
    resolve("Data received");
});

promise.then(result => {
    console.log(result);
});`,
output: "Data received"
},
{
title: "Async and Await",
desc: "Write asynchronous JavaScript in a readable way.",
explain: "Async and Await make Promise-based code easier to read. An async function returns a Promise, and await pauses that function until a Promise settles.",
syntax: "async function name() { await promise; }",
code: `async function getData() {
    const result = await Promise.resolve("Success");
    console.log(result);
}

getData();`,
output: "Success"
}
];

// =====================================
// ADVANCED LEARNING
// =====================================

const advanced = [
{
title: "Node.js HTTP Module",
desc: "Create web servers using the built-in HTTP module.",
explain: "The HTTP module allows Node.js to create servers, receive client requests and send HTTP responses.",
syntax: "http.createServer((req, res) => {})",
code: `const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js");
});

server.listen(3000);`,
output: "Server running on port 3000. Visit http://localhost:3000"
},
{
title: "Node.js File System",
desc: "Read, write and manage files.",
explain: "The fs module provides methods to interact with files and directories. It supports synchronous and asynchronous operations.",
syntax: "fs.readFile(path, callback)",
code: `const fs = require("fs");

fs.writeFile("demo.txt", "Hello Node.js", (err) => {
    if (err) throw err;

    console.log("File created");
});`,
output: "File created"
},
{
title: "Node.js Events",
desc: "Understand event-driven programming.",
explain: "Node.js uses an event-driven architecture. The EventEmitter class lets developers create, listen for and respond to custom events.",
syntax: "emitter.on() and emitter.emit()",
code: `const EventEmitter = require("events");

const event = new EventEmitter();

event.on("greet", () => {
    console.log("Hello Event!");
});

event.emit("greet");`,
output: "Hello Event!"
},
{
title: "Node.js Event Loop",
desc: "Understand how Node.js handles asynchronous tasks.",
explain: "The event loop coordinates asynchronous callbacks and allows Node.js to handle many operations without blocking the main JavaScript execution thread.",
syntax: "Call Stack → Event Loop → Callbacks",
code: `console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 0);

console.log("End");`,
output: `Start
End
Timer`
},
{
title: "Node.js Email (Nodemailer)",
desc: "Learn how to send emails using Node.js.",
explain: "Nodemailer is a popular package for sending emails from Node.js applications using SMTP or other supported transports.",
syntax: "transporter.sendMail(options)",
code: `const nodemailer = require("nodemailer");

// Configure transporter with your SMTP credentials
// Store credentials in environment variables.

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

async function sendEmail() {
    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: "user@example.com",
        subject: "Welcome",
        text: "Welcome to Node.js"
    });

    console.log("Email sent");
}`,
output: "Email sent (when valid SMTP settings are configured)"
},
{
title: "Express.js Basics",
desc: "Build backend applications using Express.",
explain: "Express.js is a web framework for Node.js. It simplifies routing, middleware and HTTP request handling.",
syntax: "app.get(path, callback)",
code: `const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Express");
});

app.listen(3000, () => {
    console.log("Server started");
});`,
output: "Server started. Open http://localhost:3000"
},
{
title: "REST API Basics",
desc: "Understand how backend APIs communicate.",
explain: "REST is an architectural style for designing APIs. It commonly uses HTTP methods such as GET, POST, PUT, PATCH and DELETE to work with resources.",
syntax: "GET / POST / PUT / DELETE",
code: `const express = require("express");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
    res.json({
        message: "User list",
        users: ["John", "Alex"]
    });
});

app.listen(3000);`,
output: `{
  "message": "User list",
  "users": ["John", "Alex"]
}`
}
];

// =====================================
// LEARN MORE
// =====================================

const more = [
{
title: "Node.js Path Module",
desc: "Work with file and directory paths.",
explain: "The Path module provides utilities for handling and transforming file paths.",
syntax: "path.join()",
code: `const path = require("path");

const result = path.join("folder", "file.txt");

console.log(result);`,
output: "folder/file.txt (on Linux and macOS)"
},
{
title: "Node.js OS Module",
desc: "Get information about the operating system.",
explain: "The OS module provides information about the operating system, memory, CPU and system architecture.",
syntax: "os.platform()",
code: `const os = require("os");

console.log(os.platform());
console.log(os.arch());`,
output: "Your operating system platform and architecture"
},
{
title: "Node.js URL Module",
desc: "Parse and work with URLs.",
explain: "The URL class provides functionality to create, parse and manipulate URLs.",
syntax: "new URL(address)",
code: `const myURL = new URL(
    "https://example.com/users?id=10"
);

console.log(myURL.hostname);
console.log(myURL.searchParams.get("id"));`,
output: `example.com
10`
},
{
title: "Node.js Streams",
desc: "Process data in smaller chunks.",
explain: "Streams allow applications to read or write data piece by piece instead of loading everything into memory at once.",
syntax: "fs.createReadStream()",
code: `const fs = require("fs");

const stream = fs.createReadStream("demo.txt");

stream.on("data", chunk => {
    console.log(chunk.toString());
});`,
output: "Displays the file contents in chunks"
},
{
title: "Node.js Buffers",
desc: "Work with binary data.",
explain: "Buffers are used to handle raw binary data in Node.js, such as file data and network packets.",
syntax: "Buffer.from()",
code: `const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());`,
output: `Binary buffer data
Hello`
}
];

// =====================================
// DISPLAY TOPIC CARDS
// =====================================

function displayTopics(topics, containerId) {

    const container = document.getElementById(containerId);

    container.innerHTML = topics.map((topic, index) => `
        <div class="topic-card">
            <h3>${topic.title}</h3>
            <p>${topic.desc}</p>

            <button onclick="openLesson('${containerId}', ${index})">
                Learn More →
            </button>
        </div>
    `).join("");
}

displayTopics(basic, "basicTopics");
displayTopics(advanced, "advancedTopics");
displayTopics(more, "moreTopics");

// =====================================
// OPEN LESSON
// =====================================

function openLesson(category, index) {

    let topic;

    if (category === "basicTopics") {
        topic = basic[index];
    } else if (category === "advancedTopics") {
        topic = advanced[index];
    } else {
        topic = more[index];
    }

    document.getElementById("home").style.display = "none";
    document.querySelectorAll(".learning-section")
        .forEach(section => section.style.display = "none");

    const lesson = document.getElementById("lesson");
    lesson.style.display = "block";

    document.getElementById("lessonContent").innerHTML = `
        <h1>${topic.title}</h1>

        <h2>Explanation</h2>
        <p>${topic.explain}</p>

        <h2>Syntax</h2>
        <pre>${topic.syntax}</pre>

        <h2>Code Example</h2>
        <pre>${topic.code.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")}</pre>

        <h2>Expected Output</h2>
        <div class="output">
            <pre>${topic.output}</pre>
        </div>
    `;

    window.scrollTo(0, 0);
}

// =====================================
// HOMEPAGE NAVIGATION
// =====================================

function showHome() {

    document.getElementById("home").style.display = "block";

    document.querySelectorAll(".learning-section")
        .forEach(section => section.style.display = "block");

    document.getElementById("lesson").style.display = "none";

    window.scrollTo(0, 0);
}

// =====================================
// SECTION NAVIGATION
// =====================================

function showSection(sectionId) {

    showHome();

    setTimeout(() => {
        document.getElementById(sectionId)
            .scrollIntoView({ behavior: "smooth" });
    }, 100);
}
