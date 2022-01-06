const APIS = [
    {name:"posts", details: ["userId","id", "title","body"]},
    {name:"comments", details: ["postId","id","name","email","body"]},
    {name:"albums",details:["userId","id","title"]},
    {name:"todos", details:["userId","id","title","completed"]}
]
const commonURL= "https://jsonplaceholder.typicode.com/"
const btns = document.querySelector("#btns")
const thead = document.querySelector("thead")
const tbody = document.querySelector("tbody")

getApiData = async(apiLink, callback)=>{
    try{
        let data = await fetch(apiLink)
        let JsonData = await data.json()
        callback(JsonData, false)
    }
    catch(e){
        callback(false, e)
    }
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

APIS.forEach(api=>{
    btn = createMyOwnElement("button", btns, "btn btn-primary mx-2", api.name)
    btn.addEventListener("click", (e)=>{
        getApiData(`${commonURL}${api.name}`, (response, err)=>{
            if(response){
                thead.textContent=""
                tbody.textContent=""
                tr= createMyOwnElement("tr", thead)
                api.details.forEach(d=>createMyOwnElement("th", tr,"", d))
                response.forEach(el=>{
                    tr= createMyOwnElement("tr", tbody)
                    api.details.forEach(d=>createMyOwnElement("td", tr,"", el[d]))
                })
            }
            else{ 
                createMyOwnElement("div", btns, "alert alert-danger", err.message)
            }
        })
    })
})
