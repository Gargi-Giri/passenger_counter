//document.getElementById("count-el").innerText=5

let count=0
// console.log(count)
// let myAge=19
// console.log(myAge)
// let bonusPoints=50
// console.log(bonusPoints)
// bonusPoints=bonusPoints+50
// console.log(bonusPoints)
// bonusPoints=bonusPoints-75
// console.log(bonusPoints)
// bonusPoints=bonusPoints+45
// console.log(bonusPoints)
let countEl=document.getElementById("count-el")
console.log(countEl)
function increment(){
    // console.log("the button was clicked")
    count=count+1
    countEl.innerText=count
    console.log(count)
}
