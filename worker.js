export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.searchParams.get("url");

    if (!target) {
      return new Response("No URL specified", { status: 400 });
    }

    // Check if input looks like a domain or URL
    const isLikelyDomain = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(target) || target.startsWith("http");

    if (isLikelyDomain) {
      const formattedURL = target.startsWith("http") ? target : `https://${target}`;
      return Response.redirect(formattedURL, 302);
    } 
    else {
      // If not a valid domain, redirect to Google search
      const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(target)}`;
      return Response.redirect(googleSearchURL, 302);
    }
  }
};
