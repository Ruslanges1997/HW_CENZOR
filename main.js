// ------------------------------------------------------------------------------------------Завдання 5
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// •	При кліку на ADD добавляти заборонене слово, яке відображатиметься в списку “Bad words”
// •	Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// •	При кліку на Cenzor перевіряється чи є в textarea заборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// •	Якщо textarea порожня виводити повыдолення про заповнення поля
let ul = document.querySelector('ul');
let add = document.querySelector(".add");
let reset = document.querySelector(".reset");
let badWords = document.querySelector(".bad_words");
let addBad = document.querySelector(".add_bad");
let badList = document.querySelector(".bad_list");
let cenzor = document.querySelector(".cenzor");
let textarea = document.querySelector(".textarea");
let arrBadWords = [];
add.addEventListener("click", function () {
    if (addBad.value == '') {
        addBad.classList.add('border_red');
        addBad.placeholder = 'please write a word';
    }
    else {
        createListBadWord(addBad.value);
        addBad.placeholder = 'word here ...';
        addBad.classList.remove('border_red');
        arrBadWords.push(addBad.value);
        addBad.value = "";
    }
});
function createListBadWord(badList) {
    let li = document.createElement('li');
    let h3 = document.createElement('h3');
    h3.textContent = `${badList}`;
    li.appendChild(h3);
    ul.appendChild(li);
}
;
reset.addEventListener("click", function () {
    arrBadWords = [];
    removeLi();
    addBad.value = "";
    console.log(arrBadWords);
});
let myNode = document.getElementById("forRemove");
function removeLi() {
    myNode.removeChild(myNode.firstChild);
}
;
cenzor.addEventListener("click", function () {
    if (textarea.value == "") {
        textarea.classList.add('border_red');
        textarea.placeholder = 'Please write a text!';
    }
    else {
        for (let i = 0; i < arrBadWords.length; i++) {
            let regExp = new RegExp(`${arrBadWords[i]}`, 'gi');
            let prohbW = `${arrBadWords[i]}`.slice(0, 0).padEnd(`${arrBadWords[i]}`.length, '*');
            textarea.value = textarea.value.replace(regExp, prohbW);
        }
        textarea.placeholder = 'text here...';
        textarea.classList.remove('border_red');
    }
});
