import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        var usertype = sessionStorage.getItem('usertype') ;
        console.log('usertpe :' +usertype);
        this.controllerFor('history').set('usertype', usertype);

        var requestid =  this.controllerFor('userhome').get('requestid' );        
        console.log('requestid :' +requestid);
        this.controllerFor('history').set('requestid', requestid);

        var mycontroller = this;
                return $.ajax({
                url:'http://192.168.0.29:3000/readRequest',
                type: 'GET',
                contentType: 'application/json', 
                headers:{
                    'authorization':requestid
                },
                success: function(response) {
                    // var message = response.message;
                console.log(JSON.stringify(response));
             
                },      
                error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
                }
                
                });
    }
});
