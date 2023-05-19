// fot in 반복문
// window
for(var i in window){
    // console.log(`${i} : ${window[i]}`);
}

var user=[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "body": "aaaaaaaaaa3aa"
      },
    {
        "userId": 1,
        "id": 2,
        "title": "delectus aut autembbbbbbbbbb",
        "body": "aaaaaaaaaa2aa"
      },
    {
        "userId": 1,
        "id": 3,
        "title": "delectus aut autemaaaaaaaaa",
        "body": "aaaaaaaaaa1aa"
      }
];
console.log(user[0].title);

for(var i=0; i<user.length; i++){
    document.write("title : "+user[i].title);
    document.write("<br>");
}
for(var i=0; i<user.length; i++){
    document.write(user[i].id + " : " + user[i].title);
    document.write("<br>");
}
for(var i=0; i<user.length; i++){
    document.write(user[i].body);
    document.write("<br>");
}

for(var i in user){
    document.write(user[i]);
    console.log(user[i]);
}
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      
fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))