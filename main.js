let elSelect = document.querySelector(".js-select");
let elList = document.querySelector(".js-list");
let selSort = document.querySelector(".js-a");

films.forEach((el) => {
    let li = document.createElement("li");
    let id = document.createElement("span");
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    let div = document.createElement("div")
    let p = document.createElement('p');
    let timeDate = document.createElement('span');
    let genres = document.createElement('p');

    id.classList.add('id')
    h1.classList.add("box-title")
    timeDate.classList.add('time')
    p.classList.add('text')
    genres.classList.add('genres');
    div.classList.add("box")

    img.src = el.poster;

    id.textContent = el.id;
    h1.textContent = el.title;
    img.textContent = el.poster;
    p.textContent = el.overview;
    timeDate.textContent = el.release_date;
    genres.textContent = el.genres;

    li.appendChild(id)
    li.appendChild(h1)
    li.appendChild(img)
    div.appendChild(p)
    div.appendChild(timeDate)
    div.appendChild(genres)
    li.appendChild(div)
    elList.appendChild(li)
})

let newArray = [];
for (i of films) {
    let toArray = i.genres;
    newArray.push(...toArray);
}

const setVals = new Set(newArray);

setVals.forEach((value) => {
    let option = document.createElement('option');
    option.textContent = value;
    elSelect.appendChild(option);
})


elSelect.addEventListener("change", function (e) {
    e.preventDefault();

    let selArray = [];
    let selectVal = elSelect.value;

    elList.innerHTML = '';

    films.forEach((el) => {
        if (el.genres.includes(selectVal)) {
            selArray.push(el)
        }
    })

    selArray.forEach((el) => {
        let li = document.createElement("li");
        let id = document.createElement("span");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let div = document.createElement("div")
        let p = document.createElement('p');
        let timeDate = document.createElement('span');
        let genres = document.createElement('p');

        id.classList.add('id')
        h1.classList.add("box-title")
        timeDate.classList.add('time')
        p.classList.add('text')
        genres.classList.add('genres');
        div.classList.add("box")

        img.src = el.poster;

        id.textContent = el.id;
        h1.textContent = el.title;
        img.textContent = el.poster;
        p.textContent = el.overview;
        timeDate.textContent = el.release_date;
        genres.textContent = el.genres;

        li.appendChild(id)
        li.appendChild(h1)
        li.appendChild(img)
        div.appendChild(p)
        div.appendChild(timeDate)
        div.appendChild(genres)
        li.appendChild(div)
        elList.appendChild(li)
    })
})

selSort.addEventListener('change', function (e) {
    e.preventDefault();
    let sortArray = [];
    let selSorVal = selSort.value;

    elList.innerHTML = "";

    if (selSorVal == "AA-zz") {
        sortArray = films.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0),);
    }
    if (selSorVal == "ZZ-aa") {
        sortArray = films.sort((a, b) => b.title.charCodeAt(0) - a.title.charCodeAt(0),);
    }

    sortArray.forEach((el) => {
        let li = document.createElement("li");
        let id = document.createElement("span");
        let h1 = document.createElement("h1");
        let img = document.createElement("img");
        let div = document.createElement("div")
        let p = document.createElement('p');
        let timeDate = document.createElement('span');
        let genres = document.createElement('p');

        id.classList.add('id')
        h1.classList.add("box-title")
        timeDate.classList.add('time')
        p.classList.add('text')
        genres.classList.add('genres');
        div.classList.add("box")

        img.src = el.poster;

        id.textContent = el.id;
        h1.textContent = el.title;
        img.textContent = el.poster;
        p.textContent = el.overview;
        timeDate.textContent = el.release_date;
        genres.textContent = el.genres;

        li.appendChild(id)
        li.appendChild(h1)
        li.appendChild(img)
        div.appendChild(p)
        div.appendChild(timeDate)
        div.appendChild(genres)
        li.appendChild(div)
        elList.appendChild(li)
    })

})



