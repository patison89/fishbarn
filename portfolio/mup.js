module.exports = {
  servers: {
    one: {
      host: '45.76.134.43',
      username: 'root',
      // pem:
      password: "dupa8",

      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'thefishbarn',
    path: '../portfolio',
    docker: {
      image: 'abernix/meteord:base', // (optional)
    },
    servers: {
      one: {},// two: {}, three: {} // list of servers to deploy, from the 'servers' list
    },
    buildOptions: {
      serverOnly: true, // skip building mobile apps, but still build the web.cordova architecture
      debug: true,
      cleanAfterBuild: true // default
    },
    env: {
      // PORT: 8000, // useful when deploying multiple instances (optional)
      ROOT_URL: 'http://www.thefishbarn.co.uk/', // If you are using ssl, this needs to start with https
      MONGO_URL: 'mongodb://localhost/meteor'
    },
    deployCheckWaitTime: 60, // default 10
    deployCheckPort: 80, // lets you define which port to check after the deploy process, if it differs from the meteor port you are serving (like meteor behind a proxy/firewall) (optional)

    // Shows progress bar while uploading bundle to server (optional)
    // You might need to disable it on CI servers
    enableUploadProgressBar: true // default false.
  },

  mongo: { // (optional)
    port: 27017,
    // version: '3.4.1' // (optional), default is 3.4.1
    servers: {
      one: {},
    },
  },
};