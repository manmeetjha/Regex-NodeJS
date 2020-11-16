const pinCodeRegex = RegExp("^[0-9]{3}\\s?[0-9]{3}$");

function testPincode(pincode){
    if(pinCodeRegex.test(pincode))
        return true;
    else throw "Wrong Format";
}

//UC1
console.log("UC1");
console.log(testPincode("400088"));

//UC2
try{
console.log("UC2");
console.group(testPincode("A400088"));
}catch(e){
    console.error(e);
}

//UC3
try{
    console.log("UC3");
    console.group(testPincode("400088B"));
    }catch(e){
        console.error(e);
}

//UC4
console.log("UC4");
console.log(testPincode("400 088"));
