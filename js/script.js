var itemCounter = 1;
var list = document.querySelector("#my-list");
var myButton = document.querySelector("#myButton");
var headline = document.querySelector("#title");
var listItems = document.querySelectorAll("#my-list li")

list.addEventListener("click", activateItem);

function activateItem(a) {
    if (a.target.nodeName == "LI") {

        headline.innerHTML = a.target.innerHTML;

        for (i = 0; i < a.target.parentNode.children.length; i++) {
            a.target.parentNode.children[i].classList.remove("highlight");
        }

        a.target.classList.add("highlight");
    }
}

myButton.addEventListener("click", newItem);

function newItem() {
    list.innerHTML += "<li>Something " + itemCounter++ + "</li>";
}
