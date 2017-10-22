module.exports = {
  db: {
    url: "mongodb://localhost/skooly"
  },
  connection: {
    port: process.env.PORT || 3200
  },
  jwt: {
    secretKey: process.env.SECRET_KEY || "yrevdabterces"
  }
};
