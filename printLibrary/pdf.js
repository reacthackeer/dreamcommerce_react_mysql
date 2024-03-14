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


module.exports = {wishlistPdfHtmlString}