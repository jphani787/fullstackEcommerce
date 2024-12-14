import { Request, Response } from "express";
import { db } from "../../db/index";
import { productsTable, productCreateSchema } from "../../db/productsSchema";
import { eq } from "drizzle-orm";
import _ from 'lodash';

export async function productList(req: Request, res: Response) {
    try {
        const products = await db.select().from(productsTable);
        res.json(products);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getProductById(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const [product] = await db.select()
        .from(productsTable)
        .where(eq(productsTable.id, Number(id)));
        if(!product) {
            res.status(404).send({message:"Produst not found!"});
        }else {
            res.json(product);
        }
    }catch(e){
        res.status(500).send(e);
    }
}

export async function createProduct(req: Request, res: Response) {
    try {
        const [product] = await db.insert(productsTable).values(req.cleanBody).returning();
        res.status(201).json(product);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function updateProduct(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const updateProduct = req.cleanBody;  
        const [updatedProduct] = await db.update(productsTable)
                                         .set(updateProduct)
                                         .where(eq(productsTable.id, Number(id)))
                                         .returning();
        if(updateProduct) {
            res.json(updateProduct);
        }else {
            res.status(404).send({messahe: "Product was not found!!"});
        }
    }catch(e){
        res.status(500).send(e);
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try {
        const {id} = req.params;
        const [deleteProduct] = await db.delete(productsTable)
                                .where(eq(productsTable.id, Number(id)))
                                .returning();
        if(deleteProduct) {
            res.status(204).send();
        } else {
            res.status(404).send({message: "Product was not found!!"})
        }
    }catch(e){
        res.status(500).send(e);
    }
}