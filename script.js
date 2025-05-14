
import { foodData } from "./data.js";

// Grabbing html elements

const feedMain = document.getElementById("feed-main")
const previewWindow = document.getElementById("preview-window")
const previewContainer = document.getElementById("preview-container")
const closePreviewBtn = document.getElementById("close-preview-btn")
const addCartContainer = document.getElementById("add-cart-container")
const noOfItems = document.getElementById("no-of-items")
const cartText = document.getElementById("cart-text")
let cartItemsRenderContainer = document.getElementById("cart-items-render-container")
const applyBtn = document.getElementById("apply")
const couponCloseBtn = document.getElementById("coupon-close-btn")
const couponAppliedContainer = document.getElementById("coupon-applied-container")
const removeCouponBtn = document.getElementById("remove-coupon-btn")
const couponContainer = document.getElementById("coupon-container")
const couponContainerAfter = document.getElementById("coupon-container-after")
const savingsDiv = document.getElementById("savings-div")
const billPageContainer = document.getElementById("bill-page-container")
const addMoreBtn = document.getElementById("add-more-btn")
const goBackArrow = document.getElementById("go-back-arrow")
// payment elements
const phonePe = document.getElementById("phonepe")
const gPay = document.getElementById("gpay")
const payTm = document.getElementById("paytm")
const cardPay = document.getElementById("card")
const paymentForm = document.getElementById("payment-form")
const paymentOptionPreview = document.getElementById("payment-option-preview")
const payBtn = document.getElementById("pay-btn")
const payText = document.getElementById("pay-text")
const loadingText = document.getElementById("loading-text")
// log in elements
const loginBtn = document.getElementById("login-btn")
const loginUserName = document.getElementById("login-user-name")
const loginUserCity = document.getElementById("login-user-city")





// All empty variables


let feedHtml = ""
let addedItemsArray = []
let cart = addedItemsArray.length ? "true" : "false"
let cartQty = 0
let ExtraDiscount = 0
let finalPay = 0
let totalItemsPrice = 0
const deliveryFee = 45
let gstCharges = 0
let deliveryTip = 0


// All Event listeners

applyBtn.addEventListener("click", applyCoupon) 
removeCouponBtn.addEventListener("click", removeCoupon)


function applyCoupon() {
    couponContainerAfter.style.display = "flex"
    couponContainer.style.display = "none"
    savingsDiv.style.display = "flex"
    couponAppliedContainer.style.visibility = "visible"
    ExtraDiscount = 75
    renderBill()
    payText.textContent = `Pay ₹${finalPay}`  
    setTimeout(function(){
         couponAppliedContainer.style.visibility = "hidden"
    }, 3000)
}


function removeCoupon() {
    couponContainer.style.display = "block"
    couponContainerAfter.style.display = "none"
    couponAppliedContainer.style.visibility = "hidden"
    savingsDiv.style.display = "none"
    ExtraDiscount = 0
    renderBill()
    payText.textContent = `Pay ₹${finalPay.toFixed(2)}`  
}


// payment event listeners

cardPay.addEventListener("click", function() {
    paymentForm.style.display = "block"
    paymentOptionPreview.style.backgroundImage = "url(./images/payment/card.jpg)"
    payBtn.style.display = "flex"
    payText.textContent = `Pay ₹${finalPay.toFixed(2)}` 

})

phonePe.addEventListener("click", function() {
    paymentOptionPreview.style.backgroundImage = "url(./images/payment/phonepe-preview.jpg)"
    payBtn.style.display = "flex"
    paymentForm.style.display = "none"
    payText.textContent = `Pay ₹${finalPay.toFixed(2)}`  
})

gPay.addEventListener("click", function() {
    paymentOptionPreview.style.backgroundImage = "url(./images/payment/gpay-preview.jpg)"
    payBtn.style.display = "flex"
     paymentForm.style.display = "none"
     payText.textContent = `Pay ₹${finalPay.toFixed(2)}` 
})

payTm.addEventListener("click", function() {
    paymentOptionPreview.style.backgroundImage = "url(./images/payment/paytm-preview.jpg)"
    payBtn.style.display = "flex"
     paymentForm.style.display = "none"
     payText.textContent = `Pay ₹${finalPay.toFixed(2)}` 
})


payBtn.addEventListener("click", function() {
    document.getElementById("payment-loading-page").style.display = "flex"

    setTimeout(function() {
        loadingText.textContent = "Your Order is processing..."
    },2000)

    setTimeout(function() {
        loadingText.textContent = "Don't refresh or press back button..."
    },4000)

    setTimeout(function() {
        document.getElementById("loader").style.display = "none"
        document.getElementById("loader-success").style.display = "flex"
        loadingText.textContent = "Order Placed"
    },6000) 
})

