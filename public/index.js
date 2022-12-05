var multipleIngredientEntry = document.getElementById("multiple-ingredients-search")
multipleIngredientEntry.addEventListener("click", launchModal)
var closeModalX = document.getElementById("modal-close")
closeModalX.addEventListener("click", closeModal)
var closeModalCancel = document.getElementById("modal-cancel")
closeModalCancel.addEventListener("click", closeModal)

function launchModal(event) {
    console.log("Multiple Ingredients Button Clicked")
    var modalContent = document.getElementById("multiple-items-modal")
    var modalBackdrop = document.getElementById("modal-backdrop")
    modalContent.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")
}

function closeModal(event) {
    var modalContent = document.getElementById("multiple-items-modal")
    var modalBackdrop = document.getElementById("modal-backdrop")
    modalContent.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")
    var recipeName = document.getElementById("recipe-name")
    var ing1 = document.getElementById("ingredient-1")
    var ing2 = document.getElementById("ingredient-2")
    var ing3 = document.getElementById("ingredient-3")
    var ing4 = document.getElementById("ingredient-4")
    var ing5 = document.getElementById("ingredient-5")
    var ing6 = document.getElementById("ingredient-6")
    var ing7 = document.getElementById("ingredient-7")
    var ing8 = document.getElementById("ingredient-8")
    var ing9 = document.getElementById("ingredient-9")
    var ing10 = document.getElementById("ingredient-10")
    var inputBoxes = [recipeName, ing1, ing2, ing3, ing4, ing5, ing6,
        ing7, ing8, ing9, ing10]
    for (var i = 0; i < inputBoxes.length; i++) {
        if (textElements[i].value != "") {
            textElements[i].value = ""
        }
    }
}

/*
 * search stuff
 * TODO: make neater later
 *       maybe make with handlebars if we can figure out handle bars
 */

var searchText = document.getElementById('main-searchbar')
var searchButton = document.getElementById('search-button')
var itemList = document.getElementsByClassName('item')

function search() {
    for(var i = 0; i<itemList.length; i++) {
        itemList[i].classList.remove('hidden')
        if (itemList[i].textContent.toLowerCase().indexOf(searchText.value.toLowerCase()) < 0) {
            itemList[i].classList.add('hidden')
        }
    }
}

searchButton.addEventListener('click', search)
searchText.addEventListener('input', search)
