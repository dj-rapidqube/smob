import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        this.set('myrecord',null);
        this.controllerFor('quotation').set('ShowingModalrequest', false);
    }
});
