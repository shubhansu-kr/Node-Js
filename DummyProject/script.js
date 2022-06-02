var red = document.querySelector(".red");
var cyan = document.querySelector(".cyan");
var violet = document.querySelector(".violet");
var orange = document.querySelector(".orange");
var pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor) ;

const getBGColor = (SelectedElement) => {
    return window.getComputedStyle(SelectedElement).backgroundColor;
};

// console.log(getBGColor(red)) ;
// console.log(getBGColor(pink)) ;
// console.log(getBGColor(orange)) ;
// console.log(getBGColor(cyan)) ; 


// pink.addEventListener('mousecenter', () => {
//     center.style.background = color;
// });

const magicColorChanger = (element) => {
    var color = getBGColor(element);
    return element.addEventListener('click', () => {
        center.style.background = color;
    });
};

magicColorChanger(red) ;
magicColorChanger(cyan) ;
magicColorChanger(violet) ;
magicColorChanger(pink) ;
magicColorChanger(orange) ;