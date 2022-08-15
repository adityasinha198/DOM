

console.log("person1:shows ticket")
console.log("person2:shows ticket")
async function premovie(){
    const promisewifetickets = new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve('ticket')
        })
    },3000)

    const getPopcorn = new Promise((resolve,reject)=>resolve('popcorn'))
    const addbutter = new Promise((resolve,reject)=>resolve('butter'))
    const getcolddrinks = new Promise((resolve,reject)=>resolve('cold drinks'))
    
    let ticket = await promisewifetickets
    console.log('wife:i have the '+ ticket)
    console.log('husband:we should go in')
    console.log('wife: no i m hungry')

    let popcorn = await getPopcorn
    console.log(`husband: i got some ${popcorn}`)
    console.log(`husband: we should go in`)
    console.log(`wife: I need butter on my popcorn`)

    let butter = await addbutter
    console.log(`husband: i got some ${butter} on popcorn}`)
    console.log(`husband: anything else darling`)

    let drinks = await getcolddrinks
    console.log(`husband:i got some ${drinks}`)
    console.log(`wife:lets go we are getting late`)
    console.log(`husband:thank you for the reminder`)


   
    return "ticket"
}


premovie().then(value=>console.log(`person3:shows ${value}`))
console.log("person4:shows ticket")
console.log("person5:shows ticket")