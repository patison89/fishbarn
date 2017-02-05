// "use strict";
 Markers = new Mongo.Collection('markers');
 Goods = new Mongo.Collection('goods');
// if ( Meteor.isServer ) {
//   Goods._ensureIndex( { name: 1} );
// }

// import { Index, MinimongoEngine } from 'meteor/easy:search';
//
// // On Client and Server
// const GoodsIndex = new Index({
//   collection: Goods,
//   fields: ['name'],
//   engine: new MinimongoEngine(),
// });
