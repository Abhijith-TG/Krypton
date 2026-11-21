## ADR 001: Execution Environment for HTTP Engine

Build the engine on Node's native node:http / node:https (greatest learning value, complete control over sockets/timings, zero dependencies).


## What should we do with HeaderRow?

keep it in its seperate file for UI

## What can a Request Body actually be?

body?: string | Buffer | Uint8Array; this is the best option than doing JSON.stringfy with unknown type because if we follow first rule its predictable else its not predictable if the user gave a malformed json we wont be able to test it as well

Using Vitest for testing

## Timing Breakdown (Like Postman) - future update for now keep (elapsedTime: number;) else {
DNS Lookup (time to resolve the domain)
TCP Connection (time to complete TCP handshake)
TLS Handshake (time to negotiate HTTPS certificates)
TTFB (Time to First Byte - time waiting for the server to start replying)
Content Download (time to read all incoming response chunks)
}