function updateUrl(url) {
  const newUrl = new URL(url);
  if (newUrl.hostname === "chat.openai.com") {
    newUrl.searchParams.set("model", "gpt-4");
    return newUrl.href;
  }
  return url;
}

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     return { redirectUrl: updateUrl(details.url) };
//   },
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );

chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {
  if ((details.url == ("https://chat.openai.com") || details.url == ("https://chat.openai.com/")) && (!details.url.includes("?model=gpt-4"))) {
    chrome.tabs.update(details.tabId, {
      url: updateUrl(details.url),
    });
  }
});