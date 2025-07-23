const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// Menú con bebidas separadas por categoría
const menu = {
  brunch: [
    { nombre: "TOAST", precio: 45, variantes: ["BERRY FUWA", "KUMO PEANUT", "HINODE"] },
    { nombre: "EGG SANDWICH CLUB", precio: 40 },
    { nombre: "TOSTADA BRULÉ", precio: 45 },
    { nombre: "MUFFIN BENEDICTINOS", precio: 45 }
  ],
  postres: [
    { nombre: "Crumbl Cookies", precio: 25, variantes: ["Con cobertura", "Sin cobertura"] },
    { nombre: "CHEESCAKE Maracuyá", precio: 30 },
    { nombre: "Pastel chocolate", precio: 30 }
  ],
  japanese: [
    { nombre: "BAOS", precio: "Q35 x1 / Q55 x2" },
    { nombre: "MOCHIS", precio: 18 },
    { 
      nombre: "KATSU SANDO", 
      variantes: [
        "Pollo - Q45",
        "Cerdo - Q50"
      ] 
    },
    { 
      nombre: "SANDOS", 
      precio: "Q38 / Q43", 
      variantes: ["Uva verde", "Frutos rojos", "Melocotón mora", "Fresa"]
    }
  ],
  calientes: [
    { 
      nombre: "Americano", 
      precios: { "8oz": 17, "12oz": 19 } 
    },
    { 
      nombre: "Capuchino", 
      precios: { "8oz": 18, "12oz": 20 } 
    },
    { 
      nombre: "Latte Sakura", 
      precios: { "8oz": 18, "12oz": 25 } 
    }
  ],
  frias: [
    { 
      nombre: "ICED LATTE", 
      precios: { "12oz": 20, "16oz": 22 } 
    },
    { 
      nombre: "FRAPPE CARAMEL MACCHIATO", 
      precios: { "12oz": 26, "16oz": 28 } 
    }
  ]
};

app.get("/", (req, res) => res.send("API de menú japonés 🍣"));
app.get("/api/menu", (req, res) => res.json(menu));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
