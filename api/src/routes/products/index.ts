
import { Router } from "express";

const router = Router();

router.get('/', (req, res)=>{
    res.send('list of products!');
});

router.post('/', (req, res)=>{
    res.send('Product created !');
});

router.get('/:id', (req, res)=>{
    console.log(req.params);
    res.send('A product');
});

export default router;