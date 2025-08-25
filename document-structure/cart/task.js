const cart = document.querySelector('.cart__products')
const products = document.querySelectorAll('.product')

products.forEach(product => {
    const dec = product.querySelector('.product__quantity-control_dec')
    const inc = product.querySelector('.product__quantity-control_inc')
    const value = product.querySelector('.product__quantity-value')
    const add = product.querySelector('.product__add')

    dec.addEventListener('click', () => {
        let count = parseInt(value.textContent)
        if (count > 1) {
            value.textContent = count - 1
        }
    })

    inc.addEventListener('click', () => {
        let count = parseInt(value.textContent)
        value.textContent = count + 1
    })

    add.addEventListener('click', () => {
        const id = product.dataset.id
        const image = product.querySelector('.product__image').src
        const quantity = parseInt(value.textContent)

        const cartProducts = cart.querySelectorAll('.cart__product')
        let existingCartProduct = null

        cartProducts.forEach(cartProduct => {
            if (cartProduct.dataset.id === id) {
                existingCartProduct = cartProduct
            }
        })

        if (existingCartProduct) {
            const count = existingCartProduct.querySelector('.cart__product-count')
            count.textContent = parseInt(count.textContent) + quantity
        } else {
            const cartProduct = document.createElement('div')
            cartProduct.classList.add('cart__product')
            cartProduct.dataset.id = id
            cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${quantity}</div>
                `
            cart.appendChild(cartProduct)
        }
    })
})