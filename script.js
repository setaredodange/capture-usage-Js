const listItems= document.querySelectorAll('li')
const inputElem= document.querySelector('input')
const ulElem = document.querySelector('.list')

// listItems.forEach(function (listItem){
//     listItem.addEventListener('click', function(event){
//          event.target.remove()
//     })
// })

ulElem.addEventListener('click', function(event){
    console.log(event.target.tagName);
    if(event.target.tagName=== 'LI'){
        event.target.remove()
    }
})


inputElem.addEventListener('keypress', function(event){
    if(event.keyCode === 13){
        // console.log('pressed');
        newLiElem = document.createElement('li')
        newLiElem.innerHTML = event.target.value

        ulElem.append(newLiElem)
        console.log(listItems);
        inputElem.value=''

    }
})