document.getElementById('dateNow').valueAsDate = new Date();
document.getElementById('dateNow2').valueAsDate = new Date();

const body = document.querySelector(".body"),
    headerNavigation = body.querySelector(".header__nav"),
    headerButtonMenu = body.querySelector(".header__button-menu"),
    formLocation = body.querySelector(".form__location"),
    formLocationInner = body.querySelector(".form__location-inner"),
    locationOption = formLocation.querySelector(".location__option"),
    locationText = formLocation.querySelector(".location__text"),
    locationUK = formLocation.querySelector(".location-uk"),
    locationRU = formLocation.querySelector(".location-ru"),
    locationUS = formLocation.querySelector(".location-us"),
    formMembers = body.querySelector(".form__members"),
    formMembersInner = body.querySelector(".form__members-inner"),
    membersOption = formMembers.querySelector(".members__option"),
    membersText = formMembers.querySelector(".members__text"),
    members4 = formMembers.querySelector(".members-4"),
    members5 = formMembers.querySelector(".members-5"),
    members6 = formMembers.querySelector(".members-6"),
    locationChoiceList = formLocation.querySelector(".choice-list"),
    membersChoiceList = formMembers.querySelector(".choice-list");


headerButtonMenu.addEventListener("click", () => {
    body.classList.toggle("disabled-scroll");
    headerNavigation.classList.toggle("header__nav--active");
    headerButtonMenu.classList.toggle("header__button-menu--active");
})

formLocationInner.addEventListener("click", () => {
    formLocationInner.classList.toggle("active-inner");
    locationChoiceList.classList.toggle("active");
})

locationUK.addEventListener("click", () => {
    locationText.textContent = "Великобритания";
    locationOption.setAttribute("value", "uk");
})
locationRU.addEventListener("click", () => {
    locationText.textContent = "Россия";
    locationOption.setAttribute("value", "ru");
})
locationUS.addEventListener("click", () => {
    locationText.textContent = "США";
    locationOption.setAttribute("value", "us");
})


formMembersInner.addEventListener("click", () => {
    formMembersInner.classList.toggle("active-inner");
    membersChoiceList.classList.toggle("active");
})

members4.addEventListener("click", () => {
    membersText.textContent = "4";
    membersOption.setAttribute("value", "4");
})
members5.addEventListener("click", () => {
    membersText.textContent = "5";
    membersOption.setAttribute("value", "5");
})
members6.addEventListener("click", () => {
    membersText.textContent = "6";
    membersOption.setAttribute("value", "6");
})


document.addEventListener("mouseup", function(event) {
    if (!formLocation.contains(event.target)) {
        locationChoiceList.classList.remove("active");
        formLocationInner.classList.remove("active-inner");
    }
    
    if (!formMembers.contains(event.target)) {
        membersChoiceList.classList.remove("active");
        formMembersInner.classList.remove("active-inner");
    }
})


new Swiper(".popular__card-wrapper", {
    spaceBetween: 20,
    freeMode: true,
    grabCursor: true,
    slidesPerView: 3,

    keyboard: {
        enabled: true,
    },

    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },

    breakpoints: {
        1200: {
            enabled: false,
        },

        900: {
            enabled: true,
            slidesPerView: 2.25,
        },

        800: {
            slidesPerView: 2,
        },

        700: {
            slidesPerView: 1.75,
        },

        600: {
            slidesPerView: 1.5,
        },

        500: {
            slidesPerView: 1.25,
        },

        400: {
            slidesPerView: 1,
        },

        1: {
            slidesPerView: 1,
        },
    },
});