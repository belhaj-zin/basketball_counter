let score_h = 0
let score_g = 0
let homeScr = document.getElementById("home_scr")
let guestScr = document.getElementById("guest_scr")
function add_1g() {
    score_g+= 1
    guestScr.innerText = score_g
}
function add_2g() {
    score_g+= 2
    guestScr.textContent = score_g
}
function add_3g() {
    score_g+= 3
    guestScr.textContent= score_g
}

function add_1h() {
    score_h+= 1
    homeScr.textContent= score_h
}
function add_2h() {
    score_h+= 2
    homeScr.textContent= score_h
}
function add_3h() {
    score_h+= 3
    homeScr.textContent= score_h
}
function reset() {
    score_g=0
    score_h=0
    homeScr.textContent= 0
    guestScr.textContent= 0
}