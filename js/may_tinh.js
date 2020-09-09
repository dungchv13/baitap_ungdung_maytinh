
function calculator(type){
    let a=parseFloat(document.getElementById("nhapa").value);
    let b=parseFloat(document.getElementById("nhapb").value);
    if(type == '+'){
        let x=a+b;
        document.getElementById("ketQua").innerHTML= "ket qua la: "+x;
    }
    if(type == '-'){
        let x=a-b;
        document.getElementById("ketQua").innerHTML= "ket qua la: "+x;

    }
    if(type == '*'){
        let z=a*b;
        document.getElementById("ketQua").innerHTML="ket qua la: "+z;
    }
    if(type =='/'){
        let t=a/b;
        document.getElementById("ketQua").innerHTML="ket qua la: "+t;
    }
}
