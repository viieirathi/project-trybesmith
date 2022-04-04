import express from 'express';
import OrdersController from './controllers/orders';
import ProductsController from './controllers/products';
import UserController from './controllers/user';
import MidAmountValidat from './middleware/amountValidation';
import MidClasseValidat from './middleware/classeValidation';
import MidLevelValidat from './middleware/levelValidation';
import MidNameValidat from './middleware/nameValidation';
import MidPasswordValidat from './middleware/passwordValidation';
import MidUserValidat from './middleware/userValidation';

const app = express();

app.use(express.json());

const productsController = new ProductsController();
const usersController = new UserController();
const ordersController = new OrdersController();

app.get('/products', productsController.listProductsAll);
app.post(
  '/products',
  MidNameValidat.nameValidation,
  MidAmountValidat.amountValidation,
  productsController.createProducts,
);
app.post(
  '/users',
  MidUserValidat.userValidation,
  MidClasseValidat.classeValidation,
  MidLevelValidat.levelValidation,
  MidPasswordValidat.passwordValidation,
  usersController.createUser,
);

app.get('/orders', ordersController.listOrdersAll);

export default app;
