const wishlistPdfHtmlString = (data) => {
    const totalPrice = data.reduce( ( sum, { quantity, infos:{current__price} } ) => sum + (quantity*current__price) , 0);
    const totalQuantity = data.reduce( ( sum, { quantity } ) => sum + quantity , 0);
    return `<!DOCTYPE html>

    <html>
    
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Kanit:wght@300&display=swap" rel="stylesheet">
    
    <head>
      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', sans-serif;
          font-family: 'Kanit', sans-serif;
          font-weight: 600;
          letter-spacing: .5px;
        }
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        
        .container {   
          width: 8.27in; 
          padding: 0 40px;
          background-color: #fff;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .store-header {
          text-align: center;
          margin-bottom: 20px;
        }
        
        .store-name {
          font-size: 24px;
          font-weight: bold;  
        }
        
        .store-address, .store-tel, .store-web {
          margin: 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        th, td {
          padding: 10px;
          border: 1px solid #ccc;
          font-size: 12px;
          text-align: center;
        }
        
        th {
          background-color: #f2f2f2;
          font-weight: bold;
          text-align: left;
        }
        
        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
        
        .total {
          margin-top: 20px;
          text-align: right;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="store-header">
          <div class="store-name">Danguli Computer Sales</div>
          <p class="store-address">Al-Mizan Super Market 2nd floor, Station Bazar, Rohanpur</p>
          <p>Tel: +8801720616108 | Web: www.danguli.com.bd</p>
        </div> 
        <table>
          <thead>
            <tr>
              <th style="text-align: center;" >No</th>
              <th>Title</th>
              <th  style="text-align: center;" width="90px">Price</th>
              <th style="text-align: center;"  width="50px">Quantity</th>
              <th style="text-align: center;"  width="100px">Subtotal</th>
            </tr>
          </thead>
          <tbody>   
            ${
              data.map((info, index)=>{
                return  `<tr>
                          <td>${index}</td>
                          <td style="text-align: start;">${info.infos.title}</td>
                          <td>${info.infos.current__price} TK</td>
                          <td>${info.quantity}</td>
                          <td>${info.quantity * info.infos.current__price } TK</td>
                        </tr> ` 
              }).join('')
            }
          </tbody>
        </table>
        <div class="total">
          <strong>Total (${totalQuantity}): ${totalPrice} TK</strong>
        </div>
      </div>
    </body>
    </html>
    `;
}

