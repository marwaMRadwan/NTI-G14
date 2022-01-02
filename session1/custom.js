//let var const
// const name = "marwa"
// var x = 3
// var x = 6
// let x = 12
// console.log(x)

// let x = 4
// if(true){
//     let x = 10
// }
// console.log(x)

// console.log(x)
// var x = 3

// for(;;){
//     console.log('test');    
// }


// while(true){}


// for - while - do while - foreach - for of

// x= prompt('test')

//[1,2,1,1,2,3]

/*
get data from user
check number
print array
*/
function getDataFromUser (message){
    return prompt(message)
}

function isIncluded(arr, val){
    if(arr.includes(val)) return true
    return false
}
function addToArray(arr, val){
    arr.push(val)
    console.log("added to array")
}
function printArrayData(arr){
    arr.forEach(val=>{
        console.log(val)
    })
}
function myApp(checkedArray, myData){
    let addedVal
    while(true){
        addedVal=getDataFromUser("enter a number")
        if(addedVal=="0") {
            printArrayData(myData)
            break;
        }    
        else if(isIncluded(checkedArray,addedVal)) addToArray(myData, addedVal)
        else alert("invalid value try again")
    }
}
// let x = getDataFromUser("x = ")
// console.log(checkNumber(['a','b','c'], x))
// let y = getDataFromUser("y = ")
// isIncluded([1,2,3,9,6,4,7], 5)
let  myData= []
myApp(['1','2','3'], myData)
myApp(['10','20','30'], myData)