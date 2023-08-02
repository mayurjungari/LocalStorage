function hello(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;

    var formData = {
        name: name,
        email: email,
        phno: phno
    };
    var data= JSON.stringify(formData)
    localStorage.setItem(email,data);
   
    //console.log(JSON.parse(data))
} 