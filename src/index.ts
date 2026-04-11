import express, {Request, Response} from 'express'
const app = express()
app.listen(8080)

// Routes
import DemoRouter from './demo/demo.routes'
import RazorpayRouter from './razorpay/razorpay.routes'
import AdminRouter from './admin/admin.routes'
import CartRouter from './cart/cart.routes'
import PaymentRouter from './payment/payment.routes'
import AuthRouter from './auth/auth.routes'
import PaymentRouter from './payment/payment.routes'
import CartRouter from './cart/cart.routes'

app.get("/", (req: Request, res: Response)=>{
    res.send("Hello")
})
app.use('/cart', CartRouter)
app.use('/payment', PaymentRouter)
app.use('/auth', AuthRouter)
app.use('/payment', PaymentRouter)
app.use('/cart', CartRouter)
app.use('/admin', AdminRouter)
app.use('/razorpay', RazorpayRouter)
app.use('/demo', DemoRouter)