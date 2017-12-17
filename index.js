document.addEventListener('DOMContentLoaded', function () {   
    var submit = document.querySelector('#submit')
    var input = document.querySelector('#search')

    input.addEventListener('keyup', function(event) {
        //capitolizes the first letter
        var text = event.target.value 
        var textArr = text.split(' ')
        var capitol = textArr.map(function (word) {
            return word ? word[0].toUpperCase() + word.slice(1) : ''
        })
        var capitolized = capitol.join(' ')
        event.target.value = capitolized
    }) 
    
    var container = document.querySelector('.mainContent')
    var error = document.querySelector('.error')
    var back = document.querySelector('.backToResults')
    
    function templateRender(e) {
        var index = e.target.id
        container.innerHTML = `
        <div class="result">
            <div class="product">
                <div class="image">
                    <img src="images/${skincare[index].fullName}.png" alt="placeholder">
                </div>
                <div class="nameSum">
                    <div class="name text-left">
                        ${skincare[index].name}
                    </div>
                    <div class="fullName text-left">
                        ${skincare[index].fullName}
                    </div>
                    <div class="summary">
                        ${skincare[index].desc}
                    </div>
                </div>
            </div> 
            <div class="ingredients">
                <h3 class="text-center">ingredients</h3>${skincare[index].ingredients}
            </div>
        </div> `
        back.style.display = 'block'
    }
    
    back.addEventListener('click', function() {
        resultsRender();
        back.style.display = 'none'
    })
    
    
    function resultsRender() {
        var listStr = ""
        for (var i = 0 ; i < skincare.length; i++) {
            var selected = skincare[i]
            if (input.value.includes(skincare[i].name)) {
                listStr += `
                <p id='${i}'>
                    ${selected.name} ${selected.fullName}
                </p>`         
            } else if (input.value === skincare[i].name + " " + skincare[i].fullName) {
                templateRender(); //clears the page to get template
            } else {
                error.style.display = 'block'
                error.textContent = 'product not found!'
            }
        }
        error.style.display = 'none'
        container.innerHTML = `
        <div class="result">
            <h2 class="text-left">Results for ${input.value}</h2>
            <div class="list">
                ${listStr}
            </div>
        </div>`
        var clickThing = document.querySelector('.list')
        clickThing.addEventListener('click', templateRender)
    }
    
    
    submit.addEventListener('click', function(event) {
        event.preventDefault()
        resultsRender()
    }) 

    // searching
    //input.value is the stuff in search
    
    
    
    
    
    
    
    



})