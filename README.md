# Shortly URL shortening API Challenge

- Live website -(https://carlos-a-p.github.io/URL-shortening-API-master/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

### The challenge

A landing page integrated with the [shrtcode API](https://shrtco.de/)

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

## My process

### Screenshot

![carlos-a-p github io_URL-shortening-API-master_](https://user-images.githubusercontent.com/85038929/137044680-22f90351-159e-4364-8d72-066e7c850d3b.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS FlexBox
- JavaScript
- BootStrap

### What I learned

I used the BootStrap framework to get familiar using it and I noticed that it does make the project easier to complete. I also tried to insert a loading gif to simulate a loading element. I used a setTimeout() method to add a timer of 2 seconds after the user submits the input. Overall, this was a fun project and I hope to get proficient at utilizing Bootstrap

- In the code below, I added a event listener to my submit form and used .preventDefault to stop the page from refreshing after hitting submit
- I then retrieved the input value (url) and removed the hidden class from my loading gif

```JavaScript
form.addEventListener('submit', e => {
    //prevent from submitting or else our page will refresh
    e.preventDefault()
    // // get the input value
    const inputVal = document.getElementById('form-input')
    loadIcon.classList.remove('hidden')
    setTimeout(() => {
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
        loadIcon.classList.add('hidden')
    })
    }, 1000)
})
```

### Useful resources

- [Bootstrap](https://getbootstrap.com/) - this is the framework I used to style/ organize the project

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://carlospwd.netlify.app/)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/Carlos-A-P)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
