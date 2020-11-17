module.exports = (res) => {
  const userSession = {
    accessToken: 'a9908978675ata',
    expiresIn: Date.now() + 60 * 1000,
    documentId: '23456',
  }
  res.cookie(
    'session_user', 
    JSON.stringify(userSession), 
    { secure: true, httpOnly: true }
  );
}