class ProductManager {
    constructor(products = []) {
      this.products = products;
      this.productIdCounter = 0;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
        console.error('Todos los campos son obligatorios');
        return;
      }
      if (this.products.some(p => p.code === product.code)) {
        console.error(`El producto con el código ${product.code} ya existe en stock`);
        return;
      }
      const newProduct = {
        ...product,
        id: ++this.productIdCounter,
      };
      this.products.push(newProduct);
      return newProduct;
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(p => p.id === id);
      if (!product) {
        console.error('Not found');
      }
      return product;
    }
  }

const manager = new ProductManager();

manager.addProduct({ 
  title: 'Samsung S23 Ultra',
  description: 'Descripción Samsung S23 Ultra',
  thumbnail: "Sin imagen",
  price: 1300,
  code: '1',
  stock: 10
   }); 

console.log(manager.products);