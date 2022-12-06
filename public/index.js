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

function insertNewItem(itemName) {
    var templateContext = {
      text: itemName,
    }
  
    var itemHTML = Handlebars.templates.item(templateContext)
    var itemContainer = document.getElementById('cards');
    itemContainer.insertAdjacentHTML('beforeEnd', itemHTML)
}
  
var itemList = [];
  
function handleModalAcceptClick() {
    var itemName = document.getElementById('item-name').value;
  
    if (itemName) {
        itemList.push({
        text: itemName
      });
        clearSearchAndReinsertItems();
    } 
}
  
function clearSearchAndReinsertItems() {
    document.getElementById('main-searchbar').value = "";
    doSearchUpdate();
}
  
function itemMatchesSearchQuery(item, searchQuery) {
    if (!searchQuery) {
      return true;
    }

    searchQuery = searchQuery.trim().toLowerCase();
    return (item.text).toLowerCase().indexOf(searchQuery) >= 0;
}
  
function doSearchUpdate() {
    var searchQuery = document.getElementById('main-searchbar').value;

    var itemContainer = document.getElementById('cards');
    if (itemContainer) {
        while (itemContainer.lastChild) {
            itemContainer.removeChild(itemContainer.lastChild);
        }
    }
    itemList.forEach(function (item) {
        if (itemMatchesSearchQuery(item, searchQuery)) {
            insertNewItem(item.text);
        }
    });
}
  
function parseitemElem(itemElem) {
    var item = {};
  
    var itemNameElem = itemElem.querySelector('.item-name');
    item.text = itemNameElem.textContent.trim();
  
    return item;
}
  
window.addEventListener('DOMContentLoaded', function () {
    var itemElemsCollection = document.getElementsByClassName('item');
    for (var i = 0; i < itemElemsCollection.length; i++) {
        itemList.push(parseitemElem(itemElemsCollection[i]));
    }
  
    var searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', doSearchUpdate);
    }
  
    var searchInput = document.getElementById('main-searchbar');
    if (searchInput) {
        searchInput.addEventListener('input', doSearchUpdate);
    }
});
  