var s;
var t;
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
  b64 = e.target.result;
            (document.getElementById("base")).value = b64;
  (document.getElementById("dummy")).src=b64;
        };
        reader.readAsDataURL(input.files[0]);
        // s=reader.readAsDataURL(input.files[0]);

    }
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
  b64 = e.target.result;
            (document.getElementById("base2")).value = b64;
  (document.getElementById("dummy2")).src=b64;
        };
        reader.readAsDataURL(input.files[0]);
        //  t=reader.readAsDataURL(input.files[0]);
    }
}
function res(){
    var alpha;
    var beta;
    document.getElementById("dummy").innerHTML=alpha;
    document.getElementById("dummy2").innerHTML=beta;
    var a="They are same";
    var b="they are different";
    if(alpha==beta){
        //  document.getElementById("result").value=a;
       document.getElementById("result").innerHTML=a;
    }
    if(alpha!=beta){
        // document.getElementById("result").value=b;         
       document.getElementById("result").innerHTML=b;
    }
}


