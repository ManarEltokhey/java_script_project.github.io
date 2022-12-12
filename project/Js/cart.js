var removeCartItembButtons = document.getElementsByClassName("remove-btn")
for (var i = 0; i < removeCartItembButtons.length; i++) {
    var removeButton = removeCartItembButtons[i]
    removeButton.addEventListener("click", removeCartItem)
}
var quantityInputs = document.getElementsByClassName("quantity")
for (var i = 0; i < quantityInputs.length; i++) {
    var quantityInput = quantityInputs[i]
    quantityInput.addEventListener("change", quantityChanged)
}
var productCounter=0
JSON.parse(localStorage.getItem("products")).forEach(element => {
    productCounter++
    addItemToCart(element.product_Img, element.product_Name, element.product_Price)
    updateCartTotal()
});
var addToCartButtons = document.getElementsByClassName("buyBtn")
console.log(addToCartButtons)
for (var i = 0; i < addToCartButtons.length; i++) {
    var addToCartButton = addToCartButtons[i]
    addToCartButton.addEventListener("click", addToCart)
}
var checkoutBtn = document.getElementsByClassName("checkout-btn")[0]
checkoutBtn.addEventListener("click", checkout)
function checkout(e) {
    alert("Thank You..")
    var cartContainerr = document.getElementsByClassName("cart")[0]
    cartContainerr.innerHTML = ``
    var emptyCart = document.createElement("div")
    emptyCart.setAttribute("class", "empty-cart")
    emptyCart.innerHTML = `
    <img src="resources/empty.png">
    <p>Your Cart is Empty</p>
    `
    cartContainerr.appendChild(emptyCart)
    updateCartTotal()
}

function addToCart(e) {
    var addButtonClicked = e.target
    var productItem = addButtonClicked.parentElement
    console.log(productItem)
    var productImg = productItem.getElementsByClassName("p-img")[0].src
    var productName = productItem.getElementsByClassName("p-Name")[0].innerText
    var productPrice = productItem.getElementsByClassName("p-price")[0].innerText
    console.log(productImg, productName, productPrice)
    productCounter++
    addItemToCart(productImg, productName, productPrice)
    updateCartTotal()
}
function addItemToCart(Img, Name, Price) {
    var cartContainer = document.getElementsByClassName("cart")[0]
    if(productCounter==1){
    var empty = cartContainer.getElementsByClassName("empty-cart")[0]
    empty.remove()}
    var cartItemNames = document.getElementsByClassName("product-name")
    var cartItemSelect = document.createElement("div")
    cartItemSelect.setAttribute("class", "cart-item")
    var hori = document.createElement("hr")
    
    
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText === Name) {
            alert("item already added to the cart")
            productCounter--
            return
        }
    }
    cartContainer.appendChild(hori)
    cartContainer.appendChild(cartItemSelect)
    red=document.getElementsByClassName("red")[0]
    red.innerText=productCounter
    red.setAttribute("style","display:inline;")
    cartItemSelect.innerHTML += `
                    <img src="${Img}">
                    <div class="cart-item-details">
                        <p class="product-name">${Name}</p>
                        <p class="price">${Price}</p>
                    </div>
                    <div class="cart-control">
                        <div class="item-quantity">
                            <input type="number" name="quantity" class="quantity" value=1 min=1>
                            <a class="remove-btn"><i class="fa-solid fa-trash-can"></i> remove</a>
                        </div>
                    </div>                
    `
    cartItemSelect.getElementsByClassName("remove-btn")[0].addEventListener("click", removeCartItem)
    cartItemSelect.getElementsByClassName("quantity")[0].addEventListener("change", quantityChanged)
}

function quantityChanged(e) {
    var input = e.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function removeCartItem(e) {
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    productCounter--
    updateCartTotal()
    if(productCounter==0){
        var cartContainerr = document.getElementsByClassName("cart")[0]
    cartContainerr.innerHTML = ``
    var emptyCart = document.createElement("div")
    emptyCart.setAttribute("class", "empty-cart")
    emptyCart.innerHTML = `
    <img src="resources/empty.png">
    <p>Your Cart is Empty</p>
    `
    cartContainerr.appendChild(emptyCart)
    }
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart")[0]
    var cartItems = cartItemContainer.getElementsByClassName("cart-item")
    var subTotal = 0
    var totalQuantity = 0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName("cart-item-details")[0].getElementsByClassName("price")[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = parseInt(cartItem.getElementsByClassName("cart-control")[0].getElementsByClassName("item-quantity")[0].getElementsByClassName("quantity")[0].value)
        totalQuantity = totalQuantity + quantity
        subTotal = subTotal + (price * quantity)
        subTotal = Math.round(subTotal * 100) / 100
    }
    document.getElementById("total-quantity").innerText = totalQuantity
    document.getElementById("sub-total").innerText = `$ ${subTotal}`
}