function describeEzra () {
    let contentElement = document.getElementById('content')
    contentElement.innerHTML = 'Ezra is cool'
}
function processInput () {
    // Get the text input field, assign to inputElement
    let inputElement = document.getElementById('videoid')

    // Get the place we want to write to and assign to contentElement
    let contentElement = document.getElementById('content')

    // Pull the text from the input element and assign it to the userInput variable
    let userInput = "https://www.youtube.com/embed/" + inputElement.value
    
    // Put whatever we got from the input into the inner html of the content element
    contentElement.src = userInput
}

function getTedWilliams () {
    
}