const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.marketingplatform.google.com/*"
						]
						
var callback = function(details) 
{
	console.log(details);
	return {cancel : true};
}
						
var filter = {urls : defaultFilters};

var extraInfoSpec = ["blocking"];
						
chrome.webRequest.onBeforeRequest.addListener(callback, filter, extraInfoSpec);