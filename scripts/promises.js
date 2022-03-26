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
function createPost(post){//el primer parametro es el post, el segundo una funcion
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false
            return error? reject('Error: sorry, something went terribly wrong'): resolve()

        }, 2000)
    })
    

}

/* 

------------------------------------ASYNC / AWAIT----------------------------------------

*/

/* async function init(){//await funciona para funcionoes asincronas
    await createPost({title:"nuevo post A/A", body: "el cuerpo del nuevo post"})

    getPosts()//Espera a la funcion con await para seguir
}
init() */

//------------------------Call promise------------------
/* createPost({title:"nuevo post", body: "el cuerpo del nuevo post"})
.then(getPosts)// en caso devuelva un resolver, procede con la funcion
.catch(error => console.log(error))//Si se tiene un error lo toma y muestra el error
 */
//------------------- Async/ Await / Fetch-------------------

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users'); //la trae de un api y hay que formatear el objeto
    const data = await res.json()
    console.log(data)
    //Segun el cuate este, una forma mas fancy de procesar promesas, messirve

}
fetchUsers()
//---------------Promises.all------------------

/* const promise1 = Promise.resolve('Hello world')
const promise2 = 10; 
const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, 'goodbye'))

//_______________PROMESA USANDO FETCH_______________

const promise4 = fetch('https://jsonplaceholder.typicode.com/users') //la trae de un api y hay que formatear el objeto
.then(res => res.json() )//esto lo pasamos por otro then para mostrarlo, devuelve una promesa (son dos promesas digamos, para eso del fetch)

Promise.all([promise1, promise2, promise3, promise4])
.then(
    (values) => console.log(values)
)//en el then pasamos una arrow function y el parametro tiene una lista de lo que resolvieron las promesas
 */


