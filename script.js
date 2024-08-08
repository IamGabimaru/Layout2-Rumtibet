document.getElementById('dateNow').valueAsDate = new Date();
document.getElementById('dateNow2').valueAsDate = new Date();

const formLocation = document.querySelector(".form__location"),
    formLocationInner = document.querySelector(".form__location-inner"),
    locationOption = formLocation.querySelector(".location__option"),
    locationText = formLocation.querySelector(".location__text"),
    locationUK = formLocation.querySelector(".location-uk"),
    locationRU = formLocation.querySelector(".location-ru"),
    locationUS = formLocation.querySelector(".location-us"),
    formMembers = document.querySelector(".form__members"),
    formMembersInner = document.querySelector(".form__members-inner"),
    membersOption = formMembers.querySelector(".members__option"),
    membersText = formMembers.querySelector(".members__text"),
    members4 = formMembers.querySelector(".members-4"),
    members5 = formMembers.querySelector(".members-5"),
    members6 = formMembers.querySelector(".members-6"),
    locationChoiceList = formLocation.querySelector(".choice-list"),
    membersChoiceList = formMembers.querySelector(".choice-list");


formLocation.addEventListener("click", () => {
    locationChoiceList.classList.toggle("active");
    formLocationInner.classList.toggle("active-inner");
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


formMembers.addEventListener("click", () => {
    membersChoiceList.classList.toggle("active");
    formMembersInner.classList.toggle("active-inner");
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