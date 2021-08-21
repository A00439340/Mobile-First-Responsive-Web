var SERVER_URL= "http://localhost:8148";

function validateData(){
    //first get the values from the fields ​
        var name = $("#name").val();​
        var address = $("#address").val();​
        var phone = $("#phone").val(); ​
     ​
        //check empty fields​
        if (name == '') {​
            alert("Please enter the name of the university!");​
            $("#name").focus();​
            return false;​
        }​
        if (address == '') {​
            alert("Please enter the address of the university!");​
            $("#address").focus();​
            return false;​
        }​
        if (phone == '') {​
            alert("Please enter the phone number of the university!");​
            $("#phone").focus();​
            return false;​
        }
}

function display(universities){
    //Initializing the table​

    $("#displayTable").html(​
        "   <tr>" +​
        "     <th>Name</th>" +​
        "     <th>Address</th>" +​
        "     <th>Phone</th>" +​
        "   </tr>"​
    );
//use a familiar general JS table object from here​

//the expense tracker app uses a different way​

    var table = document.getElementById('displayTable');​

    //go through each record​

    for (var i = 0; i < universities.length; i++) {​
        var name = universities[i].Name;//Name attribute​
        var address = universities[i].Address; // Address attribute​
        var phone = universities[i].PhoneNumber; //PhoneNumber attribute​


        var r = table.insertRow();​
        r.insertCell(-1).innerHTML = name;​
        r.insertCell(-1).innerHTML = address;​
        r.insertCell(-1).innerHTML = phone;​
    }//end for

}

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
        var universities = [];
    }//end function​

);


function displayRecords() {
    $.post(SERVER_URL+'/getAllUniversities', function(){
        display(data);
    }).fail(function(err){
        alert("error"+err.responseText);
    });

}