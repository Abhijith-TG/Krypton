Archetecture for Krypton

- The UI will use Electron and the request engine will be typescript with node js. An Isolated reqest engine is the best approach as it helps resolve issues that can happen in CORS, localhost testing. Using fetch or axios can triggeCORS and other request issues. So a node js request engine is better option.

Advanages

- Blazing fast testing: You can write automated tests in Vitest and test your engine in 50 milliseconds directly in your terminal without launching a heavy Electron window.
- Reusability: Later, you can build a CLI tool (like Postman's newman) using the exact same engine.
- Clean mental model: Network bugs stay in the engine; rendering bugs stay in the UI

Conclusion

- Krypton's HTTP execution must run in Node.js (Electron's Main / background layer), never in the browser UI. Node.js is a server runtime with direct TCP socket access—it has no CORS, no forbidden headers, and full control over TLS.