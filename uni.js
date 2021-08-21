var SERVER_URL= "http://localhost:8148";


function saveInformation () {​
    if (validateData()) {​
        //create an object​
        var newObj = {​
            "Name": $("#name").val(),​
            "Address": $("#address").val(),​
            "PhoneNumber": $("#phone").val()​
        };​
​        $.post(SERVER_URL + "/saveUniversity", newObj,function(result){
            alert(result);
        }).fail(function(err){
            alert("error:"+err.responseText);
        });

    }//end if validateData()​

}//end function


function searchInfo () {​

    ​
    
                //first grab the name of the university​
    
                var key = $('#searchKey').val();​
    
    ​
    
                /**​
    
                 * Implement the rest​
    
                 * ​
    
                 * 1) "post" the key to the server​
    
                 * 2) Obtain the returned university object​
    
                 * 3) Extract the attribute values​
    
                 * 4) Fill the corresponding input fields​
    
                 * 5) Alert any errors to the user.​
    
                 */​
    
    ​
    
     }//end function


     function deleteInformation () {​

        ​
        
                    //first grab the name of the university​
        
                    var key = $('#searchKey').val();​
        
        ​
        
                    /**​
        
                     * Implement the rest​
        
                     * ​
        
                     * 1) "post" the key to the server​
        
                     * 2) Get the returned university object (deleted object)​
        
                     * 3) Tell the user if the deletion succeeded​
        
                     * 4) Alert any errors to the user.​
        
                     */​
        
        ​
        
                }//end function


                $('#displayButton').click(​

                    function () {​
            
            ​
            
                        var universities = [];//place holder​
            
            ​
            
                        /**​
            
                         * Implement the rest​
            
                         * ​
            
                         * 1) request the server to return the university object "array"​
            
                         * 2) If the array is empty display proper message​
            
                         * 3) Alert any errors to the user.​
            
                         */​
            
            ​
            
                    }//end function​
            
            );


function displayRecords() {


}