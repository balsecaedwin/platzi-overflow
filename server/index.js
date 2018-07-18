import http from 'http'
import Debug from 'debug'
import app from './app'

const PORT = 3000
const debug = new Debug('platzi-overflow:root')

// const app = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text-plain'})
//   res.write('Hola desde PlatziOverflow')
//   res.end()
// })

app.listen(PORT, () => {
  debug(`Server running at port ${PORT}`)
})
