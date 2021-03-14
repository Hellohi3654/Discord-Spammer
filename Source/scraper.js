const request = require('request');

var scrapeProxies = new Promise((resolve, reject) => {
    request({
        method: "GET",
        url: "https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all",
    }, (error, response, body) => {
        if (body) {
            return resolve(body.split("\n"));
        } else {
            return reject();
        }
    });
});

module.exports = { scrapeProxies };
