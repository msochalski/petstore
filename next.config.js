module.exports = {
  reactStrictMode: true,
  loaders: [
    { test: /\.html$/, loader: 'html-loader' }
  ]
}
rewrites: async () => [
  {
    source: "/public/dog.html",
    destination: "/pages/api/dog.js",
  },
  {
    source: "/public/cat.html",
    destination: "/pages/api/cat.js",
  },
  {
    source: "/public/home.html",
    destination: "/pages/api/home.js",
  },
  {
    source: "/public/food.html",
    destination: "/pages/api/food.js",
  },
  {
    source: "/public/login.html",
    destination: "/pages/api/login.js",
  },
]