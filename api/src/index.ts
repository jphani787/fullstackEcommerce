import express, {json, urlencoded} from "express";
import productRouter from "./routes/products/index";

const port = 3000;
const app = express();
app.use(urlencoded({extended: true}));
app.use(json());
app.get('/', (req, res)=>{
    res.send('hello world 787 YOY!!');
});

app.use('/products', productRouter);

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});
