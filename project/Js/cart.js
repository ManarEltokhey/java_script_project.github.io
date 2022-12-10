var removeCartItembButtons = document.getElementsByClassName("remove-btn")
for (var i = 0; i < removeCartItembButtons.length; i++) {
    var removeButton = removeCartItembButtons[i]
    removeButton.addEventListener("click", removeCartItem)
}
var quantityInputs=document.getElementsByClassName("quantity")
for (var i = 0; i < quantityInputs.length; i++){
    var quantityInput=quantityInputs[i]
    quantityInput.addEventListener("change",quantityChanged)
}
var addToCartButtons = document.getElementsByClassName("buyBtn")
for (var i = 0; i < addToCartButtons.length; i++) {
    var addToCartButton = addToCartButtons[i]
    addToCartButton.addEventListener("click", addToCart)
}


function addToCart(e){
    var addButtonClicked=e.target
    var productItem=addButtonClicked.parentElement
    console.log(productItem)
    var productImg=productItem.getElementsByClassName("p-img")[0].src
    var productName=productItem.getElementsByClassName("p-Name")[0].innerText
    var productPrice=productItem.getElementsByClassName("p-price")[0].innerText
    console.log(productImg,productName,productPrice)
}


function quantityChanged(e)
{
    var input=e.target
    if(isNaN(input.value)||input.value<=0){
        input.value=1
    }
    updateCartTotal()
}


function removeCartItem(e){
    var buttonClicked = e.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cart")[0]
    var cartItems = cartItemContainer.getElementsByClassName("cart-item")
    var subTotal = 0
    var totalQuantity=0
    for (var i = 0; i < cartItems.length; i++) {
        var cartItem = cartItems[i]
        var priceElement = cartItem.getElementsByClassName("cart-item-details")[0].getElementsByClassName("price")[0]
        var price = parseFloat(priceElement.innerText.replace("EGP", ""))
        var quantity = parseInt(cartItem.getElementsByClassName("cart-control")[0].getElementsByClassName("item-quantity")[0].getElementsByClassName("quantity")[0].value)
        totalQuantity=totalQuantity+quantity
        subTotal=subTotal+(price*quantity)
        subTotal=Math.round(subTotal*100)/100
    }
    document.getElementById("total-quantity").innerText=totalQuantity
    document.getElementById("sub-total").innerText=`$ ${subTotal}`
}