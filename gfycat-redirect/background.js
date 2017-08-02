chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        if(info.method !== 'GET') return;
        if(info.url.substring(0, 31) !== 'https://gfycat.com/gifs/detail/') return;

        let parts = new URL(info.url).pathname.split('/');
        return {redirectUrl:'https://gfycat.com/'+parts[parts.length-1]};
    },
    {
        urls: [
            "https://gfycat.com/*"
        ],
        types: ["main_frame", "xmlhttprequest", "ping", "object", "other", "sub_frame", "media"]
    },
    ["blocking"]
);