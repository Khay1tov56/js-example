let elSelect = document.querySelector(".elSelect");
let elSelectMn = document.querySelector(".elSelectMn");
let elList = document.querySelector(".lists");
let elModalOf = document.querySelector(".modals");
let elBtnBegin = document.querySelector(".begin")
let elBtnRemove = document.querySelector(".timers");
let elSavol = document.querySelector(".savol");
let elCounter = document.querySelector(".counter");

let count = 0;
let score = 4;

setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.querySelector(".timer").textContent = date.toLocaleTimeString();
}
let newFragment = document.createDocumentFragment();

elBtnBegin.addEventListener("click", function (evt) {
    evt.preventDefault();

    elModalOf.classList.add("modal-on");

    if (elSelect.value == "easy") {
        elList.innerHTML = ""
        array = shuffle(array.slice(0, 33))
        abb(array);
        randomFind(array)

    } else if (elSelect.value == "medium") {
        elList.innerHTML = ""
        array = shuffle(array.slice(0, 63))
        abb(array);
        randomFind(array)

    } else {
        array = shuffle(array.slice(0, 93))
        abb(array);
        randomFind(array)
    }

})

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
            
        ];
    }

    return array;

}

elBtnRemove.addEventListener("click", function (evt) {
    evt.preventDefault();
    elModalOf.classList.remove("modal-on");
    elCounter.innerHTML = 0;
  
})

function abb(arr) {
    arr.forEach(element => {
        var newItems = document.createElement("li");
        var newIimg = document.createElement("img");

        newIimg.src = element.arrayImg
        newIimg.dataset.id = element.id;
        newItems.appendChild(newIimg)
        newFragment.appendChild(newItems);

    });

    elList.appendChild(newFragment)
}

elList.addEventListener("click", function (evt) {
    let imgId = evt.target.dataset.id;
    let imgaId = evt.target;
    if (imgId == elSavol.dataset.id) {
        randomFind(array);

        alert("Topildi");
        imgaId.classList.add("none");
        elCounter.innerHTML = count += 2;

    } else {
        alert("Topilmadi Xato");
        elCounter.innerHTML = count -= 1;
        score--;

    }
    if (score === 0) {
        window.location.href= "index.html";
    }
    // abb(elList)
})

function randomFind(s) {
    let arrLet = Math.floor(Math.random() * s.length);
    let sa = s[arrLet]
    let nameFd = sa.name
    elSavol.textContent = nameFd;
    elSavol.dataset.id = sa.id;
}