const usersData = []
const addUser = document.querySelector('#addUser')
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
userMainHeads = [
    {name:"username", dataStore:"value"},
    {name:"email", dataStore:"value"},
    {name:"gender", dataStore:"value"},
    {name:"isMarried", dataStore:"checked"},
]
addUser.addEventListener("submit", function(e){
        e.preventDefault()
        const user = {id:Date.now()}
        userMainHeads.forEach(head => {
            user[head.name]=this.elements[head.name][head.dataStore]
        });
        
        console.log(user)
        // usersData.push(user)
        // this.reset()
        // console.log(usersData)
    })