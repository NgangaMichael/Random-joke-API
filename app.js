// XMLHHTTPS request This is old version dont use this code
// const req = new XMLHttpRequest();
// req.onload = function(){
//     console.log("Succesfull req")
//     const data = JSON.parse(this.responseText)
//     console.log(data.ticker.price)
// }
// req.onerror = function(){
//     console.log(this)
// }

// req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd")
// req.send();

// **********************************************************************

// Fetch this is a new method of making request, it surpotes promises 
// fetch("https://api.cryptonator.com/api/ticker/btc-usd")
// .then((response)=>{
//     console.log("Data Waiting to be passed", response)
//     return response.json();
// })
// .then((data)=>{
    //    console.log("Data passed") 
//     console.log(data.ticker.price)
// })
// .catch((err)=>{
//     console.log("Erro", err)
// })

// ***********************************************************************

// Fetch this is an async version and the latest one

// const bitcon = async()=>{
//     try {
//     const res = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")
//     const data = await res.json()
//     console.log(data.ticker.price)
//     } catch(err) {
//         console.log("SORRY!!", err)
//     }
// };
//  bitcon()

// Using axios API library to make requests 
// axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
// .then((res)=>{
//     console.log(res.data.ticker.price)
// }) .catch((err)=>{
//     console.log("Error", err)
// })

// This is axios async version 
// const price = async()=>{
//     try {
//     const res = await axios.get("https://api.cryptonator.com/api/ticker/btc-usd")
//     console.log(res.data.ticker.price)
//     } catch (err){
//         console.log("Error", err)
//     }
// };


// query strings and hedaers under Axios async 
// const jokes = async()=>{
//     try {
//     const config = {headers: {Accept: "application/json"}}
//     const res = await axios.get("https://icanhazdadjoke.com/", config)
//     console.log(res.data.joke)
//     } catch (err){
//         console.log("Error", err)
//     }
// }

// jokes()
const btn = document.querySelector("button");
const parag = document.querySelector("p");
const li = document.querySelector("li");
btn.addEventListener("click", ()=>{
    const jokes = async()=>{
    try {
    const config = {headers: {Accept: "application/json"}}
    const res = await axios.get("https://icanhazdadjoke.com/", config)
    li.textContent = (res.data.joke)
    } catch (err){
        parag.textContent = ("Error", err)
    }
}

jokes()
})
