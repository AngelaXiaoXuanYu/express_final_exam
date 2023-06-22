// require packages used in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const titles = [
  { title: `about`, content: `About`},
  { title: `portfolio`, content: `Portfolio`},
  { title: `contact`, content: `Contact`}
] 

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { content: `首頁` })
})

app.get('/:title', (req, res) => {
  console.log('req.params.title', req.params.title)
  const title = titles.find(title => title.title === req.params.title)
  const content = title.content
  res.render('index', { content : content })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})