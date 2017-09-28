import Ember from 'ember';
import CONFIG from 'smob-ui-1/config/environment';
export default Ember.Controller.extend({
    actions:{
        submitdetails:function(){
            var requestid =this.get('requestid');
            console.log("requestid from POcntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var url = this.get('url');
            console.log('url------>',url);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
            let{companyname,
                formno,
        
                totalamount
             }=this.getProperties('companyname','formno','totalamount');

             var dataString = {  
                "requestid":requestid,
                    "status":"PaymentInitiated",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": companyname,
                        "formno": formno,
                        "formdate":formdate1,
                        "totalamount":totalamount,
                        "address": "NA",
                        "item":"NA",
                        "url":url,
                        "Quantity": "NA",
                        "status":"PaymentInitiated",
                    }
                };
                console.log(JSON.stringify(dataString));
                    var mycontroller = this;

                    return $.ajax({
                    url:CONFIG.GOURL+'/updateRequest',
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

        },

        okbutton: function(){
            this.transitionToRoute("userhome");
        },

        paymentrecieved:function(){
            var requestid =this.get('requestid');
            console.log("requestid from Paymentordercntr ",requestid);
            var usertype =this.get('usertype');
            console.log('usertype',usertype);
            var mydate = JSON.stringify(this.get('formdate'));
            console.log("mydate :--->",mydate);
            var formdate1 =  mydate.substr(1, 10);
            console.log("formdate ======>>",formdate1);
      
            let{companyname,
                formno,
                formdate,
                totalamount
             }=this.getProperties('companyname','formno','formdate','totalamount')

             var dataString = {  
                "requestid":requestid,
                    "status":"PaymentReceived",
                    "InvolvedParties":"manufacturer,Supplier",
                    "transactionString":{
                        "updatedBy":usertype,
                        "companyname": "NA",
                        "formno": "NA",
                        "formdate":formdate1,
                        "totalamount":"NA",
                        "address": "NA",
                        "item":"NA",
                        "Quantity": "NA",
                        "status":"PaymentReceived",
                    }
                };
                console.log(JSON.stringify(dataString));
                    var mycontroller = this;

                    return $.ajax({
                    url:CONFIG.GOURL+'/updateRequest',
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

        }
    
    }

});