const container = document.querySelectorAll(".trip");


const div1 = container[0].querySelector(".trip1");
console.log(div1);
const number = container[0].querySelector(".content");

div1.addEventListener('mouseenter',()=>{
    div1.style.display ="block";
    number.style.display ="block";
});

div1.addEventListener('mouseleave', () => {
    // div1.style.display = "none"; 
    number.style.display = "none"; 
});

const div2 = container[0].querySelector(".trip2");
const number1 = container[0].querySelector(".content1");

div2.addEventListener('mouseenter',()=>{
    div2.style.display="block";
    number1.style.display ="block";
})

div2.addEventListener('mouseleave',()=>{
    number1.style.display="none";
})


const div3 = container[0].querySelector(".trip3");
const number2 = container[0].querySelector(".content2");

div3.addEventListener('mouseenter',()=>{
    div3.style.display="block";
    number2.style.display="block";
});

div3.addEventListener('mouseleave',()=>{
    number2.style.display="none";
})