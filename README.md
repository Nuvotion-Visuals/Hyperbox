# Hyperbox

Hyperbox is a minimalist homepage inspired by [Chromium's Omnibox](https://www.chromium.org/user-experience/omnibox/) designed for compatibility with text-based terminal web browsers like **w3m**, **lynx**, or **elinks**. It works with regular browsers as well.

![image](https://github.com/user-attachments/assets/df300251-ff32-42d0-8d1e-db94ce6ee5be)

Try it here: https://hyperbox.nuvotion.live

## Features

- **Search Google** or **navigate directly to a URL** using a single input field.

## How it Works

**w3m** and other text-based terminal web browsers may not support javascript, so form submission is powered by a Cloudflare Worker, which processes the input and redirects the user to either a Google search or the specified URL.

 Centering is achieved via legacy HTML tables, because CSS support is also not expected.

## How to Use

1. Deploy `index.html` to Cloudflare pages or host it elsewhere.
2. Deploy `worker.js` to Cloudflare Workers.
3. Ensure the URL of the form points to your Worker URL.
4. Fire up your terminal web browser and use the text input to either search Google or enter a URL.

## Why?

The Google homepage has too many elements to tab through in order to get to the search field, and it doesn't let you navigate directly to a website.

Some terminal web browsers require you to type in "https://" which can be annoying.
