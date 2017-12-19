document.addEventListener('DOMContentLoaded', function () { 

var content = document.querySelector('.content')
var nameForm = document.querySelector('#name')

nameForm.addEventListener('keyup', function(event) {
    var text = event.target.value 
    var textArr = text.split(' ')
    var capitol = textArr.map(function (word) {
        return word ? word[0].toUpperCase() + word.slice(1) : ''
    })
    var capitolized = capitol.join(' ')
    event.target.value = capitolized
}) //capitalizes the first letter of each word after space


var submit = document.querySelector('#submit')

submit.addEventListener('click', function() {
    var firstName = document.querySelector('#firstName').value //gives user input
    content.innerHTML = `
        <p class="intro text-center">hi ${firstName} :) now that we're no longer strangers, let's get to know each other!</p>
    `
    setTimeout(question1, 1000)
})

function question1() {
    content.innerHTML = `
        <p class="text-center question">what is your gender?</p>
        <div class="gender">
            <ul class="options">
                <li class="circle">female</li>
                <li class="circle">male</li>
            </ul>
        </div>
    `
    var circle = document.querySelector('.circle')
    circle.addEventListener('click', function(event) {
        question2()
    })
}
    
function question2() {
    content.innerHTML = `
        <p class="text-center question">how old are you?</p>
        <div class="age">
            <ul class="options">
                <li class="circle">under 18</li>
                <li class="circle">18 - 24</li>
                <li class="circle">24 - 35</li>
                <li class="circle">35 - 44</li>
                <li class="circle">44+</li>
            </ul>
        </div>
    `
    var circle = document.querySelector('.circle')
    circle.addEventListener('click', function(event) {
        question3()
    })
}
    
function question3() {
    content.innerHTML = `
        <p class="text-center question">what is your skin type?</p>
        <div class="skinType">
            <ul class="options">
                <li class="circle">normal</li>
                <li class="circle">combination</li>
                <li class="circle">oily</li>
                <li class="circle">dry</li>
                <li class="circle">dehydrated</li>
            </ul>
        </div>
    `
    var circle = document.querySelector('.circle')
    circle.addEventListener('click', function(event) {
        question4()
    })
}
    
function question4() {
    var skinConcern = []
    content.innerHTML = `
        <p class="text-center question">what is your skin concern? (you can select more than one)</p>
        <div class="skinConcern">
            <ul class="options">
                <li class="circle">large pores</li>
                <li class="circle">oily skin</li>
                <li class="circle">acne</li>
                <li class="circle">hyperpigmentation</li>
                <li class="circle">uneven skin tone</li>
                <li class="circle">sun spots</li>
                <li class="circle">textured skin</li>
                <li class="circle">dry skin</li>
            </ul>
        </div>
    `
    var circle = document.querySelector('.circle')
    circle.addEventListener('click', function(event) {
        skinConcern.push(circle.textContent)
    })
}







}) //end of DOMCONTENTLOAD