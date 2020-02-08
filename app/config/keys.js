module.exports = {
  databaseURI:
    "mongodb+srv://alec:qhacks2020@cluster0-tk3xp.gcp.mongodb.net/brickhacks?retryWrites=true&w=majority",
  jwtSecret: "dasdkjasbdjsadbjasdba",
  links: {
    verifyEmail:
      "http://localhost:3000/public/user/authentication-services/confirm-email/",
    resetPasswordLink:
      "http://localhost:3000/authentication-services/recover-password/"
  }
};
