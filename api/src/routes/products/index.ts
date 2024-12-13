
import { Router } from "express";
import { 
    productList, getProductById, 
    createProduct, updateProduct, deleteProduct 
} from "./productController";
const router = Router();
router.get('/', productList);
router.post('/', createProduct);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;