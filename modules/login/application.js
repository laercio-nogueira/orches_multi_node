const sessionHelper = require('./helpers/sessionHelper')
const createSession = require('./helpers/createSession')
const app = require('./helpers/expressHelper')

app.get('/', (req, res) => {

  const session_user = sessionHelper.getCookie(req, 'session_user')

  if (!session_user) {
    res.render('home')
    return
  }

  sessionHelper.verifyIfExpired(session_user) 
    ? res.redirect('/dashboard') 
    : res.render('home')
})

app.get('/login', (req, res) => {
  createSession(res)
  res.redirect('dashboard')
})

app.listen(8080, () => console.log(`Listen on port ${8080}`));