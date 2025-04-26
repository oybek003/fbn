// const btn = document.querySelector(".btn");

// Toastify({  
//     text: "This is a toast",
//     duration: 3000,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: 'right', // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
    
//     style: {
//         background: "linear-gradient(to right, #00b09b, #96c93d)", 
//         borderRadius: "10px", 
//     },
//     onClick: function(){} // Callback after click
// }).showToast();


// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function() {
//     Toastify({  
//         text: "This is a toast",
//         duration: 3000,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: 'right', // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)", 
//             borderRadius: "10px", 
//         },
//         onClick: function(){} // Callback after click
//     }).showToast();
// });



const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
    const message = "hello moll";

    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true,
        style: {
            background: "red",
            borderRadius: "10px",
            border: "2px solid white",

        },
        onClick: function () {},
    }).showToast();

    document.body.style.background = "red"; 
});

const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function () {
    const message = "hello gryaz";

    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true,
        style: {
            background: "green",
            borderRadius: "10px",
            border: "2px solid white",
        },
        onClick: function () {},
    }).showToast();

    document.body.style.background = "green";
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function () {
    const message = "hello";

    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "bottom", 
        position: "right",
        stopOnFocus: true,
        style: {
            background: "blue",
            borderRadius: "10px",
            border: "2px solid white",
        },
        onClick: function () {},
    }).showToast();

    document.body.style.background = "blue"; 
});
