
import { Router } from "express";
import { 
    productList, getProductById, 
    createProduct, updateProduct, deleteProduct 
} from "./productController";
import { validateData } from "../../middleware/validationMiddleware";
import { productCreateSchema, productUpdateSchema } from "../../db/productsSchema";

const router = Router();
router.get('/', productList);
router.post('/', validateData(productCreateSchema), createProduct);
router.get('/:id', getProductById);
router.put('/:id', validateData(productUpdateSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;