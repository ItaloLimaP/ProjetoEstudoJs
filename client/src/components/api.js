const axios = require("axios")

const api = axios.create({
  baseURL:"http://localhost:3000"
})

exports.festa = {
  list: _ => api.get("/festa/list"),
}