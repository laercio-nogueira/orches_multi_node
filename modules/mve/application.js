const sessionHelper = require('./helpers/sessionHelper')
const app = require('./helpers/expressHelper')

app.get('/dashboard', (req, res) => {

  const session_user = sessionHelper.getCookie(req, 'session_user')

  if (session_user && sessionHelper.verifyIfExpired(session_user)) {
    res.render('dashboard')
  } else {
    res.redirect('/')
  }
})

app.listen(8081, () => console.log(`Listen on port ${8081}`));