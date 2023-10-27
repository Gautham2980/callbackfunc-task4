let numbers= [1,2,3,4,5,6]

let find=(numbers,iteration)=>{
    iteration(numbers)
}


function iteration(num){
    num.forEach(e=>{
        document.write(e+"<br>")
    })


}


iteration(numbers,iteration)
  













