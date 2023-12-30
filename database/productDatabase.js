
let productDataModel =  {           
        "ID": 3243,
        "product__id": "05.02.822.15",
        "product__uid": "33dyt",
        "store__id": '33l3l3',
        "store__email": "dearvayu@gmail.com",
        "product__group": "a",
        "filter_url": "have",
        "visible__url": "meetion-mt-m930-black-wired-gaming-mouse",
        "title": "Meetion MT-M930 Black Wired Gaming Mouse",
        "brand": "Meetion",
        "child": "Mouse",
        "parent": "Gaming Desktop Component",
        "parent__father": "Gaming",
        "up": "computer and accessories",
        "message": 'Color may be different',
        "total__sell": 0,
        "total__review": 105,
        "total__profit": 0,
        "total__view": 440,
        "way__quantity": 200,
        "quantity": 100,
        "offer__quantity": 33,
        "rating__average": 4.5,
        "whole__price": 150,
        "current__price": 400,
        "previous__price": 450,
        "offer__price": 400,
        "profit": 250,
        "on__way": "yes",
        "offer__stock__out__salable": "no",
        "stock__out_salable": "no",
        "discountable": "no", 
        "visible": "yes",
        "salable": 'yes',
        "is__recycle": 'no',
        "discount__coupons": [
            {code: 'O75', discount: 75},
            {code: 'O73', discount: 73},
            {code: 'O72', discount: 72},
        ], 
        "images": [
            'https://github.com/images/3.png',
            'https://github.com/images/4.png',
            'https://github.com/images/5.png',
            'https://github.com/images/6.png',
        ],
        "overviews": [
            "Brand - Meetion",
            "Model - Meetion MT-M915",
            "Series - Gaming",
            "Type - Wired Gaming Mouse",
            "Connectivity - Wired",
            "Interface - USB",
            "Style & Size - Regular Big"
        ],
        "details": [
            {
                "tag": "h2",
                "text": "Details"
            },
            {
                "tag": "p",
                "text": "Brand - Meetion, Model -"
            }
        ],
        "specification": [
            {
                "title": "General",
                "infos": [
                    {
                        "title": "Brand",
                        "info": "Meetion"
                    },
                    {
                        "title": "Model",
                        "info": "Meetion MT-M915"
                    }, 
                ]
            }, 
            {
                "title": "Additional Info",
                "infos": [ 
                    {
                        "title": "Others",
                        "info": "Error-free Running Time, Strokes: More than 3, 000, 000"
                    }
                ]
            }
        ], 
        "price__history": [
            {
                type: 'whole__price', price: 400, data: '', user__id: '',
                type: 'current__price', price: 400, data: '', user__id: '',
                type: 'previous__price', price: 400, data: '', user__id: '',
            }
        ], 
        "editor__history": [
            {user__id: "", time: ''}
        ],
        "infos": {
            title: ''
        }
    } 
let wishlistDataModel = {
    ID: '',
    product__id: '',
    user__id: '',
    quantity: ''
}
let cartDataModel = {
    ID: '',
    product__id: '',
    user__id: '',
    quantity: '',
    time: ''
}
let browsingHistoryDataModel = {
    ID: '',
    product__id: '',
    user__id: '',
    time: '',
}



let userDataModel = {
    id: '',
    'name': "",
    'email': '',
    'phone': '',
    'role': '',
    'designation': '',
    'password': '',
    'user__id': '',
    'store__email': '',
    'store__id': '',
    'address': [],
    'img__src': '',
    'balance': 0,
    'point': 0,
}
let brandDataModel = {
    ID: '',
    brand: '',
    uid: '',
    src: ''
}
let childDataModel = {
    ID: '',
    name: '',
    parent: '',
    uid: '',
    src: '',
    up: ''
}
let offersDataModel = {
    ID: '',
    name: '',
    product__id: '',
    img__src: '',
    active: ''
}



let filterNavbarDataModel = {
    ID: '',
    child: '',
    parent: '',
    parent__father: '',
    data: '',
    up: ''
}

let grandFatherDataModel = {
    ID: '',
    name: '',
    uid: '',
    src: '',
    up: ''
}

let parentDataModel = {
    ID: '',
    name: '',
    parent__father: '',
    uid: '',
    src: '',
    up: ''
}

let shopByBrandDataModel = {
    ID: '',
    name: '',
    img: '',
    link: '', 
}

let shopByCategoryDataModel = {
    ID: '',
    name: '',
    img: '',
    link: '', 
}

let upDataModel = {
    ID: '',
    name: '',
    uid: '',
    src: ''
}



let ordersDataModel = {
    id: '',
    product__id: '',
    quantity: '',
    user__id: '',
    pay__type: '',
    order__id: '',
    status: '',
    price: '',
    id_order__id: '',
    reason: '',
    created_at: '',
    updated_at: ''
}

let districtDataModel = {
    id: '',
    division_id: '',
    name: '',
    bn_name: '',
    lat: "",
    lon: '',
    url: ''
}
let divisionDataModel = {
    id: '',
    name: '',
    bn_name: '',
    url: ''
}
let upazillasDataModel = {
    id: '',
    district_id: '',
    name: '',
    bn_name: '',
    url: ''
}
let unionsDataModel = {
    id: '',
    upazilla_id: '',
    name: '',
    bn_name: '',
    url: ''
}


