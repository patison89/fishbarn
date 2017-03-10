module.exports = {
  servers: {
    one: {
      host: '45.32.181.177',
      username: 'root',
      // pem:
      password: "b4+Vs,eAc_Xm$6qH",

      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'thefishbarn',
    path: '.',
    servers: {
      one: {},
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'http://45.32.181.177',
      // MONGO_URL: 'mongodb://localhost/meteor',
    },


    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
      image: 'abernix/meteord:base',
    },
    deployCheckWaitTime: 30,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: false
  },

//   mongo: {
//     oplog: true,
//     port: 27017,
//     version: '3.4.1',
//     servers: {
//       one: {},
//     },
//   },
};
