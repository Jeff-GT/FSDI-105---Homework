function save(service){
  let servicesList=read();
  servicesList.push(service);
  let val=JSON.stringify(servicesList);
  console.log(val);
  localStorage.setItem("services",val);
}

function read() {
  let data=localStorage.getItem("services");
  if(!data){
    return [];
  }
  else{
    let list=JSON.parse(data);
    return list;
  }
}

function savePet(petInfo){
  let petList=readPet();
  petList.push(petInfo);
  let val=JSON.stringify(petList);
  console.log(val);
  localStorage.setItem("PetList",val);
}

function readPet() {
  let data=localStorage.getItem("PetList");
  if(!data){
    return [];
  }
  else{
    let list=JSON.parse(data);
    return list;
  }
}

function savePay(payInfo){
  let infoList=readPay();
  infoList.push(payInfo);
  let val=JSON.stringify(infoList);
  console.log(val);
  localStorage.setItem("paymentInfo",val);
}

function readPay() {
  let data=localStorage.getItem("paymentInfo");
  if(!data){
    return [];
  }
  else{
  let list=JSON.parse(data);
  return list;
  }
}