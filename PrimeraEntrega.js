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

  const testing = new ProductManager();

  console.log(testing.getProducts());
  
  testing.addProduct({
    title: 'Samsung S23 Ultra',
    description: 'Descripción Samsung S23 Ultra',
    thumbnail: 'sin imagen',
    price: 1300,
    code: 'abc123',
    stock: 25,
  });
  
  testing.addProduct({
    title: 'Iphone 14 Pro Max',
    description: 'Descripción Iphone 14 Pro Max',
    price: 1500,
    thumbnail: 'sin imagen',
    code: 'abc1234',
    stock: 225,
  });
  
  testing.addProduct({
    title: 'PS5',
    description: 'Descripción PS5',
    price: 600,
    thumbnail: 'sin imagen',
    code: 'abc12345',
    stock: 500,
  });
  
  testing.addProduct({
    title: 'PS5',
    description: 'Descripción PS5',
    price: 600,
    thumbnail: 'sin imagen',
    code: 'abc12345',
    stock: 500,
  });
  
  const test1 = testing.getProducts();
  console.log(test1);
  
  const test2 = testing.getProductById(5);
  console.log(test2);
  
  const test3 = testing.getProductById(2);
  console.log(test3);

