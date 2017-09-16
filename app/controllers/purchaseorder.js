import Ember from 'ember';

export default Ember.Controller.extend({
    ShowingModalrequest:false,
    actions:{
        submitdeatails:function(){
        console.log("in func");
        let{suppliername,
            shippingaddress,
            item,
            quantity,
            pono,
            podate
        }=this.getProperties('suppliername','shippingaddress','item','quantity','pono','podate')

         var dataString = {  
                "status":"POraised",
                "InvolvedParties":"manufacturer,Supplier",
                "transactionString":{
                    "suppliername": suppliername,
                    "shippingaddress": shippingaddress,
                    "item": item,
                    "quantity": quantity,
                    "pono": pono,
                    "podate":podate
                }
            };
            console.log(JSON.stringify(dataString));
                 var mycontroller = this;

                return $.ajax({
                url:'http://192.168.0.29:3000/mock/Updaterequest',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(dataString),
                success: function(response) {
                    var message = response.message;
                console.log("message" + message);
                          mycontroller.toggleProperty('ShowingModalrequest');
                            // mycontroller.transitionToRoute('userhome')
                            // mycontroller.transitionToRoute('home');

                },      
                    error: function(response) {
                   console.log('DEBUG: GET Enquiries Failed');
                   console.log("Error Message: ", response.message);
                   
            }
                
                });
            this.toggleProperty('ShowingModalrequest');
            }

    },
    okbutton: function(){
        this.transitionToRoute("userhome");
    }
        
    
});
