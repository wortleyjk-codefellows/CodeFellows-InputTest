var ls = localStorage;
var Customer = function(name,size){
  this.name = name;
  this.size = size;
}
var reservationList = JSON.parse(ls.getItem('reservationList')) || [];

function readLatestReservationList(callback){
  for(var i in reservationList){
    //alert(reservationList[i].name);
    callback(reservationList[i].name,reservationList[i].size);
  }
}


function addToReservationList(name,size,callback){
  var customer = new Customer(name,size)
  reservationList.push(customer);
  ls.setItem('reservationList',JSON.stringify(reservationList));
  callback(customer.name,customer.size);
}
