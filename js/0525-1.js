var lang=document.getElementById('lang');
var span=document.querySelector('span');

lang.onchange=function(){
    span.innerHTML=`<h3>${lang.selectedIndex+1} 번째에</h3>
    ${lang.value}를 선택
    `
}
lang.onblur=function(){
    lang.options[2].value="HTML5";
    lang.options[2].innerHTML="HTML5";
}
var last=lang.options[2].value;
lang.options[2].selected=true;
span.innerHTML="<h2>"+last+"부터 시작한다.</h2>";

// var button=document.querySelector('button');
// var mama= document.getElementById('mama');

// button.onclick=function(){
//     var span=
// }
// var i=0;
// var stop=setInterval(function() {
//     document.body.innerHTML += "<h1>welcome"+i+"</h1>";
//     i++;
//     if(i==5){
//         clearInterval(stop)
//         document.body.innerHTML +="인터벌중지";
//     }
// },1000);
// var ID = setInterval(callback,time);
// clearInterval(ID);

setInterval(function(){
    var time=document.getElementById('time')
    time.innerHTML=new Date().toLocaleDateString();
    time.innerHTML+=new Date().toLocaleTimeString();
},1000)

var str1 = '뜰에 뜰에 뜰에는 닭이 있다.';
document.writeln(str1.indexOf('뜰')); // 0 (선두부터 검색)
document.writeln(str1.lastIndexOf('뜰')); // 6 (뒤에서부터 검색)
document.writeln(str1.indexOf('뜰',3)); // 5 (4번쨰 문자부터 우측방향 검색)
document.writeln(str1.lastIndexOf('에',5)); // 4 (6번쨰 문자부터 좌측방향 검색)
document.writeln(str1.indexOf('가든')); // -1 (불일치)

var str2 = 'Wings프로젝트';
document.writeln(str2.charAt(4)); // s (5번쨰 문자를 추출)
document.writeln(str2.slice(5,8)); // 프로젝 (6~8번쨰 문자를 추출)
document.writeln(str2.substring(5,8)); // 프로젝 (6~8번쨰 문자를 추출)
document.writeln(str2.substr(5,3)) // 프로젝 (6번쨰 문자에서 3 문자를 추출)
document.writeln(str2.split('s')); // Wing, 프로젝트
document.writeln(str1.split('뜰',3)); // ,에 ,에 (3개로 분할)
document.writeln('위로'.anchor('top')); // <a name="top">위로</a>
document.writeln(str2.link('https://www.wings.msn.to/'));
// <a href="https://www.wings.msn.to/">Wings프로젝트</a>
document.writeln('10'.sub()); // <sub>10</sub> (아랫첨자)
document.writeln('10'.sup()); // <sup>10</sup> (윗첨자)
document.writeln(str2.concat('유한회사')); // Wings프로젝트유한회사
document.writeln(str2.length); // 9 (한국어/일본어도 하나의 문자로 계산)