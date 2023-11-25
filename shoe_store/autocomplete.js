let availablekeywords = [
    'Lace-Fastening white Shoes',
    'Loafers Men',
    'Flat Lace-Fastening Shoes',
    'HRX cotton socks',
    'Flat Heel gray shoes',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = {};
    let input = inputBox.ariaValueMax;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result.length);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}
function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML + '';
}