const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

/* 
Esta funcion imita lo que hace un servidor para obtener info
Por eso uso el settimeout para ver como toma tiempo en recibir cada post

*/
function getPosts() {
    setTimeout(()=>{
        let output = ''
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output

    }, 1000)
}
getPosts()
function createPost(post, callback){//el primer parametro es el post, el segundo una funcion
    setTimeout(()=>{
        posts.push(post)
        callback()
    }, 2000)
}
createPost({title:"nuevo post", body: "el cuerpo del nuevo post"}, getPosts())