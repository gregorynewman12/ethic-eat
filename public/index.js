var multipleIngredientEntry = document.getElementById("multiple-ingredients-search")
if (multipleIngredientEntry) {
    multipleIngredientEntry.addEventListener("click", launchMultipleIngredientsModal)
}
var userLink = document.getElementById("user-link")
if (userLink) {
    userLink.addEventListener("click", launchUserModal)
}
var closeIngredientsModalX = document.getElementById("ingredients-modal-close")
if (closeIngredientsModalX) {
    closeIngredientsModalX.addEventListener("click", closeMultipleIngredientsModal)
}
var closeUserModalX = document.getElementById("user-modal-close")
if (closeUserModalX) {
    closeUserModalX.addEventListener("click", closeUserModal)
}
var closeIngredientsModalCancel = document.getElementById("ingredients-modal-cancel")
if (closeIngredientsModalCancel) {
    closeIngredientsModalCancel.addEventListener("click", closeMultipleIngredientsModal)
}
var closeIngredientsModalSearch = document.getElementById("ingredients-modal-accept")
if (closeIngredientsModalSearch) {
    closeIngredientsModalSearch.addEventListener("click", searchMultipleIngredientsModal)
}
var closeUserModalCancel = document.getElementById("user-modal-cancel")
if (closeUserModalCancel) {
    closeUserModalCancel.addEventListener("click", closeUserModal)
}
var addAllergyButton = document.getElementById("add-allergy-button")
if (addAllergyButton) {
    addAllergyButton.addEventListener("click", addAllergy)
}
var searchText = document.getElementById('main-searchbar')
var searchButton = document.getElementById('search-button')
var itemList = document.getElementsByClassName('item')
var saveButtons = document.getElementsByClassName("save-item-button")

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


function handleSaveRequest(savedItem){
    var req = new XMLHttpRequest()
    var reqUrl = '/saveditems/addItem'
    req.open('POST', reqUrl)
    var itemImg = savedItem.querySelector("img").src
    var itemName = savedItem.querySelector(".item-name").textContent.trim()
    var itemEthicality = savedItem.querySelector(".ethicality-score").textContent.trim()
    itemEthicality = parseInt(itemEthicality.replace ( /[^\d.]/g, '' ))
    var itemDescription = savedItem.querySelector(".item-description").textContent.trim()
    var inSeason = savedItem.querySelector(".in-season-indicator")
    if (!inSeason) {
        inSeason = ""
    }
    else {
        inSeason = inSeason.textContent.trim()
    }
    var alternatives = savedItem.querySelector(".alternatives").textContent.trim()
    alternatives = alternatives.split('Alternatives: ')[1]
    var type = savedItem.querySelector(".hidden").textContent.trim()
    if (type == "recipe") {
        itemEthicality = ""
    }

    var item = {
        name: itemName,
        imageURL: itemImg,
        type: type,
        ethicalityScore: itemEthicality,
        textDescription: itemDescription,
        vegetarian: true,
		vegan: true,
	    produce: true,
        inSeason: inSeason,
        alternatives: alternatives
    }
    

    var reqBody = JSON.stringify(item)
    console.log("== reqBody:", reqBody)

    req.setRequestHeader('Content-Type', 'application/json')

    req.send(reqBody)
}

if (searchButton) {
    searchButton.addEventListener('click', search)
}
if (searchText) {
    searchText.addEventListener('input', search)
}
if (saveButtons) {
    for(var i = 0; i<saveButtons.length; i++) {
        saveButtons[i].addEventListener('click', (event) => {
            var savedItem = event.target.parentNode.parentNode
            handleSaveRequest(savedItem)
        })
    }
}

var currentURL = window.location.href
var currRoute = currentURL.split('http://localhost:3000')[1]
if (currRoute == "/") {
    for(var i = 0; i<itemList.length; i++) {
        itemList[i].classList.add('hidden')
    }
}
