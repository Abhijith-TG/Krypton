MDN: Forbidden Header Name

Search: MDN forbidden header names
Question to answer: If a developer using Krypton wants to test custom headers like Cookie, Origin, User-Agent, or Host, will a standard browser fetch() let JavaScript set them? Why or why not?

Ans: No if we use fetch or axios the browser will check cors policies and other user-agent policies and block the request and if explicitly add the policies the browser will block them.

MDN: Cross-Origin Resource Sharing (CORS)

Search: MDN CORS
Question to answer: If Krypton is running a web page at http://localhost:5173 and the user tries to send a GET request to https://api.github.com or their private backend at http://localhost:8080, what will the browser do if the server doesn't send Access-Control-Allow-Origin headers?

Ans: The browser will block the request and show an error in the console.

TypeScript Design: In TypeScript, what is the runtime and compile-time difference between using a const enum / enum versus a string literal union type (e.g., 'GET' | 'POST' | ...) for HttpMethod? Which one are you choosing for Krypton, and why?

Ans: Using types will be the best way, its easy by the way. enums requires importing the http but types can handle raw strings like 'GET', 'POST' directly. 