// "infos": {
//     "child": "Mouse",
//     "parent": "Gaming Desktop Component",
//     "parent__father": "Gaming",
//     "brand": "Meetion",
//     "product__id": "05.02.822.14",
//     "images": [
//         "/images/assests/8850_______05.02.822.14_______.png",
//         "/images/assests/8851_______05.02.822.14_______.png",
//         "/images/assests/16649_______05.02.822.14_______.png",
//         "/images/assests/16650_______05.02.822.14_______.png",
//         "https://www.ryanscomputers.com/storage/products/small/meetion-mt-m915-wired-black-gaming-11638426430.webp"
//     ],
//     "quantity": 10,
//     "current__price": 550,
//     "previous__price": 600,
//     "title": "Meetion MT-M915 Wired Black Gaming Mouse",
//     "details__url": "https://www.ryanscomputers.com/meetion-mt-m915-wired-black-gaming-mouse",
//     "visible__url": "meetion-mt-m915-wired-black-gaming-mouse",
//     "overviews": [
//         "Brand - Meetion",
//         "Model - Meetion MT-M915",
//         "Series - Gaming",
//         "Type - Wired Gaming Mouse",
//         "Connectivity - Wired",
//         "Interface - USB",
//         "Style & Size - Regular Big"
//     ],
//     "details": [
//         {
//             "tag": "h2",
//             "text": "Details"
//         },
//         {
//             "tag": "p",
//             "text": "Brand - Meetion, Model - Meetion MT-M915, Series - Gaming, Type - Wired Gaming Mouse, Connectivity - Wired, Interface - USB, Style & Size - Regular Big, 2X Click - No, Click Sound - Yes, Max DPI - 2400 DPI, Resolution - 800/1200/1600/2400DPI, Number of Button - 5+1 (scroll wheel), Wheel - Yes, Tracking Type - Optical, Cable Length - 1.5 Meter, Dimensions (WxHxD) - 135 x 73 x 42mm, Weight - 140g, OS Support - Windows XP/Vista/7/8/10, Color - Black, Features - Variable Highlight, Ergonomic symmetric design for Right/Left hand, Soft Touch, Two additional navigation buttons (Forward and Backward), Resolution DPI Switch, Precision Optical Sensor, Others - Error-free Running Time, Strokes: More than 3, 000, 000, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
//         }
//     ],
//     "specifications": [
//         {
//             "title": "General",
//             "infos": [
//                 {
//                     "title": "Brand",
//                     "info": "Meetion"
//                 },
//                 {
//                     "title": "Model",
//                     "info": "Meetion MT-M915"
//                 },
//                 {
//                     "title": "Series",
//                     "info": "Gaming"
//                 },
//                 {
//                     "title": "Type",
//                     "info": "Wired Gaming Mouse"
//                 },
//                 {
//                     "title": "Style &amp; Size",
//                     "info": "Regular Big"
//                 }
//             ]
//         },
//         {
//             "title": "Technical Information",
//             "infos": [
//                 {
//                     "title": "Connectivity",
//                     "info": "Wired"
//                 },
//                 {
//                     "title": "Interface",
//                     "info": "USB"
//                 },
//                 {
//                     "title": "2X Click",
//                     "info": "No"
//                 },
//                 {
//                     "title": "Click Sound",
//                     "info": "Yes"
//                 },
//                 {
//                     "title": "Max DPI",
//                     "info": "2400 DPI"
//                 },
//                 {
//                     "title": "Resolution",
//                     "info": "800/1200/1600/2400DPI"
//                 },
//                 {
//                     "title": "Number of Button",
//                     "info": "5+1 (scroll wheel)"
//                 },
//                 {
//                     "title": "Wheel",
//                     "info": "Yes"
//                 },
//                 {
//                     "title": "Tracking Type",
//                     "info": "Optical"
//                 },
//                 {
//                     "title": "OS Compatibility",
//                     "info": "Windows XP/Vista/7/8/10"
//                 }
//             ]
//         },
//         {
//             "title": "Physical Description",
//             "infos": [
//                 {
//                     "title": "Cable Length (Meter)",
//                     "info": "1.5 Meter"
//                 },
//                 {
//                     "title": "Dimensions (WxHxD)",
//                     "info": "135 x 73 x 42mm"
//                 },
//                 {
//                     "title": "Weight (gm)",
//                     "info": "140g"
//                 },
//                 {
//                     "title": "Color",
//                     "info": "Black"
//                 }
//             ]
//         },
//         {
//             "title": "Warranty",
//             "infos": [
//                 {
//                     "title": "Warranty",
//                     "info": "1 year"
//                 }
//             ]
//         },
//         {
//             "title": "Additional Info",
//             "infos": [
//                 {
//                     "title": "Feature",
//                     "info": "Variable Highlight, Ergonomic symmetric design for Right/Left hand, Soft Touch, Two additional navigation buttons (Forward and Backward), Resolution DPI Switch, Precision Optical Sensor"
//                 },
//                 {
//                     "title": "Others",
//                     "info": "Error-free Running Time, Strokes: More than 3, 000, 000"
//                 },
//                 {
//                     "title": "Country Of Origin",
//                     "info": "China"
//                 },
//                 {
//                     "title": "Made in/ Assemble",
//                     "info": "China"
//                 }
//             ]
//         }
//     ],
//     "whole__price": 440
// }

