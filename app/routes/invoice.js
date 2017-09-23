import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.controllerFor('invoice').set('ShowingModalrequest', false);
        
          this.controllerFor('invoice').set('invoiceToCompany', null);
          this.controllerFor('invoice').set('address', null);
          this.controllerFor('invoice').set('item', null);
          this.controllerFor('invoice').set('Quantity', null);
          this.controllerFor('invoice').set('invoiceNo', null);
          this.controllerFor('invoice').set('formdate', null);
          this.controllerFor('invoice').set('totalamount', null);
      
          var requestid =  this.controllerFor('userhome').get('requestid' );        
          console.log('requestid from io:' +requestid);
          this.controllerFor('invoice').set('requestid', requestid);

          var usertype = sessionStorage.getItem('usertype') ;
          console.log('usertpe from route invoice :' +usertype);
          this.controllerFor('invoice').set('usertype', usertype);
  
    }
});
