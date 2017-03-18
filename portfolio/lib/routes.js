FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render("layout", {header: "header", main: "home"});
  }
});
FlowRouter.route('/contactus', {
  name: 'contactus',
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "contactus"});
  }
});
FlowRouter.route('/news', {
  name: 'news',
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "whatsnew"});
  }
});
FlowRouter.route('/news/:post', {
  name: 'news',
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "singlepost"});
  }
});
FlowRouter.route('/aboutus', {
  name: 'aboutus',
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "aboutus"});
  }
});
FlowRouter.route('/admin', {
  name: 'admin',
  action: function() {
    BlazeLayout.render("layout", {header: "admin",main: "home"});
  }
});
FlowRouter.route('/admin/blog', {
  name: 'blogadmin',
  action: function() {
    BlazeLayout.render("layout", {header: "header",main: "blogAdmin"});
  }
});



  var drygoods = FlowRouter.group({
  name: 'drygoods',
  prefix: '/drygoods'
});
drygoods.route( '/', {
  name: 'drygoods',
  action: function() {
    BlazeLayout.render( 'layout', { header: "header", main: 'drygoods' } );
  }
});
drygoods.route( '/:category', {
  name: 'drygoods',

  action: function(params) {

      var category = FlowRouter.getParam('category');
      if(category == "food") {
      BlazeLayout.render( 'layout', {header: "header", main: 'goods', tabs:'food'} );
      }
      else if(category == "watercare") {
      BlazeLayout.render( 'layout', {header: "header", main: 'goods', tabs:'watercare'} );
      }
      else if(category == "aquariumessentials") {
      BlazeLayout.render( 'layout', {header: "header", main: 'goods', tabs:'aquariumessentials'} );
      }
      else {
        BlazeLayout.render( 'layout', {header: "header", main: 'goods',tabs:'all'} );
      }

  }
});
drygoods.route( '/:category/:productId', {
  name: 'productPage',
  action: function() {
    BlazeLayout.render( 'layout', {header: "header", main: 'product'} );


  }
});
