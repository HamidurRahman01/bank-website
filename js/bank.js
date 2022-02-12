document.getElementById('login-submit').addEventListener('click', function(){
    const emailFild = document.getElementById('user-emile');
    const userEmaile = emailFild.value;

    const passwordFild = document.getElementById('user-password');
    const userPassword = passwordFild.value;

    if(userEmaile == 'hamidurr330@gmail.com' && userPassword == 'hamid'){
        window.location.href = 'banking.html';
       
    };
   
});

