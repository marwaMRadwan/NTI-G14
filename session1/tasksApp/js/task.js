let x = document.querySelector('div')
// x.innerText = "hi from dom"
document.querySelector("#showHide").addEventListener('click', function(e){
    //console.log(e.target)
    x.classList.toggle('d-none')
})