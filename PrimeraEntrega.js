class ProductManager {
    constructor(products = []) {
      this.products = products;
      this.productIdCounter = 0;
    }
  
    addProduct(product) {
      if (!product.title || !product.description || !product.price || !product.code || !product.stock) {
        throw new Error('Todos los campos son obligatorios');
      }
      if (this.products.some(p => p.code === product.code)) {
        throw new Error(`El producto con el código ${product.code} ya existe en stock`);
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
  price: 1300,
  code: '1',
  stock: 10
   }); 

console.log(manager.products);