loginBtn.addEventListener("click", function() {
    if(loginUserName.value && loginUserCity.value) {
        document.getElementById("user-name").textContent = loginUserName.value
        document.getElementById("location").textContent = loginUserCity.value
        document.getElementById("question-name").textContent = loginUserName.value
        document.getElementById("card-name").value = loginUserName.value
        document.getElementById("login-page").style.display = "none"
    }  
})




couponCloseBtn.addEventListener("click", function() {
    couponAppliedContainer.style.visibility = "hidden"
})

document.addEventListener("click", function(){
    previewContainer.style.height = "0"
})

addMoreBtn.addEventListener("click", billPageClose)

goBackArrow.addEventListener("click", billPageClose)

function billPageClose() {
    billPageContainer.style.width = "0"
    billPageContainer.style.padding = "0"
}

// Document eventlistener

document.addEventListener("click", function(e) {
    if(e.target.dataset.nav){
        render(e.target.dataset.nav)
    }

    if(e.target.dataset.feedImage) {
        previewDisplay(e.target.dataset.feedImage)
    }

    if(e.target.dataset.add){
        handleAddBtn(e.target.dataset.add)
    } 

    if(e.target.dataset.plus) {
        handleIncrement(e.target.dataset.plus)
    }

    if(e.target.dataset.minus){
        handleDecrement(e.target.dataset.minus)
    }

    if(e.target.dataset.billPlus){
        handleBillPlus(e.target.dataset.billPlus)
    }

    if(e.target.dataset.billMinus) {
        handleBillMinus(e.target.dataset.billMinus)
    }

    if(e.target.dataset.tip) {
        const tipAmount = Number(e.target.dataset.tip)
        if(deliveryTip === tipAmount){
            deliveryTip = 0
            renderBill()
        } else{
            deliveryTip = tipAmount
            renderBill()
        }
        
        toggleTipClass(e.target.dataset.tip)
        payText.textContent = `Pay ₹${finalPay.toFixed(2)}` 
        
    }   
})


function toggleTipClass(divId) {
    const allTipDivs = document.querySelectorAll(".tip")

    allTipDivs.forEach(function(div) {
        if(div.id === divId){
            div.classList.toggle("tip-added") 
        } else{
            div.classList.remove("tip-added")
        }
       
    })
}


closePreviewBtn.addEventListener("click", function(){
    previewContainer.style.height = "0"
})



// All Function codes

// Render function

function render(navId="biryani") {
    document.getElementById("feed-title").textContent = `${navId}'s for you`
    foodData.forEach(function(item) {
        if(item.category === navId){    
            feedHtml += `
                        <div class="feed-item">
                            <div class="feed-info">
                                <p class="item-title">${item.name}</p>
                                <p class="item-price">₹${item.price}</p>
                                <p class="item-rating">★ ${item.rating}</p>
                                <p class="item-description">${item.description}</p>
                            </div>
                            <div class="feed-image-div" data-feed-image="${item.uuid}"  style="background-image: url(${item.image});">
                                <div class="add-btn" id="add-btn-${item.uuid}" data-add="${item.uuid}">
                                   ${!item.isAdded ? "ADD" :
                                     `
                                    <div class="count-div count-no" id="decrement" data-minus=${item.uuid}>-</div>
                                    <div class="count-div count" id="count-${item.uuid}">${item.qty}</div>
                                    <div class="count-div count-no" id="increment" data-plus=${item.uuid}>+</div>
                                    `
                                    }    
                                </div>
                                   
                            </div>
                        </div>
            `
        }
    })  

    feedMain.innerHTML = feedHtml 
    feedHtml = ""
}



// Preview display function

function previewDisplay(itemId) {

    foodData.filter(function(item) {
        if(item.uuid === itemId) {
            previewWindow.innerHTML = `
                        <div class="preview-image" style="background-image: url(${item.image});"></div>
                        <div class="preview-info feed-info">
                            <p class="item-title">${item.name}</p>
                            <p class="item-price">₹${item.price}</p>  
                            <p class="item-rating">★ ${item.rating}</p>
                            <p class="item-description">${item.description}</p>
                        </div>         
            `
        }
    })

    previewContainer.style.height = "360px"
}


// Add btn function

function handleAddBtn(btnId) {
   const addBtn = document.getElementById(`add-btn-${btnId}`)

   foodData.forEach(function(item) {
    if(item.uuid === btnId) {
        if(!item.isAdded) {
            addedItemsArray.push(item)
            item.qty++
            cartQty++
            item.isAdded = true

            addBtn.innerHTML = `
                <div class="count-div count-no" id="decrement" data-minus=${item.uuid}>-</div>
                <div class="count-div count" id="count-${item.uuid}">${item.qty}</div>
                <div class="count-div count-no" id="increment" data-plus=${item.uuid}>+</div>
 `  
         
        if(cart && addedItemsArray.length) {
        addCartContainer.style.bottom = "-36px"
        feedMain.style.paddingBottom = "5rem"
    }
        }

    }

   })
   noOfItems.textContent = `${cartQty} ${cartQty > 1 ? "items added" : "item added"}`
}


