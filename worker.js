export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");

    if (!target) {
      return new Response("No URL specified", { status: 400 });
    }

    // Check if input looks like a domain or URL
    const isLikelyDomainOrURL = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/.*)?$/.test(target);

    if (isLikelyDomainOrURL) {
      // Ensure the URL starts with http/https
      const formattedURL = target.startsWith("http") ? target : `https://${target}`;
      return Response.redirect(formattedURL, 302);
    } 


    // Define bangs for supported search engines
    const bangs = {
      // General search engines
      "!g": "https://www.google.com/search?q=",
      "!b": "https://www.bing.com/search?q=",
      "!y": "https://search.yahoo.com/search?p=",
      "!br": "https://search.brave.com/search?q=",
      "!ddg": "https://duckduckgo.com/?q=",

      // Blogging
      "!medium": "https://medium.com/search?q=",
    
      // Educational and technical
      "!w": "https://en.wikipedia.org/wiki/",
      "!mdn": "https://developer.mozilla.org/en-US/search?q=",
      "!gs": "https://scholar.google.com/scholar?q=",
      "!arxiv": "https://arxiv.org/search/?query=",
    
      // Shopping and e-commerce
      "!a": "https://www.amazon.com/s?k=",
      "!eb": "https://www.ebay.com/sch/i.html?_nkw=",
      "!ae": "https://www.aliexpress.com/wholesale?SearchText=",
      "!et": "https://www.etsy.com/search?q=",
    
      // Entertainment
      "!yt": "https://www.youtube.com/results?search_query=",
      "!r": "https://www.reddit.com/search/?q=",
      "!sp": "https://open.spotify.com/search/",
      "!gr": "https://www.goodreads.com/search?q=",
      "!imdb": "https://www.imdb.com/find?q=",
      "!lb": "https://letterboxd.com/search/",
    
      // Programming and DevOps
      "!gh": "https://github.com/search?q=",
      "!npm": "https://www.npmjs.com/search?q=",
      "!dh": "https://hub.docker.com/search?q=",
      "!rust": "https://docs.rs/crate/",
    
      // Travel and navigation
      "!flights": "https://www.google.com/flights?hl=en#flt=",
      "!ta": "https://www.tripadvisor.com/Search?q=",
      "!osm": "https://www.openstreetmap.org/search?query=",
      "!m": "https://www.google.com/maps/search/",
    
      // Specialized searches
      "!flickr": "https://www.flickr.com/search/?text=",
      "!twitch": "https://www.twitch.tv/search?term=",
    
      // Social and communities
      "!pin": "https://www.pinterest.com/search/pins/?q=",
      "!discord": "https://disboard.org/search/",
      "!tt": "https://www.tiktok.com/search?q="
    };

    // Check for a bang in the input
    const [bang, ...queryParts] = target.split(" ");
    const query = queryParts.join(" ");

    if (bang in bangs) {
      const searchURL = `${bangs[bang]}${encodeURIComponent(query)}`;
      return Response.redirect(searchURL, 302);
    }

    // Default to Google if no valid bang is found
    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(target)}`;
    return Response.redirect(googleSearchURL, 302);
  }
};
