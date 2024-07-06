const ProductController = require('./src/controllers/productController');
const ProductService = require('./src/services/productService');

// Mock ProductService
jest.mock('./src/services/productService');

describe('ProductController', () => {
  let productController;
  let mockRequest;
  let mockResponse;
  let mockNext;

  beforeEach(() => {
    productController = new ProductController();
    mockRequest = {
      body: {
        name: 'Test Product',
        description: 'Test Description',
        price: 123,
        categories: JSON.stringify(['6685a5608ff3d26113e4282f'])
      },
      file: {
        path: 'C:/Users/LYVE/Desktop/1685154384145.jpg'
      }
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  describe('createProduct', () => {
    it('should create a product successfully', async () => {
      const mockProduct = {
        id: '123',
        name: 'Test Product',
        description: 'Test Description',
        price: 123,
        image: 'C:/Users/LYVE/Desktop/1685154384145.jpg',
        categories: ['6685a5608ff3d26113e4282f']
      };

      ProductService.prototype.createProduct.mockResolvedValue(mockProduct);

      await productController.createProduct(mockRequest, mockResponse, mockNext);

      expect(ProductService.prototype.createProduct).toHaveBeenCalledWith({
        name: 'Test Product',
        description: 'Test Description',
        price: 123,
        image: 'C:/Users/LYVE/Desktop/1685154384145.jpg',
        categories: ['6685a5608ff3d26113e4282f']
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockProduct);
    });

    it('should return 400 if image file is missing', async () => {
      mockRequest.file = undefined;

      await productController.createProduct(mockRequest, mockResponse, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Image file is required' });
    });

    it('should call next with error if ProductService throws', async () => {
      const error = new Error('Service error');
      ProductService.prototype.createProduct.mockRejectedValue(error);

      await productController.createProduct(mockRequest, mockResponse, mockNext);

      expect(mockNext).toHaveBeenCalledWith(error);
    });
  });
});