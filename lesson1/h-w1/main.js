const inninput = document.querySelector(".inninput");
const innpass = document.getElementsByClassName("innpass");
const result = document.querySelector(".innresult");

const innregexp = /^(1|2)\d{13}$/

innpass[0].addEventListener("click",() => {
    if(innregexp.test(inninput.value)){
        result.innerText = "OK";
        result.style.color = "green";
    }
    else{
        result.innerText = "NOT";
        result.style.color = "red";
    }
});

// const block = document.querySelector(".block2")

// let number = 0;
// const block1 = () => {
//   number++;
//   block.style.left = number + "px";
//   console.log(number);
//   if (number < 450) {
//     block1();
//   }
// };
// block1()
