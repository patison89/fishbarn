FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "home"});
  }
});
FlowRouter.route('/contactus', {
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "contactus"});
  }
});
FlowRouter.route('/news', {
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "whatsnew"});
  }
});
FlowRouter.route('/news/:post', {
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "singlepost"});
  }
});
FlowRouter.route('/aboutus', {
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "aboutus"});
  }
});
FlowRouter.route('/admin', {
  action: function() {
    BlazeLayout.render("layout", {header: "admin",main: "home"});
  }
});

  var drygoods = FlowRouter.group({
  prefix: '/drygoods'
});
drygoods.route( '/', {
  action: function() {
    BlazeLayout.render( 'layout', { header: "header", main: 'drygoods' } );
  }
});
drygoods.route( '/:category', {

  action: function(params) {
    BlazeLayout.render( 'layout', {header: "header", main: 'goods', tabs:'food'} );

  }
});
drygoods.route( '/:category/:productId', {
  name: 'productPage',
  action: function() {
    BlazeLayout.render( 'layout', {header: "header", main: 'product'} );


  }
});
