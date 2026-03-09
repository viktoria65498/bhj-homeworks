const cart__products = document.querySelector('.cart__products')
const products = document.querySelectorAll('.product')

products.forEach((product) => {
    const product__image = product.querySelector('.product__image')
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
        const img = product__image.src
        const quantity = parseInt(value.textContent)

        const product__added = Array.from(cart__products.querySelectorAll('.cart__product')).find(p => p.dataset.id === id)
        if (product__added) {
            const count__elem = product__added.querySelector('.cart__product-count')
            count__elem.textContent = parseInt(count__elem.textContent) + quantity
        } else {
            const cart__product = document.createElement('div')
            cart__product.className = 'cart__product'
            cart__product.dataset.id = id

            cart__product.innerHTML = `<img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${quantity}</div>`
            
            cart__products.append(cart__product)
        }
    })
})