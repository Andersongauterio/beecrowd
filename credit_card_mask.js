//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

//Examples (input --> output):
//"4556364607935616" --> "############5616"
//     "64607935616" -->      "#######5616"
//               "1" -->                "1"
//                "" -->                 ""

// "What was the name of your first pet?"
//"Skippy" --> "##ippy"
//"Nananananananananananananananana Batman!" --> "####################################man!"

// return masked string
function maskify(cc) {
  stringSize = cc.length;
  if (cc.length <= 4) {
    return cc;
  } else {
    startMask = "#".repeat(cc.length -4);
    endValue = cc.slice(cc.length -4, cc.length);
    return startMask + endValue;
  }
  //return cc.slice(-4).padStart(cc.length,'#')
}

test = maskify("4556364607935616");
console.log(test);
//Test.assertEquals(maskify('4556364607935616'), '############5616');
//Test.assertEquals(maskify('1'), '1');
//Test.assertEquals(maskify('11111'), '#1111');
