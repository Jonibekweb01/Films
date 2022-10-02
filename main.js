let elList = document.querySelector(".js-list");
let elSelect = document.querySelector('.js-select');

let genreFilms = [];

for (i of films) {
    let toArray = i.genres;
    genreFilms.push(...toArray);
}

const set = new Set(genreFilms);

set.forEach(function (value) {
    let option = document.createElement('option')
    option.textContent = value;
    elSelect.appendChild(option)
})

let circle = films.forEach(function (el) {

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

elSelect.addEventListener('change', function (e) {
    e.preventDefault();

    elList.innerHTML = '';

    let selectVal = elSelect.value;
    let newArray = [];


    films.forEach((el) => {
        if (el.genres.includes(selectVal)) {
            newArray.push(el)
        }
    })


    let sorted = newArray.forEach((el) => {
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

});

