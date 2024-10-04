const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {
    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkAnimate .6s ease-in-out forwards ${index / 7 + 0.5}s`
            console.log(index / 7 + 0.5)
        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkAnimate .6s ease-in-out forwards ${index / 7 + 0.5}s`
                console.log(index / 7 + 0.5)
            }
        })
    })
})

const emailAddress = "mudassarnazir137@gmail.com";
const subject = "Type your Message towards Mudassar Nazir";

const openGmailCompose = () => {
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            emailAddress
        )}&su=${encodeURIComponent(subject)}`,
        "_blank"
    );
};

document.getElementById('emailLink').addEventListener('click', function (e) {
    e.preventDefault();
    openGmailCompose();
});
