
       function validation() {
    event.preventDefault(); 
    var name = document.getElementById('Name').value;
    var date = document.getElementById('Date').value;
    var days = document.getElementById('Day').value;
    var person = document.getElementById('Person').value;
    var advance_payment = document.getElementById('Payment').value;

    if (name === '' || date === '' || days === '' || person === '' || advance_payment === '') {
        alert("Please fill all the details for Registration");
    } 
    else {
        alert("Your Registration is successful");

        var room_rate = document.querySelector('.room_type:checked').value;
        var room_cost = room_rate * days;

        var checkbox1 = document.getElementById("animation1");
        var checkbox2 = document.getElementById("animation2");
        if (checkbox1.checked == true && checkbox2.checked == true )
        {        
            var ani1= checkbox1.value;
            var ani2 =checkbox2.value;
            var amenities = parseInt(ani1) + parseInt(ani2);
            alert( "BOTH"+ amenities );
            var animated_cost = amenities * days;
        }
        else if(checkbox1.checked == false){
            var ani2 =checkbox2.value;
            var amenities = parseInt(ani2);
            alert( "ani2"+ amenities );
            var animated_cost = amenities * days;
        }
        else{
            var ani1 =checkbox1.value;
            var amenities = parseInt(ani1);
            alert( "ani1"+ amenities );
            var animated_cost = amenities * days;
        }
        
        var total_amount = room_cost + animated_cost;

        if (person > 2) {
            var extra_amount = person * 1000;
            total_amount += extra_amount;
        }

        var balance_amount = total_amount - advance_payment;

        //alert("Your Total amount is " + total_amount);
        //alert("Your Balance amount is " + balance_amount);

        document.getElementById("total_amount").innerText = total_amount;
        document.getElementById("taooooo").style.display = 'block';

        document.getElementById("balance_amount").innerText = balance_amount;
        document.getElementById("maooooo").style.display = 'block';

        
        setTimeout(function() 
        {
            location.reload(); 
        }, 6000);
    }
}
