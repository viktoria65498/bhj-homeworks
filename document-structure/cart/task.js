const cartProducts = document.querySelector('.cart__products')
const products = document.querySelectorAll('.product')

products.forEach((product) => {
    const productImage = product.querySelector('.product__image')
    const dec = product.querySelector('.product__quantity-control_dec')
    const inc = product.querySelector('.product__quantity-control_inc')
    const value = product.querySelector('.product__quantity-value')
    const add = product.querySelector('.product__add')

    dec.addEventListener('click', () => {
        let count = parseInt(value.textContent)
        if (count === 1) {
            return
        }
        value.textContent = count - 1
    })

    inc.addEventListener('click', () => {
        let count = parseInt(value.textContent)
        value.textContent = count + 1
    })

    add.addEventListener('click', () => {
        const id = product.dataset.id
        const img = productImage.src
        const quantity = parseInt(value.textContent)

        const productAdded = Array.from(cartProducts.querySelectorAll('.cart__product')).find(p => p.dataset.id === id)
        if (productAdded) {
            const countElem = productAdded.querySelector('.cart__product-count')
            countElem.textContent = parseInt(countElem.textContent) + quantity
        } else {
            cartProducts.insertAdjacentHTML('beforeend', `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${quantity}</div>
                </div>
            `)
        }
    })
})