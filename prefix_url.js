chrome.tabs.query({
    currentWindow: true,
    active: true,
}, ([tab]) => {
    // Check if tab.url exists and is a string
    if (typeof tab.url === "string") {
        console.log("Tab URL:", tab.url); // Log the tab URL for debugging
        try {
            const url = new URL(tab.url);
            chrome.tabs.update({
                url: 'https://ezproxy.gc.cuny.edu/login?url=' + tab.url,
            });
        } catch (e) {
            console.error("Error constructing URL with tab.url:", e);
        }
    } else {
        console.error("tab.url is not a string:", tab.url);
    }
});
