const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/404.js"))),
  "component---src-pages-earth-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/earth.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/index.js"))),
  "component---src-pages-jupiter-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/jupiter.js"))),
  "component---src-pages-mars-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/mars.js"))),
  "component---src-pages-neptune-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/neptune.js"))),
  "component---src-pages-planets-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/planets.js"))),
  "component---src-pages-saturn-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/saturn.js"))),
  "component---src-pages-uranus-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/uranus.js"))),
  "component---src-pages-venus-js": hot(preferDefault(require("/Users/chrisyoung/Documents/web-development/gatsby/planets-fact-site/gatsby/src/pages/venus.js")))
}

