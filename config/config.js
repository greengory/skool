module.exports = {
  db: {
    url: "mongodb://opiumated:phoenix01@ds227045.mlab.com:27045/skooli"
  },
  connection: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secretKey: process.env.SECRET_KEY || "yrevdabterces"
  }
};
