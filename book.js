function storeToLocalStorage(event) {
    event.preventDefault();
    console.log(5);

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phno = document.getElementById('phno').value;

    var formData = {
        name: name,
        email: email,
        phno: phno
    };
   showUserOnScreen(formData);

  axios.post("https://crudcrud.com/api/f110fc90dfc5476f958cab060a5d8e07/appointmentData",formData)
  .then((respons)=>{
    console.log(respons.data);
  })
  .catch((err)=>{
    console.log(err)
  })
  axios.get("https://crudcrud.com/api/f110fc90dfc5476f958cab060a5d8e07/appointmentData")
  .then((respons)=>{
    for(var i=0;i<respons.data.length;i++)
    {
      showUserOnScreen(respons.data[i]);
    }
  })
  .catch((err)=>{
    console.log(err)
  })


    var data= JSON.stringify(formData)
   // localStorage.setItem(email,data);

    function showUserOnScreen (formData)
    {

    var unorderList=document.getElementById('listitem');
    const li=document.createElement('li')
    li.textContent= formData.name+'-'+formData.email+'-'+formData.phno
//del
    const deletebtn=document.createElement('input');

    deletebtn.type="button"
    deletebtn.value='delete';
    deletebtn.onclick=()=>{
      localStorage.removeItem(formData.email);
      unorderList.removeChild(li)
      var itemid=formData.id;

      axios.delete(`https://crudcrud.com/api/f110fc90dfc5476f958cab060a5d8e07/appointmentData/${itemid}`)
      .then(respons=>{
        console.log(respons)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    //edi
    const editbtn=document.createElement('input');
    editbtn.type="button"
    editbtn.value='edit';

    var Updateddata={
      name:'',
      email:'',
      phno:''
    }
    editbtn.onclick=()=>{
      localStorage.removeItem(formData.email);
      axios.put()
      axios.put(`https://crudcrud.com/api/f110fc90dfc5476f958cab060a5d8e07/appointmentData/${itemid}`,Updateddata)
      .then(respons=>{
        console.log(respons)
      })
      .catch(error=>{
        console.log(error)
      })
      
      
    }

    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    unorderList.appendChild(li)

     
   
    // //deletebutton
    // var deletebtn=document.createElement('button')
    // deletebtn.className='btn-dark delete'
    // deletebtn.appendChild(document.createTextNode('delete'));
    // li.appendChild(deletebtn)
    // //editbutton
    // var editbtn=document.createElement('button')
    // editbtn.className='btn-primary edit'
    // editbtn.appendChild(document.createTextNode('edit'))
    // li.appendChild(editbtn)
   
    // unorderList.appendChild(li);
   
} 

// function deleteData(event)
// {
//     event.preventDefault();
//     var email=event.target.parentNode.textContent.split('-')[1].trim();
   
//     var unorderList=document.getElementById('listitem')
//     if(event.target.classList.contains('delete'))
//     {
//         // remove item from local storage
//        localStorage.removeItem(email)
      
//        var li=event.target.parentElement;
//        unorderList.removeChild(li)

      
      
//     }
// }
// function editData(event)
// {
//     var unorderList=document.getElementById('listitem')
//     if(event.target.classList.contains('edit'))
//     var email=event.target.parentNode.textContent.split('-')[1].trim();
//     localStorage.removeItem(email)
//     var li=event.target.parentElement
//     unorderList.removeChild(li)
//     document.getElementById('name').focus();
   

   
 }