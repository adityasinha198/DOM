let posts = [{title:"1 post",body:"this is 1n post",createdat:new Date().getTime()},
{title:"2 post",body:"this is 2 post ",createdat:new Date().getTime()}]
var interval 

function getposts(){
    clearInterval(interval)
    var inter = setInterval(() => {
        let output = ``
        posts.forEach((post)=>{
            output = output+`<li>${post.title} created ${(new Date().getTime()-post.createdat)/1000} ago</li>`
        })
        document.body.innerHTML= output
        
    }, 1000);
    
    
}


function createpost(post){
    return new Promise((resolve,reject) =>{
    
        posts.push({...post,createdat:new Date().getTime()})
        let ne = true
        if(ne){
            resolve("Hello moto")
        }
        else{
            reject("Not solved")
        }
        
    })
}

createpost({title:'3  post',body:'this is 3 post'}).then(getposts).catch(err=>console.log(err))


function del(val){
    return new Promise((res,rej) =>{
        setTimeout(()=>{
            if(val.length==0){
                rej("Array is empty now")
            }
            else{
            val.pop()
            }

        },1000)
    })


}

/*del(posts).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err))*/



createpost({title:'4 post',body:'this is 4 post'})
createpost({title:'5 post',body:'this is 5 post',})

del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))
del(posts).catch(err=>console.log(err)).catch(err=>console.log(err))


function useractivity(){
    return new Promise((resolve, reject) => {
        let activetime= new Date()
        resolve(activetime)
        
    })
}




/*async function abc(){
    await 
    return "Hello world"
}
abc().then(values=>console.log(values))*/


