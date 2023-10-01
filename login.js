// step-1//
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('clicked');
    // step-2 get the email address inside the email field always remember to use .value to get text from an input feild//
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;

    //step-3 password feild ;
    // 3.1=get id on html element. get the element, get the value from the element.
    const passwordFeild = document. getElementById('user-password');
    const password = passwordFeild.value;
    // console.log(email, password)
    // step-4 this step is not legel proccess don't use it at all. this is just for practise.
    if(email === 'santan@baap.com' && password ==='asdef'){
      window.location.href = 'bank.html';
    }
        else{
            alert('invalid user')
        }
    
})