chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      const url = new URL(details.url);
      if (url.hostname === "chat.openai.com") {
        url.searchParams.set("model", "gpt-4");
        return { redirectUrl: url.href };
      }
    },
    // { urls: ["https://chat.openai.com/*"] },
      { urls: ["<all_urls>"] },
    ["blocking"]
  );
  