Template.contactus.onRendered(function() {
  GoogleMaps.load();
});

//Centering map when loaded
Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(51.117686, -0.227036),
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
Template.drygoods.helpers({
  // goods: function(){
  //   if(Session.get('userFilter')){
  //       return Goods.find({category: Session.get('userFilter')}, {sort: { name: 1 }});
  //   }
  //   else{
  //   return Goods.find({}, {sort: { name: 1 }});
  // }
  //
  // }
  goods: function() {
     var category = FlowRouter.getParam('category');
    var goods = Goods.find({category: category}) ;
    return goods;
  }
})
Template.drygoods.onCreated(function() {
  var self = this;
  self.autorun(function() {
    var category = FlowRouter.getParam('category');
    self.subscribe('goods', category);
  });
});

Template.drygoods.events({
  'click .js-set-food-filter': function(event){
    Session.set('userFilter', 'food');
  },
  'click .js-set-softlinefood-filter': function(event){
    Session.set('userFilter', 'softlinefood');
  },
  'click .js-set-watertreatments-filter': function(event){
    Session.set('userFilter', 'watertreatments');
  },
  'click .js-set-accessories-filter': function(event){
    Session.set('userFilter', 'accessories');
  },
  'click .js-unset-filter': function(event){
    Session.set('userFilter', undefined);
  }


})
