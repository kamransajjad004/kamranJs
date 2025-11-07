// Asynchronous (Non-Blocking)

// These are delegated to the browser or Node.js APIs and run in the
// background, allowing JS to move on

// Common Asynch operations


// | *Type*                  | *Examples*                                             |
// |-------------------------|--------------------------------------------------------|
// | Timers*                 | setTimeout(), setInterval()                           |
// | Promises                | Promise.resolve(), Promise.reject(), .then(), .catch()                 |
// | Async Functions         | async function getData() { await fetch(...) }                      |
// | Fetch API               | fetch("https://api.example.com")                        |
// | Network Requests        | XMLHttpRequest, axios.get()                           |
// | File System (Node.js)   | fs.readFile(), fs.writeFile() (async versions)                    |
// | Database Queries        | MongoDB, MySQL queries, etc.                         |
// | Event listeners         | button.addEventListener("click", ...)                  |
// | Animation frames        | requestAnimationframe()                                |
// | Web Workers             | Background threads for heavy computation               |

// These are handled by the Event loop, Web APIs, and Callback Queue _
// They don't block other code. 