# urlshort
A URL shortener for Reaktor

Installation

```
npm install
node server.js
```
Use curl to post links to http://127.0.0.1:3000/shorten
An id is returned for each link, you can retrive the full links by GET http://127.0.0.1:3000/{id}
