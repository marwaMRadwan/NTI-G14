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

const createMyOwnElement = (element, parent, classes="", textContent="",attributes=[])=>{
    const el = document.createElement(element)
    parent.appendChild(el)
    if(classes!="") el.classList = classes
    if(textContent!="") el.textContent = textContent
    attributes.forEach(attribute=>{
        el.setAttribute(attribute.attName, attribute.attrVal)
    })
    return el
}

const content= document.querySelector("#content")
if(content){
    if(usersData.length==0){
        const tr = createMyOwnElement('tr',content, "alert alert-danger text-center")
        createMyOwnElement('td', tr,"", "No Users Yet", [{attName:"colspan", attrVal:6}] )
}
    else{
     usersData.forEach((user, index)=>{
      const tr = createMyOwnElement('tr',content)
      userMainHeads.forEach( head=> createMyOwnElement('td', tr,"",user[head.name]) )
      const td = createMyOwnElement('td',tr)
      const delBtn = createMyOwnElement('button', td, "btn btn-danger mx-3", "delete")
      const editBtn = createMyOwnElement('button', td, "btn btn-warning mx-3", "Edit")
      const showBtn = createMyOwnElement('button', td, "btn btn-primary mx-3", "Show")
      showBtn.addEventListener("click", (e)=> editUser(user.id))
    })    
    }
}

editUser = (id) =>{
    alert(id)
}