const productDataset = [
  {
      "product__id": "05.01.471.78",
      "brand": "Havit",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Havit",
          "product__id": "05.01.471.78",
          "images": [
              "/images/assests/8805_______05.01.471.78_______.png",
              "/images/assests/8806_______05.01.471.78_______.png",
              "/images/assests/8807_______05.01.471.78_______.png",
              "/images/assests/8808_______05.01.471.78_______.png",
              "/images/assests/16540_______05.01.471.78_______.png",
              "/images/assests/16541_______05.01.471.78_______.png",
              "/images/assests/16542_______05.01.471.78_______.png",
              "/images/assests/16543_______05.01.471.78_______.png",
              "https://www.ryanscomputers.com/storage/products/small/havit-kb488l-usb-multi-function-backlit-black-11615271837.webp"
          ],
          "quantity": 10,
          "current__price": 0,
          "previous__price": 0,
          "title": "Havit KB488L USB Multi-Function Backlit Black Gaming Keyboard",
          "details__url": "https://www.ryanscomputers.com/havit-kb488l-usb-multi-function-backlit-black-gaming-keyboard",
          "visible__url": "havit-kb488l-usb-multi-function-backlit-black-gaming-keyboard",
          "overviews": [
              "Havit KB488L",
              "Type - Gaming Keyboard",
              "Interface - USB",
              "Lighting Type - RGB",
              "Cable Length - 1.5 meter"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Havit, Model - Havit KB488L, Series - Gaming, Style & Size - Regular Big, Type - Gaming Keyboard, Interface - USB, Language (English) - Yes, Language - English, Lighting - Yes, Lighting Type - RGB, Mouse, Touchpad - Keyboard only, Dimensions (WxHxD) - 439 x 203 x 26mm, Cable Length - 1.5 meter, Color - Black, Specialty - The characteristic mobile phone bracket design on the keyboard can perfectly solve the problem of placing the mobile phone during the game, and can communicate more conveniently with the teammates when playing the game. With Fn multimedia keys, you can carry out quick operations on music play, volume control and internet browsing to save your time, Others - Operating Voltage: 5V, Operating Current: <-300mA, Key Life: 3,000,000 times, Multimedia key: 4, 19 Anti-Ghosting Keys, Feature - Eye-catching gaming design. 19 anti-ghosting keys, enable free control. Fashionable and practical style design. The characteristic mobile phone bracket design on the keyboard. FN multimedia keys 6. standard multimedia keys., Part No - KB488L, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Havit"
                      },
                      {
                          "title": "Model",
                          "info": "Havit KB488L"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Keyboard"
                      },
                      {
                          "title": "Part No",
                          "info": "KB488L"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "RGB"
                      },
                      {
                          "title": "Mouse, Touchpad",
                          "info": "Keyboard only"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions",
                          "info": "439 x 203 x 26mm"
                      },
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.5 meter"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "The characteristic mobile phone bracket design on the keyboard can perfectly solve the problem of placing the mobile phone during the game, and can communicate more conveniently with the teammates when playing the game. With Fn multimedia keys, you can carry out quick operations on music play, volume control and internet browsing to save your time"
                      },
                      {
                          "title": "Others",
                          "info": "Operating Voltage: 5V, Operating Current: &lt;-300mA, Key Life: 3,000,000 times, Multimedia key: 4, 19 Anti-Ghosting Keys"
                      },
                      {
                          "title": "Feature",
                          "info": "Eye-catching gaming design. 19 anti-ghosting keys, enable free control. Fashionable and practical style design. The characteristic mobile phone bracket design on the keyboard. FN multimedia keys 6. standard multimedia keys."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "havit-kb488l-usb-multi-function-backlit-black-gaming-keyboard",
      "total__sell": 0,
      "ID": 3232
  },
  {
      "product__id": "132.01.006.01",
      "brand": "Asus",
      "child": "Bag",
      "parent": "Bag",
      "parent__father": "Accessories",
      "infos": {
          "child": "Bag",
          "parent": "Bag",
          "parent__father": "Accessories",
          "brand": "Asus",
          "product__id": "132.01.006.01",
          "images": [
              "/images/assests/1600_______132.01.006.01_______.png",
              "/images/assests/1601_______132.01.006.01_______.png",
              "/images/assests/1602_______132.01.006.01_______.png",
              "/images/assests/4432_______132.01.006.01_______.png",
              "/images/assests/4433_______132.01.006.01_______.png",
              "/images/assests/4434_______132.01.006.01_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-rog-ranger-bp2500g-156-inch-black-laptop-11642508354.webp"
          ],
          "quantity": 10,
          "current__price": 0,
          "previous__price": 0,
          "title": "Asus ROG Ranger BP2500G 15.6 inch Black Laptop Gaming Backpack",
          "details__url": "https://www.ryanscomputers.com/asus-rog-ranger-bp2500g-15-6-inch-black-laptop-gaming-backpack",
          "visible__url": "asus-rog-ranger-bp2500g-15-6-inch-black-laptop-gaming-backpack",
          "overviews": [
              "Model - Asus ROG Ranger BP2500G",
              "Size - 15.6 Inch",
              "Type - Laptop Backpack",
              "Color - Black"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Model - Asus ROG Ranger BP2500G, Size - 15.6 Inch, Type - Laptop Backpack, Color - Black, Others - Material: Polyester Dimensions: 340 x 160 x 470mm. Features: Design in every detail: Show your style and sense with a bold cyber-text pattern, dramatic slash aesthetic and German-made Fidlock SNAP mechanical fastener. Cool, adjustable comfort: Extensive backrest mesh creates cooling air pocket, plus an adjustable chest strap prevents slippage and keeps the backpack secure. Charge-cable zipper: Dedicated short fastener enables quick access to a charging cable attached to your power bank of choice., Warranty - No Warranty"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Model",
                          "info": "Asus ROG Ranger BP2500G"
                      },
                      {
                          "title": "Type",
                          "info": "Laptop Backpack"
                      },
                      {
                          "title": "Size",
                          "info": "15.6 Inch"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      },
                      {
                          "title": "Others",
                          "info": "Material: Polyester Dimensions: 340 x 160 x 470mm. Features: Design in every detail: Show your style and sense with a bold cyber-text pattern, dramatic slash aesthetic and German-made Fidlock SNAP mechanical fastener. Cool, adjustable comfort: Extensive backrest mesh creates cooling air pocket, plus an adjustable chest strap prevents slippage and keeps the backpack secure. Charge-cable zipper: Dedicated short fastener enables quick access to a charging cable attached to your power bank of choice."
                      },
                      {
                          "title": "Warranty",
                          "info": "No warranty"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-rog-ranger-bp2500g-15-6-inch-black-laptop-gaming-backpack",
      "total__sell": 0,
      "ID": 661
  },
  {
      "product__id": "152.03.471.03",
      "brand": "Havit",
      "child": "USB HUB",
      "parent": "Converter",
      "parent__father": "Accessories",
      "infos": {
          "child": "USB HUB",
          "parent": "Converter",
          "parent__father": "Accessories",
          "brand": "Havit",
          "product__id": "152.03.471.03",
          "images": [
              "/images/assests/736_______152.03.471.03_______.png",
              "https://www.ryanscomputers.com/storage/products/small/havit-wf32-300mbps-wifi-usb-11571823703.webp"
          ],
          "quantity": 10,
          "current__price": 270,
          "previous__price": 300,
          "title": "Havit USB Male to Quad USB Female White Hub # H18",
          "details__url": "https://www.ryanscomputers.com/havit-usb-male-to-quad-usb-female-white-hub-h18",
          "visible__url": "havit-usb-male-to-quad-usb-female-white-hub-h18",
          "overviews": [
              "Havit H18",
              "Type - USB Hub",
              "Interface - USB",
              "Input Interface - USB Male",
              "Output Interface - USB Female",
              "USB Quantity - 4",
              "Hard Drive Supported - Yes",
              "Laptops Supported - Yes"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Havit, Model - Havit H18, Type - USB Hub, Interface - USB, Input Interface - USB Male, Output Interface - USB Female, USB Quantity - 4, Use For - Travel Charger, Hard Drive Supported - Yes, Laptops Supported - Yes, Input Power - AC 100-240V-50 to 60 Hz and 0.5A, Output Power - 5V 2.4A, Color - White, Dimension - 26 x 44 x 95mm, Weight (gm) - 58gm, Features - Four USB ports and quick charge, Compact and lightweight, Compatible with universal, Compatibility is more widely, Fivefold electric circuit protection, Input voltage protection, Input current protection, Output voltage protection, Output current protection, short-circuit protection, Part No - H18, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Havit"
                      },
                      {
                          "title": "Model",
                          "info": "Havit H18"
                      },
                      {
                          "title": "Type",
                          "info": "USB Hub"
                      },
                      {
                          "title": "Part No",
                          "info": "H18"
                      }
                  ]
              },
              {
                  "title": "Connectivity",
                  "infos": [
                      {
                          "title": "Connector Type (End 1)",
                          "info": "USB Male"
                      },
                      {
                          "title": "Connector Type (End 2)",
                          "info": "USB Female"
                      },
                      {
                          "title": "Interface(s)",
                          "info": "USB"
                      },
                      {
                          "title": "Input Interface",
                          "info": "USB Male"
                      },
                      {
                          "title": "Output Interface",
                          "info": "USB Female"
                      },
                      {
                          "title": "USB Quantity",
                          "info": "4"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Input Power",
                          "info": "AC 100-240V-50 to 60 Hz and 0.5A"
                      },
                      {
                          "title": "Output Power",
                          "info": "5V 2.4A"
                      }
                  ]
              },
              {
                  "title": "Compatibility",
                  "infos": [
                      {
                          "title": "Use For",
                          "info": "Travel Charger"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "White"
                      },
                      {
                          "title": "Dimension",
                          "info": "26 x 44 x 95mm"
                      },
                      {
                          "title": "Weight (gm)",
                          "info": "58gm"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Four USB ports and quick charge, Compact and lightweight, Compatible with universal, Compatibility is more widely, Fivefold electric circuit protection, Input voltage protection, Input current protection, Output voltage protection, Output current protection, short-circuit protection"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "havit-usb-male-to-quad-usb-female-white-hub-h18",
      "total__sell": 0,
      "ID": 256
  },
  {
      "product__id": "05.02.822.15",
      "brand": "Meetion",
      "child": "Mouse",
      "parent": "Desktop Component",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "Mouse",
          "parent": "Desktop Component",
          "parent__father": "Desktop PC and Server",
          "brand": "Meetion",
          "product__id": "05.02.822.15",
          "images": [
              "/images/assests/8844_______05.02.822.15_______.png",
              "/images/assests/8845_______05.02.822.15_______.png",
              "/images/assests/8846_______05.02.822.15_______.png",
              "/images/assests/16633_______05.02.822.15_______.png",
              "/images/assests/16634_______05.02.822.15_______.png",
              "/images/assests/16635_______05.02.822.15_______.png",
              "https://www.ryanscomputers.com/storage/products/small/meetion-mt-m930-wired-black-rgb-gaming-11638427280.webp"
          ],
          "quantity": 10,
          "current__price": 500,
          "previous__price": 540,
          "title": "Meetion MT-M930 Black Wired Gaming Mouse",
          "details__url": "https://www.ryanscomputers.com/meetion-mt-m930-black-wired-gaming-mouse",
          "visible__url": "meetion-mt-m930-black-wired-gaming-mouse",
          "overviews": [
              "Brand - Meetion",
              "Model - Meetion MT-M930",
              "Series - Gaming",
              "Type - Wired Gaming Mouse",
              "Connectivity - Wired",
              "Interface - USB"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Meetion, Model - Meetion MT-M930, Series - Gaming, Type - Wired Gaming Mouse, Connectivity - Wired, Interface - USB, Style & Size - Regular Big, Resolution - 800/1200/1600/2000, Number of Button - 5 + 1 (Scroll Wheel), Wheel - Yes, Lighting - LED, Cable Length - 1.5 Meter, Dimensions (WxHxD) - 127 x 72 x 39mm, Weight - 118g, OS Support - Windows XP/Vista/7/8/10, Color - Black, Features - Two additional navigation buttons (Forward and Backward), Resolution DPI Switch, Precision Optical Sensor, Others - Error-free Running Time, Strokes: more than 3,000,000, Specialty - Variable Highlight, Ergonomic symmetric design for Right/Left hand, Soft Touch,, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Meetion"
                      },
                      {
                          "title": "Model",
                          "info": "Meetion MT-M930"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming"
                      },
                      {
                          "title": "Type",
                          "info": "Wired Gaming Mouse"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wired"
                      },
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Resolution",
                          "info": "800/1200/1600/2000"
                      },
                      {
                          "title": "Number of Button",
                          "info": "5 + 1 (Scroll Wheel)"
                      },
                      {
                          "title": "Wheel",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting",
                          "info": "LED"
                      },
                      {
                          "title": "OS Compatibility",
                          "info": "Windows XP/Vista/7/8/10"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.5 Meter"
                      },
                      {
                          "title": "Dimensions (WxHxD)",
                          "info": "127 x 72 x 39mm"
                      },
                      {
                          "title": "Weight (gm)",
                          "info": "118g"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Two additional navigation buttons (Forward and Backward), Resolution DPI Switch, Precision Optical Sensor"
                      },
                      {
                          "title": "Others",
                          "info": "Error-free Running Time, Strokes: more than 3,000,000"
                      },
                      {
                          "title": "Specialty",
                          "info": "Variable Highlight, Ergonomic symmetric design for Right/Left hand, Soft Touch,"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "meetion-mt-m930-black-wired-gaming-mouse",
      "total__sell": 0,
      "ID": 6458
  },
  {
      "product__id": "05.02.785.85",
      "brand": "Fantech",
      "child": "Mouse",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Mouse",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Fantech",
          "product__id": "05.02.785.85",
          "images": [
              "/images/assests/8900_______05.02.785.85_______.png",
              "/images/assests/8901_______05.02.785.85_______.png",
              "/images/assests/8902_______05.02.785.85_______.png",
              "/images/assests/16829_______05.02.785.85_______.png",
              "/images/assests/16830_______05.02.785.85_______.png",
              "/images/assests/16831_______05.02.785.85_______.png",
              "https://www.ryanscomputers.com/storage/products/small/fantech-cruiser-wg11-space-edition-wireless-white-11637825248.webp"
          ],
          "quantity": 10,
          "current__price": 950,
          "previous__price": 980,
          "title": "Fantech Cruiser WG11 Space Edition Wireless White Gaming Mouse",
          "details__url": "https://www.ryanscomputers.com/fantech-cruiser-wg11-space-edition-wireless-white-gaming-mouse",
          "visible__url": "fantech-cruiser-wg11-space-edition-wireless-white-gaming-mouse",
          "overviews": [
              "Brand - Fantech",
              "Model - Fantech Cruiser WG11 Space Edition",
              "Series - Gaming",
              "Type - Optical Mouse",
              "Connectivity - Wireless",
              "Interface - USB",
              "Style & Size - Ergonomic",
              "Click Sound - Yes",
              "Mode - Single",
              "Max DPI - 2400 DPI"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Fantech, Model - Fantech Cruiser WG11 Space Edition, Series - Gaming, Type - Optical Mouse, Connectivity - Wireless, Interface - USB, Style & Size - Ergonomic, Click Sound - Yes, Mode - Single, Max DPI - 2400 DPI, Resolution - 800 - 2400 DPI, Number of Button - 6, Wheel - Yes, Tracking Type - Optical, Working/Bluetooth Range - 10 Meter, Dimensions (WxHxD) - 117.5 x 75.5 x 38.5mm, Weight - 63.5 gm, OS Support - Windows and Mac OS X. USB Port Required, Color - White, Features - Huano 3.000.000 Clicks Lifetime, PIXART GAMING SENSOR, STABLE WIRELESS CONNECTION, LIGHTWEIGHT DESIGN, Less Noise More Focus, Smooth Teflon Skates, Super Power Saver Sensor, Others - Sensor: PixArt PAW3212, IPS: 30, Acceleration: 10G, Polling Rate: 250Hz, Back Cover Material: UV Matte Finish, Core Construction: ABS Plastic, Shape: Ambidextrous, Switch Type & Lifetime: Huano 3 million clicks, Warranty - 1 Year, Country of Origin - Philippines, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Fantech"
                      },
                      {
                          "title": "Model",
                          "info": "Fantech Cruiser WG11 Space Edition"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming"
                      },
                      {
                          "title": "Type",
                          "info": "Optical Mouse"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Ergonomic"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wireless"
                      },
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Click Sound",
                          "info": "Yes"
                      },
                      {
                          "title": "Modes",
                          "info": "Single"
                      },
                      {
                          "title": "Max DPI",
                          "info": "2400 DPI"
                      },
                      {
                          "title": "Resolution",
                          "info": "800 - 2400 DPI"
                      },
                      {
                          "title": "Number of Button",
                          "info": "6"
                      },
                      {
                          "title": "Wheel",
                          "info": "Yes"
                      },
                      {
                          "title": "Tracking Type",
                          "info": "Optical"
                      },
                      {
                          "title": "Working/Bluetooth Range",
                          "info": "10 Meter"
                      },
                      {
                          "title": "OS Compatibility",
                          "info": "Windows and Mac OS X. USB Port Required"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions (WxHxD)",
                          "info": "117.5 x 75.5 x 38.5mm"
                      },
                      {
                          "title": "Weight (gm)",
                          "info": "63.5 gm"
                      },
                      {
                          "title": "Color",
                          "info": "White"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Huano 3.000.000 Clicks Lifetime, PIXART GAMING SENSOR, STABLE WIRELESS CONNECTION, LIGHTWEIGHT DESIGN, Less Noise More Focus, Smooth Teflon Skates, Super Power Saver Sensor"
                      },
                      {
                          "title": "Others",
                          "info": "Sensor: PixArt PAW3212, IPS: 30, Acceleration: 10G, Polling Rate: 250Hz, Back Cover Material: UV Matte Finish, Core Construction: ABS Plastic, Shape: Ambidextrous, Switch Type &amp; Lifetime: Huano 3 million clicks"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Philippine"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "fantech-cruiser-wg11-space-edition-wireless-white-gaming-mouse",
      "total__sell": 0,
      "ID": 3262
  },
  {
      "product__id": "05.03.471.79",
      "brand": "Havit",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Havit",
          "product__id": "05.03.471.79",
          "images": [
              "/images/assests/8397_______05.03.471.79_______.png",
              "/images/assests/8398_______05.03.471.79_______.png",
              "/images/assests/8399_______05.03.471.79_______.png",
              "/images/assests/8400_______05.03.471.79_______.png",
              "/images/assests/8401_______05.03.471.79_______.png",
              "/images/assests/15984_______05.03.471.79_______.png",
              "/images/assests/15985_______05.03.471.79_______.png",
              "/images/assests/15986_______05.03.471.79_______.png",
              "/images/assests/15987_______05.03.471.79_______.png",
              "/images/assests/15988_______05.03.471.79_______.png",
              "https://www.ryanscomputers.com/storage/products/small/havit-kb852cm-wired-backlit-black-gaming-keyboard-41616232497.webp"
          ],
          "quantity": 10,
          "current__price": 1400,
          "previous__price": 1410,
          "title": "Havit KB852CM Wired Backlit Black Gaming Keyboard & Mouse Combo",
          "details__url": "https://www.ryanscomputers.com/havit-kb852cm-wired-backlit-black-gaming-keyboard--mouse-combo",
          "visible__url": "havit-kb852cm-wired-backlit-black-gaming-keyboard--mouse-combo",
          "overviews": [
              "Havit KB852CM",
              "Type - Gaming Keyboard & Mouse Combo",
              "Interface - USB",
              "Number of Button - 104 Key"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Havit, Model - Havit KB852CM, Style & Size - Regular Big, Type - Gaming Keyboard & Mouse Combo, Interface - USB, Language - English & Bangla, Lighting - No, Mechanical (Key) - No, Mouse, Touchpad - Keyboard & Mouse, Number of Button - 104 Key, Wheel - Yes, Color - Black, Part No - KB852CM, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Havit"
                      },
                      {
                          "title": "Model",
                          "info": "Havit KB852CM"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Keyboard &amp; Mouse Combo"
                      },
                      {
                          "title": "Part No",
                          "info": "KB852CM"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "No"
                      },
                      {
                          "title": "Mechanical (Key)",
                          "info": "No"
                      },
                      {
                          "title": "Mouse, Touchpad",
                          "info": "Keyboard &amp; Mouse"
                      },
                      {
                          "title": "Number of Button",
                          "info": "104 Key"
                      },
                      {
                          "title": "Wheel",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "havit-kb852cm-wired-backlit-black-gaming-keyboard--mouse-combo",
      "total__sell": 0,
      "ID": 3079
  },
  {
      "product__id": "05.02.033.43",
      "brand": "MSI",
      "child": "Mouse",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Mouse",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "MSI",
          "product__id": "05.02.033.43",
          "images": [
              "/images/assests/8965_______05.02.033.43_______.png",
              "/images/assests/8966_______05.02.033.43_______.png",
              "/images/assests/8967_______05.02.033.43_______.png",
              "/images/assests/16965_______05.02.033.43_______.png",
              "/images/assests/16966_______05.02.033.43_______.png",
              "/images/assests/16967_______05.02.033.43_______.png",
              "https://www.ryanscomputers.com/storage/products/small/msi-interceptor-ds-b1-black-gaming-11631093324.webp"
          ],
          "quantity": 10,
          "current__price": 1400,
          "previous__price": 1410,
          "title": "MSI INTERCEPTOR DS B1 Black Gaming Mouse",
          "details__url": "https://www.ryanscomputers.com/msi-interceptor-ds-b1-black-gaming-mouse",
          "visible__url": "msi-interceptor-ds-b1-black-gaming-mouse",
          "overviews": [
              "Brand - MSI",
              "Model - MSI INTERCEPTOR DS B1",
              "Series - Gaming",
              "Type - Gaming Mouse",
              "Connectivity - Wired"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - MSI, Model - MSI INTERCEPTOR DS B1, Series - Gaming, Type - Gaming Mouse, Connectivity - Wired, Interface - USB, Style & Size - Ergonomic, 2X Click - No, Click Sound - Yes, Mode - Single, Max DPI - 1600 DPI, Number of Button - 4, Wheel - Yes, Lighting - LED, Tracking Type - Optical, Cable Length - 1.8 Meter, Weight - 100gm, OS Support - Windows 10, 8.1, 8, 7, Color - Black, Features - Gaming Grade Optical Sensor, DPI On-the-fly Button, Anti-Slip Surface, Others - MAIN KEY SWITCHES: 10 Million Clicks, SENSOR: PAW-3509 Sensor, POLLING RATE: 125Hz,, Warranty - 1 Year"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "MSI"
                      },
                      {
                          "title": "Model",
                          "info": "MSI INTERCEPTOR DS B1"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Mouse"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Ergonomic"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wired"
                      },
                      {
                          "title": "2X Click",
                          "info": "No"
                      },
                      {
                          "title": "Click Sound",
                          "info": "Yes"
                      },
                      {
                          "title": "Modes",
                          "info": "Single"
                      },
                      {
                          "title": "Max DPI",
                          "info": "1600 DPI"
                      },
                      {
                          "title": "Number of Button",
                          "info": "4"
                      },
                      {
                          "title": "Wheel",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting",
                          "info": "LED"
                      },
                      {
                          "title": "Tracking Type",
                          "info": "Optical"
                      },
                      {
                          "title": "OS Compatibility",
                          "info": "Windows 10, 8.1, 8, 7"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.8 Meter"
                      },
                      {
                          "title": "Weight (gm)",
                          "info": "100gm"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Gaming Grade Optical Sensor, DPI On-the-fly Button, Anti-Slip Surface"
                      },
                      {
                          "title": "Others",
                          "info": "MAIN KEY SWITCHES: 10 Million Clicks, SENSOR: PAW-3509 Sensor, POLLING RATE: 125Hz,"
                      }
                  ]
              }
          ]
      },
      "visible__url": "msi-interceptor-ds-b1-black-gaming-mouse",
      "total__sell": 0,
      "ID": 3285
  },
  {
      "product__id": "05.01.785.29",
      "brand": "Fantech",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Fantech",
          "product__id": "05.01.785.29",
          "images": [
              "/images/assests/8412_______05.01.785.29_______.png",
              "/images/assests/8413_______05.01.785.29_______.png",
              "/images/assests/8414_______05.01.785.29_______.png",
              "/images/assests/16019_______05.01.785.29_______.png",
              "/images/assests/16020_______05.01.785.29_______.png",
              "/images/assests/16021_______05.01.785.29_______.png",
              "https://www.ryanscomputers.com/storage/products/small/fantech-k613l-black-usb-wired-gaming-11594471083.webp"
          ],
          "quantity": 10,
          "current__price": 1650,
          "previous__price": 1740,
          "title": "Fantech Fighter II K613L Black USB Wired Gaming Keyboard",
          "details__url": "https://www.ryanscomputers.com/fantech-fighter-ii-k613l-black-usb-wired-gaming-keyboard",
          "visible__url": "fantech-fighter-ii-k613l-black-usb-wired-gaming-keyboard",
          "overviews": [
              "Brand - Fantech",
              "Model - Fantech Fighter II K613L",
              "Type - USB Wired Gaming Keyboard",
              "Interface - USB",
              "Lighting Type - RGB",
              "Cable Length - 1.55 Meter"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h1",
                  "text": "FANTECH FIGHTER K613L"
              },
              {
                  "tag": "p",
                  "text": "                                            "
              },
              {
                  "tag": "p",
                  "text": "K613L TECHNICAL SPECIFICATION\nPRODUCT NAME : Backlit Floating-keys Multimedia Gaming Keyboard\nNUMBER OF KEYS : 104 keys\nWORKING VOLTAGE: DC 4.2-5.5V\nSWITCH : Floating Switch 45g Trigger Pressure\nPOLLING RATE : 1000Hz Ultrapolling Rate\nKEYSTROKE : 8 Million Keystroke Lifetime\nGHOSTING : 25 Keys Anti-ghosting\nCABLE : Nylon Copper Cable\ncolour:black\nMaterial:ABS"
              },
              {
                  "tag": "p",
                  "text": " "
              },
              {
                  "tag": "p",
                  "text": " "
              },
              {
                  "tag": "p",
                  "text": "Brand - Fantech, Model - Fantech Fighter II K613L, Series - Gaming, Style &amp; Size - Regular Big, Type - USB Wired Gaming Keyboard, Interface - USB, Language (English) - Yes, Language - English, Language (Bangla) - No, Lighting - Yes, Lighting Type - RGB, Mouse, Touchpad - Keyboard only, Dimensions (WxHxD) - 433 x 130 x 40mm, Weight - 1.40Kg, Cable Length - 1.55 Meter, OS Support - Windows 7, 8, 10, XP, MAC OS, Color - Black, Specialty - Gaming Keyboard (With Num Pad), Alluminium Alloy cover for more durability, Designed with white lighting to enhance gaming experience, Superior Anti-Ghosting which support up to 25 keys presses simultaneous, Others - Number of Keys: 104 keys, WORKING VOLTAGE: DC 4.2-5.5V, SWITCH: Floating Switch 45g Trigger Pressure, POLLING RATE: 1000Hz Ultrapolling Rate, KEYSTROKE: 8 Million Keystroke Lifetime, GHOSTING: 25 Keys Anti-ghosting, CABLE: Nylon Copper Cable, Material: ABS, CABLE LENGTH: 155cm, Function: F1 Media Player, F2 Volume -, F3 Volume+, F4 Mute, F5 Stop, F6 Back Track, F7 Play/Pause, F8 Next, F9 Email, F10 Default Browser, F11 Lock Mode, F12 Calculator, W Revert between Arrow keys - W A S D keys, RGB Modes, SCR RGB Modes and ON/OFF, PU Brightness +, PD Brightness -, Feature - Floating Switch design, 45g Trigger Pressure, 8 Million Keystroke Lifetime, 25 Keys Anti-Ghosting, 1000Hz Ultra polling Rate, Nylon Braided Cable, Part No - K613L, Warranty - 1 year, Country of Origin - Philippine, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Fantech"
                      },
                      {
                          "title": "Model",
                          "info": "Fantech Fighter II K613L"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "USB Wired Gaming Keyboard"
                      },
                      {
                          "title": "Part No",
                          "info": "K613L"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      },
                      {
                          "title": "Language (Bangla)",
                          "info": "No"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "RGB"
                      },
                      {
                          "title": "Mechanical (Key)",
                          "info": "No"
                      },
                      {
                          "title": "Mouse, Touchpad",
                          "info": "Keyboard only"
                      },
                      {
                          "title": "OS Support",
                          "info": "Windows XP, 7, 8, 10, MAC OS"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions",
                          "info": "433 x 130 x 40mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "1.40Kg"
                      },
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.55 Meter"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "Gaming Keyboard (With Num Pad), Alluminium Alloy cover for more durability, Designed with white lighting to enhance gaming experience, Superior Anti-Ghosting which support up to 25 keys presses simultaneous"
                      },
                      {
                          "title": "Others",
                          "info": "Number of Keys: 104 keys, WORKING VOLTAGE: DC 4.2-5.5V, SWITCH: Floating Switch 45g Trigger Pressure, POLLING RATE: 1000Hz Ultrapolling Rate, KEYSTROKE: 8 Million Keystroke Lifetime, GHOSTING: 25 Keys Anti-ghosting, CABLE: Nylon Copper Cable, Material: ABS, CABLE LENGTH: 155cm, Function: F1 Media Player, F2 Volume -, F3 Volume+, F4 Mute, F5 Stop, F6 Back Track, F7 Play/Pause, F8 Next, F9 Email, F10 Default Browser, F11 Lock Mode, F12 Calculator, W Revert between Arrow keys - W A S D keys, RGB Modes, SCR RGB Modes and ON/OFF, PU Brightness +, PD Brightness -"
                      },
                      {
                          "title": "Feature",
                          "info": "Floating Switch design, 45g Trigger Pressure, 8 Million Keystroke Lifetime, 25 Keys Anti-Ghosting, 1000Hz Ultra polling Rate, Nylon Braided Cable"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Philippine"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "fantech-fighter-ii-k613l-black-usb-wired-gaming-keyboard",
      "total__sell": 0,
      "ID": 3084
  },
  {
      "product__id": "05.03.785.95",
      "brand": "Fantech",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Fantech",
          "product__id": "05.03.785.95",
          "images": [
              "/images/assests/8453_______05.03.785.95_______.png",
              "/images/assests/8454_______05.03.785.95_______.png",
              "/images/assests/16093_______05.03.785.95_______.png",
              "/images/assests/16094_______05.03.785.95_______.png",
              "/images/assests/17447_______05.03.785.95_______.png",
              "/images/assests/17448_______05.03.785.95_______.png",
              "https://www.ryanscomputers.com/storage/products/small/fantech-p31-usb-wired-black-gaming-keyboard-21638172400.webp"
          ],
          "quantity": 10,
          "current__price": 2350,
          "previous__price": 2500,
          "title": "Fantech P31 USB Wired Black Gaming Keyboard, Mouse & Mouse Pad Combo",
          "details__url": "https://www.ryanscomputers.com/fantech-p31-usb-wired-black-gaming-keyboard,-mouse-mouse-pad-combo",
          "visible__url": "fantech-p31-usb-wired-black-gaming-keyboard,-mouse-mouse-pad-combo",
          "overviews": [
              "Brand - Fantech",
              "Model - Fantech P31",
              "Type - Gaming Keyboard, Mouse & Mouse Pad Combo",
              "Interface - USB",
              "Number of Button - Keyboard Button: 104. Mouse Button: 5",
              "Max DPI - 200-8000",
              "Color - Black"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Fantech, Model - Fantech P31, Series - Gaming, Style & Size - Regular Big, Type - Gaming Keyboard, Mouse & Mouse Pad Combo, Interface - USB, Language (English) - Yes, Language - English, Mouse, Touchpad - Keyboard, Mouse & Mouse Pad, Number of Button - Keyboard Button: 104. Mouse Button: 5, Max DPI - 200-8000, Dimensions (WxHxD) - 66 x 155 x 42 mm (Keyboard), 128 x 68 x 41 mm (Mouse)., Color - Black, Feature - Keyboard:  Type: Backlit floating-keys multimedia gaming keyboard, Number of Keys: 104, 10million keystroke lifetimes, 26 keys anti-ghosting, 100Hz ultra polling rate. Mouse: 6D Macro Function Performance, On-the-fly adjustable DPI (200-8000), Speed/Acceleration: 60ips/20g, Polling rate: 125Hz, Huano 5million clicks lifetime, 1.8m nylon braided cable, Silicon rubber roller, RGB 4 colour lighting., Warranty - 1 Year, Country of Origin - Philippines, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Fantech"
                      },
                      {
                          "title": "Model",
                          "info": "Fantech P31"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Keyboard, Mouse &amp; Mouse Pad Combo"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Mouse, Touchpad",
                          "info": "Keyboard, Mouse &amp; Mouse Pad"
                      },
                      {
                          "title": "Number of Button",
                          "info": "Keyboard Button: 104. Mouse Button: 5"
                      },
                      {
                          "title": "Max DPI",
                          "info": "200-8000"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions",
                          "info": "66 x 155 x 42 mm (Keyboard), 128 x 68 x 41 mm (Mouse)."
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Keyboard: Type: Backlit floating-keys multimedia gaming keyboard, Number of Keys: 104, 10million keystroke lifetimes, 26 keys anti-ghosting, 100Hz ultra polling rate. Mouse: 6D Macro Function Performance, On-the-fly adjustable DPI (200-8000), Speed/Acceleration: 60ips/20g, Polling rate: 125Hz, Huano 5million clicks lifetime, 1.8m nylon braided cable, Silicon rubber roller, RGB 4 colour lighting."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Philippine"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "fantech-p31-usb-wired-black-gaming-keyboard,-mouse-mouse-pad-combo",
      "total__sell": 0,
      "ID": 3101
  },
  {
      "product__id": "05.02.822.17",
      "brand": "Meetion",
      "child": "Mouse",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Mouse",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Meetion",
          "product__id": "05.02.822.17",
          "images": [
              "/images/assests/9063_______05.02.822.17_______.png",
              "/images/assests/9064_______05.02.822.17_______.png",
              "/images/assests/17084_______05.02.822.17_______.png",
              "/images/assests/17085_______05.02.822.17_______.png",
              "https://www.ryanscomputers.com/storage/products/small/meetion-mt-m985-usb-red-wired-mechanical-gaming-11639564369.webp"
          ],
          "quantity": 10,
          "current__price": 2400,
          "previous__price": 2550,
          "title": "Meetion MT-M985 USB Red Wired Mechanical Gaming Mouse",
          "details__url": "https://www.ryanscomputers.com/meetion-mt-m985-usb-red-wired-mechanical-gaming-mouse",
          "visible__url": "meetion-mt-m985-usb-red-wired-mechanical-gaming-mouse",
          "overviews": [
              "Brand - Meetion",
              "Model - Meetion MT-M985",
              "Series - Gaming",
              "Type - Mechanical Gaming Mouse",
              "Connectivity - Wired",
              "Interface - USB",
              "Max DPI - 4000 DPI",
              "Resolution - 800/1600/3200/4000"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Meetion, Model - Meetion MT-M985, Series - Gaming, Type - Mechanical Gaming Mouse, Connectivity - Wired, Interface - USB, Max DPI - 4000 DPI, Resolution - 800/1600/3200/4000, Number of Button - 10 Buttons (Programmable), Wheel - Yes, Lighting - LED, Tracking Type - Optical, Cable Length - 1.8 Meter, Dimensions (WxHxD) - 126 x 68 x 39mm, Color - Red, Features - High resolution, gaming sensitive response. 5 million times long service life of microswitch. High polymer wear-resisting foot pads, 10 times stronger than normal ones. The natural are design accords with the shape of palms. High/Full-speed USB interface 480MBPS of the transmission rate for each second. Games, multimedia control mode switch. Four DPI Transmission., Others - Maximum Frame Rate: 6666 fps, Maximum Acceleration: 20 g, Maximal Tracking Speed: 60 ips, Current Consumption: 100mA (Max.), Specialty - Aluminum Alloy Base, Advanced Optics Localization Pattern., Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Meetion"
                      },
                      {
                          "title": "Model",
                          "info": "Meetion MT-M985"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming"
                      },
                      {
                          "title": "Type",
                          "info": "Mechanical Gaming Mouse"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wired"
                      },
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Max DPI",
                          "info": "4000 DPI"
                      },
                      {
                          "title": "Resolution",
                          "info": "800/1600/3200/4000"
                      },
                      {
                          "title": "Number of Button",
                          "info": "10 Buttons (Programmable)"
                      },
                      {
                          "title": "Wheel",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting",
                          "info": "LED"
                      },
                      {
                          "title": "Tracking Type",
                          "info": "Optical"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.8 Meter"
                      },
                      {
                          "title": "Dimensions (WxHxD)",
                          "info": "126 x 68 x 39mm"
                      },
                      {
                          "title": "Color",
                          "info": "Red"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "High resolution, gaming sensitive response. 5 million times long service life of microswitch. High polymer wear-resisting foot pads, 10 times stronger than normal ones. The natural are design accords with the shape of palms. High/Full-speed USB interface 480MBPS of the transmission rate for each second. Games, multimedia control mode switch. Four DPI Transmission"
                      },
                      {
                          "title": "Others",
                          "info": "Maximum Frame Rate: 6666 fps, Maximum Acceleration: 20 g, Maximal Tracking Speed: 60 ips, Current Consumption: 100mA (Max.)"
                      },
                      {
                          "title": "Specialty",
                          "info": "Aluminum Alloy Base, Advanced Optics Localization Pattern"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "meetion-mt-m985-usb-red-wired-mechanical-gaming-mouse",
      "total__sell": 0,
      "ID": 3323
  },
  {
      "product__id": "139.01.471.15",
      "brand": "Havit",
      "child": "Havit",
      "parent": "Smartwatch",
      "parent__father": "Daily Life",
      "infos": {
          "child": "Havit",
          "parent": "Smartwatch",
          "parent__father": "Daily Life",
          "brand": "Havit",
          "product__id": "139.01.471.15",
          "images": [
              "/images/assests/1613_______139.01.471.15_______.png",
              "/images/assests/1614_______139.01.471.15_______.png",
              "/images/assests/1615_______139.01.471.15_______.png",
              "/images/assests/1616_______139.01.471.15_______.png",
              "/images/assests/1617_______139.01.471.15_______.png",
              "https://www.ryanscomputers.com/storage/products/small/havit-m9013-full-touch-waterproof-black-smart-11641716503.webp"
          ],
          "quantity": 10,
          "current__price": 2500,
          "previous__price": 2600,
          "title": "Havit M9013 Full-Touch Waterproof Black Smart Watch",
          "details__url": "https://www.ryanscomputers.com/havit-m9013-full-touch-waterproof-black-smart-watch",
          "visible__url": "havit-m9013-full-touch-waterproof-black-smart-watch",
          "overviews": [
              "Brand - Havit",
              "Model - Havit M9013",
              "Chip - GR5515",
              "Display Size - 1.67 Inch",
              "Sport Modes - Yes",
              "Waterproof - Yes"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Havit, Model - Havit M9013, Chip - GR5515, Display Size - 1.67 Inch, Display Type - TFT HD Full Touch Screen, Display Resolution - 240 x 280, Sport Modes - Yes, Waterproof - Yes, Waterproof Rating/Level - IP67, Heart Rate - Yes, Battery - 190mAh, Body Materials - Steel (Case), Zinc+Silicone (Body), OS & Version - Android, IOS, Features - HD Full Screen, Button with decoder function, Cloud Dial,Custom Dial, 24H heart rate detection, IP67 Waterproof Rating, 8 Sports Modes, Weather Forecast, Sleep Detection, Multi-Functional Button, Information Reminders, 24 Hours Heart Rate Detection, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Havit"
                      },
                      {
                          "title": "Model",
                          "info": "Havit M9013"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Chip",
                          "info": "GR5515"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Screen/Display Size.",
                          "info": "1.67 Inch"
                      },
                      {
                          "title": "Display Type.",
                          "info": "TFT HD Full Touch Screen"
                      },
                      {
                          "title": "Display Resolution (Pixels)",
                          "info": "240 x 280"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Operating System",
                          "info": "Android, IOS"
                      }
                  ]
              },
              {
                  "title": "Main Features",
                  "infos": [
                      {
                          "title": "Sport Modes",
                          "info": "Yes"
                      },
                      {
                          "title": "Waterproof",
                          "info": "Yes"
                      },
                      {
                          "title": "Waterproof Level/Grade",
                          "info": "IP67"
                      },
                      {
                          "title": "Heart Rate",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Battery.",
                          "info": "190mAh"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Body Material",
                          "info": "Steel (Case), Zinc + Silicone (Body)"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "HD Full Screen, Button with decoder function, Cloud Dial,Custom Dial, 24H heart rate detection, IP67 Waterproof Rating, 8 Sports Modes, Weather Forecast, Sleep Detection, Multi-Functional Button, Information Reminders, 24 Hours Heart Rate Detection"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "havit-m9013-full-touch-waterproof-black-smart-watch",
      "total__sell": 0,
      "ID": 831
  },
  {
      "product__id": "139.01.471.16",
      "brand": "Havit",
      "child": "Havit",
      "parent": "Smartwatch",
      "parent__father": "Daily Life",
      "infos": {
          "child": "Havit",
          "parent": "Smartwatch",
          "parent__father": "Daily Life",
          "brand": "Havit",
          "product__id": "139.01.471.16",
          "images": [
              "/images/assests/1632_______139.01.471.16_______.png",
              "/images/assests/1633_______139.01.471.16_______.png",
              "https://www.ryanscomputers.com/storage/products/small/havit-m9016-waterproof-black-smart-11641716801.webp"
          ],
          "quantity": 10,
          "current__price": 2900,
          "previous__price": 3040,
          "title": "Havit M9016 Waterproof Black Smart Watch",
          "details__url": "https://www.ryanscomputers.com/havit-m9016-waterproof-black-smart-watch",
          "visible__url": "havit-m9016-waterproof-black-smart-watch",
          "overviews": [
              "Brand - Havit",
              "Model - Havit M9016",
              "Chip - MTK2502D",
              "Display Size - 1.54 Inch",
              "Waterproof - Yes",
              "Waterproof Rating/Level - IP67"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Havit, Model - Havit M9016, Chip - MTK2502D, Display Size - 1.54 Inch, Display Resolution - 240 x 240, Waterproof - Yes, Waterproof Rating/Level - IP67, Bluetooth - Yes, Battery - 240mAh, Body Materials - Alloy + Silicone, Color - Black, Features - Bluetooth call, call log, phone book, 1.54 Big Screen, Voice Assistant. Bluetooth Call Smart Watch. 24 Hour Life Assistant. 10 Sport Modes. IP67 Waterproof Rating. Weather Forecast. Sleep Monitoring., Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Havit"
                      },
                      {
                          "title": "Model",
                          "info": "Havit M9016"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Chip",
                          "info": "MTK2502D"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Screen/Display Size.",
                          "info": "1.54 Inch"
                      },
                      {
                          "title": "Display Resolution (Pixels)",
                          "info": "240 x 240"
                      }
                  ]
              },
              {
                  "title": "Main Features",
                  "infos": [
                      {
                          "title": "Waterproof",
                          "info": "Yes"
                      },
                      {
                          "title": "Waterproof Level/Grade",
                          "info": "IP67"
                      }
                  ]
              },
              {
                  "title": "Network & Connectivity",
                  "infos": [
                      {
                          "title": "Bluetooth",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Battery.",
                          "info": "240mAh"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Body Material",
                          "info": "Aluminum Alloy, Silicone Rubber"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Bluetooth call, call log, phone book, 1.54 Big Screen, Voice Assistant. Bluetooth Call Smart Watch. 24 Hour Life Assistant. 10 Sport Modes. IP67 Waterproof Rating. Weather Forecast. Sleep Monitoring"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "havit-m9016-waterproof-black-smart-watch",
      "total__sell": 0,
      "ID": 832
  },
  {
      "product__id": "05.01.822.27",
      "brand": "Meetion",
      "child": "Keyboard",
      "parent": "Desktop Component",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "Keyboard",
          "parent": "Desktop Component",
          "parent__father": "Desktop PC and Server",
          "brand": "Meetion",
          "product__id": "05.01.822.27",
          "images": [
              "/images/assests/8489_______05.01.822.27_______.png",
              "/images/assests/8490_______05.01.822.27_______.png",
              "/images/assests/8491_______05.01.822.27_______.png",
              "/images/assests/8492_______05.01.822.27_______.png",
              "/images/assests/16150_______05.01.822.27_______.png",
              "/images/assests/16151_______05.01.822.27_______.png",
              "/images/assests/16152_______05.01.822.27_______.png",
              "/images/assests/16153_______05.01.822.27_______.png",
              "https://www.ryanscomputers.com/storage/products/small/meetion-mt-mk04-usb-black-tkl-rgb-backlit-11638423183.webp"
          ],
          "quantity": 10,
          "current__price": 3000,
          "previous__price": 3200,
          "title": "Meetion MT-MK04 USB Black TKL RGB Backlit Multimedia Blue Switch Mechanical Gaming Keyboard",
          "details__url": "https://www.ryanscomputers.com/meetion-mt-mk04-usb-black-tkl-rgb-backlit-multimedia-blue-switch-mechanical-gaming-keyboard",
          "visible__url": "meetion-mt-mk04-usb-black-tkl-rgb-backlit-multimedia-blue-switch-mechanical-gaming-keyboard",
          "overviews": [
              "Brand - Meetion",
              "Model - Meetion MT-MK04",
              "Type - Mechanical Gaming keyboard",
              "Interface - USB",
              "Lighting Type - RGB"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Meetion, Model - Meetion MT-MK04, Series - Gaming, Style & Size - Regular Big, Type - Mechanical Gaming keyboard, Interface - USB, Language (English) - Yes, Language - English, Lighting - Yes, Lighting Type - RGB, Mechanical (Key) - Yes, Dimensions (WxHxD) - 356 x 135 x 39mm, Weight - 880 gm, Cable Length - 1.8 Meter, OS Support - XP/Vista/7/8/10  MAC OS X, Color - Black, Specialty - Lucency injection keycap wear -proof and high light transmittance,, Others - Error-free Running Time: More than 50 million times, USB Type:  Gold-Plating, Anti-Ghosting: Full keys, Qty of Shortcut Buttons: 12, Feature - High-quality macro mechanical blue switch, RGB chroma backlit customizable, Quick multimedia function FN + combination, 64-grade e-sports game chips, Full page fully automatic SMT solution, Full key Anti-ghosting,, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Meetion"
                      },
                      {
                          "title": "Model",
                          "info": "Meetion MT-MK04"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Mechanical Gaming keyboard"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "RGB"
                      },
                      {
                          "title": "Mechanical (Key)",
                          "info": "Yes"
                      },
                      {
                          "title": "OS Support",
                          "info": "XP/Vista/7/8/10 MAC OS X"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions",
                          "info": "356 x 135 x 39mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "880 gm"
                      },
                      {
                          "title": "Cable Length (Meter)",
                          "info": "1.8 Meter"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "Lucency injection keycap wear -proof and high light transmittance"
                      },
                      {
                          "title": "Others",
                          "info": "Error-free Running Time: More than 50 million times, USB Type: Gold-Plating, Anti-Ghosting: Full keys, Qty of Shortcut Buttons: 12"
                      },
                      {
                          "title": "Feature",
                          "info": "High-quality macro mechanical blue switch, RGB chroma backlit customizable, Quick multimedia function FN + combination, 64-grade e-sports game chips, Full page fully automatic SMT solution, Full key Anti-ghosting,"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "meetion-mt-mk04-usb-black-tkl-rgb-backlit-multimedia-blue-switch-mechanical-gaming-keyboard",
      "total__sell": 0,
      "ID": 6261
  },
  {
      "product__id": "05.01.680.75",
      "brand": "Rapoo",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Rapoo",
          "product__id": "05.01.680.75",
          "images": [
              "/images/assests/8532_______05.01.680.75_______.png",
              "/images/assests/8533_______05.01.680.75_______.png",
              "/images/assests/16192_______05.01.680.75_______.png",
              "/images/assests/16193_______05.01.680.75_______.png",
              "https://www.ryanscomputers.com/storage/products/small/rapoo-vpro-v500pro-backlit-wired-purpel-11643719841.webp"
          ],
          "quantity": 10,
          "current__price": 3550,
          "previous__price": 3800,
          "title": "Rapoo VPRO V500PRO Backlit Wired Purple Mechanical Gaming Keyboard",
          "details__url": "https://www.ryanscomputers.com/rapoo-vpro-v500pro-backlit-wired-purple-mechanical-gaming-keyboard",
          "visible__url": "rapoo-vpro-v500pro-backlit-wired-purple-mechanical-gaming-keyboard",
          "overviews": [
              "Brand - Rapoo",
              "Model - Rapoo VPRO V500 PRO",
              "Type - Mechanical Gaming Keyboard",
              "Interface - USB"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Rapoo, Model - Rapoo VPRO V500 PRO, Series - Gaming, Style & Size - Regular Big, Type - Mechanical Gaming Keyboard, Interface - USB, Language (English) - Yes, Language - English, Lighting - Yes, Lighting Type - Multi Color LED, Mechanical (Key) - Yes, Number of Button - 104 (Mechanical), Dimensions (WxHxD) - 434 x 37 x 131mm, Weight - 805 gm, OS Support - Windows XP /Vista/ 7/ 8/ 10, macOS, Color - Purple, Others - USB Type: 3.0, Nano USB Receiver: Plug & Play. Spill-resistant Design: Yes. Multi-color adjustable backlight system: Yes. Key travel distance: 4mm. Keyboard Aluminum Alloy Surface: Yes. Standard Keyboard Layout: QWERTY. Local Layout Options: Yes., Feature - Mechanical keys. Key life of up to 60 million operations. Anti-ghosting (all keys are conflict-free). Spill-resistant design. Individually backlit keys. Aluminum alloy surface cover., Warranty - 2 Year"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Rapoo"
                      },
                      {
                          "title": "Model",
                          "info": "Rapoo VPRO V500 PRO"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Mechanical Gaming Keyboard"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "Multi Color LED"
                      },
                      {
                          "title": "Mechanical (Key)",
                          "info": "Yes"
                      },
                      {
                          "title": "Number of Button",
                          "info": "104 (Mechanical)"
                      },
                      {
                          "title": "OS Support",
                          "info": "Windows XP /Vista/ 7/ 8/ 10, macOS"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Dimensions",
                          "info": "434 x 37 x 131mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "805 gm"
                      },
                      {
                          "title": "Color",
                          "info": "Purple"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "2 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "USB Type: 3.0, Nano USB Receiver: Plug &amp; Play. Spill-resistant Design: Yes. Multi-color adjustable backlight system: Yes. Key travel distance: 4mm. Keyboard Aluminum Alloy Surface: Yes. Standard Keyboard Layout: QWERTY. Local Layout Options: Yes."
                      },
                      {
                          "title": "Feature",
                          "info": "Mechanical keys. Key life of up to 60 million operations. Anti-ghosting (all keys are conflict-free). Spill-resistant design. Individually backlit keys. Aluminum alloy surface cover."
                      }
                  ]
              }
          ]
      },
      "visible__url": "rapoo-vpro-v500pro-backlit-wired-purple-mechanical-gaming-keyboard",
      "total__sell": 0,
      "ID": 3133
  },
  {
      "product__id": "05.01.836.06",
      "brand": "Redragon",
      "child": "Keyboard",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Keyboard",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Redragon",
          "product__id": "05.01.836.06",
          "images": [
              "/images/assests/8546_______05.01.836.06_______.png",
              "/images/assests/8547_______05.01.836.06_______.png",
              "/images/assests/16218_______05.01.836.06_______.png",
              "/images/assests/16219_______05.01.836.06_______.png",
              "https://www.ryanscomputers.com/storage/products/small/redragon-mitra-k551rgb-1-rgb-blue-switch-black-11645260710.webp"
          ],
          "quantity": 10,
          "current__price": 3700,
          "previous__price": 3960,
          "title": "Redragon MITRA K551RGB-1 RGB (Blue Switch) Black Wired Mechanical Gaming Keyboard",
          "details__url": "https://www.ryanscomputers.com/redragon-mitra-k551rgb-1-rgb-blue-switch-black-wired-mechanical-gaming-keyboard",
          "visible__url": "redragon-mitra-k551rgb-1-rgb-blue-switch-black-wired-mechanical-gaming-keyboard",
          "overviews": [
              "Brand - Redragon",
              "Model - Redragon MITRA K551RGB-1",
              "Type - Mechanical Gaming Keyboard",
              "Interface - USB",
              "Lighting Type - RGB",
              "Number of Button - 104"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Redragon, Model - Redragon MITRA K551RGB-1, Series - Gaming, Style & Size - Regular Big, Type - Mechanical Gaming Keyboard, Interface - USB, Language (English) - Yes, Language - English, Lighting - Yes, Lighting Type - RGB, Mechanical (Key) - Yes, Mouse, Touchpad - Keyboard only, Number of Button - 104, Color - Black, Specialty - The Redragon K551 isnt your average mechanical gaming keyboard. Not only is it a great choice for entering the World of Mechanical Keyboards, its also over-engineered and built to take a beating, it is loaded with features aircraft grade aluminium and ABS construction, plate mounted keys, double-shot injection moulded keycaps, high-end switches with mechanical ultra-last springs, crisp and bright adjustable RGB LED backlighting, a gold-plated USB connector for a reliable connection, and a splash-resistant design. The Industrial Design of the Redragon K551 Mechanical Keyboard is not just nice to look at, it also has great ergonomics and a space saving design. No matter how long you type or how intense your gaming marathons are, you are always comfortable., Others - Actuation Force: 60g +/- 15g. Keystroke Travel: 4.0mm +/- 0.2mm., Feature - Full Size keyboard with 104 standard keys, full numeric keypad. All 104 keys are 100% conflict free, anti-ghosting. Windows key lockout option. 12 Dual action Multimedia and F keys. WIN key can be disabled for gaming. Ultra-durable keys tested to 50 million keystrokes. Keycap Puller Tool is included in case you need to clean the keyboard after long term use or simply want to switch out the caps to add a personal touch., Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Redragon"
                      },
                      {
                          "title": "Model",
                          "info": "Redragon MITRA K551RGB-1"
                      },
                      {
                          "title": "Style &amp; Size",
                          "info": "Regular Big"
                      },
                      {
                          "title": "Type",
                          "info": "Mechanical Gaming Keyboard"
                      }
                  ]
              },
              {
                  "title": "Language",
                  "infos": [
                      {
                          "title": "Language (English)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Interface",
                          "info": "USB"
                      },
                      {
                          "title": "Lighting",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "RGB"
                      },
                      {
                          "title": "Mechanical (Key)",
                          "info": "Yes"
                      },
                      {
                          "title": "Mouse, Touchpad",
                          "info": "Keyboard only"
                      },
                      {
                          "title": "Number of Button",
                          "info": "104"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "The Redragon K551 isnt your average mechanical gaming keyboard. Not only is it a great choice for entering the World of Mechanical Keyboards, its also over-engineered and built to take a beating, it is loaded with features aircraft grade aluminium and ABS construction, plate mounted keys, double-shot injection moulded keycaps, high-end switches with mechanical ultra-last springs, crisp and bright adjustable RGB LED backlighting, a gold-plated USB connector for a reliable connection, and a splash-resistant design. The Industrial Design of the Redragon K551 Mechanical Keyboard is not just nice to look at, it also has great ergonomics and a space saving design. No matter how long you type or how intense your gaming marathons are, you are always comfortable."
                      },
                      {
                          "title": "Others",
                          "info": "Actuation Force: 60g +/- 15g. Keystroke Travel: 4.0mm +/- 0.2mm."
                      },
                      {
                          "title": "Feature",
                          "info": "Full Size keyboard with 104 standard keys, full numeric keypad. All 104 keys are 100% conflict free, anti-ghosting. Windows key lockout option. 12 Dual action Multimedia and F keys. WIN key can be disabled for gaming. Ultra-durable keys tested to 50 million keystrokes. Keycap Puller Tool is included in case you need to clean the keyboard after long term use or simply want to switch out the caps to add a personal touch."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "redragon-mitra-k551rgb-1-rgb-blue-switch-black-wired-mechanical-gaming-keyboard",
      "total__sell": 0,
      "ID": 3141
  },
  {
      "product__id": "10.04.200.02",
      "brand": "Lenovo",
      "child": "Headphone",
      "parent": "Sound System",
      "parent__father": "Gaming",
      "infos": {
          "child": "Headphone",
          "parent": "Sound System",
          "parent__father": "Gaming",
          "brand": "Lenovo",
          "product__id": "10.04.200.02",
          "images": [
              "/images/assests/10402_______10.04.200.02_______.png",
              "/images/assests/10403_______10.04.200.02_______.png",
              "/images/assests/10404_______10.04.200.02_______.png",
              "/images/assests/24541_______10.04.200.02_______.png",
              "/images/assests/24542_______10.04.200.02_______.png",
              "/images/assests/24543_______10.04.200.02_______.png",
              "https://www.ryanscomputers.com/storage/products/small/lenovo-legion-stereo-gaming-21565268265.webp"
          ],
          "quantity": 10,
          "current__price": 3700,
          "previous__price": 3910,
          "title": "Lenovo Legion Stereo Wired Gaming Headphone #GXD0L03746",
          "details__url": "https://www.ryanscomputers.com/lenovo-legion-stereo-wired-gaming-headphone-gxd0l03746",
          "visible__url": "lenovo-legion-stereo-wired-gaming-headphone-gxd0l03746",
          "overviews": [
              "Lenovo Legion",
              "Connectivity - Wired",
              "Driver Unit - 50mm",
              "Plug Type - 3.5mm (Single port)"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Lenovo, Model - Lenovo Legion, Type - Gaming Headphone, Connectivity - Wired, Frequency Response (Hz - kHz) - 20Hz - 20kHz, Sensitivity (dB) - 100+-2dB, Impedance (ohm) - 32ohm, Microphone - Yes, Driver Unit - 50mm, Plug Type - 3.5mm (Single port), Cable Length (ft) - 6.56 Ft, Weight (Kg) - 270gm, Color - Black, Others - Connection Type: Analog, Driver: 2 x 50 mm, Specialty - 50 mm high-performance drivers for high-quality stereo sound, Soft, durable over-ear padded ear cups for maximum isolation, Retractable noise cancelling microphone, 3.5 mm audio jack with 1 x 3.5 mm audio splitter, Ergonomic design featuring swivel ear cups, Stereo Headset delivers crisp highs and deafening lows, and lets play harder for longer thanks to its lightweight carbon fiber texture and retractable noise-canceling microphone, Part No - GXD0L03746, Warranty - 6 Month"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Lenovo"
                      },
                      {
                          "title": "Model",
                          "info": "Lenovo Legion Stereo"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming"
                      },
                      {
                          "title": "Part No",
                          "info": "GXD0L03746"
                      }
                  ]
              },
              {
                  "title": "Connectivity",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wired"
                      }
                  ]
              },
              {
                  "title": "Audio Details",
                  "infos": [
                      {
                          "title": "Frequency Response (Hz - kHz)",
                          "info": "20Hz-20kHz"
                      },
                      {
                          "title": "Sensitivity",
                          "info": "100+-2dB"
                      },
                      {
                          "title": "Impedance (ohm)",
                          "info": "32ohm"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Plug Type",
                          "info": "Single Port"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Microphone",
                          "info": "Yes"
                      },
                      {
                          "title": "Driver Unit",
                          "info": "50mm"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Cable Length",
                          "info": "6.56 ft."
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "270gm"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "6 Month"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "Connection Type: Analog, Driver: 2 x 50 mm, 3.5mm (Single port)"
                      },
                      {
                          "title": "Specialty",
                          "info": "50 mm high-performance drivers for high-quality stereo sound, Soft, durable over-ear padded ear cups for maximum isolation, Retractable noise cancelling microphone, 3.5 mm audio jack with 1 x 3.5 mm audio splitter, Ergonomic design featuring swivel ear cups, Stereo Headset delivers crisp highs and deafening lows, and lets play harder for longer thanks to its lightweight carbon fiber texture and retractable noise-canceling microphone"
                      }
                  ]
              }
          ]
      },
      "visible__url": "lenovo-legion-stereo-wired-gaming-headphone-gxd0l03746",
      "total__sell": 0,
      "ID": 3644
  },
  {
      "product__id": "152.03.735.46",
      "brand": "Orico",
      "child": "USB HUB",
      "parent": "Converter",
      "parent__father": "Accessories",
      "infos": {
          "child": "USB HUB",
          "parent": "Converter",
          "parent__father": "Accessories",
          "brand": "Orico",
          "product__id": "152.03.735.46",
          "images": [
              "/images/assests/796_______152.03.735.46_______.png",
              "/images/assests/797_______152.03.735.46_______.png",
              "https://www.ryanscomputers.com/storage/products/small/orico-5-port-usb-type-c-space-gray-usb-hub-5sxrj-11641877210.webp"
          ],
          "quantity": 10,
          "current__price": 4000,
          "previous__price": 4230,
          "title": "Orico 5 port USB Type-C space Gray USB HUB #5SXRJ GY-BP",
          "details__url": "https://www.ryanscomputers.com/orico-5-port-usb-type-c-space-gray-usb-hub",
          "visible__url": "orico-5-port-usb-type-c-space-gray-usb-hub",
          "overviews": [
              "Model - Orico 5SXRJ-GY",
              "Type - USB Hub",
              "Interface - USB Type-C",
              "Input Interface - Type-C Male",
              "Output Interface - Triple USB, LAN, PD"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - ORICO, Model - Orico 5SXRJ-GY, Type - USB Hub, Interface - USB Type-C, Input Interface - Type-C Male, Output Interface - Triple USB, LAN, PD, USB Quantity - 3, Color - Grey space, Features - 1GB in 3 Seconds. 4K Available, Support 4K 30HZ Video output. More screen, more comfortable. Gigabit Ethernet, Drive-free, plug and play, It is down compatible with 10Mbps network standard. PD Charging, faster than faster. The 100W PD Charging port can be used to charge laptops, mobile phones and tablets through an external PD Charger. Wide Compatibility. Compact and Portable., Others - The chip: RTL8153B+VL815, Web standards: 1000Mbps/100Mbps/10Mbps, PD power: 100W, Transmission rate: 5Gpbs, Part No - 5SXRJ GY-BP, Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "ORICO"
                      },
                      {
                          "title": "Model",
                          "info": "Orico 5 port USB Type-C"
                      },
                      {
                          "title": "Type",
                          "info": "USB Hub"
                      },
                      {
                          "title": "Part No",
                          "info": "5SXRJ GY-BP"
                      }
                  ]
              },
              {
                  "title": "Connectivity",
                  "infos": [
                      {
                          "title": "Interface(s)",
                          "info": "USB Type-C"
                      },
                      {
                          "title": "Input Interface",
                          "info": "Type-C Male"
                      },
                      {
                          "title": "Output Interface",
                          "info": "Triple USB, LAN, PD"
                      },
                      {
                          "title": "USB Quantity",
                          "info": "3"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Space gray"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "1GB in 3 Seconds. 4K Available, Support 4K 30HZ Video output. More screen, more comfortable. Gigabit Ethernet, Drive-free, plug and play, It is down compatible with 10Mbps network standard. PD Charging, faster than faster. The 100W PD Charging port can be used to charge laptops, mobile phones and tablets through an external PD Charger. Wide Compatibility. Compact and Portable."
                      },
                      {
                          "title": "Others",
                          "info": "The chip: RTL8153B+VL815, Web standards: 1000Mbps/100Mbps/10Mbps, PD power: 100W, Transmission rate: 5Gpbs"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "orico-5-port-usb-type-c-space-gray-usb-hub",
      "total__sell": 0,
      "ID": 280
  },
  {
      "product__id": "10.04.836.09",
      "brand": "Redragon",
      "child": "Headphone",
      "parent": "Sound System",
      "parent__father": "Gaming",
      "infos": {
          "child": "Headphone",
          "parent": "Sound System",
          "parent__father": "Gaming",
          "brand": "Redragon",
          "product__id": "10.04.836.09",
          "images": [
              "/images/assests/10446_______10.04.836.09_______.png",
              "/images/assests/10447_______10.04.836.09_______.png",
              "/images/assests/10448_______10.04.836.09_______.png",
              "/images/assests/10449_______10.04.836.09_______.png",
              "/images/assests/24594_______10.04.836.09_______.png",
              "/images/assests/24595_______10.04.836.09_______.png",
              "/images/assests/24596_______10.04.836.09_______.png",
              "/images/assests/24597_______10.04.836.09_______.png",
              "https://www.ryanscomputers.com/storage/products/small/redragon-h510-zeus-rgb-wired-white-gaming-11646716301.webp"
          ],
          "quantity": 10,
          "current__price": 4700,
          "previous__price": 4990,
          "title": "Redragon H510 ZEUS-X RGB Wired White Gaming Headphone",
          "details__url": "https://www.ryanscomputers.com/redragon-h510-zeus-x-rgb-wired-white-gaming-headphone",
          "visible__url": "redragon-h510-zeus-x-rgb-wired-white-gaming-headphone",
          "overviews": [
              "Brand - Redragon",
              "Model - Redragon H510 ZEUS-X",
              "Connectivity - Wired",
              "Signal to Noise Ratio (dB) - 60dB",
              "Lighting Effect - RGB",
              "Driver Unit - 53mm",
              "Plug Type - Single Port"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Redragon, Model - Redragon H510 ZEUS-X, Type - Gaming, Connectivity - Wired, Signal to Noise Ratio (dB) - 60dB, Frequency Response (Hz - kHz) - 20-20KHZ (Speaker), 100-10KHz (Microphone), Sensitivity (dB) - 110 + - 3dB (Spaeaker), 42 + - 3dB (Microphone), Impedance (ohm) - 64 + - 15% , F=1KHz (Speaker), 2.2K (Microphone), Microphone - Yes, Lighting Effect - RGB, Driver Unit - 53mm, Plug Type - Single Port, Color - White, Feature - Keep it Real and Original, Enjoy the real clear and lossless sound quality with 7.1 Surround-Sound technology, it will make you be there on the scene wherever game field, live concert and chatting room. The 53mm drive unit offers a wider frequency range, richer sound fields, higher definition, and extreme fidelity sound. Invisible Comfortable Wearing, Its free-adjustable headband with a lightweight durable made steel frame will free your head with extra burdens. The finest leatherette with premium memory foam filler in enables your ear to breathe and keep them dry and cool. No any worry after hours of wear and make you a perfect listener. Talk it Like You Hear it, You can not only hear lossless sound but to talk it out. The detachable noise-cancellation microphone will surely offer you the most wonderful communication between teammates or friends, no more electric current sound, distorted sound and boomed mic cases., Others - Speaker - Size: 53mm. Ratred Power: 20-30mW. Microphone - Size: 6.0 x 2.7mm, Type: Omnidirectional. Rated Voltage: 2V-10V. SNR: 60dB., Specialty - All in Control - The Redragon H510 boasts independent line control with sound volume +/-, on/off and mic on/off. All settings can be adjusted by one hand to meet different needs in any situation. Style on All Platform - With detachable 3.5mm braided cable built-in USB control box and 3.5mm jack input, your style can be showed on any platform you use, PC, PS4/3, Xbox One, Switch & Mobile Devices are both available., Warranty - 1 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Redragon"
                      },
                      {
                          "title": "Model",
                          "info": "Redragon H510 ZEUS-X"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming"
                      }
                  ]
              },
              {
                  "title": "Connectivity",
                  "infos": [
                      {
                          "title": "Connectivity",
                          "info": "Wired"
                      }
                  ]
              },
              {
                  "title": "Audio Details",
                  "infos": [
                      {
                          "title": "Signal to Noise Ratio (dB)",
                          "info": "60dB"
                      },
                      {
                          "title": "Frequency Response (Hz - kHz)",
                          "info": "20-20KHZ (Speaker), 100-10KHz (Microphone)"
                      },
                      {
                          "title": "Sensitivity",
                          "info": "110 + - 3dB (Spaeaker), 42 + - 3dB (Microphone)"
                      },
                      {
                          "title": "Impedance (ohm)",
                          "info": "64 + - 15% , F=1KHz (Speaker), 2.2K (Microphone)"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Plug Type",
                          "info": "Single Port"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Microphone",
                          "info": "Yes"
                      },
                      {
                          "title": "Driver Unit",
                          "info": "53mm"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Lighting Effect",
                          "info": "RGB"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "White"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "1 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Feature",
                          "info": "Keep it Real and Original, Enjoy the real clear and lossless sound quality with 7.1 Surround-Sound technology, it will make you be there on the scene wherever game field, live concert and chatting room. The 53mm drive unit offers a wider frequency range, richer sound fields, higher definition, and extreme fidelity sound. Invisible Comfortable Wearing, Its free-adjustable headband with a lightweight durable made steel frame will free your head with extra burdens. The finest leatherette with premium memory foam filler in enables your ear to breathe and keep them dry and cool. No any worry after hours of wear and make you a perfect listener. Talk it Like You Hear it, You can not only hear lossless sound but to talk it out. The detachable noise-cancellation microphone will surely offer you the most wonderful communication between teammates or friends, no more electric current sound, distorted sound and boomed mic cases."
                      },
                      {
                          "title": "Others",
                          "info": "Speaker - Size: 53mm. Ratred Power: 20-30mW. Microphone - Size: 6.0 x 2.7mm, Type: Omnidirectional. Rated Voltage: 2V-10V. SNR: 60dB."
                      },
                      {
                          "title": "Specialty",
                          "info": "All in Control - The Redragon H510 boasts independent line control with sound volume +/-, on/off and mic on/off. All settings can be adjusted by one hand to meet different needs in any situation. Style on All Platform - With detachable 3.5mm braided cable built-in USB control box and 3.5mm jack input, your style can be showed on any platform you use, PC, PS4/3, Xbox One, Switch &amp; Mobile Devices are both available."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "redragon-h510-zeus-x-rgb-wired-white-gaming-headphone",
      "total__sell": 0,
      "ID": 3657
  },
  {
      "product__id": "55.01.749.55",
      "brand": "Aigo",
      "child": "Power Supply",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Power Supply",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Aigo",
          "product__id": "55.01.749.55",
          "images": [
              "/images/assests/6664_______55.01.749.55_______.png",
              "/images/assests/6665_______55.01.749.55_______.png",
              "/images/assests/6666_______55.01.749.55_______.png",
              "/images/assests/13649_______55.01.749.55_______.png",
              "/images/assests/13650_______55.01.749.55_______.png",
              "/images/assests/13651_______55.01.749.55_______.png",
              "https://www.ryanscomputers.com/storage/products/small/bundle-with-pc-aigo-gp650-g6-hj-plus-650w-80-11603177028.webp"
          ],
          "quantity": 10,
          "current__price": 5000,
          "previous__price": 5370,
          "title": "Aigo GP650 G6 HJ Plus 650W 80 Plus Bronze Certified Non-Modular Power Supply",
          "details__url": "https://www.ryanscomputers.com/aigo-gp650-g6-hj-plus-650w-80-plus-bronze-certified-non-modular-power-supply",
          "visible__url": "aigo-gp650-g6-hj-plus-650w-80-plus-bronze-certified-non-modular-power-supply",
          "overviews": [
              "Aigo GP650 G6 HJ Plus",
              "PSU Category - Non Modular",
              "Type - ATX 12V V2.31",
              "Maximum Power - 650W",
              "Input Frequency Range - 50Hz"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Aigo, Model - Aigo GP650 G6 HJ Plus, PSU Category - Non Modular, Type - ATX 12V V2.31, Maximum Power - 650 Watt, Input Voltage - 160V - 264V, Input Frequency Range - 50Hz, Input Current - 6A, Fan Size - 120mm, Fan Bearing - Hydraulic Bearing, Efficiency - 80% efficiency, 80 Plus Rating - 80 Plus Bronze, Protection - overvoltage, overcurrent, overload, undervoltage, short-circuit, light protection functions, Over Voltage Protection (OVP) - Yes, Over Power Protection (OPP) - Yes, Over Current Protection (OCP) - Yes, Short Circuit Protection (SCP) - Yes, Under Voltage Protection (UVP) - Yes, ATX Main Connectors - 1, EPS Connectors - 1, PCIe Connectors - 2, SATA Power Connectors - 4, PFC (Power Factor Correction) - Active PFC, Form Factor - ATX, Dimension (W/H/D) - 150 x 85 x 160mm, Weight (Kg) - 1.9 kg, Color - Black, Regulatory / Safety Approval - CB, CCC, FCC, class, B, CE, ROHS, Others - IDE interface: 2, Low Ripple Noise, Ultra Quiet Fluid Dynamic Bearing Fan, Specialty - Rated 650W, suitable for high-end computer configuration, Conforms to the Intel ATX12V specification design, supports Intel, AMD complete series of dual core platform, High efficiency energy-saving silent fan, Built in PFC, double magnetic ring magnetic amplifier circuit, high frequency low resistance filter capacitor, to ensure that the current is pure and stable output, Adopt 12cm hydraulic bearing fan, mute and durable, large air flow, Intelligent temperature control circuit design, automatically adjust the fan speed, and extend the service life, Horn high capacity, large capacity, support wide use, in the unstable voltage environment can still be used normally, Multi function protection circuit design, with overvoltage, overcurrent, overload, undervoltage, short-circuit, light protection functions, Innovative pest control technology design., Warranty - 3 Year, Country of Origin - China, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Aigo"
                      },
                      {
                          "title": "Model",
                          "info": "Aigo GP650 G6 HJ Plus"
                      },
                      {
                          "title": "PSU Category",
                          "info": "Non Modular"
                      },
                      {
                          "title": "Type",
                          "info": "ATX 12V V2.31"
                      }
                  ]
              },
              {
                  "title": "Cooling & Lighting",
                  "infos": [
                      {
                          "title": "Fan Size",
                          "info": "120mm"
                      },
                      {
                          "title": "Fan Bearing",
                          "info": "Hydraulic Bearing"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Efficiency",
                          "info": "80% Efficiency"
                      },
                      {
                          "title": "80 Plus Rating",
                          "info": "80 Plus Bronze"
                      },
                      {
                          "title": "PFC (Power Factor Correction)",
                          "info": "Active PFC"
                      }
                  ]
              },
              {
                  "title": "Protection",
                  "infos": [
                      {
                          "title": "Protection",
                          "info": "overvoltage, overcurrent, overload, undervoltage, short-circuit, light protection functions"
                      },
                      {
                          "title": "Over Voltage Protection (OVP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Over Power Protection (OPP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Over Current Protection (OCP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Short Circuit Protection (SCP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Under Voltage Protection (UVP)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Connectors",
                  "infos": [
                      {
                          "title": "ATX Main Connectors",
                          "info": "1"
                      },
                      {
                          "title": "EPS Connectors",
                          "info": "1"
                      },
                      {
                          "title": "PCIe Connectors",
                          "info": "2"
                      },
                      {
                          "title": "SATA Power Connectors",
                          "info": "4"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Maximum Power",
                          "info": "650 Watt"
                      },
                      {
                          "title": "Input Voltage",
                          "info": "160 - 264V"
                      },
                      {
                          "title": "Input Frequency Range",
                          "info": "50Hz"
                      },
                      {
                          "title": "Input Current",
                          "info": "6A"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Form Factor",
                          "info": "ATX"
                      },
                      {
                          "title": "Dimensions",
                          "info": "150 x 85 x 160mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "1.9 kg"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Regulatory / Safety Approval",
                          "info": "CB, CCC, FCC, class, B, CE, ROHS"
                      },
                      {
                          "title": "Others",
                          "info": "IDE interface: 2, Low Ripple Noise, Ultra Quiet Fluid Dynamic Bearing Fan"
                      },
                      {
                          "title": "Specialty",
                          "info": "Rated 650W, suitable for high-end computer configuration, Conforms to the Intel ATX12V specification design, supports Intel, AMD complete series of dual core platform, High efficiency energy-saving silent fan, Built in PFC, double magnetic ring magnetic amplifier circuit, high frequency low resistance filter capacitor, to ensure that the current is pure and stable output, Adopt 12cm hydraulic bearing fan, mute and durable, large air flow, Intelligent temperature control circuit design, automatically adjust the fan speed, and extend the service life, Horn high capacity, large capacity, support wide use, in the unstable voltage environment can still be used normally, Multi function protection circuit design, with overvoltage, overcurrent, overload, undervoltage, short-circuit, light protection functions, Innovative pest control technology design."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "aigo-gp650-g6-hj-plus-650w-80-plus-bronze-certified-non-modular-power-supply",
      "total__sell": 0,
      "ID": 2610
  },
  {
      "product__id": "07.02.785.07",
      "brand": "Fantech",
      "child": "Casing",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Casing",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Fantech",
          "product__id": "07.02.785.07",
          "images": [
              "/images/assests/7547_______07.02.785.07_______.png",
              "/images/assests/14725_______07.02.785.07_______.png",
              "https://www.ryanscomputers.com/storage/products/small/fantech-aero-cg80-mid-tower-white-tempered-glass-11611993396.webp"
          ],
          "quantity": 10,
          "current__price": 5650,
          "previous__price": 6080,
          "title": "Fantech Aero CG80 Mid Tower White ATX Gaming Casing",
          "details__url": "https://www.ryanscomputers.com/fantech-aero-cg80-mid-tower-white-atx-gaming-casing",
          "visible__url": "fantech-aero-cg80-mid-tower-white-atx-gaming-casing",
          "overviews": [
              "Model - Fantech Aero CG80",
              "Case Type - Mid Tower",
              "Supported Mainboard Type - ATX / MATX / ITX",
              "3.5 Inch Drive Bay - 2",
              "2.5 Inch Drive Bay - 3"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "Latest Fantech Aero CG80 Mid Tower White ATX Gaming Casing Price in Bangladesh"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Fantech"
                      },
                      {
                          "title": "Model",
                          "info": "Fantech Aero CG80"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming Casing"
                      },
                      {
                          "title": "Case Type",
                          "info": "Mid Tower"
                      },
                      {
                          "title": "Part No",
                          "info": "CG80"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Supported Motherboard Type",
                          "info": "ATX, mATX, Mini-ITX"
                      },
                      {
                          "title": "Controller",
                          "info": "1 x RGB Controller"
                      },
                      {
                          "title": "Illumination",
                          "info": "15 RGB Spectrum Mode"
                      },
                      {
                          "title": "Graphics-Card Length",
                          "info": "240mm"
                      },
                      {
                          "title": "CPU Cooler Height",
                          "info": "160mm"
                      },
                      {
                          "title": "PSU Length",
                          "info": "140mm"
                      },
                      {
                          "title": "Thickness",
                          "info": "SPCC 0.45mm (Black)"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Front/Top USB port",
                          "info": "1 x USB 3.0, 2 x USB 2.0"
                      },
                      {
                          "title": "Front/Top Audio Port",
                          "info": "1 x Audio port, 1 x Microphone"
                      },
                      {
                          "title": "3.5 Inch Drive Bay",
                          "info": "2"
                      },
                      {
                          "title": "2.5 Inch Drive Bay",
                          "info": "3"
                      }
                  ]
              },
              {
                  "title": "Fan & Radiator Details",
                  "infos": [
                      {
                          "title": "Cooling Fan (Built-In)",
                          "info": "4"
                      },
                      {
                          "title": "Cooling Fan (Optional)",
                          "info": "2"
                      },
                      {
                          "title": "Supported Fan Size",
                          "info": "Front: 3 x 120mm, Rear: 1 x 120mm, top: 2 x 120mm"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Power Supply (Built-In)",
                          "info": "No"
                      },
                      {
                          "title": "Power Supply Type",
                          "info": "ATX"
                      },
                      {
                          "title": "Power Supply Mounted",
                          "info": "Bottom"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Optical Drive Bay",
                          "info": "No"
                      },
                      {
                          "title": "Transparent Side Window",
                          "info": "Yes"
                      },
                      {
                          "title": "Buttons",
                          "info": "1 x power switch, 1 x reset, 1 x RGB"
                      },
                      {
                          "title": "Number of Buttons",
                          "info": "3"
                      },
                      {
                          "title": "Material",
                          "info": "Steel + Magnetic PVC Filter + Tempered Glass"
                      },
                      {
                          "title": "Dust Cover",
                          "info": "Top &amp; Bottom cover with Dust filter"
                      },
                      {
                          "title": "Color",
                          "info": "White"
                      },
                      {
                          "title": "Dimensions",
                          "info": "415 x 210 x 445mm"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "No warranty"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "Thick steel structure, Tempered glass side panel,"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "fantech-aero-cg80-mid-tower-white-atx-gaming-casing",
      "total__sell": 0,
      "ID": 2844
  },
  {
      "product__id": "01.01.024.238",
      "brand": "Intel",
      "child": "Processor",
      "parent": "Desktop Component",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "Processor",
          "parent": "Desktop Component",
          "parent__father": "Desktop PC and Server",
          "brand": "Intel",
          "product__id": "01.01.024.238",
          "images": [
              "/images/assests/10773_______01.01.024.238_______.png",
              "https://www.ryanscomputers.com/storage/products/small/bundle-with-pc-intel-10th-gen-comet-lake-core-11605418266.webp"
          ],
          "quantity": 10,
          "current__price": 8800,
          "previous__price": 9110,
          "title": "Intel 10th Gen Comet Lake Core i3 10100F Desktop Processor",
          "details__url": "https://www.ryanscomputers.com/intel-10th-gen-comet-lake-core-i3-10100f-desktop-processor",
          "visible__url": "intel-10th-gen-comet-lake-core-i3-10100f-desktop-processor",
          "overviews": [
              "Intel Core i3 10100F",
              "Code-Name - Comet Lake",
              "Generation - 10th",
              "Base Frequency - 3.60GHz",
              "Turbo Frequency Max. - 4.30GHz"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "Intel Core i3 10100F Processor Reviews "
              },
              {
                  "tag": "p",
                  "text": "Are you searching online for Intel Core i3 10100F processor price in Bangladesh? Before buying this Intel processor check Ryans Desktop processor reviews. The Intel Core i3 10100F is a Core 4 and 8 Threads processor. Base Frequency is 3.60 GHz . On the contrary max turbo frequency of this processor is 4.30 GHz. The Intel Core i3 10100F Has Memory Channel dual channel memory. DDR4-2666 type ram supports it. The Intel Core i3 10100F is LGA1200 Sockets Supported. It comes with PCG 2015C (Included) cpu cooler. 65 W Thermal design power(TDP) used in this Threads processor."
              },
              {
                  "tag": "p",
                  "text": " "
              },
              {
                  "tag": "h2",
                  "text": "What is the Intel Core i3 10100F Processor Price in Bangladesh?"
              },
              {
                  "tag": "p",
                  "text": "Ryans computers give a competitive price for Intel Core i3 10100F Processor in Bangladesh. The latest price is given above. You can purchase the processor with EMI. Ryans computers give home delivery. 3 Year (No Warranty for Fan or Cooler) Brand warranty available for this Intel Core i3 10100F processor. So buy now."
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Model",
                          "info": "Intel Core i3 10100F"
                      },
                      {
                          "title": "Cpu Cooler (Included)",
                          "info": "PCG 2015C"
                      },
                      {
                          "title": "Code-Name",
                          "info": "Comet Lake"
                      },
                      {
                          "title": "Generation",
                          "info": "10th"
                      },
                      {
                          "title": "Sockets Supported",
                          "info": "LGA1200"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Processor Type.",
                          "info": "Core i3"
                      },
                      {
                          "title": "Base Frequency",
                          "info": "3.60GHz"
                      },
                      {
                          "title": "Turbo Frequency Max.",
                          "info": "4.30GHz"
                      },
                      {
                          "title": "Core",
                          "info": "4"
                      },
                      {
                          "title": "Threads",
                          "info": "8"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "6MB"
                      },
                      {
                          "title": "Bus Speed",
                          "info": "8 GT/s"
                      },
                      {
                          "title": "TDP",
                          "info": "65W"
                      },
                      {
                          "title": "Lithography",
                          "info": "14nm"
                      }
                  ]
              },
              {
                  "title": "Memory Support",
                  "infos": [
                      {
                          "title": "Memory Max.",
                          "info": "128GB"
                      },
                      {
                          "title": "Memory Type",
                          "info": "DDR4-2666"
                      },
                      {
                          "title": "Memory Channel",
                          "info": "Dual"
                      },
                      {
                          "title": "ECC Memory Supported",
                          "info": "No"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Compatible Products",
                          "info": "Chipset: Z490, Q470, H470, H410, B460"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 Year (No Warranty for Fan or Cooler)"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "Bundled With Any Full Set PC, Intel Turbo Boost Technology 2.0 Frequency: 4.30 GHz, Max Memory Bandwidth: 41.6 GB/s, PCI Express Revision: 3.0, Max of PCI Express Lanes: 16, Intel Turbo Boost Technology: 2.0"
                      },
                      {
                          "title": "Specialty",
                          "info": "Intel Optane Memory Supported, Intel Hyper-Threading Technology, Intel Virtualization Technology (VT-x), Enhanced Intel SpeedStep Technology, Thermal Monitoring Technologies, Intel Identity Protection Technology"
                      }
                  ]
              }
          ]
      },
      "visible__url": "intel-10th-gen-comet-lake-core-i3-10100f-desktop-processor",
      "total__sell": 0,
      "ID": 4641
  },
  {
      "product__id": "55.01.470.76",
      "brand": "Corsair",
      "child": "Power Supply",
      "parent": "Gaming Desktop Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Power Supply",
          "parent": "Gaming Desktop Component",
          "parent__father": "Gaming",
          "brand": "Corsair",
          "product__id": "55.01.470.76",
          "images": [
              "/images/assests/6772_______55.01.470.76_______.png",
              "/images/assests/6773_______55.01.470.76_______.png",
              "/images/assests/6774_______55.01.470.76_______.png",
              "/images/assests/6775_______55.01.470.76_______.png",
              "/images/assests/13760_______55.01.470.76_______.png",
              "/images/assests/13761_______55.01.470.76_______.png",
              "/images/assests/13762_______55.01.470.76_______.png",
              "/images/assests/13763_______55.01.470.76_______.png",
              "https://www.ryanscomputers.com/storage/products/small/bundle-with-pc-corsair-cx-f-rgb-series-cx650f-11609090590.webp"
          ],
          "quantity": 10,
          "current__price": 9000,
          "previous__price": 9490,
          "title": "Corsair CX-F RGB Series CX650F RGB 650W 80 Plus Bronze Certified Fully Modular Power Supply #CP-9020217-IN",
          "details__url": "https://www.ryanscomputers.com/corsair-cx-f-rgb-series-cx650f-rgb-650w-80-plus-bronze-certified-fully-modular-power-supply-cp-9020217-in",
          "visible__url": "corsair-cx-f-rgb-series-cx650f-rgb-650w-80-plus-bronze-certified-fully-modular-power-supply-cp-9020217-in",
          "overviews": [
              "Corsair CX-F RGB Series CX650F",
              "Series - CX-F RGB Series",
              "PSU Category - Fully Modular",
              "Type - ATX12V v2.4",
              "Maximum Power - 650W"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Corsair, Model - Corsair CX-F RGB Series CX650F, Series - CX-F RGB Series, PSU Category - Full Modular, Type - ATX12V v2.4, Maximum Power - 650 Watt, Input Voltage - 100 - 240 V, Input Frequency Range - 47Hz - 63Hz, Input Current - 10 - 5 A, Fan Size - 120mm, Lighting Effect - Yes, Lighting Type - RGB, Zero RPM Fan Mode - No, Fan Bearing - Rifle Bearing, 80 Plus Rating - 80 Plus Bronze, Protection - OPP, UVP, OVP, SCP, OTP, Over Voltage Protection (OVP) - Yes, Over Power Protection (OPP) - Yes, Over Temperature Protection (OTP) - Yes, Short Circuit Protection (SCP) - Yes, Under Voltage Protection (UVP) - Yes, ATX Main Connectors - 1, EPS Connectors - 2, PCIe Connectors - 4, SATA Power Connectors - 7, Cable Type - Sleeved and Flat Black Cables, Operating Temperature - 40 degree C, MTBF - 100,000 hours, Form Factor - ATX, Dimension (W/H/D) - 150 x 86 x 140mm, Color - Black, Others - ATX12V Version: v2.4, Multi-GPU ready: Yes, 120mm RGB Fan, Specialty - Push-button for manual RGB control, CORSAIR CX-650F RGB Series fully modular power supplies deliver reliable 80 PLUS Bronze efficient power to your system, alongside vibrant customizable lighting from a 120mm RGB fan and a clean aesthetic., Part No - CP-9020217-IN, Warranty - 5 Year, Country of Origin - Taiwan, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Corsair"
                      },
                      {
                          "title": "Model",
                          "info": "Corsair CX-F RGB Series CX650F"
                      },
                      {
                          "title": "Series",
                          "info": "CX-F RGB Series"
                      },
                      {
                          "title": "PSU Category",
                          "info": "Full Modular"
                      },
                      {
                          "title": "Type",
                          "info": "ATX12V v2.4"
                      },
                      {
                          "title": "Part No",
                          "info": "CP-9020217-IN"
                      }
                  ]
              },
              {
                  "title": "Cooling & Lighting",
                  "infos": [
                      {
                          "title": "Fan Size",
                          "info": "120mm"
                      },
                      {
                          "title": "Lighting Effect",
                          "info": "Yes"
                      },
                      {
                          "title": "Lighting Type",
                          "info": "RGB"
                      },
                      {
                          "title": "Zero RPM Fan Mode",
                          "info": "No"
                      },
                      {
                          "title": "Fan Bearing",
                          "info": "Rifle Bearing"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "80 Plus Rating",
                          "info": "80 Plus Bronze"
                      }
                  ]
              },
              {
                  "title": "Protection",
                  "infos": [
                      {
                          "title": "Protection",
                          "info": "OPP, UVP, OVP, SCP, OTP"
                      },
                      {
                          "title": "Over Voltage Protection (OVP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Over Power Protection (OPP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Over Temperature Protection (OTP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Short Circuit Protection (SCP)",
                          "info": "Yes"
                      },
                      {
                          "title": "Under Voltage Protection (UVP)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Connectors",
                  "infos": [
                      {
                          "title": "ATX Main Connectors",
                          "info": "1"
                      },
                      {
                          "title": "EPS Connectors",
                          "info": "2"
                      },
                      {
                          "title": "PCIe Connectors",
                          "info": "4"
                      },
                      {
                          "title": "SATA Power Connectors",
                          "info": "7"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Maximum Power",
                          "info": "650 Watt"
                      },
                      {
                          "title": "Input AC",
                          "info": "100 - 240 V"
                      },
                      {
                          "title": "Input Voltage",
                          "info": "100 - 240V"
                      },
                      {
                          "title": "Input Frequency Range",
                          "info": "47Hz - 63Hz"
                      },
                      {
                          "title": "Input Current",
                          "info": "10A-5A"
                      },
                      {
                          "title": "Operating Temperature",
                          "info": "40 degree C"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Cable Type",
                          "info": "Sleeved and Flat Black Cables"
                      },
                      {
                          "title": "MTBF",
                          "info": "100,000 hours"
                      },
                      {
                          "title": "Form Factor",
                          "info": "ATX"
                      },
                      {
                          "title": "Dimensions",
                          "info": "150 x 86 x 140mm"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "5 Year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "ATX12V Version: v2.4, Multi-GPU ready: Yes, 120mm RGB Fan"
                      },
                      {
                          "title": "Specialty",
                          "info": "Push-button for manual RGB control, CORSAIR CX-650F RGB Series fully modular power supplies deliver reliable 80 PLUS Bronze efficient power to your system, alongside vibrant customizable lighting from a 120mm RGB fan and a clean aesthetic."
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "corsair-cx-f-rgb-series-cx650f-rgb-650w-80-plus-bronze-certified-fully-modular-power-supply-cp-9020217-in",
      "total__sell": 0,
      "ID": 2640
  },
  {
      "product__id": "01.01.024.68",
      "brand": "Intel",
      "child": "Processor",
      "parent": "Desktop Component",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "Processor",
          "parent": "Desktop Component",
          "parent__father": "Desktop PC and Server",
          "brand": "Intel",
          "product__id": "01.01.024.68",
          "images": [
              "/images/assests/10779_______01.01.024.68_______.png",
              "/images/assests/10780_______01.01.024.68_______.png",
              "https://www.ryanscomputers.com/storage/products/small/intel-core-i7-3820-36ghz-10mb-cache-lga2011-3rd-11545279423.webp"
          ],
          "quantity": 10,
          "current__price": 12500,
          "previous__price": 13350,
          "title": "Intel 3rd Gen Sandy Bridge E Core i7 3820 Desktop Processor",
          "details__url": "https://www.ryanscomputers.com/intel-3rd-gen-sandy-bridge-e-core-i7-3820-desktop-processor",
          "visible__url": "intel-3rd-gen-sandy-bridge-e-core-i7-3820-desktop-processor",
          "overviews": [
              "Brand - Intel",
              "Model - Intel Core i7 3820",
              "Code-Name - Sandy Bridge E",
              "Generation - 3rd Gen",
              "Base Frequency - 3.60 GHz",
              "Turbo Frequency Max. - 3.80 GHz"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "Intel Core i7 3820 Processor Reviews "
              },
              {
                  "tag": "p",
                  "text": "Are you searching online for Intel Core i7 3820 processor price in Bangladesh? Before buying this Intel processor check Ryans Desktop processor reviews. The Intel Core i7 3820 is a Core 4 and 8 Threads processor. Base Frequency is 3.60 GHz . On the contrary max turbo frequency of this processor is 3.80 GHz. The Intel Core i7 3820 Has Memory Channel quad channel memory. DDR3-1066/1333/1600 type ram supports it. The Intel Core i7 3820 is LGA2011 Sockets Supported. 130 W Thermal design power(TDP) used in this Threads processor."
              },
              {
                  "tag": "h2",
                  "text": " "
              },
              {
                  "tag": "h2",
                  "text": "What is the Intel Core i7 3820 Processor Price in Bangladesh?"
              },
              {
                  "tag": "p",
                  "text": "Ryans computers give a competitive price for the Intel Core i7 3820 Processor in Bangladesh. The latest price is given above. You can purchase the processor with EMI. Ryans computers give home delivery. 3 Year (No Warranty for Fan or Cooler) Brand warranty available for this Intel Sandy Bridge E processor. So buy now."
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Model",
                          "info": "Intel Core i7 3820"
                      },
                      {
                          "title": "Cpu Cooler (Included)",
                          "info": "Not Included"
                      },
                      {
                          "title": "Code-Name",
                          "info": "Sandy Bridge E"
                      },
                      {
                          "title": "Generation",
                          "info": "3rd"
                      },
                      {
                          "title": "Sockets Supported",
                          "info": "LGA2011"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Processor Type.",
                          "info": "Core i7"
                      },
                      {
                          "title": "Base Frequency",
                          "info": "3.60GHz"
                      },
                      {
                          "title": "Turbo Frequency Max.",
                          "info": "3.80GHz"
                      },
                      {
                          "title": "Core",
                          "info": "4"
                      },
                      {
                          "title": "Threads",
                          "info": "8"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "10MB"
                      },
                      {
                          "title": "Bus Speed",
                          "info": "5 GT/s"
                      },
                      {
                          "title": "TDP",
                          "info": "130W"
                      },
                      {
                          "title": "Lithography",
                          "info": "32nm"
                      }
                  ]
              },
              {
                  "title": "Memory Support",
                  "infos": [
                      {
                          "title": "Memory",
                          "info": "64 GB"
                      },
                      {
                          "title": "Memory Type",
                          "info": "DDR3-1066/1333/1600"
                      },
                      {
                          "title": "Memory Channel",
                          "info": "4"
                      },
                      {
                          "title": "ECC Memory Supported",
                          "info": "No"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "Compatible Products",
                          "info": "Chipset: X79 , Form Factor: ATX, Max Memory Bandwidth: 51.2 GB/s, PCI Express Revision: 2.0, Max of PCI Express Lanes: 40,"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 Year (No Warranty for Fan or Cooler)"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "Turbo Boost Technology 2.0, Hyper-Threading Technology, Virtualization Technology"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "USA"
                      }
                  ]
              }
          ]
      },
      "visible__url": "intel-3rd-gen-sandy-bridge-e-core-i7-3820-desktop-processor",
      "total__sell": 0,
      "ID": 4646
  },
  {
      "product__id": "01.01.024.101",
      "brand": "Intel",
      "child": "Processor",
      "parent": "Desktop Component",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "Processor",
          "parent": "Desktop Component",
          "parent__father": "Desktop PC and Server",
          "brand": "Intel",
          "product__id": "01.01.024.101",
          "images": [
              "/images/assests/10783_______01.01.024.101_______.png",
              "/images/assests/10784_______01.01.024.101_______.png",
              "https://www.ryanscomputers.com/storage/products/small/intel-core-i5-4460-4th-gen-desktop-11641450857.webp"
          ],
          "quantity": 10,
          "current__price": 14600,
          "previous__price": 15730,
          "title": "Intel Core i5 4460 4th Gen Desktop Processor",
          "details__url": "https://www.ryanscomputers.com/intel-core-i5-4460-4th-gen-desktop-processor",
          "visible__url": "intel-core-i5-4460-4th-gen-desktop-processor",
          "overviews": [
              "Brand - Intel",
              "Model - Intel Core i5 4460 4th Gen",
              "Code-Name - Haswell",
              "Generation - 4th",
              "Base Frequency - 3.20 GHz",
              "Turbo Frequency Max. - 3.40 GHz",
              "Smart Cache - 6 MB"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Intel, Model - Intel Core i5 4460 4th Gen, Code-Name - Haswell, Generation - 4th, Base Frequency - 3.20 GHz, Turbo Frequency Max. - 3.40 GHz, Core - 4, Threads - 4, Smart Cache - 6 MB, Bus Speed - 5 GT/s DMI2, TDP - 84 W, Lithography - 22 nm, Memory Max. - 32 GB, Memory Type - DDR3-1333/1600, DDR3L-1333/1600 @ 1.5V, Memory Channels - 2, Processor Graphics - Intel HD Graphics 4600, Graphics Base Frequency - 350.00 MHz, Graphics Dynamic Frequency Max. - 1.10 GHz, Graphics Video Memory Max. - 2 GB, Graphics Resolution Max. - 4096x2304@24Hz, DirectX Support - 11.2/12, OpenGL Support - 4.3, Sockets Supported - FCLGA1150, Others - Turbo boost 3.4 GHz, Specialty - Quick Sync Video, InTru 3D Technology, Flexible Display Interface, Clear Video HD Technology, Turbo Boost Technology, Virtualization Technology, Displays Supported-3, Compatible Products - Chipset: Z97, Z87, H97, H87, H81, B85, Q87, Warranty - 3 Year (No Warranty for Fan or Cooler)"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Model",
                          "info": "Intel Core i5 4460 4th Gen"
                      },
                      {
                          "title": "Code-Name",
                          "info": "Haswell"
                      },
                      {
                          "title": "Generation",
                          "info": "4th"
                      },
                      {
                          "title": "Sockets Supported",
                          "info": "LGA1150"
                      }
                  ]
              },
              {
                  "title": "Performance",
                  "infos": [
                      {
                          "title": "Processor Type.",
                          "info": "Core i5"
                      },
                      {
                          "title": "Base Frequency",
                          "info": "3.20GHz"
                      },
                      {
                          "title": "Turbo Frequency Max.",
                          "info": "3.40GHz"
                      },
                      {
                          "title": "Core",
                          "info": "4"
                      },
                      {
                          "title": "Threads",
                          "info": "4"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "6MB"
                      },
                      {
                          "title": "Bus Speed",
                          "info": "5 GT/s DMI2"
                      },
                      {
                          "title": "TDP",
                          "info": "84W"
                      },
                      {
                          "title": "Lithography",
                          "info": "22nm"
                      }
                  ]
              },
              {
                  "title": "Memory Support",
                  "infos": [
                      {
                          "title": "Memory Max.",
                          "info": "32GB"
                      },
                      {
                          "title": "Memory Type",
                          "info": "DDR3-1333/1600, DDR3L-1333/1600 @ 1.5V"
                      },
                      {
                          "title": "Memory Channel",
                          "info": "2"
                      }
                  ]
              },
              {
                  "title": "Graphics",
                  "infos": [
                      {
                          "title": "Processor Graphics",
                          "info": "Intel HD Graphics 4600"
                      },
                      {
                          "title": "Graphics Base Frequency",
                          "info": "350.00 MHz"
                      },
                      {
                          "title": "Graphics Dynamic Frequency Max.",
                          "info": "1.10 GHz"
                      },
                      {
                          "title": "Graphics Video Memory Max.",
                          "info": "2 GB"
                      },
                      {
                          "title": "Graphics Resolution Max.",
                          "info": "4096x2304@24Hz"
                      }
                  ]
              },
              {
                  "title": "Technical Information",
                  "infos": [
                      {
                          "title": "DirectX Support",
                          "info": "11.2/12"
                      },
                      {
                          "title": "OpenGL Support",
                          "info": "4.3"
                      },
                      {
                          "title": "Compatible Products",
                          "info": "Chipset: Z97, Z87, H97, H87, H81, B85, Q87"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 Year (No Warranty for Fan or Cooler)"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "Turbo boost 3.4 GHz"
                      },
                      {
                          "title": "Specialty",
                          "info": "Quick Sync Video, InTru 3D Technology, Flexible Display Interface, Clear Video HD Technology, Turbo Boost Technology, Virtualization Technology, Displays Supported-3"
                      }
                  ]
              }
          ]
      },
      "visible__url": "intel-core-i5-4460-4th-gen-desktop-processor",
      "total__sell": 0,
      "ID": 4648
  },
  {
      "product__id": "143.04.838.02",
      "brand": "Marvo",
      "child": "Gaming Chair",
      "parent": "Gaming Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Gaming Chair",
          "parent": "Gaming Component",
          "parent__father": "Gaming",
          "brand": "Marvo",
          "product__id": "143.04.838.02",
          "images": [
              "/images/assests/4654_______143.04.838.02_______.png",
              "/images/assests/4655_______143.04.838.02_______.png",
              "/images/assests/4656_______143.04.838.02_______.png",
              "/images/assests/4657_______143.04.838.02_______.png",
              "https://www.ryanscomputers.com/storage/products/small/marvo-scorpion-ch-106-black-yellow-gaming-11646546615.webp"
          ],
          "quantity": 10,
          "current__price": 17500,
          "previous__price": 18450,
          "title": "Marvo Scorpion CH-106 Black-Yellow Gaming Chair",
          "details__url": "https://www.ryanscomputers.com/marvo-scorpion-ch-106-black-yellow-gaming-chair",
          "visible__url": "marvo-scorpion-ch-106-black-yellow-gaming-chair",
          "overviews": [
              "Type - Gaming Chair",
              "Cover Color - Black & Yellow",
              "Cover Material - PU, PVC"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Model - Marvo Scorpion CH-106, Type - Gaming Chair, Frame Color - Black, Frame Construction - Metal, Cover Color - Black & Yellow, Cover Material - PU, PVC, Armrest Pad Size - 330mm, Highest Seat Height - 530mm, Depth Seating Area (Total) - 500mm, Backrest Height - 850mm, Backrest Shoulder Width - 570mm, Net Weight (Approximate) - 16.5 kg, Weight Capacity - 150 kg, Others - DETACHABLE HEAD & LOWER BACK, Warranty - No Warranty"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Model",
                          "info": "Marvo Scorpion CH-106"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Chair"
                      },
                      {
                          "title": "Frame Color",
                          "info": "Black"
                      },
                      {
                          "title": "Frame Construction",
                          "info": "Metal"
                      },
                      {
                          "title": "Cover Color",
                          "info": "Black &amp; Yellow"
                      },
                      {
                          "title": "Cover Material",
                          "info": "PU, PVC"
                      },
                      {
                          "title": "Armrest Pad Size",
                          "info": "330mm"
                      },
                      {
                          "title": "Highest Seat Height",
                          "info": "530mm"
                      },
                      {
                          "title": "Depth Seating Area (Total)",
                          "info": "500mm"
                      },
                      {
                          "title": "Backrest Height",
                          "info": "850mm"
                      },
                      {
                          "title": "Backrest Shoulder Width",
                          "info": "570mm"
                      },
                      {
                          "title": "Net Weight (Approximate)",
                          "info": "16.5 kg"
                      },
                      {
                          "title": "Weight Capacity",
                          "info": "150 kg"
                      },
                      {
                          "title": "Others",
                          "info": "DETACHABLE HEAD &amp; LOWER BACK"
                      },
                      {
                          "title": "Warranty",
                          "info": "No warranty"
                      }
                  ]
              }
          ]
      },
      "visible__url": "marvo-scorpion-ch-106-black-yellow-gaming-chair",
      "total__sell": 0,
      "ID": 2014
  },
  {
      "product__id": "08.01.006.185",
      "brand": "Asus",
      "child": "Asus",
      "parent": "All Monitor",
      "parent__father": "Monitor",
      "infos": {
          "child": "Asus",
          "parent": "All Monitor",
          "parent__father": "Monitor",
          "brand": "Asus",
          "product__id": "08.01.006.185",
          "images": [
              "/images/assests/18843_______08.01.006.185_______.png",
              "/images/assests/18844_______08.01.006.185_______.png",
              "/images/assests/18845_______08.01.006.185_______.png",
              "/images/assests/18846_______08.01.006.185_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-vy249he-238-inch-fhd-ips-eye-care-hdmi-vga-11638864331.webp"
          ],
          "quantity": 10,
          "current__price": 21500,
          "previous__price": 23220,
          "title": "Asus VY249HE 23.8 Inch FHD IPS Eye Care HDMI VGA Monitor",
          "details__url": "https://www.ryanscomputers.com/asus-vy249he-23.8-inch-fhd-ips-eye-care-hdmi-vga-monitor",
          "visible__url": "asus-vy249he-23.8-inch-fhd-ips-eye-care-hdmi-vga-monitor",
          "overviews": [
              "Brand - Asus",
              "Model - Asus VY249HE",
              "Series - Regular",
              "Shape - Widescreen",
              "Display Size (Inch) - 23.8 Inch",
              "Panel Type - IPS",
              "Display Resolution - 1920 x 1080",
              "Display Surface - Non-Glare",
              "Contrast Ratio - 1000:1",
              "Vertical Viewing Angle - 178 Degree",
              "VGA Port - 1"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Asus, Model - Asus VY249HE, Series - Regular, Shape - Widescreen, Display Size (Inch) - 23.8 Inch, Display Type - FHD IPS LED Display, Panel Type - IPS, Touch Screen - No, Display Resolution - 1920 x 1080, Aspect Ratio - 16:9, Display Surface - Non-Glare, Maximum Brightness (cd/m2) - 250cd/m2, Contrast Ratio - 1000:1, Refresh Rate (Hz) - 75Hz, Response Time (ms) - 1ms MPRT, Horizontal Viewing Angle - 178 Degree, Vertical Viewing Angle - 178 Degree, VGA Port - 1, HDMI Port - 1, Headphone Jack - 1, Speaker (Built-in) - No, Power Consumption - 16W, Height Adjustment - No, Tilt Adjustment - +23 degree - -5 degree, VESA Wall Mount Standard - 100 x 100mm, Lock Slot - Kensington Lock, Weight - 3.38 Kg (With Stand), 2.92 Kg (Without Stand), Dimensions - 541 x 393 x 185mm (With Stand), 541 x 322.9 x 48mm (Without Stand), Specialty - 23.8 inch FHD IPS panel with 75Hz refresh rate for smooth video view, AMD FreeSync delivers fluid, artifact-free visuals at any frame rateing and casual gameplay, T??V Rheinland-certified adjustable Blue Light Filter and ASUS Flicker Free technology ensure comfortable viewing, Color Augmentation mode helps users with color-vision deficiency better distinguish between colors, and Rest Reminder helps users manage screen time, Proprietary long-lasting antibacterial treatment inhibits the growth of bacteria and fungi on the monitor bezels and hotkeys., Others - Display Colors: 16.7M, Flicker-free: Yes, ASUS Smart Contrast Ratio (ASCR): 100000000:1, Trace Free Technology: Yes, SPLENDID Technology: Yes, Color Temp. Selection: Yes (3 modes), GamePlus: Yes, QuickFit: Yes (Letter/Photo/Alignment Grid), HDCP: Yes, 1.4, VRR Technology: FreeSync, Shadow Boost: Yes, Motion Sync: Yes, Low Blue Light: Yes, Eye Care+ Technology: Yes, Power Saving Mode: <0.5W, Power Off Mode: <0.3W, Voltage: 100-240V, 50/60Hz, Antibacterial treatment: Yes, Warranty - 3 Year, Country of Origin - Taiwan, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Asus"
                      },
                      {
                          "title": "Model",
                          "info": "Asus VY249HE"
                      },
                      {
                          "title": "Series",
                          "info": "Regular"
                      },
                      {
                          "title": "Shape",
                          "info": "Widescreen"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "23.8"
                      },
                      {
                          "title": "Display Type",
                          "info": "FHD IPS LED Display"
                      },
                      {
                          "title": "Panel Type",
                          "info": "IPS"
                      },
                      {
                          "title": "Touch Screen",
                          "info": "No"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "1920x1080 (WxH) FHD"
                      },
                      {
                          "title": "Aspect Ratio",
                          "info": "16:9"
                      },
                      {
                          "title": "Display Surface",
                          "info": "Non-Glare"
                      },
                      {
                          "title": "Brightness (cd/m2)",
                          "info": "250cd/m2"
                      },
                      {
                          "title": "Contrast Ratio (TCR/DCR)",
                          "info": "1000:1"
                      },
                      {
                          "title": "Refresh Rate (Hz)",
                          "info": "75Hz"
                      },
                      {
                          "title": "Response Time (ms)",
                          "info": "1ms (MPRT)"
                      },
                      {
                          "title": "Horizontal Viewing Angle",
                          "info": "178 Degree"
                      },
                      {
                          "title": "Vertical Viewing Angle",
                          "info": "178 Degree"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "VGA Port",
                          "info": "1"
                      },
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "Headphone Jack",
                          "info": "1"
                      },
                      {
                          "title": "Lock Slot",
                          "info": "Kensington Lock"
                      }
                  ]
              },
              {
                  "title": "Audio",
                  "infos": [
                      {
                          "title": "Speaker (Built-in)",
                          "info": "No"
                      }
                  ]
              },
              {
                  "title": "Adjustment",
                  "infos": [
                      {
                          "title": "Height Adjustment",
                          "info": "No"
                      },
                      {
                          "title": "Tilt Adjustment",
                          "info": "+23 degree - -5 degree"
                      },
                      {
                          "title": "VESA Wall Mount Standard",
                          "info": "100 x 100mm"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Power Consumption",
                          "info": "16W"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Weight (Kg)",
                          "info": "3.38 Kg (With Stand), 2.92 Kg (Without Stand)"
                      },
                      {
                          "title": "Dimensions",
                          "info": "541 x 393 x 185mm (With Stand), 541 x 322.9 x 48mm (Without Stand)"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "23.8 inch FHD IPS panel with 75Hz refresh rate for smooth video view, AMD FreeSync delivers fluid, artifact-free visuals at any frame rateing and casual gameplay, T??V Rheinland-certified adjustable Blue Light Filter and ASUS Flicker Free technology ensure comfortable viewing, Color Augmentation mode helps users with color-vision deficiency better distinguish between colors, and Rest Reminder helps users manage screen time, Proprietary long-lasting antibacterial treatment inhibits the growth of bacteria and fungi on the monitor bezels and hotkeys"
                      },
                      {
                          "title": "Others",
                          "info": "Display Colors: 16.7M, Flicker-free: Yes, ASUS Smart Contrast Ratio (ASCR): 100000000:1, Trace Free Technology: Yes, SPLENDID Technology: Yes, Color Temp. Selection: Yes (3 modes), GamePlus: Yes, QuickFit: Yes (Letter/Photo/Alignment Grid), HDCP: Yes, 1.4, VRR Technology: FreeSync, Shadow Boost: Yes, Motion Sync: Yes, Low Blue Light: Yes, Eye Care+ Technology: Yes, Power Saving Mode: &lt;0.5W, Power Off Mode: &lt;0.3W, Voltage: 100-240V, 50/60Hz, Antibacterial treatment: Yes"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-vy249he-23.8-inch-fhd-ips-eye-care-hdmi-vga-monitor",
      "total__sell": 0,
      "ID": 1522
  },
  {
      "product__id": "143.04.018.02",
      "brand": "Gigabyte",
      "child": "Gaming Chair",
      "parent": "Gaming Component",
      "parent__father": "Gaming",
      "infos": {
          "child": "Gaming Chair",
          "parent": "Gaming Component",
          "parent__father": "Gaming",
          "brand": "Gigabyte",
          "product__id": "143.04.018.02",
          "images": [
              "/images/assests/4732_______143.04.018.02_______.png",
              "/images/assests/4733_______143.04.018.02_______.png",
              "https://www.ryanscomputers.com/storage/products/small/gigabyte-aorus-agc310-black-orange-gaming-11634627352.webp"
          ],
          "quantity": 10,
          "current__price": 24600,
          "previous__price": 26580,
          "title": "Gigabyte AORUS AGC310 Black-Orange Gaming Chair",
          "details__url": "https://www.ryanscomputers.com/gigabyte-aorus-agc310-black-orange-gaming-chair",
          "visible__url": "gigabyte-aorus-agc310-black-orange-gaming-chair",
          "overviews": [
              "Type - Gaming Chair",
              "Cover Color - Black-Orange",
              "Cover Material - PU"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Model - Gigabyte AORUS AGC310, Type - Gaming Chair, Seat Size - 610 x 515 - 585 x 510mm, Foam Type - High Density Flexible Foam, Frame Construction - Steel, Cover Color - Black-Orange, Cover Material - PU, Adjustable Armrests - PP Soft Armrest, Adjustable Tilt Angle - 90 Degree - 160 Degree, Features - Lean Back and Relax with 160 Degree Adjustable Backrest, Bigger, Wider For Your Gaming Comfort, Achieve Perfect Arm Position with 2D Armrests, Stay Cool and Fresh with Breathable Design, Warranty - No Warranty"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Model",
                          "info": "Gigabyte AORUS AGC310"
                      },
                      {
                          "title": "Type",
                          "info": "Gaming Chair"
                      },
                      {
                          "title": "Seat Size",
                          "info": "610 x 515 - 585 x 510mm"
                      },
                      {
                          "title": "Foam Type",
                          "info": "High Density Flexible Foam"
                      },
                      {
                          "title": "Frame Construction",
                          "info": "Steel"
                      },
                      {
                          "title": "Cover Color",
                          "info": "Black &amp; Orange"
                      },
                      {
                          "title": "Cover Material",
                          "info": "PU"
                      },
                      {
                          "title": "Adjustable Armrests",
                          "info": "PP Soft Armrest"
                      },
                      {
                          "title": "Adjustable Tilt Angle",
                          "info": "90 Degree - 160 Degree"
                      },
                      {
                          "title": "Feature",
                          "info": "Lean Back and Relax with 160 Degree Adjustable Backrest, Bigger, Wider For Your Gaming Comfort, Achieve Perfect Arm Position with 2D Armrests, Stay Cool and Fresh with Breathable Design"
                      },
                      {
                          "title": "Warranty",
                          "info": "No warranty"
                      }
                  ]
              }
          ]
      },
      "visible__url": "gigabyte-aorus-agc310-black-orange-gaming-chair",
      "total__sell": 0,
      "ID": 2031
  },
  {
      "product__id": "08.02.006.176",
      "brand": "Asus",
      "child": "Asus",
      "parent": "All Monitor",
      "parent__father": "Monitor",
      "infos": {
          "child": "Asus",
          "parent": "All Monitor",
          "parent__father": "Monitor",
          "brand": "Asus",
          "product__id": "08.02.006.176",
          "images": [
              "/images/assests/9508_______08.02.006.176_______.png",
              "/images/assests/9509_______08.02.006.176_______.png",
              "/images/assests/9510_______08.02.006.176_______.png",
              "/images/assests/9511_______08.02.006.176_______.png",
              "/images/assests/19079_______08.02.006.176_______.png",
              "/images/assests/19080_______08.02.006.176_______.png",
              "/images/assests/19081_______08.02.006.176_______.png",
              "/images/assests/19082_______08.02.006.176_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-vp32aq-315-inch-wqhd-2560x1440-hdmi-dp-21630820514.webp"
          ],
          "quantity": 10,
          "current__price": 40500,
          "previous__price": 43830,
          "title": "Asus VP32AQ 31.5 Inch WQHD 2560x1440 HDMI DP Professional Gaming Monitor",
          "details__url": "https://www.ryanscomputers.com/asus-vp32aq-31.5-inch-wqhd-2560x1440-hdmi-dp-professional-gaming-monitor",
          "visible__url": "asus-vp32aq-31.5-inch-wqhd-2560x1440-hdmi-dp-professional-gaming-monitor",
          "overviews": [
              "Brand - Asus",
              "Model - Asus VP32AQ",
              "Series - Gaming Monitor",
              "Display Size (Inch) - 31.5 Inch",
              "Panel Type - IPS"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Asus, Model - Asus VP32AQ, Series - Gaming Monitor, Display Size (Inch) - 31.5 Inch, Display Type - 2K WQHD LED Display, Panel Type - IPS, Display Resolution - 2560 x 1440, Aspect Ratio - 16:9, Display Surface - Non-Glare, Contrast Ratio - 1000 : 1, Refresh Rate (Hz) - 75Hz, Color Gamut / Color Space - sRGB 100%, Color Bit / Bit Depth - 10 bit, Color Support / Display Color - 1073.7 Million, Response Time (ms) - 5ms (Gray to Gray), Horizontal Viewing Angle - 178 Degree, Vertical Viewing Angle - 178 Degree, High Dynamic Range (HDR) - HDR10, Dot Pitch - 0.272mm, DVI Port - No, VGA Port - No, HDMI Port - 1, Mini HDMI Port - No, Micro HDMI Port - No, DisplayPort (DP) - 1, Mini DisplayPort - No, USB - No, Thunderbolt - No, Headphone Jack - Yes, Speaker (Built-in) - Yes, Speaker Details - 2W x 2, Power Consumption - <25W, Tilt Adjustment - +8 Degree - 5 Degree, VESA Wall Mount Standard - 100 x 100mm, Lock Slot - Kensington Lock, Weight - 6.2Kg (Without Stand), 7.82Kg (With Stand), Dimensions - 714.6 x 423.7 x 50.4mm (Without Stand), 714.6 x 485.7 x 201.8mm (With Stand), Specialty - VRR Technology, GamePlus, SPLENDID Technology, Digital Signal Frequency, Others - Power Saving Mode: <0.5W, Power Off Mode: <0.3W, Voltage: 100-240V, 50/60Hz, Gross Weight: 9.8 Kg, Eye Care+ Technology: Yes, HDCP: Yes, 1.4, Color Temp. Selection: Yes (4 modes), Trace Free Technology: Yes, ASUS Smart Contrast Ratio (ASCR): 100000000:1, Warranty - 3 Year"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Asus"
                      },
                      {
                          "title": "Model",
                          "info": "Asus VP32AQ"
                      },
                      {
                          "title": "Series",
                          "info": "Gaming"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "31.5"
                      },
                      {
                          "title": "Display Type",
                          "info": "2K WQHD LED"
                      },
                      {
                          "title": "Panel Type",
                          "info": "IPS"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "2560x1440 (WxH) WQHD"
                      },
                      {
                          "title": "Aspect Ratio",
                          "info": "16:9"
                      },
                      {
                          "title": "Display Surface",
                          "info": "Non-Glare"
                      },
                      {
                          "title": "Contrast Ratio (TCR/DCR)",
                          "info": "1000:1"
                      },
                      {
                          "title": "Refresh Rate (Hz)",
                          "info": "75Hz"
                      },
                      {
                          "title": "Color Gamut / Color Space",
                          "info": "sRGB 100%"
                      },
                      {
                          "title": "Color Bit / Bit Depth",
                          "info": "10 bit"
                      },
                      {
                          "title": "Color Support / Display Color",
                          "info": "1073.7 Million"
                      },
                      {
                          "title": "Response Time (ms)",
                          "info": "5ms (Gray to Gray)"
                      },
                      {
                          "title": "Horizontal Viewing Angle",
                          "info": "178 Degree"
                      },
                      {
                          "title": "Vertical Viewing Angle",
                          "info": "178 Degree"
                      },
                      {
                          "title": "High Dynamic Range (HDR)",
                          "info": "HDR10"
                      },
                      {
                          "title": "Dot Pitch",
                          "info": "0.272mm"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "Micro HDMI Port",
                          "info": "No"
                      },
                      {
                          "title": "Display Port",
                          "info": "1"
                      },
                      {
                          "title": "Headphone Jack",
                          "info": "Yes"
                      },
                      {
                          "title": "Lock Slot",
                          "info": "Kensington Lock"
                      }
                  ]
              },
              {
                  "title": "Audio",
                  "infos": [
                      {
                          "title": "Speaker (Built-in)",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Adjustment",
                  "infos": [
                      {
                          "title": "Tilt Adjustment",
                          "info": "+8 Degree - 5 Degree"
                      },
                      {
                          "title": "VESA Wall Mount Standard",
                          "info": "100 x 100mm"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Power Consumption",
                          "info": "25W"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Weight (Kg)",
                          "info": "6.2Kg (Without Stand), 7.82Kg (With Stand)"
                      },
                      {
                          "title": "Dimensions",
                          "info": "714.6 x 423.7 x 50.4mm (Without Stand), 714.6 x 485.7 x 201.8mm (With Stand)"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Speaker Details",
                          "info": "2W x 2"
                      },
                      {
                          "title": "Specialty",
                          "info": "VRR Technology, GamePlus, SPLENDID Technology, Digital Signal Frequency"
                      },
                      {
                          "title": "Others",
                          "info": "Power Saving Mode: &lt;0.5W, Power Off Mode: &lt;0.3W, Voltage: 100-240V, 50/60Hz, Gross Weight: 9.8 Kg, Eye Care+ Technology: Yes, HDCP: Yes, 1.4, Color Temp. Selection: Yes (4 modes), Trace Free Technology: Yes, ASUS Smart Contrast Ratio (ASCR): 100000000:1"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-vp32aq-31.5-inch-wqhd-2560x1440-hdmi-dp-professional-gaming-monitor",
      "total__sell": 0,
      "ID": 1536
  },
  {
      "product__id": "58.02.006.58",
      "brand": "Asus",
      "child": "All In One PC",
      "parent": "Desktop PC",
      "parent__father": "Desktop PC and Server",
      "infos": {
          "child": "All In One PC",
          "parent": "Desktop PC",
          "parent__father": "Desktop PC and Server",
          "brand": "Asus",
          "product__id": "58.02.006.58",
          "images": [
              "/images/assests/10613_______58.02.006.58_______.png",
              "/images/assests/10614_______58.02.006.58_______.png",
              "/images/assests/10615_______58.02.006.58_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-vivo-aio-v161gart-intel-cdc-n4020-156-inch-11639370342.webp"
          ],
          "quantity": 10,
          "current__price": 43000,
          "previous__price": 46110,
          "title": "Asus Vivo AiO V161GART Intel CDC N4020 15.6 Inch HD Touch Display Black All in One PC #BD019M",
          "details__url": "https://www.ryanscomputers.com/asus-vivo-aio-v161gart-intel-cdc-n4020-15-6-inch-hd-touch-display-black-all-in-one-pc",
          "visible__url": "asus-vivo-aio-v161gart-intel-cdc-n4020-15-6-inch-hd-touch-display-black-all-in-one-pc",
          "overviews": [
              "Brand - Asus",
              "Model - Asus Vivo AiO V161GART",
              "Processor Brand - Intel",
              "Processor Type - Celeron Dual Core",
              "Processor Model - Intel CDC N4020",
              "Processor Base Frequency - 1.10 GHz",
              "Processor Max Turbo Frequency - 2.80 GHz",
              "Processor Core - 2",
              "Processor Thread - 2",
              "Display Size - 15.6 Inch",
              "Display Type - HD Touch Display",
              "Display Resolution - 1366 x 768",
              "Touch Screen - Yes",
              "Display Surface - Glossy",
              "Aspect Ratio - 16:9",
              "Memory Type - DDR4"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Brand - Asus, Model - Asus Vivo AiO V161GART, Processor Brand - Intel, Processor Type - Celeron Dual Core, Processor Model - Intel CDC N4020, Processor Base Frequency - 1.10 GHz, Processor Max Turbo Frequency - 2.80 GHz, Processor Core - 2, Processor Thread - 2, Processor Cache - 4MB, Display Size - 15.6 Inch, Display Type - HD Touch Display, Display Resolution - 1366 x 768, Touch Screen - Yes, Display Surface - Glossy, Aspect Ratio - 16:9, Memory (RAM) - 4GB, Memory Type - DDR4, SSD - 256GB, Optical Drive - No-ODD, Multimedia Card Slot - 1, Supported Multimedia Card - SD/SDHC/SDXC/MS/MS Pro/MMC, Graphics Chipset - Intel UHD Graphics, Graphics Memory Accesibility - Integrated, Graphics Memory - Shared, LAN - Ethernet RJ-45, WiFi - Wi-Fi 5 (802.11ac), Bluetooth - Bluetooth 4.1, USB - 4x USB 3.2 Gen 1 Type-A, HDMI Port - 1, D-SUB / VGA Port - 1, Audio Port - 1 x 3.5mm Combo Audio Jack, Speaker (Built-in) - Yes, Webcam - Yes, Webcam Details - HD Webcam, Keyboard - Wireless Keyboard, Mouse - Wireless Keyboard, Power Supply - 65W AC adapter, Security Lock Slot - Kensington Lock Slot, Operating System - Windows 10 Home, Dimension - 37.8 x 24.7 x 2.9mm, Weight - 2kg, Body Color - Black, Others - Power Output: 19V DC, 3.42A, 65W, Input: 100-240V AC 50/60Hz universal, Display: 200nits (NTSC 45%), Built-in-Microphone: Yes, 2 x COM Port, 1 x DC-in, 1 x Kensington lock, Form Factor - All-in-One PC, Part No - BA063T, Warranty - 3 Year"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Asus"
                      },
                      {
                          "title": "Model",
                          "info": "Asus Vivo AiO V161GART"
                      },
                      {
                          "title": "Part No",
                          "info": "BA063T"
                      }
                  ]
              },
              {
                  "title": "Processor",
                  "infos": [
                      {
                          "title": "Processor Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Processor Type.",
                          "info": "Celeron Dual Core"
                      },
                      {
                          "title": "Processor Model",
                          "info": "Intel CDC N4020"
                      },
                      {
                          "title": "Processor Base Frequency",
                          "info": "1.10 GHz"
                      },
                      {
                          "title": "Processor Max Turbo Frequency",
                          "info": "2.80 GHz"
                      },
                      {
                          "title": "Processor Core",
                          "info": "2"
                      },
                      {
                          "title": "Processor Thread",
                          "info": "2"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "4MB"
                      }
                  ]
              },
              {
                  "title": "Memory",
                  "infos": [
                      {
                          "title": "RAM",
                          "info": "4GB"
                      },
                      {
                          "title": "RAM Type",
                          "info": "DDR4"
                      }
                  ]
              },
              {
                  "title": "Storage",
                  "infos": [
                      {
                          "title": "SSD",
                          "info": "256GB"
                      }
                  ]
              },
              {
                  "title": "Graphics",
                  "infos": [
                      {
                          "title": "Graphics Chipset",
                          "info": "Intel UHD Graphics"
                      },
                      {
                          "title": "Graphics Memory Accessibility",
                          "info": "Integrated"
                      },
                      {
                          "title": "Graphics Memory",
                          "info": "Shared"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size",
                          "info": "15.6 Inch"
                      },
                      {
                          "title": "Display Type.",
                          "info": "HD Touch Display"
                      },
                      {
                          "title": "Display Resolution (Pixels)",
                          "info": "1366 x 768"
                      },
                      {
                          "title": "Touch Screen.",
                          "info": "Yes"
                      },
                      {
                          "title": "Display Surface",
                          "info": "Glossy"
                      },
                      {
                          "title": "Aspect Ratio",
                          "info": "16:9"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Optical Drive",
                          "info": "No"
                      },
                      {
                          "title": "Multimedia Card Slot",
                          "info": "1"
                      },
                      {
                          "title": "Supported Multimedia Card",
                          "info": "SD/SDHC/SDXC/MS/MS Pro/MMC"
                      },
                      {
                          "title": "USB Port",
                          "info": "4x USB 3.2 Gen 1 Type-A"
                      },
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "VGA/D-Sub",
                          "info": "1"
                      },
                      {
                          "title": "Security Lock Slot",
                          "info": "Kensington Lock Slot"
                      }
                  ]
              },
              {
                  "title": "Network & Connectivity",
                  "infos": [
                      {
                          "title": "LAN",
                          "info": "Ethernet RJ-45"
                      },
                      {
                          "title": "WiFi",
                          "info": "Wi-Fi 5 (802.11ac)"
                      },
                      {
                          "title": "Bluetooth",
                          "info": "Bluetooth 4.1"
                      }
                  ]
              },
              {
                  "title": "Audio & Camera",
                  "infos": [
                      {
                          "title": "Audio Port",
                          "info": "1 x 3.5mm Audio Combo jack"
                      },
                      {
                          "title": "Speaker (Built-in)",
                          "info": "Yes"
                      },
                      {
                          "title": "WebCam",
                          "info": "Yes"
                      },
                      {
                          "title": "WebCam Details",
                          "info": "HD Webcam"
                      }
                  ]
              },
              {
                  "title": "Software",
                  "infos": [
                      {
                          "title": "Operating System",
                          "info": "Windows 10 Home"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Keyboard",
                          "info": "Wireless Keyboard"
                      },
                      {
                          "title": "Mouse",
                          "info": "Wireless Mouse"
                      },
                      {
                          "title": "Power Supply",
                          "info": "65W AC adapter"
                      },
                      {
                          "title": "Dimensions",
                          "info": "37.8 x 24.7 x 2.9mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "2kg"
                      },
                      {
                          "title": "Color",
                          "info": "Black"
                      },
                      {
                          "title": "Form Factor",
                          "info": "All-in-One PC"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 year"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "Power Output: 19V DC, 3.42A, 65W, Input: 100-240V AC 50/60Hz universal, Display: 200nits (NTSC 45%), Built-in-Microphone: Yes, 2 x COM Port, 1 x DC-in, 1 x Kensington lock"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-vivo-aio-v161gart-intel-cdc-n4020-15-6-inch-hd-touch-display-black-all-in-one-pc",
      "total__sell": 0,
      "ID": 4576
  },
  {
      "product__id": "33.02.006.1400",
      "brand": "Asus",
      "child": "Gaming Laptop",
      "parent": "Gaming Laptop",
      "parent__father": "Gaming",
      "infos": {
          "child": "Gaming Laptop",
          "parent": "Gaming Laptop",
          "parent__father": "Gaming",
          "brand": "Asus",
          "product__id": "33.02.006.1400",
          "images": [
              "/images/assests/2849_______33.02.006.1400_______.png",
              "/images/assests/2850_______33.02.006.1400_______.png",
              "/images/assests/2851_______33.02.006.1400_______.png",
              "/images/assests/2852_______33.02.006.1400_______.png",
              "/images/assests/2853_______33.02.006.1400_______.png",
              "/images/assests/2854_______33.02.006.1400_______.png",
              "/images/assests/4916_______33.02.006.1400_______.png",
              "/images/assests/4917_______33.02.006.1400_______.png",
              "/images/assests/4918_______33.02.006.1400_______.png",
              "/images/assests/4919_______33.02.006.1400_______.png",
              "/images/assests/4920_______33.02.006.1400_______.png",
              "/images/assests/4921_______33.02.006.1400_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-rog-strix-g15-g513ie-amd-ryzen-7-4800h-156-11632638847.webp"
          ],
          "quantity": 10,
          "current__price": 115000,
          "previous__price": 122610,
          "title": "Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop #HN037T-G513IE",
          "details__url": "https://www.ryanscomputers.com/asus-rog-strix-g15-g513ie-amd-ryzen-7-4800h-15.6-inch-fhd-display-eclipse-gray-gaming-laptop",
          "visible__url": "asus-rog-strix-g15-g513ie-amd-ryzen-7-4800h-15.6-inch-fhd-display-eclipse-gray-gaming-laptop",
          "overviews": [
              "Laptop Brand - Asus",
              "Laptop Series - ROG Strix",
              "Processor Brand - AMD",
              "Processor Type - AMD Ryzen 7",
              "Processor Model - AMD Ryzen 7 4800H"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop"
              },
              {
                  "tag": "p",
                  "text": "Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop is a high range laptop in Bangladesh. Asus ROG Strix G15 G513IE is a Asus brand laptop. Right Now available the Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop includes all Ryans computers branches and our website."
              },
              {
                  "tag": "p",
                  "text": "Asus ROG Strix G15 G513IE comes with AMD Ryzen 7 4800H processor. The Processor base frequency is 2.90 GHz to 4.20 GHz. AMD Ryzen 7 4800H has 8 core and 16 Thread."
              },
              {
                  "tag": "p",
                  "text": "The Asus ROG Strix G15 G513IE laptop has DDR4 8GB RAM."
              },
              {
                  "tag": "p",
                  "text": "Storage & Graphics"
              },
              {
                  "tag": "p",
                  "text": "Let’s discuss Asus ROG Strix G15 G513IE laptop storage. 512GB SSD NVMe PCIe used in this laptop. The Asus laptop has 4GB Dedicated Nvidia RTX 3050 Ti Graphics."
              },
              {
                  "tag": "p",
                  "text": "Display & Ports & Slots"
              },
              {
                  "tag": "p",
                  "text": "The Asus ROG Strix G15 G513IE comes with a 15.6 inch FHD IPS LED display. Display Resolution is 1920 x 1080. The Asus laptop has Speaker. The laptop has wifi, bluetooth connection."
              },
              {
                  "tag": "p",
                  "text": "The laptop has Eclipse Gray color variation in Bangladesh. The Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop dimension is 354 x 259 x 20.6mm. It’s a lightweight laptop, 2.10 Kg only. Asus ROG Strix G15 G513IE is assembled in China."
              },
              {
                  "tag": "h2",
                  "text": "Latest Asus ROG Strix G15 G513IE laptop Price in Bangladesh"
              },
              {
                  "tag": "p",
                  "text": "The latest Asus ROG Strix G15 G513IE laptop price in BD is given above. You can buy the Asus ROG Strix G15 G513IE AMD Ryzen 7 4800H 15.6 Inch FHD Display Eclipse Gray Gaming Laptop from all Ryans computers Branches or our website. This Asus laptop is given 2 year (1 year for Battery) Warranty. Ryans computers ensure that you can claim warranty from any branches, where you can purchase doesn’t matter."
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Asus"
                      },
                      {
                          "title": "Model",
                          "info": "Asus ROG Strix G15 G513IE"
                      },
                      {
                          "title": "Laptop Series",
                          "info": "ROG Strix"
                      },
                      {
                          "title": "Part No",
                          "info": "HN037T-G513IE"
                      }
                  ]
              },
              {
                  "title": "Processor",
                  "infos": [
                      {
                          "title": "Processor Brand",
                          "info": "AMD"
                      },
                      {
                          "title": "Processor Type",
                          "info": "AMD Ryzen 7"
                      },
                      {
                          "title": "Processor Model",
                          "info": "AMD Ryzen 7 4800H"
                      },
                      {
                          "title": "Processor Base Frequency",
                          "info": "2.90 GHz"
                      },
                      {
                          "title": "Processor Max Turbo Frequency",
                          "info": "4.20 GHz"
                      },
                      {
                          "title": "Processor Core",
                          "info": "8"
                      },
                      {
                          "title": "Processor Thread",
                          "info": "16"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "12MB"
                      }
                  ]
              },
              {
                  "title": "Memory",
                  "infos": [
                      {
                          "title": "RAM",
                          "info": "8GB"
                      },
                      {
                          "title": "Installed RAM Details",
                          "info": "1 x 8GB Non-Removable"
                      },
                      {
                          "title": "RAM Type",
                          "info": "DDR4"
                      },
                      {
                          "title": "RAM Bus (MHz)",
                          "info": "3200MHz"
                      },
                      {
                          "title": "Total RAM Slot",
                          "info": "2"
                      },
                      {
                          "title": "Empty/Expansion RAM Slot",
                          "info": "1"
                      },
                      {
                          "title": "Max. RAM Support",
                          "info": "32GB"
                      }
                  ]
              },
              {
                  "title": "Storage",
                  "infos": [
                      {
                          "title": "Storage",
                          "info": "512GB SSD"
                      },
                      {
                          "title": "Installed SSD Type",
                          "info": "NVMe PCIe"
                      },
                      {
                          "title": "M.2/SSD Expansion Slot",
                          "info": "1"
                      },
                      {
                          "title": "Storage Upgrade",
                          "info": "Additional SSD Slot, Upgradeable Installed SSD"
                      }
                  ]
              },
              {
                  "title": "Graphics",
                  "infos": [
                      {
                          "title": "Graphics Chipset",
                          "info": "Nvidia RTX 3050 Ti Graphics"
                      },
                      {
                          "title": "Graphics Memory Accessibility",
                          "info": "Dedicated"
                      },
                      {
                          "title": "Graphics Memory",
                          "info": "4GB"
                      },
                      {
                          "title": "Graphics Memory Type",
                          "info": "GDDR6"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "15.6"
                      },
                      {
                          "title": "Display Type",
                          "info": "FHD IPS LED Display"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "1920x1080 (WxH) FHD"
                      },
                      {
                          "title": "Display Surface",
                          "info": "Anti-Glare"
                      },
                      {
                          "title": "Display Refresh Rate",
                          "info": "144 Hz"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Optical Drive",
                          "info": "No"
                      },
                      {
                          "title": "USB 3 Port",
                          "info": "3 x USB 3.2 Gen 1 Type-A"
                      },
                      {
                          "title": "USB C / Thunderbolt Port",
                          "info": "1 x USB 3.2 Gen 1 Type-C"
                      },
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "Headphone Port",
                          "info": "Combo"
                      },
                      {
                          "title": "Microphone Port",
                          "info": "Combo"
                      }
                  ]
              },
              {
                  "title": "Network & Connectivity",
                  "infos": [
                      {
                          "title": "WiFi",
                          "info": "Yes"
                      },
                      {
                          "title": "Bluetooth",
                          "info": "Bluetooth 5.1"
                      }
                  ]
              },
              {
                  "title": "Audio & Camera",
                  "infos": [
                      {
                          "title": "Audio Properties",
                          "info": "Dolby Atmos AI noise-canceling technology"
                      },
                      {
                          "title": "Speaker",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Keyboard",
                  "infos": [
                      {
                          "title": "Keyboard Back-lit",
                          "info": "Yes"
                      },
                      {
                          "title": "RGB Keyboard",
                          "info": "Yes"
                      },
                      {
                          "title": "Pointing Device",
                          "info": "Touchpad"
                      }
                  ]
              },
              {
                  "title": "Software",
                  "infos": [
                      {
                          "title": "Operating System",
                          "info": "Windows 10 Home"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Eclipse Gray"
                      },
                      {
                          "title": "Dimensions",
                          "info": "354 x 259 x 20.6mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "2.10 Kg"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Battery",
                          "info": "4 Cell"
                      },
                      {
                          "title": "Battery Capacity",
                          "info": "56 Wh"
                      },
                      {
                          "title": "Battery Type",
                          "info": "Li-ion"
                      },
                      {
                          "title": "Power Adapter",
                          "info": "200 W AC power adapter"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "2 Year (1 year for Battery)"
                      },
                      {
                          "title": "Warranty Claim Duration (Approximate)",
                          "info": "Estimated Warranty Claim Duration 20 Days. It may take additional time up to 40 days"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "Fast charging Technology, AURA SYNC, Reliable Wi-Fi 6 Networking , Bigger touchpad,"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-rog-strix-g15-g513ie-amd-ryzen-7-4800h-15.6-inch-fhd-display-eclipse-gray-gaming-laptop",
      "total__sell": 0,
      "ID": 2100
  },
  {
      "product__id": "33.02.002.912",
      "brand": "Acer",
      "child": "Gaming Laptop",
      "parent": "Gaming Laptop",
      "parent__father": "Gaming",
      "infos": {
          "child": "Gaming Laptop",
          "parent": "Gaming Laptop",
          "parent__father": "Gaming",
          "brand": "Acer",
          "product__id": "33.02.002.912",
          "images": [
              "/images/assests/2877_______33.02.002.912_______.png",
              "/images/assests/2878_______33.02.002.912_______.png",
              "/images/assests/2879_______33.02.002.912_______.png",
              "/images/assests/2880_______33.02.002.912_______.png",
              "/images/assests/4930_______33.02.002.912_______.png",
              "/images/assests/4931_______33.02.002.912_______.png",
              "/images/assests/4932_______33.02.002.912_______.png",
              "/images/assests/4933_______33.02.002.912_______.png",
              "https://www.ryanscomputers.com/storage/products/small/acer-nitro-5-an515-56-70k4-11th-gen-intel-core-i7-11622276667.webp"
          ],
          "quantity": 10,
          "current__price": 117000,
          "previous__price": 126400,
          "title": "Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD 144Hz Display Shale Black Gaming Laptop #NH.QBZSI.005",
          "details__url": "https://www.ryanscomputers.com/acer-nitro-5-an515-56-70k4-intel-core-i7-11370h-15.6-inch-fhd-display-shale-black-gaming-laptop",
          "visible__url": "acer-nitro-5-an515-56-70k4-intel-core-i7-11370h-15.6-inch-fhd-display-shale-black-gaming-laptop",
          "overviews": [
              "Laptop Brand - Acer",
              "Laptop Series - Nitro",
              "Processor Brand - Intel",
              "Processor Type - Core i7",
              "Processor Generation - 11th Gen",
              "Processor Model - Core i7 11370H",
              "Processor Max Turbo Frequency - 4.80 GHz"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD Display Shale Black Gaming Laptop"
              },
              {
                  "tag": "p",
                  "text": "Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD Display Shale Black Gaming Laptop is a high range laptop in Bangladesh. Acer Nitro 5 AN515-56-70K4 is a Acer brand laptop. Right Now available the Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD Display Shale Black Gaming Laptop includes all Ryans computers branches and our website."
              },
              {
                  "tag": "p",
                  "text": "Acer Nitro 5 AN515-56-70K4 comes with 11th Gen Intel Core i7 11370H processor. The Processor Max Turbo Frequency is 4.80 GHz. 11th Gen Intel Core i7 11370H has 4 core and 8 Thread."
              },
              {
                  "tag": "p",
                  "text": "The Acer Nitro 5 AN515-56-70K4 laptop has DDR4 8GB RAM."
              },
              {
                  "tag": "p",
                  "text": "Storage & Graphics"
              },
              {
                  "tag": "p",
                  "text": "Let’s discuss Acer Nitro 5 AN515-56-70K4 laptop storage. 1TB HDD SATA 7200 RPM & 256GB SSD NVMe PCIe used in this laptop. The Acer laptop has 4GB Dedicated Nvidia GTX 1650 Graphics."
              },
              {
                  "tag": "p",
                  "text": "Display & Ports & Slots"
              },
              {
                  "tag": "p",
                  "text": "The Acer Nitro 5 AN515-56-70K4 comes with a 15.6 inch FHD LED display. Display Resolution is 1920 x 1080 . The Acer laptop has Speaker. The WebCam offers you nice video calling, video recording, video streaming, clear picture capture, etc. The laptop has wifi & LAN connection."
              },
              {
                  "tag": "p",
                  "text": "The laptop has Shale Black color variation in Bangladesh. The Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD Display Shale Black Gaming Laptop dimension is 363.4 x 255 x 23.90 mm. It’s a lightweight laptop, 2.30 kg only. Acer Nitro 5 AN515-56-70K4 is assembled in China."
              },
              {
                  "tag": "h2",
                  "text": "Latest Acer Nitro 5 AN515-56-70K4 laptop Price in Bangladesh"
              },
              {
                  "tag": "p",
                  "text": "The latest Acer Nitro 5 AN515-56-70K4 laptop price in BD is given above. You can buy the Acer Nitro 5 AN515 56 70K4 Intel Core i7 11370H 15.6 Inch FHD Display Shale Black Gaming Laptop from all Ryans computers Branches or our website. This Acer laptop is given 2 Year (1 year for Battery and Adapter) Warranty. Ryans computers ensure that you can claim warranty from any branches, where you can purchase doesn’t matter."
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Acer"
                      },
                      {
                          "title": "Model",
                          "info": "Acer Nitro 5 AN515-56-70K4"
                      },
                      {
                          "title": "Laptop Series",
                          "info": "Nitro"
                      },
                      {
                          "title": "Part No",
                          "info": "NH.QBZSI.005"
                      }
                  ]
              },
              {
                  "title": "Processor",
                  "infos": [
                      {
                          "title": "Processor Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Processor Type",
                          "info": "Intel Core i7"
                      },
                      {
                          "title": "Generation",
                          "info": "11th (Intel)"
                      },
                      {
                          "title": "Processor Model",
                          "info": "Core i7 11370H"
                      },
                      {
                          "title": "Processor Max Turbo Frequency",
                          "info": "4.80 GHz"
                      },
                      {
                          "title": "Processor Core",
                          "info": "4"
                      },
                      {
                          "title": "Processor Thread",
                          "info": "8"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "12MB"
                      }
                  ]
              },
              {
                  "title": "Memory",
                  "infos": [
                      {
                          "title": "RAM",
                          "info": "8GB"
                      },
                      {
                          "title": "RAM Type",
                          "info": "DDR4"
                      },
                      {
                          "title": "Total RAM Slot",
                          "info": "2"
                      }
                  ]
              },
              {
                  "title": "Storage",
                  "infos": [
                      {
                          "title": "Storage",
                          "info": "1TB HDD+256GB SSD"
                      },
                      {
                          "title": "Installed HDD Type",
                          "info": "SATA"
                      },
                      {
                          "title": "HDD RPM",
                          "info": "7200 RPM"
                      },
                      {
                          "title": "Installed SSD Type",
                          "info": "NVMe PCIe"
                      }
                  ]
              },
              {
                  "title": "Graphics",
                  "infos": [
                      {
                          "title": "Graphics Chipset",
                          "info": "Nvidia GTX 1650 Graphics"
                      },
                      {
                          "title": "Graphics Memory Accessibility",
                          "info": "Dedicated"
                      },
                      {
                          "title": "Graphics Memory",
                          "info": "4GB"
                      },
                      {
                          "title": "Graphics Memory Type",
                          "info": "GDDR6"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "15.6"
                      },
                      {
                          "title": "Display Type",
                          "info": "FHD LED"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "1920x1080 (WxH) FHD"
                      },
                      {
                          "title": "Display Refresh Rate",
                          "info": "144 Hz"
                      },
                      {
                          "title": "Display Features",
                          "info": "Display Screen Technology: ComfyView, Display Screen Technology: IPS, Aspect Ratio: 16:9, HDCP: Yes"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Optical Drive",
                          "info": "No"
                      },
                      {
                          "title": "USB 3 Port",
                          "info": "3 x USB 3.2 Gen 1 Type-A"
                      },
                      {
                          "title": "USB C / Thunderbolt Port",
                          "info": "1 x USB 3.2 Gen 2 Type-C"
                      },
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "Headphone Port",
                          "info": "Combo"
                      },
                      {
                          "title": "Microphone Port",
                          "info": "Combo"
                      },
                      {
                          "title": "Security Lock Slot",
                          "info": "Kensington lock"
                      }
                  ]
              },
              {
                  "title": "Network & Connectivity",
                  "infos": [
                      {
                          "title": "LAN",
                          "info": "Ethernet RJ-45"
                      },
                      {
                          "title": "WiFi",
                          "info": "802.11 a, b, g, n, ac, ax"
                      }
                  ]
              },
              {
                  "title": "Audio & Camera",
                  "infos": [
                      {
                          "title": "Speaker",
                          "info": "Yes"
                      },
                      {
                          "title": "Microphone.",
                          "info": "Yes"
                      },
                      {
                          "title": "WebCam",
                          "info": "HD Webcam"
                      }
                  ]
              },
              {
                  "title": "Keyboard",
                  "infos": [
                      {
                          "title": "Keyboard Back-lit",
                          "info": "Yes"
                      },
                      {
                          "title": "RGB Keyboard",
                          "info": "Yes"
                      },
                      {
                          "title": "Num Key pad",
                          "info": "Yes"
                      },
                      {
                          "title": "Pointing Device",
                          "info": "TouchPad"
                      }
                  ]
              },
              {
                  "title": "Security",
                  "infos": [
                      {
                          "title": "Security Chip",
                          "info": "Firmware TPM"
                      }
                  ]
              },
              {
                  "title": "Software",
                  "infos": [
                      {
                          "title": "Operating System",
                          "info": "Windows 10 Home"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Shale Black"
                      },
                      {
                          "title": "Dimensions",
                          "info": "363.4 x 255 x 23.90 mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "2.30 kg"
                      },
                      {
                          "title": "Package Content",
                          "info": "Nitro 5 AN515-56-70K4 Gaming Laptop, Lithium Ion Battery, AC Adapter"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Battery",
                          "info": "4 Cell"
                      },
                      {
                          "title": "Battery Capacity",
                          "info": "57Wh"
                      },
                      {
                          "title": "Battery Type",
                          "info": "Lithium Ion"
                      },
                      {
                          "title": "Power Adapter",
                          "info": "135W AC adapter"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "2 year (Battery, Adapter 1 year)"
                      },
                      {
                          "title": "Warranty Claim Duration (Approximate)",
                          "info": "Estimated Warranty Claim Duration 20 Days. It may take additional time up to 40 days"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "TouchPad Features: Multi-touch Gesture, Number of Microphones: 2"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "acer-nitro-5-an515-56-70k4-intel-core-i7-11370h-15.6-inch-fhd-display-shale-black-gaming-laptop",
      "total__sell": 0,
      "ID": 2102
  },
  {
      "product__id": "08.02.006.78",
      "brand": "Asus",
      "child": "Asus",
      "parent": "All Monitor",
      "parent__father": "Monitor",
      "infos": {
          "child": "Asus",
          "parent": "All Monitor",
          "parent__father": "Monitor",
          "brand": "Asus",
          "product__id": "08.02.006.78",
          "images": [
              "/images/assests/19327_______08.02.006.78_______.png",
              "/images/assests/19328_______08.02.006.78_______.png",
              "/images/assests/19329_______08.02.006.78_______.png",
              "/images/assests/19330_______08.02.006.78_______.png",
              "/images/assests/19331_______08.02.006.78_______.png",
              "/images/assests/19332_______08.02.006.78_______.png",
              "https://www.ryanscomputers.com/storage/products/small/asus-proart-pa328q-32-inch-4k-uhd-3840x2160-11543142410.webp"
          ],
          "quantity": 10,
          "current__price": 125000,
          "previous__price": 135080,
          "title": "Asus ProArt PA328Q 32 Inch 4K UHD (3840x2160) Flicker free Professional IPS Monitor with 100% sRGB Accuracy and Dual 3W Speaker (2xHDMIv1.4, 1xMiniDP1.2, 1xDP1.2, 4xUSB3)",
          "details__url": "https://www.ryanscomputers.com/asus-proart-pa328q-32-inch-4k-uhd-3840x2160-flicker-free-professional-ips-monitor-with-100-srgb-accuracy-and-dual-3w-speaker-2xhdmiv14-1xminidp12-1xdp12-4xusb3",
          "visible__url": "asus-proart-pa328q-32-inch-4k-uhd-3840x2160-flicker-free-professional-ips-monitor-with-100-srgb-accuracy-and-dual-3w-speaker-2xhdmiv14-1xminidp12-1xdp12-4xusb3",
          "overviews": [
              "Asus ProArt PA328Q",
              "Shape - Widescreen",
              "Display Size (Inch) - 32 Inch",
              "Panel Type - IPS",
              "Display Resolution - 3840 x 2160"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "h2",
                  "text": "ASUS ProArt PA328Q"
              },
              {
                  "tag": "p",
                  "text": "                     "
              },
              {
                  "tag": "p",
                  "text": "ASUS ProArt PA328Q Professional Monitor - 32\" 4K UHD(3840 x 2160), IPS, Color Accuracy △E< 2, Flicker free"
              },
              {
                  "tag": "ul",
                  "text": "Professional-grade 32-inch 4K/UHD display with four times the pixel density of Full HD displays.\nFactory pre-calibrated, industry-leading color accuracy with 100% sRGB and Rec. 709 color space support.\nExtensive connectivity with HDMI, DisplayPort 1.2, and MHL 3.0 for smooth 4K/UHD content playback.\nASUS Eye Care Technology with TÜV Rheinland-certified Flicker-free technology which eliminates onscreen flicker\nAdjust for maximum comfort with ergonomic tilt, swivel, pivot and height adjustments plus wall-mount capability. PA328Q is a recipient of a 2014 Red Dot Award for its outstanding design."
              },
              {
                  "tag": "h2",
                  "text": "Impeccable 4K/UHD visuals"
              },
              {
                  "tag": "p",
                  "text": "Open your eyes to breathtaking levels of detail with the ASUS PA328Q true 4K ultra-high definition (4K/UHD) monitor. It features a super-narrow bezel design and a 16:9 aspect, 32-inch panel to give you stunning visuals in resolutions of up to 3840 x 2160."
              },
              {
                  "tag": "h2",
                  "text": "Enjoy an expansive workspace"
              },
              {
                  "tag": "p",
                  "text": "PA328Q gives you 300% more onscreen space to work with than similarly-sized Full HD displays, allowing you to spread out your various work windows for more productive multitasking."
              },
              {
                  "tag": "h2",
                  "text": "Immersing you in truly expressive color"
              },
              {
                  "tag": "p",
                  "text": "Revel in pure, expressive hues thanks to accurate, true-to-life color reproduction. Each PA328Q monitor is factory pre-calibrated to guarantee industry-leading color accuracy (∆E ≤ 2), so your images are accurately reproduced onscreen, allowing you to see exactly how your work is going to look when it's finished."
              },
              {
                  "tag": "p",
                  "text": "The PA328Q also comes with 91 - 103% Uniformity Compensation to guard against brightness and chroma (color) fluctuations on different parts of the screen."
              },
              {
                  "tag": "h2",
                  "text": "100% sRGB and Rec. 709 color space support for vibrant images"
              },
              {
                  "tag": "p",
                  "text": "Appreciate the wonders of beautiful blue skies and lush green forests through a wide-view angle In-plane Switching Technology display with 350cd/m² brightness and 100,000,000:1 ASUS Smart Contrast Ratio. The PA328Q features supports 100% sRGB color space, as well as Rec. 709 color space for video production.\nPA328Q offers 10-bit color to display over one billion colors. It uses a 12-bit internal lookup table (LUT) and supports Gamma values of 2.4, 2.2 and 1.8 to give you natural-looking images as well as smoother transitions between hues.\nThere's also customized hue and saturation control with 6-axis color adjustment, so you can adjust red, green, blue, cyan, magenta and yellow hues."
              },
              {
                  "tag": "h2",
                  "text": "Smooth 4K/UHD content playback"
              },
              {
                  "tag": "p",
                  "text": "Be immersed in stunning 4K/UHD visuals with the PA328Q. It is equipped with DisplayPort 1.2, mini-DisplayPort 1.2, two HDMI ports, and a HDMI-1 / MHL 3.0 port*. PA328Q supports 4K/UHD content playback at 60Hz through HDMI-1 port or DisplayPort 1.2, and 30Hz through HDMI-2 port or HDMI-3 port or MHL 3.0. With a 6ms gray-to-gray response time, the PA328Q gives you smooth video playback and enhanced visuals for work and play."
              },
              {
                  "tag": "p",
                  "text": "Note*\n1. HDMI-1 port supports 4K/UHD playback at 60Hz and the YCbCr 4:2:0 color format\n2. HDMI-2, HDMI-3, and MHL 3.0 ports support 4K/UHD playback at 30Hz\n3. HDMI-1 / MHL 3.0 port both provide HDCP 2.2 copy protection"
              },
              {
                  "tag": "h2",
                  "text": "User-friendly features"
              },
              {
                  "tag": "p",
                  "text": "Increase productivity and work smarter with ASUS QuickFit Virtual Scale. PA328Q provides you with an onscreen grid overlay so you can align and preview photos and documents in their actual sizes prior to printing."
              },
              {
                  "tag": "p",
                  "text": "There's also an intuitive 5-way navigation joystick so you can easily access and switch OSD settings on the onscreen menu."
              },
              {
                  "tag": "h2",
                  "text": "No more tired eyes with ASUS Eye Care technology"
              },
              {
                  "tag": "p",
                  "text": "When you're spending countless hours working on a project, it's important to have a display with Flicker-free and Low Blue Light technologies to reduce instances of strained eyes. Say goodbye to tired eyes with ASUS Eye Care technology."
              },
              {
                  "tag": "p",
                  "text": "PA328Q has undergone stringent performance tests and is certified flicker-free by TÜV Rheinland laboratories, a global provider of technical, safety, and certification services"
              },
              {
                  "tag": "h2",
                  "text": "Red Dot Award-winning ergonomic"
              },
              {
                  "tag": "p",
                  "text": "Red Dot AwardThe ideal viewing position is always within reach with the PA328Q. With a slim profile and ergonomically-designed stand with tilt, swivel, pivot, and height adjustments, the PA328Q provides you with a comfortable viewing angle. It's versatile too, the ability to pivot the screen 90 degrees for use in Portrait mode comes in handy when working with websites or long documents. PA328Q is a recipient of 2014 Red Dot Award for its outstanding design"
              },
              {
                  "tag": "p",
                  "text": " "
              },
              {
                  "tag": "p",
                  "text": "Brand - Asus, Model - Asus ProArt PA328Q, Series - Professional, Shape - Widescreen, Display Size (Inch) - 32 Inch, Display Type - 4K UHD Display, Panel Type - IPS, Touch Screen - No, Display Resolution - 3840 x 2160, Aspect Ratio - 16:9, Display Surface - Non-Glare, Maximum Brightness (cd/m2) - 350 cd/m2, Contrast Ratio - 100000000:1 (ASCR), Refresh Rate (Hz) - 75Hz, Color Gamut / Color Space - sRGB 100%, Color Bit / Bit Depth - 10 bit, Color Support / Display Color - 1.07 Billion, Response Time (ms) - 6ms (Gray to Gray), Horizontal Viewing Angle - 178 degree, Vertical Viewing Angle - 178 degree, Dot Pitch - 0.1845 mm, DVI Port - No, VGA Port - No, HDMI Port - 2, DisplayPort (DP) - 1, Mini DisplayPort - No, USB - 4 x USB3.0, Thunderbolt - No, Speaker (Built-in) - 3W x 2 Stereo RMS, Power Consumption - 138.3 W, Certifications - BSMI, CB, CCC, CE, C-Tick, CU, ErP, FCC, ISO-9241-307, J-MOSS, KCC, Mac Compliance, PSE, RoHS, TCO7.0, TUV-Ergo, TUV-GS, UkrSEPRO, UL/cUL, VCCI, WEEE, WHQL, TUV Flicker-free, KC, eStandby, Operating System Compatibility - Windows 7, 8, Height Adjustment - 0 - 130 mm, Swivel Adjustment - +60 degree - -60 degree, Tilt Adjustment - +20 degree - -5 degree, VESA Wall Mount Standard - 100 x 100 mm, Lock Slot - Kensington Lock, Body Color - Black, Weight - 11.68Kg, Dimensions - 734.4 x 615 x 240mm (with Stand), 734.4 x 431 x 66.85mm (without Stand), Specialty - 4K UHD (3840x2160) Flicker free Professional IPS Monitor with 100% sRGB Accuracy and Dual 3W Speaker, Professional-grade 32-Inch 4K/UHD display with four times the pixel density of Full HD displays, Factory pre-calibrated, industry-leading color accuracy with 100% sRGB and Rec. 709 color space support, Extensive connectivity with HDMI, DisplayPort 1.2, and MHL 3.0 for smooth 4K/UHD content playback, ASUS Eye Care Technology with T??V Rheinland-certified Flicker-free technology which eliminates onscreen flicker, SPLENDID Video Preset Modes (sRGB Mode/Scenery Mode/Standard Mode/User Mode 1/User Mode 2/Reading Mode/Darkroom Mode), QuickFit (Letter/A4/A3/ B4/B5/Alignment Grid/Photo Modes), Others - 1 x Mini DisplayPort 1.2, Panel Size: Wide Screen 16:9, Panel Backlight / Type : In-Plane Switching, Display Surface: Non-glare, Pixel Pitch : 0.1845mm, Display Colors : 1073.7M (10bit), Look-up Table :12-bit, Trace Free Technology : Yes, Color Space : sRGB (100% Coverage)/Rec. 709 support, SPLENDID Video Preset Modes : 7 Modes, Color Temperature Selection : 4 Modes, Gamma adjustment : Yes (Support Gamma 1.8/2.2/2.4 ), Color Adjustment : 6-axis adjustment(R,G,B,C,M,Y), QuickFit (modes) : Yes, Picture-in-Picture : Yes, Picture-by-Picture : Yes, Low Blue Light : Yes, HDCP support : Yes, VividPixel : Yes, VESA Wall Mounting : 100x100mm, Super Narrow Bezel Design : Yes, Quick Release Stand Design : Yes, Kensington lock, Part No - PA328Q, Accessories - Mini-DisplayPort-to-DisplayPort cable, Power cord, USB 3.0 cable, HDMI cable, Warranty - 3 year, Country of Origin - Taiwan, Made in/ Assemble - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Asus"
                      },
                      {
                          "title": "Model",
                          "info": "ASUS ProArt PA328Q"
                      },
                      {
                          "title": "Shape",
                          "info": "Widescreen"
                      },
                      {
                          "title": "Part No",
                          "info": "PA328Q"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "32"
                      },
                      {
                          "title": "Display Type",
                          "info": "4K UHD"
                      },
                      {
                          "title": "Panel Type",
                          "info": "IPS"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "3840x2160 (WxH) 4K UHD"
                      },
                      {
                          "title": "Aspect Ratio",
                          "info": "16:9"
                      },
                      {
                          "title": "Display Surface",
                          "info": "Non-Glare"
                      },
                      {
                          "title": "Brightness (cd/m2)",
                          "info": "350cd/m2"
                      },
                      {
                          "title": "Contrast Ratio",
                          "info": "100000000:1 (ASCR)"
                      },
                      {
                          "title": "Refresh Rate (Hz)",
                          "info": "75Hz"
                      },
                      {
                          "title": "Adaptive-Sync Technology",
                          "info": "No"
                      },
                      {
                          "title": "Color Gamut / Color Space",
                          "info": "sRGB 100%"
                      },
                      {
                          "title": "Color Bit / Bit Depth",
                          "info": "10 bit"
                      },
                      {
                          "title": "Color Support / Display Color",
                          "info": "1.07 Billion"
                      },
                      {
                          "title": "Response Time (ms)",
                          "info": "6ms (Gray to Gray)"
                      },
                      {
                          "title": "Horizontal Viewing Angle",
                          "info": "178 degree"
                      },
                      {
                          "title": "Vertical Viewing Angle",
                          "info": "178 degree"
                      },
                      {
                          "title": "Dot Pitch",
                          "info": "0.1845 mm"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "HDMI Port",
                          "info": "2"
                      },
                      {
                          "title": "DisplayPort (DP)",
                          "info": "1"
                      },
                      {
                          "title": "USB Port",
                          "info": "4 x USB 3.0"
                      },
                      {
                          "title": "Lock Slot",
                          "info": "Kensington Lock"
                      }
                  ]
              },
              {
                  "title": "Audio",
                  "infos": [
                      {
                          "title": "Speaker (Built-in)",
                          "info": "3W x 2 Stereo RMS"
                      }
                  ]
              },
              {
                  "title": "Adjustment",
                  "infos": [
                      {
                          "title": "Height Adjustment",
                          "info": "0 - 130 mm"
                      },
                      {
                          "title": "Swivel Adjustment",
                          "info": "+60 degree - -60 degree"
                      },
                      {
                          "title": "Tilt Adjustment",
                          "info": "+20 degree - -5 degree"
                      },
                      {
                          "title": "VESA Wall Mount Standard",
                          "info": "100 x 100 mm"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Power Consumption",
                          "info": "138.3 W"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Black"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "11.68Kg"
                      },
                      {
                          "title": "Dimensions",
                          "info": "734.4 x 615 x 240mm (with Stand), 734.4 x 431 x 66.85mm (without Stand)"
                      },
                      {
                          "title": "Accessories",
                          "info": "Mini-DisplayPort-to-DisplayPort cable, Power cord, USB 3.0 cable, HDMI cable"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "3 year"
                      }
                  ]
              },
              {
                  "title": "Software",
                  "infos": [
                      {
                          "title": "Certifications",
                          "info": "BSMI, CB, CCC, CE, C-Tick, CU, ErP, FCC, ISO-9241-307, J-MOSS, KCC, Mac Compliance, PSE, RoHS, TCO7.0, TUV-Ergo, TUV-GS, UkrSEPRO, UL/cUL, VCCI, WEEE, WHQL, TUV Flicker-free, KC, eStandby"
                      },
                      {
                          "title": "Operating System Compatibility",
                          "info": "Windows 7, 8"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Specialty",
                          "info": "4K UHD (3840x2160) Flicker free Professional IPS Monitor with 100% sRGB Accuracy and Dual 3W Speaker, Professional-grade 32-Inch 4K/UHD display with four times the pixel density of Full HD displays, Factory pre-calibrated, industry-leading color accuracy with 100% sRGB and Rec. 709 color space support, Extensive connectivity with HDMI, DisplayPort 1.2, and MHL 3.0 for smooth 4K/UHD content playback, ASUS Eye Care Technology with T??V Rheinland-certified Flicker-free technology which eliminates onscreen flicker, SPLENDID Video Preset Modes (sRGB Mode/Scenery Mode/Standard Mode/User Mode 1/User Mode 2/Reading Mode/Darkroom Mode), QuickFit (Letter/A4/A3/ B4/B5/Alignment Grid/Photo Modes)"
                      },
                      {
                          "title": "Others",
                          "info": "1 x Mini DisplayPort 1.2, Panel Size: Wide Screen 16:9, Panel Backlight / Type : In-Plane Switching, Display Surface: Non-glare, Pixel Pitch : 0.1845mm, Display Colors : 1073.7M (10bit), Look-up Table :12-bit, Trace Free Technology : Yes, Color Space : sRGB (100% Coverage)/Rec. 709 support, SPLENDID Video Preset Modes : 7 Modes, Color Temperature Selection : 4 Modes, Gamma adjustment : Yes (Support Gamma 1.8/2.2/2.4 ), Color Adjustment : 6-axis adjustment(R,G,B,C,M,Y), QuickFit (modes) : Yes, Picture-in-Picture : Yes, Picture-by-Picture : Yes, Low Blue Light : Yes, HDCP support : Yes, VividPixel : Yes, VESA Wall Mounting : 100x100mm, Super Narrow Bezel Design : Yes, Quick Release Stand Design : Yes, Kensington lock"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "asus-proart-pa328q-32-inch-4k-uhd-3840x2160-flicker-free-professional-ips-monitor-with-100-srgb-accuracy-and-dual-3w-speaker-2xhdmiv14-1xminidp12-1xdp12-4xusb3",
      "total__sell": 0,
      "ID": 1557
  },
  {
      "product__id": "33.02.018.75",
      "brand": "Gigabyte",
      "child": "Gaming Laptop",
      "parent": "Gaming Laptop",
      "parent__father": "Gaming",
      "infos": {
          "child": "Gaming Laptop",
          "parent": "Gaming Laptop",
          "parent__father": "Gaming",
          "brand": "Gigabyte",
          "product__id": "33.02.018.75",
          "images": [
              "/images/assests/3141_______33.02.018.75_______.png",
              "/images/assests/3142_______33.02.018.75_______.png",
              "/images/assests/3143_______33.02.018.75_______.png",
              "/images/assests/3144_______33.02.018.75_______.png",
              "/images/assests/3145_______33.02.018.75_______.png",
              "/images/assests/4983_______33.02.018.75_______.png",
              "/images/assests/4984_______33.02.018.75_______.png",
              "/images/assests/4985_______33.02.018.75_______.png",
              "/images/assests/4986_______33.02.018.75_______.png",
              "/images/assests/4987_______33.02.018.75_______.png",
              "https://www.ryanscomputers.com/storage/products/small/gigabyte-aorus-15p-xd-intel-core-i7-11800h-156-11643188507.webp"
          ],
          "quantity": 10,
          "current__price": 232000,
          "previous__price": 250640,
          "title": "Gigabyte AORUS 15P XD Intel Core i7 11800H 15.6 Inch FHD Display Black Gaming Laptop",
          "details__url": "https://www.ryanscomputers.com/gigabyte-aorus-15p-xd-intel-core-i7-11800h-15.6-inch-fhd-display-black-gaming-laptop",
          "visible__url": "gigabyte-aorus-15p-xd-intel-core-i7-11800h-15.6-inch-fhd-display-black-gaming-laptop",
          "overviews": [
              "Laptop Brand - Gigabyte",
              "Laptop Series - AORUS",
              "Processor Brand - Intel",
              "Processor Type - Intel Core i7",
              "Processor Generation - 11th (Intel)",
              "Processor Model - Core i7 11800H",
              "Processor Base Frequency - 2.30 GHz",
              "Processor Max Turbo Frequency - 4.60 GHz"
          ],
          "details": [
              {
                  "tag": "h2",
                  "text": "Details"
              },
              {
                  "tag": "p",
                  "text": "Laptop Brand - Gigabyte, Laptop Model - Gigabyte AORUS 15P XD, Laptop Series - AORUS, Processor Brand - Intel, Processor Type - Intel Core i7, Processor Generation - 11th (Intel), Processor Model - Core i7 11800H, Processor Base Frequency - 2.30 GHz, Processor Max Turbo Frequency - 4.60 GHz, Processor Core - 8, Processor Thread - 16, Processor Cache - 24MB, Chipset - Mobile Intel HM570 Express, Display Size - 15.6 Inch, Display Technology - FHD IPS LED Display, Display Resolution - 1920 x 1080, Display Surface - AntiGlare, Touch Display - No, Display Refresh Rate - 240Hz, Display Bazel - Thin Bezel, Display Features - 72% NTSC, Memory (RAM) - 16GB, Memory Type - DDR4, Memory Bus (MHz) - 3200MHz, Total Memory Slot - 2, Max Memory Support - 64GB, Storage - 1TB SSD, Installed SSD Type - NVMe PCIe, Optical Drive - No-ODD, Multimedia Card Slot - 1, Supported Multimedia Card - UHS-ll SD Card Reader, Graphics Chipset - Nvidia RTX 3070 Max-Q, Graphics Memory Accessibility - Dedicated, Graphics Memory - 8GB, Graphics Memory Type - GDDR6, LAN - 1, WiFi - Wi-Fi 6, Bluetooth - Bluetooth 5.0, USB 3 Port - 3 x USB 3.2 Gen 1 Type-A, USB C / Thunderbolt Port - 1 x Thunderbolt 4 (Type-C), HDMI Port - 1, Mini DP Port - 1, Headphone Port - Combo, Microphone Port - Combo, Audio Properties - DTS:X Ultra Audio Technology, Speaker - 2 x 2 Watt, Microphone - Yes, WebCam - HD Camera, Keyboard Back-lit - Yes, Battery Capacity - 99Wh, Battery Type - Li-ion polymer, Power Adapter - 230W, Operating System - Windows 10 Home, Color - Black, Dimension (W x D x H) - 35.7 x 254 x 23.6-27.4mm, Weight - 2.2 kg, Others - I/O Ports: 1 x DC-in-Jack, 1 x RJ-45, Warranty - 2 Year (1 year for Battery and Adapter), Country of Origin - Taiwan, Made in / Assembled in - China"
              }
          ],
          "specifications": [
              {
                  "title": "General",
                  "infos": [
                      {
                          "title": "Brand",
                          "info": "Gigabyte"
                      },
                      {
                          "title": "Model",
                          "info": "Gigabyte AORUS 15P XD"
                      },
                      {
                          "title": "Laptop Series",
                          "info": "AORUS"
                      }
                  ]
              },
              {
                  "title": "Processor",
                  "infos": [
                      {
                          "title": "Processor Brand",
                          "info": "Intel"
                      },
                      {
                          "title": "Processor Type",
                          "info": "Intel Core i7"
                      },
                      {
                          "title": "Generation",
                          "info": "11th (Intel)"
                      },
                      {
                          "title": "Processor Model",
                          "info": "Core i7 11800H"
                      },
                      {
                          "title": "Processor Base Frequency",
                          "info": "2.30 GHz"
                      },
                      {
                          "title": "Processor Max Turbo Frequency",
                          "info": "4.60 GHz"
                      },
                      {
                          "title": "Processor Core",
                          "info": "8"
                      },
                      {
                          "title": "Processor Thread",
                          "info": "16"
                      },
                      {
                          "title": "CPU Cache",
                          "info": "24MB"
                      },
                      {
                          "title": "Chipset.",
                          "info": "Mobile Intel HM570 Express"
                      }
                  ]
              },
              {
                  "title": "Memory",
                  "infos": [
                      {
                          "title": "RAM",
                          "info": "16GB"
                      },
                      {
                          "title": "RAM Type",
                          "info": "DDR4"
                      },
                      {
                          "title": "RAM Bus (MHz)",
                          "info": "3200MHz"
                      },
                      {
                          "title": "Total RAM Slot",
                          "info": "2"
                      },
                      {
                          "title": "Max. RAM Support",
                          "info": "64GB"
                      }
                  ]
              },
              {
                  "title": "Storage",
                  "infos": [
                      {
                          "title": "Storage",
                          "info": "1TB SSD"
                      },
                      {
                          "title": "Installed SSD Type",
                          "info": "NVMe PCIe"
                      }
                  ]
              },
              {
                  "title": "Graphics",
                  "infos": [
                      {
                          "title": "Graphics Chipset",
                          "info": "Nvidia RTX 3070 Max-Q"
                      },
                      {
                          "title": "Graphics Memory Accessibility",
                          "info": "Dedicated"
                      },
                      {
                          "title": "Graphics Memory",
                          "info": "8GB"
                      },
                      {
                          "title": "Graphics Memory Type",
                          "info": "GDDR6"
                      }
                  ]
              },
              {
                  "title": "Display",
                  "infos": [
                      {
                          "title": "Display Size (Inch)",
                          "info": "15.6"
                      },
                      {
                          "title": "Display Type",
                          "info": "FHD IPS LED Display"
                      },
                      {
                          "title": "Display Resolution",
                          "info": "1920x1080 (WxH) FHD"
                      },
                      {
                          "title": "Display Surface",
                          "info": "AntiGlare"
                      },
                      {
                          "title": "Touch Screen",
                          "info": "No"
                      },
                      {
                          "title": "Display Refresh Rate",
                          "info": "240 Hz"
                      },
                      {
                          "title": "Display Bazel",
                          "info": "Thin Bezel"
                      },
                      {
                          "title": "Display Features",
                          "info": "72% NTSC"
                      }
                  ]
              },
              {
                  "title": "Ports & Slots",
                  "infos": [
                      {
                          "title": "Optical Drive",
                          "info": "No"
                      },
                      {
                          "title": "Multimedia Card Slot",
                          "info": "1"
                      },
                      {
                          "title": "Supported Multimedia Card",
                          "info": "UHS-ll SD Card Reader"
                      },
                      {
                          "title": "USB 3 Port",
                          "info": "3 x USB 3.2 Gen 1 Type-A"
                      },
                      {
                          "title": "USB C / Thunderbolt Port",
                          "info": "1 x Thunderbolt 4 (Type-C)"
                      },
                      {
                          "title": "HDMI Port",
                          "info": "1"
                      },
                      {
                          "title": "Mini DP Port",
                          "info": "1"
                      },
                      {
                          "title": "Headphone Port",
                          "info": "Combo"
                      },
                      {
                          "title": "Microphone Port",
                          "info": "Combo"
                      }
                  ]
              },
              {
                  "title": "Network & Connectivity",
                  "infos": [
                      {
                          "title": "LAN",
                          "info": "1"
                      },
                      {
                          "title": "WiFi",
                          "info": "Wi-Fi 6"
                      },
                      {
                          "title": "Bluetooth",
                          "info": "Bluetooth 5.0"
                      }
                  ]
              },
              {
                  "title": "Audio & Camera",
                  "infos": [
                      {
                          "title": "Audio Properties",
                          "info": "DTS:X Ultra Audio Technology"
                      },
                      {
                          "title": "Speaker",
                          "info": "2 x 2 Watt"
                      },
                      {
                          "title": "Microphone.",
                          "info": "Yes"
                      },
                      {
                          "title": "WebCam",
                          "info": "HD Camera"
                      }
                  ]
              },
              {
                  "title": "Keyboard",
                  "infos": [
                      {
                          "title": "Keyboard Back-lit",
                          "info": "Yes"
                      }
                  ]
              },
              {
                  "title": "Software",
                  "infos": [
                      {
                          "title": "Operating System",
                          "info": "Windows 10 Home"
                      }
                  ]
              },
              {
                  "title": "Physical Description",
                  "infos": [
                      {
                          "title": "Color",
                          "info": "Black"
                      },
                      {
                          "title": "Dimensions",
                          "info": "35.7 x 254 x 23.6-27.4mm"
                      },
                      {
                          "title": "Weight (Kg)",
                          "info": "2.2 kg"
                      }
                  ]
              },
              {
                  "title": "Power",
                  "infos": [
                      {
                          "title": "Battery Capacity",
                          "info": "99Wh"
                      },
                      {
                          "title": "Battery Type",
                          "info": "Li-ion polymer"
                      },
                      {
                          "title": "Power Adapter",
                          "info": "230W"
                      }
                  ]
              },
              {
                  "title": "Warranty",
                  "infos": [
                      {
                          "title": "Warranty",
                          "info": "2 year (Battery, Adapter 1 year)"
                      }
                  ]
              },
              {
                  "title": "Additional Info",
                  "infos": [
                      {
                          "title": "Others",
                          "info": "I/O Ports: 1 x DC-in-Jack, 1 x RJ-45"
                      },
                      {
                          "title": "Country Of Origin",
                          "info": "Taiwan"
                      },
                      {
                          "title": "Made in/ Assemble",
                          "info": "China"
                      }
                  ]
              }
          ]
      },
      "visible__url": "gigabyte-aorus-15p-xd-intel-core-i7-11800h-15.6-inch-fhd-display-black-gaming-laptop",
      "total__sell": 0,
      "ID": 2113
  }
] 

module.exports = {wishlistPdfHtmlString, productDataset}