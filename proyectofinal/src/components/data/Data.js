import mouse from "../../img/mouse.jpg"
import teclado from "../../img/teclado.jpeg"
import cooler from "../../img/cooler.jpeg"
import celeron from "../../img/celeron.jpeg"
import placa from "../../img/gt1030.jpeg"
import monitor from "../../img/monitorlg.jpg"

const data = [
  {
    id: 1,
    nombre: "MOUSE GENIUS DX-110 USB",
    img: mouse,
    precio: 550,
    cantidad: 3
  },
  {
    id: 2,
    nombre: "TECLADO LOGITECH K210 QWERTY ESPAÑOL LATAM",
    img: teclado,
    precio: 1400,
    cantidad: 1
  },
  {
    id: 3,
    nombre: "COOLER CPU COOLER MASTER HYPER 212 PARA ZOCALO INTEL",
    img: cooler,
    precio: 7000,
    cantidad: 2
  },
  {
    id: 4,
    nombre: "PROCESADOR INTEL CELERON G5905 3.5GHz",
    img: celeron,
    precio: 6000,
    cantidad: 1
  },
  {
    id: 5,
    nombre: "NVIDIA ASUS GEFORCE GT1030",
    img: placa,
    precio: 15000,
    cantidad: 2
  },
  {
    id: 6,
    nombre: "MONITOR LG 20 PULGADAS VGA HDMI",
    img: monitor,
    precio: 30000,
    cantidad: 3

  }
]

const getFetch = new Promise((res, rej) => {
  let condition = true
  if (condition) {
    setTimeout(() => {
      res(data)
    }, 2000);
  } else {
    rej(console.log("no hay datos"))
  }
})
export default getFetch;
/*[
    {
      "id": 1,
      "nombre": "MOUSE GENIUS DX-110 USB",
      "img": "img/mouse.jpg",
      "precio": 550,
      "cantidad": 3
    },
    {
      "id": 2,
      "nombre": "TECLADO LOGITECH K210 QWERTY ESPAÑOL LATAM",
      "img": "img/teclado.jpeg",
      "precio": 1400,
      "cantidad": 1
    },
    {
      "id": 3,
      "nombre": "COOLER CPU COOLER MASTER HYPER 212 PARA ZOCALO INTEL",
      "img": "img/cooler.jpeg",
      "precio": 7000,
      "cantidad": 2
    },
    {
      "id": 4,
      "nombre": "PROCESADOR INTEL CELERON G5905 3.5GHz",
      "img": "img/celeron.jpeg",
      "precio": 6000,
      "cantidad": 1
    },
    {
      "id": 5,
      "nombre": "NVIDIA ASUS GEFORCE GT1030",
      "img": "img/gt1030.jpeg",
      "precio": 15000,
      "cantidad": 2
    },
    {
      "id": 6,
      "nombre":"MONITOR LG 20 PULGADAS VGA HDMI",
      "img":"img/monitorlg.jpg",
      "precio":30000,
      "cantidad":3
  
    }
  ]*/