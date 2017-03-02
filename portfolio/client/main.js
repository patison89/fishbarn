
// CONTACT US
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

// DRY GOODS
// Tracking current route category
Tracker.autorun(function() {
  FlowRouter.watchPathChange();
  var currentContext = FlowRouter.current();
  var category = FlowRouter.getParam('category');
  console.log(category);
  return category;
});

Template.goods.helpers({

  //returning products of category
  goods: function() {
     var category = FlowRouter.getParam('category');

      if(Session.get('userFilter')){
           return Goods.find({subcategory: Session.get('userFilter')}, {sort: { name: 1 }});
      }
    else{
      var goods = Goods.find({category: category}, {sort : {name : 1}}) ;
      return goods;
    }
  },
  category: function() {
      var category = FlowRouter.getParam('category');
     console.log(category);
     return category.toUpperCase();
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
Template.goods.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var category = FlowRouter.getParam('category');
    self.subscribe('goods', category);
    SEO.set({
   title: "Dry goods - " + category,
   description: "Check the range of our " +category+ "products",

 });
  });
});
Template.product.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var productId = FlowRouter.getParam('productId');

    self.subscribe('product', productId);
    var product = Goods.findOne({_id: productId});
    console.log(product);
    SEO.set({
     title: product.name,
     description: product.description,
   });
   });
});
Template.product.helpers({
  product: function() {
    var productId = FlowRouter.getParam('productId');
    var product = Goods.findOne({_id: productId});
    return product;
    }
});
//


//filtering by subcategories
Template.drygoods.events({
    'click .js-unset-filter': function(event){
      Session.set('userFilter', undefined);
    }

})

Template.goods.events({
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
  },
  'click .js-set-filtration-filter': function(event){
    Session.set('userFilter', 'filtration');
  },
  'click .js-set-heating-filter': function(event){
    Session.set('userFilter', 'heating');
  },
  'click .js-set-airpumps-filter': function(event){
    Session.set('userFilter', 'airpumps');
  },

  'click .js-set-circulationpumps-filter': function(event){
    Session.set('userFilter', 'circulationpumps');
  },
  'click .js-set-aquaria-filter': function(event){
    Session.set('userFilter', 'aquaria');
  },
  'click .js-set-lighting-filter': function(event){
    Session.set('userFilter', 'lighting');
  },
  'click .js-set-accessories-filter': function(event){
    Session.set('userFilter', 'accessories');
  },

  'click .js-set-watertreatments-filter': function(event){
    Session.set('userFilter', 'watertreatments');
  },
  'click .js-set-testkits-filter': function(event){
    Session.set('userFilter', 'testkits');
  },
  'click .js-set-wateradditives-filter': function(event){
    Session.set('userFilter', 'wateradditives');
  },
  'click .js-set-accessories-filter': function(event){
    Session.set('userFilter', 'accessories');
  },

});

// //
ShareIt.configure({
    sites: {
        'facebook': {
            'appId': 1754372841546801
        }
    }
});
Template.blogBody.helpers({
  shareData: function() {
     return 'https://www.facebook.com/sharer/sharer.php?&u=' + window.location.href
  }
});

  ShareIt.init({
    siteOrder: ['facebook', 'twitter', 'googleplus'],
    sites: {
         'facebook': {
           'appId': '1754372841546801',
           'version': 'v2.3'
         }
       },
    iconOnly: true,
    applyColors: false
  });

  Template.home.onCreated(function() {
  SEO.set({
    title: 'The Fish Barn - Home',
    description: 'The Fish Barn is tropical fish supplier located on the outskirts of Crawley, West Sussex. We have a great selection of Tropical fish, African Cichlids and all Wild Caught South American species of fish and a great range of dry goods. ',

  });
});
Template.aboutus.onCreated(function() {
SEO.set({
  title: 'The Fish Barn - About us',
  description: 'A fully licensed family run Aquatic Store that sell very high quality fish from all over the world. ',

});
});
Template.drygoods.onCreated(function() {
SEO.set({
  title: 'The Fish Barn - Dry goods',
  description: 'The Fish Barn stocks a very good range of dry goods available from fish foods through to fish tanks and accessories. ',

});
});
Template.contactus.onCreated(function() {
SEO.set({
  title: 'The Fish Barn - Contact us',
  description: 'Looking for high quality tropical fish for your aquarium? Contact The Fish Barn - Tropical Fish Suppliers in Crawley',

});
});
Template.whatsnew.onCreated(function() {
SEO.set({
  title: 'The Fish Barn - News',
  description: 'Check new additions to our grate selection of high quality tropical fish.',

});
});
Template.blogBody.onCreated(function() {
  var postTitle = this.data.title;
  var postDescription = this.data.body;

  SEO.set({
   title: postTitle,
   description: postDescription,
   });
});
