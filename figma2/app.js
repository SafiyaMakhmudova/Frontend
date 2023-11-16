const elementbtn1 = document.querySelector(".btn1")
const elementbtn2 = document.querySelector(".btn2")
const elementbtn3 = document.querySelector(".btn3")
const elementmain = document.querySelector(".main")

const elementtitle = document.querySelectorAll(".container1>h2")
const elementtext = document.querySelectorAll(".container1>p")

const elementicon2 = document.querySelector(".bxs-bar-chart-alt-2")

const elementel3 = document.querySelector(".container3")

elementbtn1.onclick = function ()  {

    elementbtn2.style.cssText = "background-color: white";
    elementbtn3.style.cssText = "background-color: white";
    elementmain.style.cssText = "background-color: pink";

    elementtitle.forEach((Item) => {
        Item.style.cssText = "color: orange"
    });

    elementtext.forEach((Item) => {
        Item.style.cssText = "color: orange"
    });

}

elementbtn2.onclick = function ()  {

    elementbtn1.style.cssText = "background-color: white";
    elementbtn3.style.cssText = "background-color: white";
    elementbtn2.style.cssText = "background-color: yellow";
    elementicon2.style.cssText = "background-color: yellow";
}


elementbtn3.onclick = function ()  {

    elementbtn1.style.cssText = "background-color: white";
    elementbtn2.style.cssText = "background-color: white";
    elementel3.style.cssText = "background-color: green";

}





