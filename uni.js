var SERVER_URL= "http://localhost:8148";


function saveInformation () {​
    if (validateData()) {​
        //create an object​
        var newObj = {​
            "Name": $("#name").val(),​
            "Address": $("#address").val(),​
            "PhoneNumber": $("#phone").val()​
        };​
​        $.post(SERVER_URL + '/saveUniversity', newObj,function(result){
            alert(result);
        }).fail(function(err){
            alert("error:"+ err.responseText);
        });

    }//end if validateData()​

}//end function


function searchInfo () {​

    //first grab the name of the university​
    
    var key = $('#search').val();​
    if(key == ""){
        alert("Please enter the university name");
    }
    $.post(SERVER_URL+'/getUniversity', key, function(data){
        if(data.length>0){
            display(data);
        }
        else{
            alert("there is not university with this name");
        }

    }).fail(function(err){
        alert("error:"+ err.responseText);
    })
    ​
    
}//end function

function deleteInformation () {​

    //first grab the name of the university​

    var key = $('#name').val();
    $.post(SERVER_URL+"/deleteUniversity", key, function(data){
        alert(data);
    })​.fail(function(err){
        alert("error"+err.responseText);
    });
             ​  
}//end function


$('#displayButton').click(​
    function () {​
        var universities = [];//place holder​​
    }//end function​

);


function displayRecords() {
    $.post(SERVER_URL+'/getAllUniversities', function(){
        display(data);
    }).fail(function(err){
        alert("error"+err.responseText);
    });

}