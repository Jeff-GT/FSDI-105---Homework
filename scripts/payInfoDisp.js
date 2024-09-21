function displayPay(){//erases the current table
  $("appear").hide();
  $("#toHome").hide();
  displayRows();
  let paySum;
  let custRegistry=readPay();
  let total;
  let cust=custRegistry;
  document.getElementById("custInfo").innerHTML+=`<div class="summary-info" id="0">
      <p>Name: ${cust[0].name}</p> 
      <p>Email: ${cust[0].email}</p>
      <p>Address: ${cust[0].billAdd}</p>
      <p>City: ${cust[0].city}</p>
      <p>State${cust[0].state} Zip Code: ${cust.zip}</p>
      <p>Mode of Payment: ${cust[0].payType}</p>
      <p>Total: $__.__</p>
      </div>`;
      
  
}


window.onload=displayPay;