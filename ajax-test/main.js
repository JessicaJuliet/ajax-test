const baseURL = "https://ci-swapi.herokuapp.com/api/";


function getData(type, cb){
var xhr = new XMLHttpRequest();
xhr.open("GET", baseURL + type + "/");
xhr.send();
xhr.onreadystatechange = function() {
    //console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
        cb(JSON.parse(this.responseText));
    }
        //console.log(typeOf(JSON.parse(this.responseText)));
        //console.log(JSON.parse(this.responseText));
        //data = this.responseText;
        //setData(JSON.parse(this.responseText));
    };

}



function writeToDocument(type) {
    getData(type, function(data) {
        document.getElementById("data").innerHTML = data;
    })
}


//function printDataToConsole(data){
  //  console.log(data);
// }

// getData(printDataToConsole);


//getData(function(data) {

  //  console.log(data)
//});



//var data;

//xhr.onreadystatechange = function() {
    //if (this.readyState == 4 && this.status == 200) {
     //   document.getElementById("data").innerHTML = this.responseText;
    //}
//};


//function setData(jsonData){
  //  data = jsonData;
    //console.log(data);
//}



//console.log(data);

//setTimeout(function() {
  //  console.log(data);
//}, 500)};