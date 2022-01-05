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
if(addUser){
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
        window.location.replace("index.html")
    })
}

//elementType,classes, parentElement, attributes =[], textContent
const createMyOwnElement = (element, parent, classes, textContent,attributes)=>{
    const el = document.createElement(element)

    return el
}

const content= document.querySelector("#content")
if(content){
    if(usersData.length==0){
        let tr= document.createElement('tr')
        tr.classList="alert alert-danger text-center"
        content.appendChild(tr)
        let td = document.createElement('td')
        td.textContent="No Users Yet"
        td.setAttribute("colspan", 6)
        tr.appendChild(td)
}
    else{
        usersData.forEach(user=>{
            let tr= document.createElement('tr')
            content.appendChild(tr)
            userMainHeads.forEach(head=>{
                td= document.createElement('td')
                td.textContent=user[head.name]
                tr.appendChild(td)
            })
        })    
    }
}