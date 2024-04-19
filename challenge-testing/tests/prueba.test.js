/*
- CarritoCompra debería ser una clase
- carritoCompra debería ser una instancia de la clase CarritoCompra
- Debería guardar productos en una lista
- Debería tener un método llamado agregarProducto
- Debería tener un método llamado calcularTotal()
- Debería tener un método llamado aplicarDescuento
- El método agregarProducto debería poder agregar un producto a la lista
- El método calculartotal debería poder calcular el total de la compra sumando los precios de todos los productos en el carrito
- El método aplicarDescuento debería poder aplicar un descuento al total de la compra
*/

const CarritoCompra = require('./index')

describe('Clase CarritoCompra', () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra
    })

    describe('Sobre el constructor de la clase CarritoCompra', () => {
        it('CarritoCompra debería ser una clase', () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it('carritoCompra debería ser una instancia de la clase CarritoCompra', () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it('Debería guardar productos en una lista', () => {
            expect(carritoCompra.products).toEqual([])
        })


    })

    describe('Métodos de la clase CarritoCompra', () => {
        const product1 = {
            id:1,
            name:'Pizza',
            price: 1000,
            quantity: 3
        }

        const product2 = {
            id:1,
            name:'Hamburguesa',
            price: 900,
            quantity: 5
        }

        it('Debería tener un método llamado agregarProducto', () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it('Debería tener un método llamado calcularTotal', () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it('Debería tener un método llamado aplicarDescuento', () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        it('El método agregarProducto debería poder agregar un producto a la lista', () => {
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })

        it('El método calcularTotal debería poder calcular el total de la compra sumando los precios de todos los productos en el carrito', () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity

            const total = carritoCompra.calcularTotal()

            expect(total).toBe(totalExpect)
        })

        it('El método aplicarDescuento debería poder aplicar un descuento al total de la compra', () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const subTotal = product1.price * product1.quantity + product2.price * product2.quantity

            const porcentajeDescuento = 10

            const totalExpect = subTotal - (subTotal * (porcentajeDescuento/100))

            const total = carritoCompra.aplicarDescuento(porcentajeDescuento)

            expect(totalExpect).toBe(total)

        })
    })
})