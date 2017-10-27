module.exports = {
  app: {
    name: "Skooli"
  },
  db: {
    //url: "mongodb://opiumated:phoenix01@ds227045.mlab.com:27045/skooli"
    url : "mongodb://localhost/skoolite"
  },
  connection: {
    port: process.env.PORT || 3000
  },
  jwt: {
    secretKey: process.env.SECRET_KEY || "yrevdabterces"
  }
};
