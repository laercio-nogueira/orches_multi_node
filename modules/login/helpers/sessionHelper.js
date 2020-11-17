const cookie = require('cookie')

module.exports = {
  getCookie(req, name) {
    const cookies = req.headers.cookie
    if (!cookies) return false
    
    const cookieMatch = cookie.parse(cookies)
    if (!cookieMatch[name]) return false
    return cookieMatch[name].split(';').map(item => item.trim())
  },
  
  verifyIfExpired (session_user) {
    const expires = JSON.parse(session_user).expiresIn
    console.log('-------------------------------')
    console.log((new Date()).toUTCString())
    console.log(new Date(expires).toUTCString())
    console.log('-------------------------------')
    return expires > new Date().getTime()
  },

  setTimeExpires (time) {
    return (new Date(Date.now() + time * 1000)).toUTCString()
  }
}