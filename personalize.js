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
    setTimeout(question1, 3000)
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
    var options = document.querySelectorAll('.options li')
    for (var i = 0; i < options.length; i++ ){
        options[i].addEventListener('click',function() {
            question2()
        })
    }
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
        <div class="backButton">
            <button type="button"><span> back</span></button>
        </div>
    `
    var options = document.querySelectorAll('.options li')
    for (var i = 0; i < options.length; i++ ){
        options[i].addEventListener('click',function() {
            question3()
        })
    }
}//end of Q2
    
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
        <div class="backButton">
            <button type="button"><span> back</span></button>
        </div>
    `
    var options = document.querySelectorAll('.options li')
    for (var i = 0; i < options.length; i++ ){
        options[i].addEventListener('click',function() {
            question4()
        })
    }
}//end of Q3
    
function question4() {
    var skinConcern = []
    content.innerHTML = `
        <p class="text-center question skin">what is your skin concern? (you can select more than one)</p>
        <div class="skinConcern">
            <ul class="options">
                <li class="circle">acne</li>
                <li class="circle overflow">hyper-<br>pigmentation</li>
                <li class="circle overflow">uneven skin tone</li>
                <li class="circle overflow">pores/<br>oil control</li>
                <li class="circle">anti-aging</li>
                <li class="circle overflow">textured<br>skin</li>
                <li class="circle">hydration</li>
            </ul>
        </div>
        <div class="buttons">
            <div class="submitButton skin">
                <button type="submit" id="skinConcernSubmit">submit</button>
            </div>
            <div class="backButton skin">
                <button type="button"><span> back</span></button>
            </div>
        </div>
    `
    var options = document.querySelectorAll('.options li')
    var submit = document.querySelector('button')
    
    var onClick = function (e) {
        var clicked = event.target
        if (clicked.classList.contains('selected')){
            clicked.classList.remove('selected')
        } else {
            clicked.classList.add('selected')
        }
    } //funx for selected
    
    for (var i = 0; i< options.length; i++) {
        options[i].addEventListener('click', onClick)
    } //making selected highlighted
    
    submit.addEventListener('click', function() {
        question5()
    })
    
}//end of question4

function question5() {
    content.innerHTML = `
        <p class="text-center question">do you have any skin conditions?<br>(select all that apply)</p>
        <div class="skinCondition">
            <input type="text" name="skinConditions" id="skinConditions" placeholder="skin conditions"  autofocus required>
        </div>
        <div class="backButton">
            <button type="button"><span> back</span></button>
        </div>
    `
}








}) //end of DOMCONTENTLOAD