var form = document.getElementById('form')

form.addEventListener('submit' ,function(event){
    event.preventDefault();

    var firstname = document.getElementById('firstname').value;
    console.log(firstname);

    var lastname = document.getElementById('lastname').value;
    console.log(lastname);

    var email = document.getElementById('email').value;
    console.log(email);

    const request = new XMLHttpRequest();
    request.open("post","form.php");
    request.onload = function () {
        console.log(request.responseText);
    }
request.send(new FormData(form));
});

var form2 = document.getElementById('searchBtn')

    form2.addEventListener('submit' ,function(event2){
       event2.preventDefault();
    
    var search = document.getElementById('searchBtn').value;
    console.log(searchBtn);
});