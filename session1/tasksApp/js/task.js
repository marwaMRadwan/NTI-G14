let x = document.querySelector('div')
const showHideBtn =document.querySelector("#showHide")
// x.innerText = "hi from dom"
showHideBtn.addEventListener('click', function(e){
    // console.log(e)
    showHideBtn.textContent == "Show" ? showHideBtn.textContent = "Hide" : showHideBtn.textContent = "Show"
    /*
    if(showHideBtn.textContent == "Show" ) showHideBtn.textContent = "Hide" 
    else showHideBtn.textContent = "Show"
     */
    x.classList.toggle('d-none')
})

data = ['t1', 't2', 't3']
data.forEach(element => {
    const op = document.createElement("option") //<option></option>
    op.textContent=element //<option>el</option>
    op.setAttribute("value", element)
    document.querySelector("#selectType").appendChild(op)
});
//createElement - appendChild

document.querySelector('form').addEventListener("submit", function(e){
   e.preventDefault()
data={
    a: this.elements.title.value
}
console.log(data);
})