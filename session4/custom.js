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
getApiData('https://jsonplaceholder.typicde.com/posts', (response, err)=>{
    if(response) console.log(response)
    else console.log(err)
})



