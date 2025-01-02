# Hyperbox

Hyperbox is a minimalist homepage designed for compatibility with text-based terminal web browsers like **w3m**, **lynx**, or **elinks**. It works with regular browsers as well.

## Features

- **Search Google** or **navigate directly to a URL** using a single input field.

## Cloudflare Worker Integration

The form submission is powered by a Cloudflare Worker, which processes the input and redirects the user to either a Google search or the specified URL.

## How to Use

1. Host the `index.html` file on a web server or open it locally.
2. Deploy `worker.js` to Cloudflare.
3. Ensure the URL of the form points to your worker.
4. Fire up your terminal web browser and use the input field to search Google or enter a URL.

## Why?

The Google homepage has too many elements to tab through in order to get to the search field, and it doesn't let you go directly to a website.