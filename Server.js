// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🛍️ Product List API
const products = [
  { id: 1, name: "FlowCare Pads", price: 45 },
  { id: 2, name: "Reusable Cup", price: 120 },
  { id: 3, name: "Period Wipes", price: 30 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

// 💳 PayFast Payment Redirect API
app.post("/api/payfast", (req, res) => {
  const { amount, item_name, return_url, cancel_url } = req.body;

  const payfastUrl = `https://www.payfast.co.za/eng/process?merchant_id=YOUR_MERCHANT_ID&merchant_key=YOUR_MERCHANT_KEY&amount=${amount}&item_name=${item_name}&return_url=${return_url}&cancel_url=${cancel_url}`;

  res.json({ redirect: payfastUrl });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
