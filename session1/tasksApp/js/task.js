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