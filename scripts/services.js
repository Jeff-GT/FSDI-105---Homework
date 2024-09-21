//contructor
function Service(description,price){
  this.description=description;
  this.price=price;
}


function addService(){
  let counter=0;
  let serviceNew=$("#txtService").val();
  let priceNew=$("#numPrice").val();

  if(serviceNew==''){
    
    $("#txtService").addClass(`empty-form`);

    counter++;
  }
  
  if(priceNew==''){
    
    $("#numPrice").addClass(`empty-form`);
    
    
    counter++;
  }

  

  if(counter!=0){
    alert("Please complete the Form");
    if(priceNew!=''){
      $("#numPrice").removeClass(`empty-form`);
    }
    if(serviceNew!=''){
      $("#txtService").removeClass(`empty-form`);
    }
  }
  else{

    let newService= new Service(serviceNew,priceNew);

      
      save(newService);
      
      $("input").val("");
      $("input").removeClass(`empty-form`);
  }

}

function getServices(){
  let services=read();
  let option;

  for(i=0;i<services.length;i++){
    option+=`<option value="${services[i].description}">${services[i].description}</option>`
  }
  $("#serviceAdded").append(option);
}

function isValidService(service){
  let validDescription=true;
  let validPrice=true;

  if(service.description==""){
    alert("Description is Empty");
    validDescription=false;
  }
  if(service.price==""){

  }
}








function init() {
  $("#serviceAdder").on("click",addService);
  getServices();
  $("#payCash").hide();
  $("#payPal").hide();
  $("#creditCardPay").show();
  
  
}

window.onload=init;


// btn id=serviceAdder