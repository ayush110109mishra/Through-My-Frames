// -------------------------Empty field submit nahi hogi.// ✅ Email validate hogi.
// ---------------------✅ Phone number 10 digits check hoga.// ✅ Successful submit par popup aayega.
// //---------------------------- ✅ Form automatically clear ho jayegi.

 

const form =document.getElementById("contactForm");
form.addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const number = document.getElementById("number").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("feedback").value.trim();

    if(name==="" || email==="" || number==="" || subject==="" || message===""){
        alert("Please fill all the fields.");
        return;
    }

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert("Please enter a valid email.");
        return;
    }
    if(number.length!=10){
        alert("Please enter a valid 10 digit mobile number")
    }

    alert("🎉 Thank you! Your message has been received.");

    form.reset();

})




 