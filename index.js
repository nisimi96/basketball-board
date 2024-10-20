let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let newGame = document.getElementById("reset-scores")
let plusOneHome = document.getElementById("plus-one-home")
let plusTwoHome = document.getElementById("plus-two-home")
let plusThreeHome = document.getElementById("plus-three-home")
let plusOneGuest = document.getElementById("plus-one-guest")
let plusTwoGuest = document.getElementById("plus-two-guest")
let plusThreeGuest = document.getElementById("plus-three-guest")
let minusOneHome = document.getElementById("minus-one-home")
let minusTwoHome = document.getElementById("minus-two-home")
let minusThreeHome = document.getElementById("minus-three-home")
let minusOneGuest = document.getElementById("minus-one-guest")
let minusTwoGuest = document.getElementById("minus-two-guest")
let minusThreeGuest = document.getElementById("minus-three-guest")



let a = 0


plusOneHome.addEventListener("click", () => {
    a++;
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})

plusTwoHome.addEventListener("click", () => {
    a += 2
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})

plusThreeHome.addEventListener("click", () => {
    a += 3
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})

let b = 0


plusOneGuest.addEventListener("click", () => {
    b++;
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})

plusTwoGuest.addEventListener("click", () => {
    b += 2
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})

plusThreeGuest.addEventListener("click", () => {
    b += 3
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})


/*minus */
minusOneHome.addEventListener("click", () => {
    a--;
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})

minusTwoHome.addEventListener("click", () => {
    a -= 2
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})

minusThreeHome.addEventListener("click", () => {
    a -= 3
    homeScore.innerText = a
    highlightLeader (homeScore, guestScore)
})




minusOneGuest.addEventListener("click", () => {
    b--;
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})

minusTwoGuest.addEventListener("click", () => {
    b -= 2
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})

minusThreeGuest.addEventListener("click", () => {
    b -= 3
    guestScore.innerText = b
    highlightLeader (homeScore, guestScore)
})



newGame.addEventListener("click", () => {
    guestScore.textContent = 0
    homeScore.textContent = 0
    highlightLeader (homeScore, guestScore)
})

function highlightLeader (homeScore, guestScore) {
    const home = parseInt(homeScore.textContent)
    const guest = parseInt(guestScore.textContent)

    if (home > guest) {
        homeScore.style.color = 'green'
        guestScore.style.color = '#F94F6D'
    } else if (home < guest) {
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = 'green'
    } else {
        homeScore.style.color = '#F94F6D'
        guestScore.style.color = '#F94F6D' 
    }
}



