# Launch Countdown Timer

- Live website -(https://cpwd-count-down-timer.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (starting at 14 days)
- When a number changes, make the card flip from the middle

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/130866879-f8d39dd3-1125-496c-9495-ac36fe5207a0.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS FlexBox
- JavaScript
- Media Queries

### What I learned

In this challenge I used the a javascript code from Website [CodePen Home Flip Clock & Countdown](https://codepen.io/shshaw/pen/vKzoLL) which is a clock made without a HTML so I mainly focused on prioritizing my CSS and changing styles using Devtools. I also added a few changes to the javascript to remove the second timer.

```HTML
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/secondtimer.css">
  <!-- in order to override the previous CSS, I placed the CSS with the styles that I want below the default CSS the timer came with-->
  <link rel="stylesheet" href="css/stylesheet.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet">
  <script src="js/secondtimer.js" defer></script>
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <title>CPWD | Launch countdown timer</title>
</head>
```

- With the help of DevTools I was able to look into the previous HTML and adjust my styles accordingly

```CSS
.flip-clock__slot {
	font-size: 10px;
	text-transform: uppercase;
	color: var(--Grayish-blue);
}

.card__bottom,
.card__back::after {
	background: var(--Dark-desaturated-blue);
	color: var(--Soft-red);
	padding: 0.19em 0.25em;
}

.card__top,
.card__back::before {
	background: hsl(236, 24%, 23%);
	color: hsl(345, 95%, 68%, 0.8);
	padding: 0.35em 0.25em 0;
}

.card__top,
.card__bottom,
.card__back::before,
.card__back::after {
	height: 1em;
	width: 2em;
}
```

### Useful resources

- [CodePen Home Flip Clock & Countdown](https://codepen.io/shshaw/pen/vKzoLL) - this codepen demonstrates how to make a working flip timer without an HTML

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://github.com/Carlos-A-P/launch-countdown-timer)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
