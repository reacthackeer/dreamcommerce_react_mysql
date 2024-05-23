const wishlistPdfHtmlString = (data) => { 
    const totalPrice = data.reduce( ( sum, { quantity, infos:{current__price} } ) => sum + (quantity*current__price) , 0);
    const totalQuantity = data.reduce( ( sum, { quantity } ) => sum + quantity , 0);
    return `<!DOCTYPE html>

    <html>
    
    <head>
      <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif; 
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
                          <td>${index+1}</td>
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

const printUserAndProductInfoHtmlString = (data, userInfo) => {
  const totalPrice = data.reduce( ( sum, { quantity, price } ) => sum + (quantity*price) , 0);
  const totalQuantity = data.reduce( ( sum, { quantity } ) => sum + quantity , 0);
  const paidProduct = data.filter((info)=> info.pay__type === 'Online pay'); 
  const totalPay = paidProduct.reduce( ( sum, { quantity, price } ) => sum + (quantity*price) , 0);
  const totalPayQuantity = paidProduct.reduce( ( sum, { quantity } ) => sum + quantity , 0);
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Information PDF</title>
    <style>
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0; 
        }
        @page {
            size: A4;
            margin: 20mm;
        }
        .container {
            box-sizing: border-box;
            padding: 40px;  
            padding-top: 0px;
            width: 8.27in; 
            height: fit-content; 
        }
        .user-info {
            width: 100%; /* Adjust as needed */
            margin-bottom: 20px;
        }
        .address-info {
            width: 100%; /* Adjust as needed */
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .product__information__title{
            padding: 10px;
            text-align: left;
            background-color: #f2f2f2;
            margin-bottom: 5px;
        } 
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #e0e0e0;
        }

        .p__table {
        width: 100%;
        border-collapse: collapse;
        }
        
        .p__table .p__th, .p__td {
        padding: 10px;
        border: 1px solid #ccc;
        font-size: 12px;
        text-align: center;
        }
        
        .p__table .p__th {
        background-color: #f2f2f2;
        font-weight: bold;
        text-align: left;
        }
        
        .p__tr:nth-child(even) {
        background-color: #f9f9f9;
        }
        
        .p__total {
        margin-top: 20px;
        text-align: right;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="user-info">
            
            <h2 style="text-align: center; margin-bottom: 5px;">Danguli Computer Sales</h2>
            <p style="text-align: center; margin-bottom: 5px;">Al-Mizan Super Market 2nd floor, Station Bazar, Rohanpur</p>
            <p style="text-align: center; margin-bottom: 20px;">Tel: +8801720616108 | Web: www.danguli.com.bd</p>
            
            <h4 class="product__information__title">Shipping Information</h4>
            <table>  
                <tr>
                    <td>Name</td>
                    <td>${userInfo.name}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>${userInfo.email}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>${userInfo.phone}</td>
                </tr>
                <tr>
                    <td>User ID</td>
                    <td>${userInfo.user__id}</td>
                </tr>
                <tr>
                    <td>Division</td>
                    <td>${userInfo.address.division.name}</td>
                </tr>
                <tr>
                    <td>District</td>
                    <td>${userInfo.address.district.name}</td>
                </tr>
                <tr>
                    <td>Upazilla</td>
                    <td>${userInfo.address.upazilla.name}</td>
                </tr>
                <tr>
                    <td>Union</td>
                    <td>${userInfo.address.union.name}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>${userInfo.address.street.street}</td>
                </tr>
            </table>
            <div class="product__view__table">
                <h4 class="product__information__title">Product Information</h4>
                <table class="p__table">
                    <thead class="p__thead">
                        <tr class="p__tr">
                            <th class="p__th" style="text-align: center;" >No</th>
                            <th class="p__th">Title</th>
                            <th class="p__th">Pay Type</th>
                            <th class="p__th"  style="text-align: center;" width="90px">Price</th>
                            <th class="p__th" style="text-align: center;"  width="50px">Quantity</th>
                            <th class="p__th" style="text-align: center;"  width="100px">Subtotal</th>
                        </tr>
                    </thead>
                        <tbody class="p__tbody">    
                            ${
                              data.map((info, index)=>{
                                return  `<tr class="p__tr">
                                            <td class="p__td">${index+1}</td>
                                            <td class="p__td" style="text-align: start;">${info.infos.title}</td>
                                            <td class="p__td">${info.pay__type}</td>
                                            <td class="p__td">${info.price} TK</td>
                                            <td class="p__td">${info.quantity}</td>
                                            <td class="p__td">${info.price * info.quantity} TK</td>
                                        </tr>` 
                              }).join('')
                            }
                        </tbody>
                </table>
                <div class="p__total">
                <strong style="margin-left: 20px;">Total paid (${totalPayQuantity}): ${totalPay} TK</strong>
                <strong style="margin-left: 20px;">Total unpaid (${totalQuantity - totalPayQuantity}): ${totalPrice - totalPay} TK</strong>
                    <strong style="margin-left: 20px;">Total (${totalQuantity}): ${totalPrice} TK</strong>
                </div>
            </div>
        </div> 
    </div>
</body>
</html>
`;
}



module.exports = {
    wishlistPdfHtmlString,
    printUserAndProductInfoHtmlString
}