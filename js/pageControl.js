var doc = document;
var submitButton = doc.getElementById('submit-btn'),
    partySize = doc.getElementById('input-party-size-tb');

var updateReservationList = function(name,size){
  var list = doc.getElementById('reservation-list');
  var newElement = doc.createElement('div');
  newElement.className = 'align-center';
  newElement.innerHTML = "Name: "+name+", "+"Party of "+size;
  list.appendChild(newElement);
}

function eventListener(){
  readLatestReservationList(updateReservationList);
  submitButton.addEventListener('click',function(){
    //get value of textboxes for name and party size
    var name = doc.getElementById('input-name-tb').value;
    var numberOfPeople = doc.getElementById('input-party-size-tb').value;
    addToReservationList(name,numberOfPeople,updateReservationList)
  });
  partySize.addEventListener('keypress',function(e){
    //prevent user input of non integer value
    if(e.keyCode<48 || e.keyCode>57){
      e.returnValue = false;
    }
  });

}
doc.body.onLoad = eventListener();
