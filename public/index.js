var multipleIngredientEntry = document.getElementById("multiple-ingredients-search")
multipleIngredientEntry.addEventListener("click", launchMultipleIngredientsModal)
var userLink = document.getElementById("user-link")
userLink.addEventListener("click", launchUserModal)
var closeIngredientsModalX = document.getElementById("ingredients-modal-close")
closeIngredientsModalX.addEventListener("click", closeMultipleIngredientsModal)
var closeUserModalX = document.getElementById("user-modal-close")
closeUserModalX.addEventListener("click", closeUserModal)
var closeIngredientsModalCancel = document.getElementById("ingredients-modal-cancel")
closeIngredientsModalCancel.addEventListener("click", closeMultipleIngredientsModal)
var closeUserModalCancel = document.getElementById("user-modal-cancel")
closeUserModalCancel.addEventListener("click", closeUserModal)
var addAllergyButton = document.getElementById("add-allergy-button")
addAllergyButton.addEventListener("click", addAllergy)

function launchMultipleIngredientsModal(event) {
    var modalContent = document.getElementById("multiple-items-modal")
    var modalBackdrop = document.getElementById("multiple-items-modal-backdrop")
    modalContent.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")
}

function closeMultipleIngredientsModal(event) {
    var modalContent = document.getElementById("multiple-items-modal")
    var modalBackdrop = document.getElementById("multiple-items-modal-backdrop")
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
        if (inputBoxes[i].value != "") {
            inputBoxes[i].value = ""
        }
    }
}

function launchUserModal(event) {
    var modalContent = document.getElementById("user-modal")
    var modalBackdrop = document.getElementById("user-modal-backdrop")
    modalContent.classList.toggle("hidden")
    modalBackdrop.classList.toggle("hidden")
}

function closeUserModal(event) {
    var modalContent = document.getElementById("user-modal")
    var modalBackdrop = document.getElementById("user-modal-backdrop")
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
        if (inputBoxes[i].value != "") {
            inputBoxes[i].value = ""
        }
    }
}

function addAllergy(event) {
    var inputField = document.getElementById("allergy-field")
    if (inputField.value != "") {
        var userEntry = inputField.value
        inputField.value = ""
        inputField.setAttribute("placeholder", "Allergy Added!")
    }
    else {
        inputField.setAttribute("placeholder", "Enter a value!")
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
    for (var i = 0; i < itemList.length; i++) {
        itemList[i].classList.remove('hidden')
        if (itemList[i].textContent.toLowerCase().indexOf(searchText.value.toLowerCase()) < 0) {
            itemList[i].classList.add('hidden')
        }
    }
}

searchButton.addEventListener('click', search)
searchText.addEventListener('input', search)
