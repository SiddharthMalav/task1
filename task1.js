let div1 = document.createElement("div");
let div2 = document.createElement("div");

div1.setAttribute('class','divv1');
div1.setAttribute('style','border:2px solid black');
div1.setAttribute('style','width:550px');

document.body.appendChild(div1);

let homeimg = document.createElement("img");
homeimg.src='https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
document.body.getElementsByClassName('divv1')[0].appendChild(homeimg);
homeimg.setAttribute('class','homeimgcl');
homeimg.setAttribute('style','height:250px;width:250px;margin:2px');



div2.setAttribute('class','divv2');

div2.setAttribute('style','height:102px;margin:10px;margin-bottom:10px');
document.body.appendChild(div2);
let home1 = document.createElement("img");
home1.src='https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
home1.setAttribute('style','height:100px;width:100px;margin:2px');
document.body.getElementsByClassName('divv2')[0].appendChild(home1);
home1.addEventListener('click', () => {
    homeimg.src = 'https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.border="2px solid black";
    home8.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});


let home2 = document.createElement("img");
home2.src='https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg';
document.body.getElementsByClassName('divv2')[0].appendChild(home2);
home2.setAttribute('style','height:100px;width:100px;margin:2px');
home2.addEventListener('click', () => {
    homeimg.src = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Solid_red.svg';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home2.style.border="2px solid black";
    home1.style.border="none";
    home8.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});


let home3 = document.createElement("img");
home3.src='https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png';
home3.setAttribute('style','height:100px;width:100px;margin:2px');

document.body.getElementsByClassName('divv2')[0].appendChild(home3);
home3.addEventListener('click', () => {
    homeimg.src = 'https://htmlcolorcodes.com/assets/images/colors/bright-red-color-solid-background-1920x1080.png';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home3.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home8.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});

let home4 = document.createElement("img");
home4.src='https://media.wallpaperchill.com/solid-color-wallpapers/spanish-sky-blue-solid-color-background-wallpaper-for-mobile-phone.png';
document.body.getElementsByClassName('divv2')[0].appendChild(home4);
home4.setAttribute('style','height:100px;width:100px;margin:2px');
home4.addEventListener('click', () => {
    homeimg.src = 'https://media.wallpaperchill.com/solid-color-wallpapers/spanish-sky-blue-solid-color-background-wallpaper-for-mobile-phone.png';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home4.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home5.style.border="none";
    home8.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});


