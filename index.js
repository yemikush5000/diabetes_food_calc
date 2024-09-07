import express from 'express';
const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home.ejs')
})

app.get('/carb/calculator', (req, res) => {
    res.send('<h1>result of your carb is 0</h1>')
  })

app.get('/food/store', (req, res) => {
    res.send('<h1>store your food in the database</h1>')
  })

app.get('/daily/carb/report', (req, res) => {
    res.send('<h1>know about of carb consumed at different durations</h1>')
  })

app.get('/insulin/report', (req, res) => {
    res.send('<h1>know the insulin usage for different durations</h1>')
  })

app.get('/about', (req, res) => {
    res.send('<h1>We aim to solve the total carb in your mixed diet combined</h1>')
  })

app.get('/disclaimer', (req, res) => {
    res.send('<p><b>We are not saying it;s one hundred % accurate</b></p>')
  })

app.get('/search', (req, res) => {
    res.send('<hp><b>get your search result here</b></p>')
  })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
