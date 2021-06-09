This repo reproduces the error on vercel's deployments by not showing custom error pages instead of showing Vercel's 404 error. It seems related to next.js's locale feature. It happens if the locale feature is enabled. when error pages (_error.js 404.js, 500.js) are generated as lambda pages (By having getInitialProps in _app.js). But not when are generated as static pages.

Try to enable/disable locale feature in the next.config.js file.

Visit 404 urls like https://404-vercel-kg2rhxz55-yanawaro.vercel.app/test to see the error
