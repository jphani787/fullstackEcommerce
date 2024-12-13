import { Request, Response } from "express";

export function productList(req: Request, res: Response) {
    res.send('productList');
}

export function getProductById(req: Request, res: Response) {
    res.send('getProductById');
}

export function createProduct(req: Request, res: Response) {
    res.send('createProduct');
}

export function updateProduct(req: Request, res: Response) {
    res.send('updateProduct');
}

export function deleteProduct(req: Request, res: Response) {
    res.send('deleteProduct');
}