var h2=document.getElementsByTagName('h2');
//배열

h2[0].style.backgroundColor='red';
h2[0].style.color='blue';
h2[0].style.fontStyle='italic';

// background-color => backgroundColor

h2[1].style.cssText="color:red;border:2px solid blue;";
h2[2].style.cssText=`background-color:gray;border:2px solid blue;`;

var add=document.querySelector('.add');
var del=document.querySelector('.del');
var toggle=document.querySelector('.toggle');
var h2=document.querySelector('h2');
var h2a=document.querySelectorAll('h2');

// 고전이벤트
add.onclick=function(){
    // h2a[4].classList.add('active');
    for(var i=0;i<h2a.length;i++){
        h2a[i].classList.add('active');
    }
}
// 클래스를 동적으로 추가한다

// 표준이벤트
del.addEventListener('click', function(){
    for(var i =0; i<h2a.length; i++){
        h2a[i].classList.remove('active');
    }
});
// 토글버튼을 하나 만들고 클릭하면 class추가되고
// 다시클릭하면 클래스 제거
// 표준이벤트로 코딩
var x=0;
toggle.addEventListener('click', function(){
    if(x%2==0){
        for(var i=0;i<h2a.length;i++){
            h2a[i].classList.add('active');
        }
        x++;
    }else{
        for(var i =0; i<h2a.length; i++){
            h2a[i].classList.remove('active');
        }
        x--;
    }
});

var tog=document.getElementsByTagName('tog')[0];
// 배열

// tog.addEventListener('click', callback);

// callback 앞에 작업이 끝나면 나중에 실행되는 함수

// var i=0;
// function toggle(){
//     if(x%2==0){
//         for(var i=0;i<h2a.length;i++){
//             h2a[i].classList.add('active');
//         }
//     }else{
//         for(var i =0; i<h2a.length; i++){
//             h2a[i].classList.remove('active');
//         }
//     }
//     i++;
// }

var h3=document.querySelectorAll('h3');
console.log(h3);
for(var i=0; i<h3.length;i++){
    h3[i].onclick = function(){
        this.style.border=" 5px solid blue";
    }
}
// h2와 h3를 선택해서 각각에 이벤트를 걸어보자
var h2=document.querySelectorAll('h2');
console.log(h2);
for(var i=0; i<h2.length;i++){
    h2[i].onclick = function(){
        this.style.border=" 5px solid blue";
    }
}

// var h4=document.querySelectorAll('h4');
// // h4의 첫번째 태그를 클릭하면 h4전체 스타일을 변경하라
// for(var j=0;j<h4.length;j++){
//     h4[j].onclick = function(){
//         for(var i=0; i<h4.length;i++){
//             h4[i].style.border=" 5px solid red";
//         }
//     }
// }
var h4=document.querySelectorAll('h4');
// 중첩반복문으로 이벤트주기
for(var j=0;j<h4.length;j++){
    h4[j].onclick = function(){
        for(var i=0; i<h4.length;i++){
            h4[i].style.border=" 5px solid red";
        }
    }
}