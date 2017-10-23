module.exports = {
  db: {
    url: "mongodb://localhost/kryptonite"
  },
  connection: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secretKey: process.env.SECRET_KEY || "yrevdabterces"
  }
};
