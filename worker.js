export default {
  async fetch(request) {
    const url = new URL(request.url)
    const hasParams = url.searchParams.toString().length > 0

    if (url.pathname === '/' && !hasParams) {
      return new Response(HTML, {
        headers: {
          'content-type': 'text/html;charset=UTF-8'
        }
      })
    }

    const target = url.searchParams.get('url')
    if (!target) {
      return new Response('No URL specified', { status: 400 })
    }

    // Check if input looks like a domain or URL
    const isLikelyDomainOrURL = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/.*)?$/.test(target)
    if (isLikelyDomainOrURL) {
      const formattedURL = target.startsWith('http') ? target : `https://${target}`
      return Response.redirect(formattedURL, 302)
    }

    // Define bangs for supported search engines 
    const bangs = {
      '!g': 'https://www.google.com/search?q=',
      '!y': 'https://search.yahoo.com/search?p=',
      '!br': 'https://search.brave.com/search?q=',
      '!ddg': 'https://duckduckgo.com/?q=',
      '!medium': 'https://medium.com/search?q=',
      '!w': 'https://en.wikipedia.org/wiki/Special:Search?search=',
      '!a': 'https://www.amazon.com/s?k=',
      '!eb': 'https://www.ebay.com/sch/i.html?_nkw=',
      '!ae': 'https://aliexpress.com/wholesale?SearchText=',
      '!et': 'https://www.etsy.com/search?q=',
      '!yt': 'https://www.youtube.com/results?search_query=',
      '!r': 'https://www.reddit.com/search?q=',
      '!gh': 'https://github.com/search?q=',
      '!npm': 'https://www.npmjs.com/search?q=',
      '!dh': 'https://hub.docker.com/search?q='
    }

    const trimmedTarget = target.trim()
    const [bang, ...queryParts] = trimmedTarget.split(/\s+/)
    const query = queryParts.join(' ').trim()

    if (bang in bangs) {
      const searchURL = `${bangs[bang]}${encodeURIComponent(query)}`
      return Response.redirect(searchURL, 302)
    }

    // Default to Google if no valid bang is found
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(target)}`
    return Response.redirect(googleSearchURL, 302)
  }
}

const HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Hyperbox</title>
    <style>
      body {
        margin: 0;
        background-color: black;
        color: lightgrey;
        font-family: 'Arial', sans-serif;
      }

      input {
        background-color: black;
        border: 1px solid lightgrey;
        padding: .5rem 1rem;
        margin-bottom: .75rem;
        border-radius: 1rem;
        ;
        width: 300px;
        color: lightgrey;
      }

      button {
        padding: .5rem 2rem;
        background-color: black;
        border: 1px solid lightgrey;
        color: lightgrey;
        border-radius: .5rem;
        ;
      }
    </style>
  </head>
  <body>
    <table width="100%" height="100%" border="0">
      <tr>
        <td align="center" valign="middle">⠀</td>
      </tr>
      <tr>
        <td align="center" valign="middle"></td>
      </tr>
      <tr>
        <td align="center" valign="middle">⠀</td>
      </tr>
      <tr>
        <td align="center" valign="middle"></td>
      </tr>
      <tr>
        <td align="center" valign="middle">⠀</td>
      </tr>
      <tr>
        <td align="center" valign="middle"></td>
      </tr>
      <tr>
        <td align="center" valign="middle">⠀</td>
      </tr>
      <tr>
        <td align="center" valign="middle"></td>
      </tr>
      <tr>
        <td align="center" valign="middle">Search the web or type a URL</td>
      </tr>
      <tr>
        <td align="center" valign="middle">⠀</td>
      </tr>
      <tr>
        <td align="center" valign="middle">
          <form action="/" method="GET">
            <input type="text" name="url" required autofocus autocomplete="off">
            <br>
            <button type="submit">Enter</button>
          </form>
        </td>
      </tr>
    </table>
  </body>
</html>`