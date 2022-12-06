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
var closeIngredientsModalSearch = document.getElementById("ingredients-modal-accept")
closeIngredientsModalSearch.addEventListener("click", searchMultipleIngredientsModal)
var closeUserModalCancel = document.getElementById("user-modal-cancel")
closeUserModalCancel.addEventListener("click", closeUserModal)
var addAllergyButton = document.getElementById("add-allergy-button")
addAllergyButton.addEventListener("click", addAllergy)
var searchText = document.getElementById('main-searchbar')
var searchButton = document.getElementById('search-button')
var itemList = document.getElementsByClassName('item')

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
    var inputBoxes = [ing1, ing2, ing3, ing4, ing5, ing6,
        ing7, ing8, ing9, ing10]
    for (var i = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].value != "") {
            inputBoxes[i].value = ""
        }
    }
}

function searchMultipleIngredientsModal(event) {
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
    var inputBoxes = [ing1, ing2, ing3, ing4, ing5, ing6,
        ing7, ing8, ing9, ing10]
    console.log(inputBoxes[0].value)
    for(var i = 0; i<itemList.length; i++) {
        itemList[i].classList.add('hidden')
        for(var j = 0; j<inputBoxes.length; j++) {
            if (inputBoxes[j].value.length != 0) {
                if ((itemList[i].textContent.toLowerCase().indexOf(inputBoxes[j].value.toLowerCase()) >= 0)) {
                    itemList[i].classList.remove('hidden')
                }
            }
        }
    }
    closeMultipleIngredientsModal()
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
    var allergyField = document.getElementById("allergy-field")
    if (allergyField.value != "") {
        allergyField.value = ""
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
  
function search() {
    if (searchText.value.length == 0) {
        for(var i = 0; i<itemList.length; i++) {
            itemList[i].classList.add('hidden')
        }
    }
    else {
        for(var i = 0; i<itemList.length; i++) {
            itemList[i].classList.remove('hidden')
            if (itemList[i].textContent.toLowerCase().indexOf(searchText.value.toLowerCase()) < 0) {
                itemList[i].classList.add('hidden')
            }
        }
    }
}

searchButton.addEventListener('click', search)
searchText.addEventListener('input', search)
