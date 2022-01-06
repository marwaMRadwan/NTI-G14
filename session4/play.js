// clousers
// const myClouser = (x) =>{
//     return {
//         x1(){ console.log(x)},
//         x2(){ console.log(x+4)}
//     }
// }
// myClouser(5).x2()

// const student = (name, className) =>{
//     return {
//         show() { console.log(`name is ${name} and class is ${className}`)}
//     }
// }
// let sherine = student('sherine', "A") //{show(){....}}
// console.log(sherine)
// let ahmed = student("ahmed", "B")
// sherine.show()
// ahmed.show()

//callback
//check val is number  return fe error, error detailes else return mafesh error , val
// const myCB = (val, cb) =>{
//     if(typeof val == "number")  cb(true, "this value is number")
//     else cb(false, val)
// }

// myCB(10, (err, res)=>{
//     if(err) console.log(res)
//     else console.log("it is not a number")
// })
// let x
//promises
// const myPromise = (val) => new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(typeof val=="number") {x=20; resolve(val)}
//         else {x=25;reject("not a number")}
//     }, 1500)
// })

// console.log(myPromise(5))
// console.log(x)
//then err
// myPromise("hello").then(
//     (data)=>{console.log(data)},
//     // (err)=>{console.log(err)}
// ).catch(e=>{
// console.log(e)
// })

//async await
// const a = async ()=>{
//     try{
//         b = await myPromise("h")
//         y= await myPromise(15)
//         console.log(b)
//         console.log(y)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// a()
// class object
// class animal human male female{makeShopping, cook, talk kter, }



// y= FormData.addEventListner("cli", function(e){
//     XMLDocument.foreach( ()=>
//         return z
//     )
// })


// addEventListener(type, cb){
//     if(type=="click") cb(event.details)
// }

// form.addEventListener("click", (e)=>{

// })

// setTimeout(()=>{
//     console.log("hello")
// }, 2000)
// console.log('hi')

