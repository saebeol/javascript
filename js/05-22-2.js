// setAttribute("속성","값")
// getAttribute("속성")

var a=document.querySelectorAll('a');

console.log(a[0].getAttribute("value"));

for(var i=0; i<a.length;i++){
    a[i].style.backgroundColor=a[i].getAttribute('value'); // 속성 가져옴
}

for(var i=0; i<a.length;i++){
    a[i].setAttribute('index',i); // 속성추가
}

// data-        사용자정의속성  dataset 속성
// a태그를 클릭하면 data-color속성을 읽어들여서 글자색변경
for(var i=0; i<a.length;i++){
    a[i].addEventListener('click', function(){
        // this.style.color=this.getAttribute('data-color');
        this.style.color=this.dataset.color;
        // this.innerHTML=this.dataset.coffeeName;
        this.textContent=this.dataset.coffeeName;
    });
}

// innerHTML, textContent
// h1.innerHTML="<span> hi </span>"
// h1.textContent="<span> hi </span>"

// 버튼을 하나 만들어서 클릭했을때
// 리스트목록이 추가(동적으로)되는 예제

var btn=document.querySelector('button');
var str='';
str+="<ul>";
str+="<li>Javascript</li>";
str+="<li>jQeury</li>";
str+="<li>Ajax</li>";
str+="</ul>";

var box=document.getElementById('box');

btn.onclick=addList;

function addList(){
    box.innerHTML=str;
}

// 리스트제거, 리스트토글버튼
var del=document.querySelector('.del');
var toggle=document.querySelector('.toggle');

function delList(){
    box.innerHTML="";
}
del.onclick=delList;

var i=0;
function toggleList(){
    i%2==0 ? addList() : delList();
    // 삼항연산자
    i++;
}
toggle.onclick=toggleList;