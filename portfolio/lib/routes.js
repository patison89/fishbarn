FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {main: "home"});
  }
});
FlowRouter.route('/contactus', {
  action: function() {
    BlazeLayout.render("layout", {main: "contactus"});
  }
});
FlowRouter.route('/aboutus', {
  action: function() {
    BlazeLayout.render("layout", {main: "aboutus"});
  }
});

  var drygoods = FlowRouter.group({
  prefix: '/drygoods'
});
drygoods.route( '/', {
  action: function() {
    BlazeLayout.render( 'layout', { main: 'drygoods' } );
  }
});
drygoods.route( '/:category', {


  action: function(params) {
    BlazeLayout.render( 'layout', { main: 'goods', params: params } );
    console.log(params);

  }
});
