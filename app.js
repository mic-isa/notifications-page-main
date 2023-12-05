let ReadNotification = document.querySelector(".read");

let NotificationNumber = document.querySelector(".read-notification");

let notifications = document.querySelectorAll(".notification");

let hideDots = document.querySelectorAll(".hide-dot");

ReadNotification.addEventListener("click",  function () {

    notifications.forEach( function (notification){

        notification.style.backgroundColor ="white";
    });

    hideDots.forEach( function (hideDot){
        hideDot.classList.remove("red-dot")
    });
    
    NotificationNumber.innerHTML = 0;
});
