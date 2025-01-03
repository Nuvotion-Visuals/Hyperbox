# Hyperbox

Hyperbox is a minimalist web navigation tool for text-based terminal web browsers like w3m, lynx, and elinks, inspired by [Chromium's Omnibox](https://www.chromium.org/user-experience/omnibox/). It provides a single search bar for web searches and direct URL access.

![Hyperbox](https://github.com/user-attachments/assets/92c0b431-245f-49ac-8fb6-e49e5e81e799)

Try it here: https://hyperbox.nuvotion.live

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/Nuvotion-Visuals/Hyperbox)

## Features

- **Search the web** or **navigate directly to a URL** using a single input field.
- Search on various platforms using **bangs**.

## How it Works

**w3m** and other text-based terminal web browsers may not support javascript, so form submission is powered by a Cloudflare Worker, which processes the input and redirects the user to either a Google search or the specified URL.

 Centering is achieved via legacy HTML tables, because CSS support is also not expected.

## Why?

The Google homepage has too many elements to tab through in order to get to the search field, and it doesn't let you navigate directly to a website.

Some terminal web browsers require you to type in "https://" which can be annoying.

## How to Use

1. Deploy `worker.js` to Cloudflare.
2. Launch your terminal web browser and use the text input to either search the web or enter a URL.

## Using Bangs

Hyperbox supports "bangs" to let you search directly on various platforms by using a specific prefix in your query. To use a bang, type the bang followed by your search query in the input box. 

For example:
- Typing `!yt Jim Noir` will search for "Jim Noir" on YouTube.
- Typing `!w Pink Floyd` will search for "Pink Floyd" on Wikipedia.

If no bang is used, the query will default to a Google search / website navigation.

### Supported Bangs

| Bang     | Platform                     |
|----------|------------------------------|
| `!g`     | Google Search                |
| `!y`     | Yahoo                        |
| `!br`    | Brave Search                 |
| `!ddg`   | DuckDuckGo                   |
| `!w`     | Wikipedia                    |
| `!medium` | Medium                      |
| `!yt`    | YouTube                      |
| `!r`     | Reddit                       |
| `!a`     | Amazon                       |
| `!eb`    | eBay                         |
| `!ae`    | AliExpress                   |
| `!et`    | Etsy                         |
| `!gh`    | GitHub                       |
| `!npm`   | NPM                          |
| `!dh`    | Docker Hub                   |
