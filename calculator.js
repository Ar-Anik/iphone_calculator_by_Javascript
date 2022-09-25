let value = document.querySelector(".value");

let ac = document.querySelector(".ac");
let pm = document.querySelector(".pm");
let percent = document.querySelector(".percent");
let div = document.querySelector(".division");

let num7 = document.querySelector(".number_7");
let num8 = document.querySelector(".number_8");
let num9 = document.querySelector(".number_9");
let mul = document.querySelector(".multiplication");

let num4 = document.querySelector(".number_4");
let num5 = document.querySelector(".number_5");
let num6 = document.querySelector(".number_6");
let sub = document.querySelector(".subtraction");

let num1 = document.querySelector(".number_1");
let num2 = document.querySelector(".number_2");
let num3 = document.querySelector(".number_3");
let add = document.querySelector(".addition");

let num0 = document.querySelector(".number_0");
let decimal = document.querySelector(".decimal");
let equal = document.querySelector(".equal");

let result = "";
let a = "";
let b = "";
let temp = "";
let flag = 0;

let opr = "";

function allclr(){
    result = "";
    a = "";
    b = "";
    temp = "";
    flag = 0;
    opr = "";
    value.textContent = "0";
}

function act(vlu)
{
    vlu.classList.add("active");
    setTimeout(less, 100);

    function less(){
        vlu.classList.remove("active");
    }
}

function init(vlu)
{
    if(temp === "-0")
        temp = "-" + vlu;
    else 
        temp += vlu;

    value.textContent = temp;
}

function operator(vlu)
{
    if(temp === "" && a === "")
    {
        opr = vlu;
        a = "0";
    }
    else if(temp === "" && a !== "")
    {
        opr = vlu;
    }
    else{
        a = temp;
        temp = "";
        flag = 0;
        opr = vlu;
        value.textContent = "0";
    }
}

function plusminus()
{
    if(temp === "")
        temp = "-0";
    else if(temp[0] !== '-')
        temp = "-" + temp;
    else
        temp = temp.substring(1);

    value.textContent = temp;
}

function prcnt()
{
    var vl = parseFloat(temp);
    vl = vl/100.0;
    temp = vl.toString();

    value.textContent = temp;
}

function eql()
{
    if(opr === "")
    {
        value.textContent = temp;
    }
    else
    {
        b = temp;
        //var va = parseFloat(a);
        //var vb = parseFloat(b);

        if(opr === "add"){
            result = parseFloat(a) + parseFloat(b);
        }

        else if(opr === "sub"){
            result = parseFloat(a) - parseFloat(b);
        }

        else if(opr === "mul"){
            result = parseFloat(a) * parseFloat(b);
        }

        else if(opr === "div"){
            result = parseFloat(a) / parseFloat(b);
        }

        temp = result.toString();

        value.textContent = temp;
    }
}

function decml()
{
    if(flag === 0)
    {
        if(temp === "")
            temp = "O.";
        else
            temp += ".";
            
        flag = 1;
        value.textContent = temp;
    }
    else
        value.textContent = temp;
}

ac.addEventListener("click", function (){
    allclr();
});

pm.addEventListener("click", function () {
    plusminus();
});

percent.addEventListener("click", function () {
    prcnt();
});

num0.addEventListener("click", function (){
    if(temp !== "" && temp !== "-0")
        init("0");
});

num1.addEventListener("click", function (){
    init("1");
});

num2.addEventListener("click", function (){
    init("2");
});

num3.addEventListener("click", function (){
    init("3");
});

num4.addEventListener("click", function (){
    init("4");
});

num5.addEventListener("click", function (){
    init("5");
});

num6.addEventListener("click", function (){
    init("6");
});

num7.addEventListener("click", function (){
    init("7");
});

num8.addEventListener("click", function (){
    init("8");
});

num9.addEventListener("click", function (){
    init("9");
});

decimal.addEventListener("click", function (){
    decml();
});

add.addEventListener("click", function (){
    operator("add");
});

sub.addEventListener("click", function() {
    operator("sub");
});

div.addEventListener("click", function () {
    operator("div");
});

mul.addEventListener("click", function () {
    operator("mul");
});

equal.addEventListener("click", function () {
    eql();
});

document.addEventListener("keypress", function (event){
    if(event.key === "AC")
        allclr();

    else if(event.key === "±")
        plusminus();

    else if(event.key === "0")
    {
        if(temp !== "" && temp !== "-0"){
            init("0");
            act(num0);
        }
    }
    else if(event.key === "1")
    {
        init("1");
        act(num1);
    }
    else if(event.key === "2")
    {
        init("2");
        act(num2);
    }
    else if(event.key === "3")
    {
        init("3");
        act(num3);
    }
    else if(event.key === "4")
    {
        init("4");
        act(num4);
    }
    else if(event.key === "5")
    {
        init("5")
        act(num5);
    }
    else if(event.key === "6")
    {
        init("6");
        act(num6);
    }
    else if(event.key === "7")
    {
        init("7");
        act(num7);
    }
    else if(event.key === "8")
    {
        init("8");
        act(num8);
    }
    else if(event.key === "9")
    {
        init("9");
        act(num9);
    }
    else if(event.key === "+")
        operator("add");

    else if(event.key === "-")
        operator("sub");

    else if(event.key === "/")
        operator("div");

    else if(event.key === "*")
        operator("mul");

    else if(event.key === "%")
        prcnt();

    else if(event.key === ".")
        decml();

    else if(event.key === "=")
        eql();
});