let home5 = document.createElement("img");
home5.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhdtjQJbJANLyjUtRNa0l-fkn_ESXKdhrwQ&usqp=CAU';
document.body.getElementsByClassName('divv2')[0].appendChild(home5);
home5.setAttribute('style','height:100px;width:100px;margin:2px');
home5.addEventListener('click', () => {
    homeimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQhdtjQJbJANLyjUtRNa0l-fkn_ESXKdhrwQ&usqp=CAU';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home5.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home8.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});


let home6 = document.createElement("img");
home6.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJFSqo5AnUZnSQGa7RgXwOipMj3om05jalA&usqp=CAU';
document.body.getElementsByClassName('divv2')[0].appendChild(home6);
home6.setAttribute('style','height:100px;width:100px;margin:2px');
home6.addEventListener('click', () => {
    homeimg.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJFSqo5AnUZnSQGa7RgXwOipMj3om05jalA&usqp=CAU';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home6.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home8.style.border="none";
    home7.style.border="none";
});


let home7 = document.createElement("img");
home7.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVl/wB6QsljAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=';
document.body.getElementsByClassName('divv2')[0].appendChild(home7);
home7.setAttribute('style','height:100px;width:100px;margin:2px');
home7.addEventListener('click', () => {
    homeimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVl/wB6QsljAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home7.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home6.style.border="none";
    home8.style.border="none";
});


let home8 = document.createElement("img");
home8.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUIeDBoVq8wAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC';
document.body.getElementsByClassName('divv2')[0].appendChild(home8);
home8.setAttribute('style','height:100px;width:100px;margin:2px');
home8.addEventListener('click', () => {
    homeimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUIeDBoVq8wAAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home8.style.border="2px solid black";
    home1.style.border="none";
    home2.style.border="none";
    home3.style.border="none";
    home4.style.border="none";
    home5.style.border="none";
    home6.style.border="none";
    home7.style.border="none";
});


let btn1=document.createElement('button');
btn1.innerText="All";
document.body.appendChild(btn1);
btn1.style.margin="2px";
btn1.addEventListener("click", () => {
    home1.style.display = "inline";
	home2.style.display = "inline";
	home3.style.display = "inline";
	home4.style.display = "inline";
	home5.style.display = "inline";
	home6.style.display = "inline";
	home7.style.display = "inline";
	home8.style.display = "inline";
});

let btn2=document.createElement('button');
btn2.innerText="RED";
btn2.style.margin="2px";
btn2.addEventListener("click", () => {
    homeimg.src = 'https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.display = "inline";
	home2.style.display = "inline";
	home3.style.display = "inline";
	home4.style.display = "none";
	home5.style.display = "none";
	home6.style.display = "none";
	home7.style.display = "none";
	home8.style.display = "none";
});
document.body.appendChild(btn2);
let btn3=document.createElement('button');
btn3.innerText="BLUE";
btn3.style.margin="2px";
document.body.appendChild(btn3);
btn3.addEventListener("click", () => {
    homeimg.src = 'https://media.wallpaperchill.com/solid-color-wallpapers/spanish-sky-blue-solid-color-background-wallpaper-for-mobile-phone.png';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.display = "none";
	home2.style.display = "none";
	home3.style.display = "none";
	home4.style.display = "inline";
	home5.style.display = "inline";
	home6.style.display = "inline";
	home7.style.display = "none";
	home8.style.display = "none";
});
let btn4=document.createElement('button');
btn4.innerText="GREEN";
btn4.style.margin="2px";
document.body.appendChild(btn4);
btn4.addEventListener("click", () => {
    homeimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVl/wB6QsljAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.display = "none";
	home2.style.display = "none";
	home3.style.display = "none";
	home4.style.display = "none";
	home5.style.display = "none";
	home6.style.display = "none";
	home7.style.display = "inline";
	home8.style.display = "inline";
});
let frm=document.createElement("form")
document.body.appendChild(frm);
frm.setAttribute("class", "myform");

let se=document.createElement("select");
se.setAttribute("class", "mySelect");

document.getElementsByClassName("myform")[0].appendChild(se);

let op1=document.createElement("option");
op1.innerText="All";
op1.setAttribute("value","ALL");
document.getElementsByClassName("mySelect")[0].appendChild(op1);
let op2=document.createElement("option");
op2.innerText="RED";
document.getElementsByClassName("mySelect")[0].appendChild(op2);
op2.setAttribute("value","RED");
let op3=document.createElement("option");
op3.innerText="BLUE";
document.getElementsByClassName("mySelect")[0].appendChild(op3);
op3.setAttribute("value","BLUE");
let op4=document.createElement("option");
op4.innerText="GREEN";
document.getElementsByClassName("mySelect")[0].appendChild(op4);
op4.setAttribute("value","GREEN");
  se.addEventListener("change", () => {
    if(se.value=="ALL"){
    home1.style.display = "inline";
	home2.style.display = "inline";
	home3.style.display = "inline";
	home4.style.display = "inline";
	home5.style.display = "inline";
	home6.style.display = "inline";
	home7.style.display = "inline";
	home8.style.display = "inline";}
    if(se.value=="RED"){
        homeimg.src = 'https://upload.wikimedia.org/wikipedia/commons/1/10/Red_Color.jpg';
        homeimg.style.height="250px";
        homeimg.style.width="250px";
        home1.style.display = "inline";
        home2.style.display = "inline";
        home3.style.display = "inline";
        home4.style.display = "none";
        home5.style.display = "none";
        home6.style.display = "none";
        home7.style.display = "none";
        home8.style.display = "none";
    }
    if(se.value=="BLUE"){
        homeimg.src = 'https://media.wallpaperchill.com/solid-color-wallpapers/spanish-sky-blue-solid-color-background-wallpaper-for-mobile-phone.png';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.display = "none";
	home2.style.display = "none";
	home3.style.display = "none";
	home4.style.display = "inline";
	home5.style.display = "inline";
	home6.style.display = "inline";
	home7.style.display = "none";
	home8.style.display = "none";
    }
    if(se.value=="GREEN"){
        homeimg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEVl/wB6QsljAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=';
    homeimg.style.height="250px";
    homeimg.style.width="250px";
    home1.style.display = "none";
	home2.style.display = "none";
	home3.style.display = "none";
	home4.style.display = "none";
	home5.style.display = "none";
	home6.style.display = "none";
	home7.style.display = "inline";
	home8.style.display = "inline";
    }
});
  
  
