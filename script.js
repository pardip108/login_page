
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == '' || password == ''){
        alert("please fill both section");
        return;
    }

    console.log("Username :" + username);
    console.log("Password :" + password);

    alert("Login Successfull");
})































































// document.querySelector('form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Simple validation
//     if(username === '' || password === '') {
//         alert('Please fill in both fields.');
//         return;
//     }

//     // Here you would typically send the data to the server
//     console.log('Username:', username);
//     console.log('Password:', password);
//     alert('Login successful!');
// });