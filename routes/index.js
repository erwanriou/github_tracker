// REQUIRES FONCTION
const requires = (path, array) =>
  array.map(item => ({
    path: require(`../routes/${path}/${item}`),
    url: `/${path}/${item}`
  }))

let routes = ["repositories", "users"]
routes = requires("api", routes)

module.exports = routes = [...routes]
