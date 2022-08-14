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
    console.log(inter)
        var interval = inter
    
}


function createpost(post,callback){
    setTimeout(() => {
        posts.push({...post,createdat:new Date().getTime()})
        callback()
    },3000)
}

createpost({title:'3  post',body:'this is 3 post',},getposts)
createpost({title:'4 post',body:'this is 4 post',},getposts)
createpost({title:'5 post',body:'this is 5 post',},getposts)
createpost({title:'6 post',body:'this is 6 post',},getposts)
console.log(interval)

