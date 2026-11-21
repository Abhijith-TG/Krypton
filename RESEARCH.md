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

Jest vs Vitest

Search: [vitest vs jest](https://medium.com/on-tech-by-leighton/jest-vs-vitest-choosing-the-right-testing-framework-for-your-typescript-projects-07f23c4aa76c)
Question to answer: Which test runner are you choosing for Krypton, and why?

Ans: jest is a mature testing module while vitest is a latest one with typescript build in support and we don't need to install anything in a vite project for vitest. also vitest is faster compared to jest

so i think i can go with vitest also we only need to setup vite.

What should we do with HeaderRow?

keep it in its seperate file for UI

What can a Request Body actually be?

body?: string | Buffer | Uint8Array; this is the best option than doing JSON.stringfy with unknown type because if we follow first rule its predictable else its not predictable if the user gave a malformed json we wont be able to test it as well


In your own words, answer the two error questions above: Should a 404 Not Found reject the promise or resolve with { statusCode: 404 }? Why?


It should resolve with 404 status code, because the user should  know that tis route or data doesn't exist right instead of unexpected behaviour
