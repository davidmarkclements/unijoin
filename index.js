'use strict'
const { join } = require('path')
const { fileURLToPath } = require('url')

module.exports = (...paths) => {
  return join(...paths.map((path) => {
    try { return fileURLToPath(path) } catch { return path }
  }))
}
