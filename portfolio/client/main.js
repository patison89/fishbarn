Template.contactus.onRendered(function() {
  GoogleMaps.load();
});

//Centering map when loaded
Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(51.118898, -0.232233),
        zoom: 16
      };
    }
  }
});


Template.contactus.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('map', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
//


Template.goods.helpers({
  //

  //returning products of category
  goods: function() {
     var category = FlowRouter.getParam('category');
    var goods = Goods.find({category: category}, {sort : {name : 1}}) ;
    return goods;
  },

   pathForProduct: function() {
      var product = this;
      var params = {
          category: product.category,
          productId: product._id
      };

      console.log("Params " + params + product);
      var routeName = "productPage";
      var path = FlowRouter.path("productPage", params);

      return path;
      console.log("Path is " +  path);
    }



});

Template.product.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var productId = FlowRouter.getParam('productId');
    self.subscribe('product', productId);
   });
});
Template.product.helpers({
  product: function() {
    var productId = FlowRouter.getParam('productId');
    var product = Goods.findOne({_id: productId});
    return product;
    console.log("Returning product  " +product);
  }
});
//
Template.goods.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var category = FlowRouter.getParam('category');
    self.subscribe('goods', category);
  });
});
//
Template.food.helpers ({
  subcategory: function(){
    if(Session.get('userFilter')){
        return Goods.find({subcategory: Session.get('userFilter')}, {sort: { name: 1 }});
    }
    else{
    return Goods.find({}, {sort: { name: 1 }});
  }

  }
});
Template.food.events({
  'click .js-set-solidfood-filter': function(event){
    Session.set('userFilter', 'solidfood');
  },
  'click .js-set-softlinefood-filter': function(event){
    Session.set('userFilter', 'softlinefood');
  },
  'click .js-set-frozenfood-filter': function(event){
    Session.set('userFilter', 'frozenfood');
  },

  'click .js-unset-filter': function(event){
    Session.set('userFilter', undefined);
  }


});
// Template.searchBox.helpers({
//   GoodsIndex: function() {
//     return GoodsIndex;
//   },
//   index: function () {
//   return [GoodsIndex];   // corrected from PostsIndex and CommentsIndex
// },
//  GoodsIndex: function () { return GoodsIndex; },
// });
//
// Tracker.autorun(function () {
//   cursor = GoodsIndex.search('Supervit'); // search all docs that contain "Marie" in the name or score field
//
//   console.log(cursor.fetch()); // log found documents with default search limit
//   console.log(cursor.count()); // log count of all found documents
// })

// });
