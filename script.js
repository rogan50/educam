const menuToggle =
document.querySelector('.menu-toggle');
const navLinks =
document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

let pathPrefix = "./";
if (window.location.pathname.includes ("/lessons/") || window.location.pathname.includes("/quiz-files")) {
    pathPrefix = "../";
}

const pages = {

    "Introduction to computer": pathPrefix + "lessons/introduction-notes.html" ,
    "Components of a computer system": pathPrefix + "lessons/computer-system-notes.html" ,
    "Input and output devices": pathPrefix + "lessons/lesson3.html" ,
    "computer architecture": pathPrefix + "lessons/architecture-notes.html",
    "generation of computers": pathPrefix + "lessons/generation-notes.html",
    "computer hardware": pathPrefix + "lessons/hardware-notes.html",
    "types of computers": pathPrefix + "lessons/types-of-computer-notes.html",
    "types of software": pathPrefix + "lessons/types-of-software-notes.html",
    "computer networks": pathPrefix + "lessons/network-notes.html",
    "operating system": pathPrefix + "lessons/operating-system-notes.html",
    "system development life cycle": pathPrefix + "lessons/sdlc-notes.html",
    "computer memory": pathPrefix + "lessons/computer-memory-notes.html",
    "project management": pathPrefix + "lessons/project-notes.html",
    "robotics and embedded systems": pathPrefix + "lessons/robotics-artificial-notes.html",
    "internet and its uses": pathPrefix + "lessons/internet-notes.html",
    "computer security": pathPrefix + "lessons/computer-security-notes.html",
    "data structure": pathPrefix + "lessons/data-structure-notes.html",
    "computer ethics": pathPrefix + "lessons/computer-ethics-notes.html",
    "computer in education": pathPrefix + "lessons/computer-in-education-notes.html",
    "digital system design": pathPrefix + "lessons/digital-system-notes.html",
    "computer programming and algorithm": pathPrefix + "lessons/programming-notes.html",
    "cloud computing": pathPrefix + "lessons/cloud-computing-notes.html",
    "information system": pathPrefix + "lessons/information-notes.html",
    "boolean algebra": pathPrefix + "lessons/boolean-algebra-notes.html",
    "number system": pathPrefix + "lessons/number_notes.html",
    "database": pathPrefix + "lessons/database-notes.html",



};

const searchInput =
document.getElementById("searchInput");
const suggestionsBox =
document.getElementById("suggestions");

//when user types in the search box
searchInput.addEventListener("input", () => {
    const query =
    searchInput.value.toLowerCase().trim();

    //clear old suggestion
    suggestionsBox.innerHTML = "";
//if input is empty, hide sugestion
    if (query === "") {
        suggestionsBox.style.display = "none";
        return;
    }

    //filter all pages that include what you typed
    const matches = Object.keys(pages).filter(topic =>
        topic.toLowerCase().includes(query));

//if we have matches, show them
        if (matches.length > 0) {
            suggestionsBox.style.display = "block";

            matches.forEach(match => {
                const div =
                document.createElement("div");
                div.textContent = match;

                //when suggetion is clicked
                div.addEventListener("click", ()=> {
                window.location.href =
                pages[match]; //go to the note page
            });
            suggestionsBox.appendChild(div);
            });
        } else {
        suggestionsBox.style.display = "block";
        suggestionsBox.innerText="Not found";
        }
});

//Hide suggestions when clicking outside
document.addEventListener("click",
    (event) => {
        if (!
            event.target.closest(".search-box")) {
                suggestionsBox.style.display = "none"
            }
    });