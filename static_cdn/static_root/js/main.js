$("#login-form").submit(function (e) {
    e.preventDefault();
    var serializedData = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: "/accounts/login/",
        data: serializedData,
        success: function (response) {
            window.location.href= "/";
        },
        error: function (response) {
            // alert the error if any error occured
            alert("Email or password is wrong");
        }
    })
});


// $("#register-form").submit(function (e) {
//     e.preventDefault();
//     var serializedData = $(this).serialize();
//     $.ajax({
//         type: 'POST',
//         url: "/accounts/register/",
//         data: serializedData,
//         success: function (response) {
//             window.location.href= "/";
//         },
//         error: function (error) {
//             // alert the error if any error occured
//             console.log(error);
//             alert("From register");
//         }
//     })
// });   


