const readDataFromStorage = () => {
    let data
    try{
        data = JSON.parse(localStorage.getItem('users'))
        if(!Array.isArray(data)) throw new Error('data isn\'t array')
    }
    catch(exp){
        // console.log(exp);
        data=[]
    }
    //check if data is json
    //check if data is array
    //if no item
    return data
}

const setDataToStorage = (myData) => {
    if(!Array.isArray(myData)) myData=[]
    //check if myData is array
    //convert json array to string
    myData = JSON.stringify(myData)
    //store data in storage
    localStorage.setItem('users', myData)
}

const usersData = readDataFromStorage()
console.log(usersData)
// setDataToStorage(usersData)
// const addUser = document.querySelector('#addUser')
// addUser.addEventListener("submit", function(e){
//     e.preventDefault()
//     const user = {
//         id:Date.now(),
//         name:this.elements.username.value,
//         email:this.elements.email.value,
//         gender:this.elements.gender.value,
//         isMarried:this.elements.isMarried.checked
//     }
//     // console.log(user)
//     // usersData.push(user)
//     // this.reset()
//     // console.log(usersData)
//     console.log(user['name']) //user.name
// })
// userMainHeads = [
//     {name:"id",dataStore:null,  default: Date.now(), isDefault:true},
//     {name:"username", dataStore:"value",default:null, isDefault:false},
//     {name:"email", dataStore:"value",default:null, isDefault:false},
//     {name:"gender", dataStore:"value",default:null, isDefault:false},
//     {name:"isMarried", dataStore:"checked",default:null, isDefault:false},
// ]
// addUser.addEventListener("submit", function(e){
//         e.preventDefault()
//         const user = {}//id:Date.now()}
//         userMainHeads.forEach(head => {
//             if(head.isDefault) user[head.name]= Date.now()//head.default
//             else user[head.name]=this.elements[head.name][head.dataStore]
//         });
        
//         console.log(user)
//          usersData.push(user)
//         this.reset()
//         console.log(usersData)
//     })

//     // localStorage.setItem('name', "marwa")
//     // localStorage.removeItem('name')

