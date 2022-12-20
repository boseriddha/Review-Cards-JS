const reviews = [
    {
        id: 1,
        name: "Lisa",
        img: "images/l1.jpg",
        job: "WEB DEVELOPER",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero neque, rutrum non molestie vitae, mattis non nunc. Mauris dapibus sapien nec libero hendrerit, et sollicitudin diam fringilla. Mauris sit. "
    },
    {
        id: 2,
        name: "Amane",
        img: "images/l4.jpg",
        job: "UX-DESIGNER",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero neque, rutrum non molestie vitae, mattis non nunc. Mauris dapibus sapien nec libero hendrerit, et sollicitudin diam fringilla. Mauris sit. "
    },
    {
        id: 3,
        name: "Jessica",
        img: "images/l5.jpg",
        job: "WEB DESIGNER",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero neque, rutrum non molestie vitae, mattis non nunc. Mauris dapibus sapien nec libero hendrerit, et sollicitudin diam fringilla. Mauris sit. "
    },
    {
        id: 4,
        name: "Dave",
        img: "images/m3.jpg",
        job: "TECH LEAD",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero neque, rutrum non molestie vitae, mattis non nunc. Mauris dapibus sapien nec libero hendrerit, et sollicitudin diam fringilla. Mauris sit. "
    },
    {
        id: 5,
        name: "Jay",
        img: "images/m1.jpg",
        job: "PRODUCT MANAGER",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam libero neque, rutrum non molestie vitae, mattis non nunc. Mauris dapibus sapien nec libero hendrerit, et sollicitudin diam fringilla. Mauris sit. "
    }
];

const author = document.getElementById("person-name");
const img = document.getElementById("person-img");
const job = document.getElementById("person-job");
const review = document.getElementById("person-review");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

function changeContent(idx) {
    const item = reviews[idx];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function() {
    changeContent(currentItem);
});

nextBtn.addEventListener("click", function() {
    currentItem = (currentItem + 1);
    if(currentItem < 5) {
        changeContent(currentItem);
    }
});

prevBtn.addEventListener("click", function() {
    currentItem = (currentItem - 1);
    if(currentItem >= 0) {
        changeContent(currentItem);
    }
});

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    changeContent(currentItem);
});