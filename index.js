document.addEventListener('DOMContentLoaded', function () { 
    
var submit = document.querySelector('#submit')
var input = document.querySelector('#search')
let skincareMatchArr

autocap = function autoCap(event) {
    var text = event.target.value 
    var textArr = text.split(' ')
    var capitol = textArr.map(function (word) {
        return word ? word[0].toUpperCase() + word.slice(1) : ''
    })
    var capitolized = capitol.join(' ')
    event.target.value = capitolized
}

input.addEventListener('keyup', autocap) //capitalizes the first letter of each word after space

var container = document.querySelector('.mainContent')
var error = document.querySelector('.error')
var back = document.querySelector('.backToResults')

new autoComplete({
    selector: 'input[name="search"]',
    minChars: 2,
    source: function(term, suggest){
        var matches = []
        var choice = ""
        for (var i = 0 ; i < skincare.length; i++) {
            choice = skincare[i].name + " " + skincare[i].fullName
            if (choice.indexOf(term) !== -1) {
                matches.push(choice)
            }
        }
        
        matches.sort(function (a, b) {
            if (a.startsWith(term) && !b.startsWith(term)) {
                return -1
            } else {
                return 1
            }
        })
        suggest(matches);
    }
}) //autocomplete

function resultListRender() {
    container.innerHTML = `
    <div class="result">
        <div class="product">
            <div class="image">
                <img src="images/${skincareMatchArr[i].fullName}.png" alt="placeholder">
            </div>
            <div class="nameSum">
                <div class="name text-left">
                    ${skincareMatchArr[i].name}
                </div>
                <div class="fullName text-left">
                    ${skincareMatchArr[i].fullName}
                </div>
                <div class="summary">
                    ${skincareMatchArr[i].desc}
                </div>
            </div>
        </div> 
        <div class="ingredients">
            <h3 class="text-center">ingredients</h3>${skincareMatchArr[index].ingredients}
        </div>
    </div> `
}


function templateRender(e) {
    window.scrollTo(0, 0) //start at top of page
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
}//template for all searches and products

back.addEventListener('click', function() {
    resultsRender();
    back.style.display = 'none'
})//when you click back, it goes back to list of products


function resultsRender() {
    error.style.display = 'block'
    window.scrollTo(0, 0) //start at top of page
    var listStr = ""
    var selected = skincare.find(function(product) {
        if (input.value === product.name + " " + product.fullName) {
            return product
        }
    })
    if (selected) {
        container.innerHTML = `
        <div class="result">
            <div class="product">
                <div class="image">
                    <img src="images/${selected.fullName}.png" alt="placeholder">
                </div>
                <div class="nameSum">
                    <div class="name text-left">
                        ${selected.name}
                    </div>
                    <div class="fullName text-left">
                        ${selected.fullName}
                    </div>
                    <div class="summary">
                        ${selected.desc}
                    </div>
                </div>
            </div> 
            <div class="ingredients">
                <h3 class="text-center">ingredients</h3>${selected.ingredients}
            </div>
        </div> `
        back.style.display = 'none'
        error.style.display = 'none'
    } else {
        debugger
        skincareMatchArr = skincare.filter(function(ele) {
            if (input.value === ele.name) {
                return ele
            }
        
        })//skincareMatchArr contains matching to input.val
        if (skincareMatchArr.length > 0) {
            error.style.display = 'none'
            for (var i = 0; i < skincareMatchArr.length; i++) {
                var selected = skincareMatchArr[i]
                listStr += `
                <p id='${i}'>
                    ${selected.name} ${selected.fullName}
                </p>`   
                container.innerHTML = `
                <div class="result">
                    <h2 class="text-left">Results for ${input.value}</h2>
                    <div class="list">
                        ${listStr}
                    </div>
                </div>`
            }
            var list = document.querySelector('.list')
            list.addEventListener('click', templateRender)
        } else {
            error.style.display = 'block'
            error.textContent = 'product not found!'
        }
    }
    
}//renders the list of results


submit.addEventListener('click', function(event) {
    event.preventDefault()
    resultsRender()
})
// searching
//input.value is the stuff in search



})//end of DOMCONTENTLOAD