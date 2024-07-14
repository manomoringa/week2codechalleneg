const ul = document.querySelector('ul')
const h1 = document.querySelector('#welcome-text')
let shoppinList =[]


const takeInput = ()=>
    {
    let input = document.getElementById('input-item')
        shoppinList.push(
            {
                item: input.value,
                purchased:false
            }
        )
        createDOM(shoppinList)
        input.value =''

}

const createDOM = (list)=>
    {
    ul.innerHTML =''
     list.forEach((listItem,index)=>{
            ul.innerHTML +=`<li id="${index}"><p>${listItem.item}</p> </li>`

    })
}
const removeItem = (index)=>
    {
    shoppinList.splice(index,1)
    createDOM(shoppinList)
}

const markpurchased = (index)=>
    {
    if(shoppinList[index].purchased == true){
        shoppinList[index].purchased = false
        createDOM(shoppinList)
    }
    else{
        shoppinList[index].purchased = true
        createDOM(shoppinList)
    }

        
}