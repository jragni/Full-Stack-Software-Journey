

function anchorManipulation(){
    // grab parent ul
    let parentElement = document.querySelector(".navbar-list")
    // grab parent ul's children
    let children = Array.from(parentElement.children)
    // iterate over children
    // for each iteration create an anchor tag
    children.forEach( (child) => {
        child.innerHTML = '<a>' + child.textContent + '</a>'
         
    })
    // set the anchor tag text content to the text of hte child
    // set the li.innterHTML to the anchor tag created
    
}
anchorManipulation();