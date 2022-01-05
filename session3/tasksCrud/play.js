// const createMyOwnElement = (element, parent, classes="", textContent="",attributes=[])=>{
//     const el = document.createElement(element)
//     parent.appendChild(el)
//     if(classes!="") el.classList = classes
//     if(textContent!="") el.textContent = textContent
//     attributes.forEach(attribute=>{
//         el.setAttribute(attribute.attName, attribute.attrVal)
//     })
//     return el
// }

// let s = document.querySelector("section")
// attr = [
//     {attName:"id", attrVal:"hello"},
//     {attName:"style", attrVal:"color:'red'"}
// ]
// let x = createMyOwnElement('div',s,"alert alert-danger","hello",attr)
// attr = [
//     {attName:"id", attrVal:"x"}
// ]
// x = createMyOwnElement('div',s)
// console.log(x)


// let myFun = (x=5)=>{
//     console.log(x)
// }

// myFun()




// x = () => console.log('hhh')

arr = ['a', 'b', 'c']
arr.forEach((element, i) => {
    console.log(i)
});