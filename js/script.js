const urlList = document.getElementById('list')
const formBtn = document.getElementById('form-btn')
let form = document.getElementById('form')

form.addEventListener('submit', e => {
    //prevent from submitting or else our page will refresh
    e.preventDefault()
    // // get the input value
    const inputVal = document.getElementById('form-input')
    // // if input value is empty or null add error to form div
    if(inputVal.value == null || inputVal.value === ''){
        form.classList.add('error')
        return
    }

    fetch('https://api.shrtco.de/v2/shorten?url='+inputVal.value)
    .then((result) => result.json())
    .then((data) => {
        // add child to list
        addListCard(inputVal.value, data.result.short_link)
        //clear input after submit
        inputVal.value = null
        save()
    })
})


// remove error class from form onClick
function removeErr() {
    form.classList.remove('error')
}

function addListCard(myLink, shrtLink) {
    const urlCard = document.createElement('div')
    urlCard.classList.add('link-card', 'bg-white')
    urlCard.setAttribute('data-link-card', '')
    urlCard.innerHTML = `
    <p class="full-link">${myLink}</p>
    <p class="short-link">${shrtLink}</p>
    <div class="buttons d-flex">
        <button class="del" onCLick="delCard(this)">Delete</button>
        <button class="copy my-btn" onClick="copyLink(this)" data-copy>Copy</button>          
    </div>   
    `
    urlList.appendChild(urlCard)

//     <div class="link-card bg-white" data-link-card>
//     <p class="full-link">https://www.frontendmentor.io</p>
//     <p class="short-link">https://shrtco.de/k6JEN</p>
//     <div class="buttons d-flex">
//       <button class="del" data-delete>Delete</button>
//       <button class="copy my-btn" data-copy>Copy</button>          
//     </div>
//   </div>
}

//load information onto screen
window.onload = function() {
    elements = JSON.parse(localStorage.getItem('url-List'))
    urlList.innerHTML = elements
}



// save changes
function save() {
    elements = urlList.innerHTML
    localStorage.setItem('url-List', JSON.stringify(elements))
}

function delCard(button){
    urlList.removeChild(button.parentElement.parentElement)
    save()
}

function copyLink(button){
    const shrtLink = button.parentElement.previousElementSibling.innerHTML
    navigator.clipboard.writeText(shrtLink)
    button.classList.add('copied')
    button.innerHTML = 'Copied!'
    setTimeout(() =>{
        button.classList.remove('copied')
        button.innerHTML = 'Copy'
    }, 2000)
}