let shopByCategory = [
    {
        "ID": 1,
        "name": "Gaming",
        "img": "/category/gaming.png",
        "link": "/p/Gaming/Gaming%20Component",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 2,
        "name": "Camera",
        "img": "/category/camera.png",
        "link": "/p/Camera/Digital%20SLR%20Camera/DSLR%20Camera",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 3,
        "name": "Processor",
        "img": "/category/processors.png",
        "link": "/p/Desktop%20PC%20and%20Server/Desktop%20Component/Processor",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 4,
        "name": "Watches",
        "img": "/category/apple.png",
        "link": "/p/Daily%20Life/Smartwatch",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 5,
        "name": "Graphics Card",
        "img": "/category/graphics.png",
        "link": "/p/Desktop%20PC%20and%20Server/Desktop%20Component/Graphics%20Card",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 6,
        "name": "Laptop",
        "img": "/category/laptop.png",
        "link": "/p/Laptop/All%20Laptop",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 7,
        "name": "Headphone",
        "img": "/category/headphone.png",
        "link": "/p/Sound%20System/Headphone",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 8,
        "name": "Keyboard",
        "img": "/category/keyboard.png",
        "link": "/p/Desktop%20PC%20and%20Server/Desktop%20Component/Keyboard",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 9,
        "name": "Monitor",
        "img": "/category/monitor.png",
        "link": "/p/Monitor/All%20Monitor",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 10,
        "name": "Mouse",
        "img": "/category/mouse.png",
        "link": "/p/Desktop%20PC%20and%20Server/Desktop%20Component/Mouse",
        "time": "2023-05-09 06:21:54"
    },
    {
        "ID": 11,
        "name": "Printer",
        "img": "/category/printer.png",
        "link": "/p/Printer/All%20Laser%20and%20INK%20Printer",
        "time": "2023-05-09 06:21:54"
    }
]

let allCategories = [];

let shopByBrand = [
    {
        "id": 1,
        "name": "AMD",
        "img__src": "/brand/amd.webp",
        "link": "/brands/AMD"
    },
    {
        "id": 2,
        "name": "Apple",
        "img__src": "/brand/apple.webp",
        "link": "/brands/Apple"
    },
    {
        "id": 3,
        "name": "corsair",
        "img__src": "/brand/corsair.webp",
        "link": "/brands/Corsair"
    },
    {
        "id": 4,
        "name": "Gigabyte",
        "img__src": "/brand/gigabyte.webp",
        "link": "/brands/Gigabyte"
    },
    {
        "id": 5,
        "name": "HP",
        "img__src": "/brand/hp.webp",
        "link": "/brands/HP"
    },
    {
        "id": 6,
        "name": "Intel",
        "img__src": "/brand/intel.webp",
        "link": "/brands/Intel"
    },
    {
        "id": 7,
        "name": "LG",
        "img__src": "/brand/lg.webp",
        "link": "/brands/LG"
    },
    {
        "id": 8,
        "name": "Microsoft",
        "img__src": "/brand/microsoft.webp",
        "link": "/brands/Microsoft"
    },
    {
        "id": 9,
        "name": "MSI",
        "img__src": "/brand/msi.webp",
        "link": "/brands/MSI"
    },
    {
        "id": 10,
        "name": "Samsung",
        "img__src": "/brand/samsung.webp",
        "link": "/brands/Samsung"
    },
    {
        "id": 11,
        "name": "Thermaltake",
        "img__src": "/brand/thermaltake.webp",
        "link": "/brands/Thermaltake"
    }
]

let allBrands = [];

shopByBrand.forEach((info)=>{
    allBrands.push({name: info.name, link: info.link, img__src: info.img__src})
})


shopByCategory.forEach((info)=>{
    allCategories.push({name: info.name, link: info.link, img__src: info.img})
})
module.exports = {
    allCategories,
    allBrands
}