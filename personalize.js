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

var userInfoArr = []

var userInputObj = {}


submit.addEventListener('click', function() {
    var firstName = document.querySelector('#firstName').value //gives user input
    userInputObj['firstName'] = firstName

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
        options[i].addEventListener('click',function(e) {
            userInputObj['gender'] = e.target.innerHTML
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
    var back = document.querySelector('.backButton button')
    back.addEventListener('click', function() {
        question1()
    })
    var options = document.querySelectorAll('.options li')
    for (var i = 0; i < options.length; i++ ){
        options[i].addEventListener('click',function(e) {
            userInputObj['age'] = e.target.innerHTML
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
    var back = document.querySelector('.backButton button')
    back.addEventListener('click', function() {
        question2()
    })
    for (var i = 0; i < options.length; i++ ){
        options[i].addEventListener('click',function(e) {
            userInputObj['skinType'] = e.target.innerHTML
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
                <button type="button"><span>  back</span></button>
            </div>
        </div>
    `
    var back = document.querySelector('.backButton button')
    back.addEventListener('click', function() {
        question3()
    })
    var options = document.querySelectorAll('.options li')
    var submit = document.querySelector('button')
    var skinConcernsArr = []
    
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
        for (var i = 0 ; i < options.length; i++ ){
            if (options[i].classList.contains('selected')) {
                skinConcernsArr.push(options[i].textContent)
            } 
        }
        userInputObj['skinConcerns'] = skinConcernsArr
        question5()
    })
}//end of question4   
    
function question5() {
    content.innerHTML = `
        <p class="text-center question">do you have any skin conditions?<br>if you have none, select none</p>
        <div class="skinCondition">
            <input type="text" name="skinConditions" id="skinConditions" placeholder="skin conditions"  autofocus required>
        </div>
        <div class="buttons">
            <div class="submitButton skin">
                <button type="submit" id="skinConditionSubmit">submit</button>
            </div>
            <div class="backButton skin">
                <button type="button"><span>  back</span></button>
            </div>
        </div>
    `
    new autoComplete({
        selector: 'input[name="skinConditions"]',
        minChars: 1,
        source: function(term, suggest){
            var array = ['Seborrheic Dermatitis', 'Eczema', 'Rosacea', 'Psoriasis', 'Seborrheic Eczema', 'Vitiligo', 'Malassezia Folliculitis', 'None']
            var matches = []
            var choice = ""
            for (var i = 0 ; i < array.length; i++) {
                choice = array[i]
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
    
    var back = document.querySelector('.backButton button')    
    back.addEventListener('click', function() {
        question4()
    })
    var input = document.querySelector('#skinConditions')
    input.addEventListener('keyup', autocap)
    
    var submit = document.querySelector('#skinConditionSubmit')
    submit.addEventListener('click', function() {
        userInputObj['skinConditions'] = input.value
        ready()
    })
}
    
function ready() {
    userInfoArr.push(userInputObj)
    content.innerHTML = `
    <div class="ready text-center">
        <h1>thank you for taking the quiz. now i'm cranking out your routine! :)<h1>
    </div>
    `
    setTimeout(result, 3000)
    console.log(userInfoArr)
}
    
function result() {
    content.innerHTML = `
    <div class="routine">
        <div class="am">
            <ul class="amRoute">
                <li><h2>am:</h2></li>
                <li class="cleanser">cleanser// <span>Low PH Good Morning Gel Cleanser</span></li>
                <li class="toner">toner// <span>Thayers Witch Hazel Alcohol Free Toner</span></li>
                <li class="vitaminc">active// <span>Mad Hippie Vitamin C Serum</span></li>
                <li class='moistureAM'>moisturizer// <span></span></li>
                <li class="sunscreen">sunscreen// <span>EltaMD UV Shield Broad-Spectrum SPF45</span></li>
            </ul>
        </div>
        <div class="pm">
            <ul class="pmRoute">
                <li><h2>pm:</h2></li>
                <li class="cleanser">cleanser// <span>Low PH Good Morning Gel Cleanser</span></li>
                <li class="toner">toner// <span>Thayers Witch Hazel Alcohol Free Toner</span></li>
                <li class="active">active// <span></span></li>
                <li class="serum">serum// <span>The Ordinary 10% Niacinimide + Zinc 1%</span></li>
                <li class="moisturizer">moisturizer// <span></span></li>
                <li class="occlusive">occlusive// <span>Vaseline</span></li>
            </ul>
        </div>
    </div>
    `
    var cleanserAM = document.querySelector('.amRoute li.cleanser span')
    var tonerAM = document.querySelector('.amRoute li.toner span')
    var vitaminc = document.querySelector('.amRoute li.vitaminc span')
    var moistureAM = document.querySelector('.amRoute li.moistureAM span')
    var sunscreen = document.querySelector('.amRoute li.sunscreen span')
    
    var cleanserPM = document.querySelector('.pmRoute li.cleanser span')
    var tonerPM = document.querySelector('.pmRoute li.toner span')
    var active = document.querySelector('.pmRoute li.active span')
    var serum = document.querySelector('.pmRoute li.serum span')
    var moisture = document.querySelector('.pmRoute li.moisturizer span')
    var occlusive = document.querySelector('.pmRoute li.occlusive span')
    
    for (var ele of userInfoArr) {
        for (var eachEle in ele) {
//           firstName
//           gender
//           age
//           skinType  
//           skinConcerns
//           skinConditions
//            console.log(eachEle) 
//            prints out key 
//            console.log(ele[eachEle]) prints out value 
            switch (eachEle === 'skinType') {
                case ele[eachEle] === 'oily':
                    vitaminc.textContent = "Mad Hippie Vitamin C Serum"
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    moistureAM.textContent = 'Sebamed Clear Face Care Gel'
                    
                    active.innerHTML = "The Ordinary 10% Niacinimide + Zinc 1%"
                    moisture.textContent = "Drunk Elephant Lala Retro Cream"
                    break;
                case ele[eachEle] === 'normal':
                    cleanserAM.textContent = "Vanicream Gentle Cleanser"
                    vitaminc.textContent = "Mad Hippie Vitamin C Serum"
                    moistureAM.innerHTML = 'Sebamed Clear Face Care Gel'
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    cleanserPM.textContent = "Vanicream Gentle Cleanser"
                    tonerPM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    active.innerHTML = "The Ordinary 10% Niacinimide + Zinc 1%"
                    moisture.textContent = "Drunk Elephant Lala Retro Cream"
                    var occlusive2 = document.querySelector('.occlusive')
                    occlusive2.style.display = "none"
                    break;
                case ele[eachEle] === 'combination':
                    vitaminc.textContent = "Mad Hippie Vitamin C Serum"
                    moistureAM.textContent = 'Sebamed Clear Face Care Gel'
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    active.innerHTML = "COSRX BHA Blackhead Power Liquid<br>(wait 30 min)"
                    serum.innerHTML = 'The Ordinary 10% Niacinimide + Zinc 1%'
                    moisture.textContent = "Cerave PM Facial Moisturizing Lotion"
                    break;
                case ele[eachEle] === 'dry':
                    cleanserAM.textContent = "Vanicream Gentle Cleanser"
                    var vitaminc2 = document.querySelector('.vitaminc')
                    vitaminc.style.display = 'none'
                    tonerAM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    moistureAM.textContent = 'Avene Eau Thermale Avène Tolérance Extrême Emulsion'
                    sunscreen.textContent = 'Cotz Face Natural Skin Tone SPF40'
                    
                    cleanserPM.textContent = 'Vanicream Gentle Cleanser'
                    tonerPM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    var active2 = document.querySelector('.active')
                    active2.style.display = 'none'
                    serum.innerHTML = 'Stratia Liquid Gold'
                    moisture.textContent = 'The Ordinary 100% Plant-Derived Squalane'
                    var occlusive2 = document.querySelector('.occlusive')
                    occlusive2.style.display = 'none'
                    break;
                case ele[eachEle] === 'dehydrated':
                    cleanserAM.textContent = 'Vanicream Gentle Cleanser'
                    vitaminc2.style.display = 'none'
                    tonerAM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    moistureAM.textContent = 'Cerave Baby Moisturizing Cream'
                    sunscreen.textContnt = 'EltaMD UV Shield Broad-Spectrum SPF45'
                    
                    cleanserPM.textContent = 'Vanicream Gentle Cleanser'
                    tonerPM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    active2.style.display = 'none'
                    serum.textContent = 'Stratia Liquid Gold'
                    moisture.textContent = 'The Ordinary 100% Plant-Derived Squalane'
                    break;
            } 
        }
    }
    for (var ele of userInfoArr) {
        for (var eachEle in ele) {
//           firstName
//           gender
//           age
//           skinType  
//           skinConcerns
//           skinConditions
//            console.log(eachEle) 
//            prints out key 
//            console.log(ele[eachEle]) prints out value
            
//            acne
//            hyperpigmentation
//            uneven skin tone
//            pores/oil control
//            anti-aging
//            textured<br>skin
            switch (eachEle === 'skinConcerns') {
                case ele[eachEle] === 'acne':
                    vitaminc.textContent = "Mad Hippie Vitamin C Serum"
                    moistureAM.textContent = 'Sebamed Clear Face Care Gel'
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    active.innerHTML = "De La Cruz Sulfur Ointment 10%<br>(10 min mask)"
                    moisture.textContent = "Cerave PM Facial Moisturizing Lotion"
                    occlusive.textContent = 'CeraVe Baby Moisturizing Cream'
                    break;
                case ele[eachEle] === 'hyper-pigmentation':
                    vitaminc.textContent = "SkinCeuticals C E Ferulic"
                    moistureAM.textContent = 'Avene Eau Thermale Avène Tolérance Extrême Emulsion'
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    active.innerHTML = "Stratia Soft Touch AHA"
                    serum.innerHTML = "The Ordinary 10% Niacinimide + Zinc 1%"

                    break;
                case ele[eachEle] === 'uneven skin tone':
                    vitaminc.textContent = "Mad Hippie Vitamin C Serum"
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    active.innerHTML = "COSRX BHA Blackhead Power Liquid<br>(wait 30 min)"
                    serum.innerHTML = 'The Ordinary Alpha Arbutin 2% + HA'
                    moisture.textContent = "Cerave PM Facial Moisturizing Lotion"
                    break;
                case ele[eachEle] === 'pores/oil control':
                    vitaminc.innerHTML = 'The Ordinary 10% Niacinimide + Zinc 1%'
                    tonerAM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    moistureAM.textContent = 'Sebamed Clear Face Care Gel'
                    sunscreen.textContent = 'Cotz Face Natural Skin Tone SPF40'
                    
                    tonerPM.textContent = 'Hada Labo Goku-jyun Premium Lotion'
                    active.style.display = 'The Ordinary 10% Azeliac Acid'
                    serum2.style.display = 'none'
                    moisture.textContent = 'The Ordinary 100% Plant-Derived Squalane'
                    break;
                case ele[eachEle] === 'anti-aging':
                    vitaminc.style.display = 'SkinCeuticals C E Ferulic (wait 15 min)'
                    sunscreen.textContnt = 'EltaMD UV Shield Broad-Spectrum SPF45'
                    
                    serum.textContent = 'The Ordinary "Buffet"'
                    active.textContent = 'The Ordinary Granactive Retinoid 2% in Squalane'
                    break;
                case ele[eachEle] === 'textured skin':
                    active.innerHTML = 'COSRX BHA Blackhead Power Liquid<br>(wait 30 min)'
                    break;
            } 
        }
    }
//    'Seborrheic Dermatitis', 'Eczema', 'Rosacea', 'Psoriasis', 'Seborrheic Eczema', 'Vitiligo', 'Malassezia Folliculitis', 'None']
    for (var ele of userInfoArr) {
        for (var eachEle in ele) {
            switch (eachEle === 'skinConditions') {
                case ele[eachEle] === 'Malassezia Folliculitis':                   
                    cleanserAM.textContent = 'Vanicream Gentle Cleanser'
                    tonerAM.innerHTML = 'Thayers Witch Hazel Alcohol Free Toner'
                    vitaminc.textContent = "Skinceuticals C E Ferulic"
                    sunscreen.textContent = "Cotz Face Natural Skin Tone SPF40"
                    
                    cleanserPM.textContent = 'Vanicream Gentle Cleanser'
                    tonerPM.innerHTML = 'Thayers Witch Hazel Alcohol Free Toner'
                    active.innerHTML = 'COSRX BHA Blackhead Power Liquid<br>(wait 30 min)'
                    moisture.textContent = 'Avene Eau Thermale Avène Tolérance Extrême Emulsion'
                    occlusive.textContent = 'Vaseline'
                    break;
                case ele[eachEle] === 'Eczema':
                    cleanserAM.innerHTML = 'Vanicream Gentle Cleanser'
                    vitaminc2.style.display = 'none'
                    sunscreen.textContent = "EltaMD UV Shield Broad-Spectrum SPF45"
                    
                    active2.style.display = 'none'
                    serum.innerHTML = "The Ordinary 10% Niacinimide + Zinc 1%"
                    break;
            } 
        }
    }
}



}) //end of DOMCONTENTLOAD