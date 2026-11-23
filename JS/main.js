// <!-- ===================== Malak ============================== -->

                        //  <!-- اكتبي هنا -->   

    // <!-- ===================== Malak ============================== -->

    // <!-- ===================== Mohamed ============================== -->

                            // <!-- اكتب هنا -->  

    // <!-- ===================== Mohamed ============================== -->

    // <!-- ===================== Mary ============================== -->

                            // <!-- اكتبي هنا -->

    // <!-- ===================== Mary ============================== -->

    // <!-- ===================== Keryakous ============================== -->

     let form=document.getElementById('form')
let btn=document.getElementById('btn')
let Name=document.getElementById('name')
let email=document.getElementById('email')
let message=document.getElementById('message')

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(Name.value==='' ||email.value==='' ||message.value==='' ){
        alert('please fill all fields...✍️')
    }
    else if(!email.value.includes("@") || !email.value.includes(".")) {
    alert("Please enter a valid email address! this must contain of ( @ ) and ( . ) ⁉️");   
}
else{
    alert('your form is submited Successfully ✔️')
}

})      

    // <!-- ===================== Keryakous ============================== --> 