function storeToLocalStorage(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;

    var formData = {
        name: name,
        email: email,
        phno: phno
    };

  axios.post("https://crudcrud.com/api/f110fc90dfc5476f958cab060a5d8e07/appointmentData",formData)
  .then((respons)=>{
    console.log(respons.data);
  })
  .catch((err)=>{
    console.log(err)
  })



    var data= JSON.stringify(formData)
    localStorage.setItem(email,data);

    var unorderList=document.getElementById('listitem')
     
    var li=document.createElement('li');
    li.className='listy'
    var textnode=document.createTextNode(name+"-"+email+"-"+phno);
    li.appendChild(textnode)
    //deletebutton
    var deletebtn=document.createElement('button')
    deletebtn.className='btn-dark delete'
    deletebtn.appendChild(document.createTextNode('delete'));
    li.appendChild(deletebtn)
    //editbutton
    var editbtn=document.createElement('button')
    editbtn.className='btn-primary edit'
    editbtn.appendChild(document.createTextNode('edit'))
    li.appendChild(editbtn)
   
    unorderList.appendChild(li);
   
} 

function deleteData(event)
{
    event.preventDefault();
    var email=event.target.parentNode.textContent.split('-')[1].trim();
   
    var unorderList=document.getElementById('listitem')
    if(event.target.classList.contains('delete'))
    {
        // remove item from local storage
       localStorage.removeItem(email)
      
       var li=event.target.parentElement;
       unorderList.removeChild(li)

      
      
    }
}
function editData(event)
{
    var unorderList=document.getElementById('listitem')
    if(event.target.classList.contains('edit'))
    var email=event.target.parentNode.textContent.split('-')[1].trim();
    localStorage.removeItem(email)
    var li=event.target.parentElement
    unorderList.removeChild(li)
    document.getElementById('name').focus();
   

   
}