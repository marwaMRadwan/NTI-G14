const readDataFromStorage = () => {
    let data
    try{
        data = JSON.parse(localStorage.getItem('users'))
        if(!Array.isArray(data)) throw new Error('data isn\'t array')
    }
    catch(exp){
        data=[]
    }
    return data
}

const setDataToStorage = (myData) => {
    if(!Array.isArray(myData)) myData=[]
    myData = JSON.stringify(myData)
    localStorage.setItem('users', myData)
}

const usersData = readDataFromStorage()
const addUser = document.querySelector('#addUser')
userMainHeads = [
    {name:"id",dataStore:null,  default: Date.now(), isDefault:true},
    {name:"username", dataStore:"value",default:null, isDefault:false},
    {name:"email", dataStore:"value",default:null, isDefault:false},
    {name:"gender", dataStore:"value",default:null, isDefault:false},
    {name:"isMarried", dataStore:"checked",default:null, isDefault:false},
]
addUser.addEventListener("submit", function(e){
        e.preventDefault()
        const user = {}
        userMainHeads.forEach(head => {
            if(head.isDefault) user[head.name]= Date.now()
            else user[head.name]=this.elements[head.name][head.dataStore]
        });
        usersData.push(user)
        this.reset()
        setDataToStorage(usersData)
    })