// Increment and decrement functions

function handleIncrement(itemId) {
    foodData.forEach(function(item) {
        if(item.uuid === itemId){
            item.qty++
            cartQty++
            renderCartItems()
            document.getElementById(`count-${itemId}`).textContent = item.qty
        }
    })

    noOfItems.textContent = `${cartQty} ${cartQty > 1 ? "items added" : "item added"}`
    
}


function handleDecrement(itemId) {
    foodData.forEach(function(item){
        if(item.uuid === itemId) {
            item.qty--
            cartQty--
            item.qty ? "" : item.isAdded = !item.isAdded
           
            if(item.qty === 0) {
                const index = addedItemsArray.indexOf(item)
                addedItemsArray.splice(index, 1)
            }
            
            renderCartItems()
            
            
            if(cartQty === 0) {
                addCartContainer.style.bottom = "-150px"
                feedMain.style.paddingBottom = "0"
                deliveryTip = 0
                removeCoupon()
                toggleTipClass("0")
                payBtn.style.display = "none"
            } 

            if(item.isAdded) {
                document.getElementById(`count-${itemId}`).textContent = item.qty
            } else{
                document.getElementById(`add-btn-${item.uuid}`).innerHTML = !item.isAdded ? "ADD" :
                `
                <div class="count-div count-no" id="decrement" data-minus=${item.uuid}>-</div>
                <div class="count-div count" id="count-${item.uuid}">${item.qty}</div>
                <div class="count-div count-no" id="increment" data-plus=${item.uuid}>+</div>
                `
                
            }  
            
        }
    })

    if(!addedItemsArray.length){
        billPageContainer.style.padding = "0rem"
        billPageContainer.style.width = "0%"
        
    }
    noOfItems.textContent = `${cartQty} ${cartQty > 1 ? "items added" : "item added"}`
}

// Billing page function

// View cart function

function renderCartItems() {
    let cartItems = ""
    totalItemsPrice = 0
    addedItemsArray.forEach(function(item) {
        totalItemsPrice += item.price * item.qty
        cartItems += `
                <div class="items-list-container">
                    <div class="items-list">
                        <p class="item-name">${item.name}</p>
                        <div class="add-btn-bill">
                            <div class="count-div count-no" id="bill-decrement-${item.uuid}" data-bill-minus="${item.uuid}">-</div>
                            <div class="count-div count" id="bill-count-${item.uuid}">${item.qty}</div>
                            <div class="count-div count-no" id="bill-increment-${item.uuid}" data-bill-plus="${item.uuid}">+</div>
                        </div>
                        <p class="item-price">₹${item.price * item.qty}</p>
                    </div>
                </div> `
    })

    cartItemsRenderContainer.innerHTML = cartItems
    cartItems = ""
    noOfItems.textContent = `${cartQty} ${cartQty > 1 ? "items added" : "item added"}`
    renderBill()
}


// render bill function

function renderBill(){
    gstCharges = totalItemsPrice * 0.18
    finalPay = (totalItemsPrice + deliveryFee + gstCharges + deliveryTip) - `${ExtraDiscount}`
    document.getElementById("total-items-amount").textContent = `₹${totalItemsPrice}`
    document.getElementById("delivery-fee-amount").textContent = `₹${deliveryFee}`
    document.getElementById("extra-discount-amount").textContent = `-₹${ExtraDiscount}`
    document.getElementById("delivery-tip-amount").textContent = `₹${deliveryTip}`
     document.getElementById("gst-charges-amount").textContent = `₹${gstCharges.toFixed(2)}`
     document.getElementById("final-pay-amount").textContent = `₹${finalPay.toFixed(2)}`
}


cartText.addEventListener("click", function() {
    renderCartItems()
    billPageContainer.style.padding = "0.9375rem"
    billPageContainer.style.width = "100%" 
})


// Increment in bill page

function handleBillPlus(itemId) {
    addedItemsArray.forEach(function(item) {
        if(item.uuid === itemId) {
            handleIncrement(itemId)
        }
    })
    payText.textContent = `Pay ₹${finalPay}` 
}

// Decrement in bill page

function handleBillMinus(itemId) {
    addedItemsArray.forEach(function(item) {
        if(item.uuid === itemId) {
            handleDecrement(itemId)
        }
    })
    payText.textContent = `Pay ₹${finalPay}` 
}


render()








