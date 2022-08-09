const quotesArray = [
    {
    quote:"A wise man will make more opportunities than he finds.",
    korean:"현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
    author:"Francis Bacon"
    },
    {
    quote:"A goal without a plan is just a wish.",
    korean:"계획 없는 목표는 한낱 꿈에 불과하다.",
    author:"Antoine de Saint-Exupery"
    },
    {
    quote:"The future depends on what we do in the present.",
    korean:"미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author:"Mahatma Gandhi"
    },
    {
    quote:"There are two means of refuge from the miseries of life: music and cats.",
    korean:"삶의 시름을 달래 주는 두가지, 그것은 음악과 고양이.",
    author:"albert schweitzer"
    }
];
const quote = document.querySelector(".quoteEng");
const korean = document.querySelector(".quoteKor");
const author = document.querySelector(".quoteAuthor");


const todaysQuote = quotesArray[Math.floor(Math.random()* quotesArray.length)];
    
quote.innerHTML = todaysQuote.quote;
korean.innerHTML = todaysQuote.korean;
author.innerHTML = `-${todaysQuote.author}-`;


const imges = [
 "img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"
];

const chosenImg = imges[Math.floor(Math.random()*imges.length)];

const bgImg = document.createElement("img");
bgImg.src=`img/${chosenImg}`;

document.body.appendChild(bgImg);
