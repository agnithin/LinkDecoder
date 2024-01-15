browser.menus.create({
  id: "link-decoder-open",
  title: "# Parse and decode",
  contexts: ["link"]
});
 
browser.menus.onClicked.addListener(async function (info, tab) {
  if (info.menuItemId == "link-decoder-open") {
    if (info.linkUrl) {
      let url = new URL(info.linkUrl);
      const urlParams = new URLSearchParams(url.search);
      if (!urlParams.has('url')) {
        console.error("Link does not have \"url\" param")
        return;
      }
      // parse the "url" param for the link
      const base64EncUrl = urlParams.get('url')
      // base64 decode the link
      try {
        const finalUrl = atob(base64EncUrl)

        let newTab = await browser.tabs.create({ 'active': false, 'url': finalUrl, 'index': tab.index+1 });
        //browser.tabs.update(newTab.id, { 'muted': true });
      } catch(e) {
        console.error("Error decoding url param: {}", e)
        return;
      }
    }
  }
});