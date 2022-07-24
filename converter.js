
function dm(){
    document.body.classList.toggle("dark-theme");
}

function changest(){

let SUFF = document.getElementById("unitsFrom").selectedIndex;
let SUTT = document.getElementById("unitsTo").selectedIndex;

if(SUFF == 0 && SUTT == 0){
    document.getElementById("unitsTo").selectedIndex = 1;
} 
else if(SUFF == 1 && SUTT == 1){
    document.getElementById("unitsTo").selectedIndex = 2;
} 
else if(SUFF == 2 && SUTT == 2){
    document.getElementById("unitsTo").selectedIndex = 3;
} 
else if(SUFF == 3 && SUTT == 3){
    document.getElementById("unitsTo").selectedIndex = 4;
} 
else if(SUFF == 4 && SUTT == 4){
    document.getElementById("unitsTo").selectedIndex = 5;
} 
else if(SUFF == 5 && SUTT == 5){
    document.getElementById("unitsTo").selectedIndex = 6;
} 
else if(SUFF == 6 && SUTT == 6){
    document.getElementById("unitsTo").selectedIndex = 7;
} 
else if(SUFF == 7 && SUTT == 7){
    document.getElementById("unitsTo").selectedIndex = 0;
} 
}





function changests(){

    let SUFF = document.getElementById("unitsFrom").selectedIndex;
    let SUTT = document.getElementById("unitsTo").selectedIndex;
    
    if(SUTT == 0 && SUFF == 0){
        document.getElementById("unitsFrom").selectedIndex = 1;
    } 
    else if(SUTT == 1 && SUFF == 1){
        document.getElementById("unitsFrom").selectedIndex = 2;
    } 
    else if(SUTT == 2 && SUFF == 2){
        document.getElementById("unitsFrom").selectedIndex = 3;
    } 
    else if(SUTT == 3 && SUFF == 3){
        document.getElementById("unitsFrom").selectedIndex = 4;
    } 
    else if(SUTT == 4 && SUFF == 4){
        document.getElementById("unitsFrom").selectedIndex = 5;
    } 
    else if(SUTT == 5 && SUFF == 5){
        document.getElementById("unitsFrom").selectedIndex = 6;
    } 
    else if(SUTT == 6 && SUFF == 6){
        document.getElementById("unitsFrom").selectedIndex = 7;
    } 
    else if(SUTT == 7 && SUFF == 7){
        document.getElementById("unitsFrom").selectedIndex = 0;
    } 
    }








function convert(){
   let SUF = document.getElementById("unitsFrom").selectedIndex;
   let SUT = document.getElementById("unitsTo").selectedIndex;

   
    if(SUF == 0 && SUT == 1){
        a(document.getElementById("txtinput").value);
    } 
    else if (SUF == 0 && SUT == 2){
        b(document.getElementById("txtinput").value);
    }
    else if (SUF == 0 && SUT == 3){
       c(document.getElementById("txtinput").value);
    }
    else if (SUF == 0 && SUT == 4){
       d(document.getElementById("txtinput").value);
    }
    else if (SUF == 0 && SUT == 5){
      e(document.getElementById("txtinput").value);
    }
    else if (SUF == 0 && SUT == 6){
        f(document.getElementById("txtinput").value);
    }
    else if (SUF == 0 && SUT == 7){
       g(document.getElementById("txtinput").value);
    }


// FIRST CHOICE END




if(SUF == 1 && SUT == 0){
    aa(document.getElementById("txtinput").value);
} 
else if (SUF == 1 && SUT == 2){
    bb(document.getElementById("txtinput").value);
}
else if (SUF == 1 && SUT == 3){
   cc(document.getElementById("txtinput").value);
}
else if (SUF == 1 && SUT == 4){
   dd(document.getElementById("txtinput").value);
}
else if (SUF == 1 && SUT == 5){
  ee(document.getElementById("txtinput").value);
}
else if (SUF == 1 && SUT == 6){
    ff(document.getElementById("txtinput").value);
}
else if (SUF == 1 && SUT == 7){
   gg(document.getElementById("txtinput").value);
}

// SECOND CHOICE END




if(SUF == 2 && SUT == 0){
    aaa(document.getElementById("txtinput").value);
} 
else if (SUF == 2 && SUT == 1){
    bbb(document.getElementById("txtinput").value);
}
else if (SUF == 2 && SUT == 3){
   ccc(document.getElementById("txtinput").value);
}
else if (SUF == 2 && SUT == 4){
   ddd(document.getElementById("txtinput").value);
}
else if (SUF == 2 && SUT == 5){
  eee(document.getElementById("txtinput").value);
}
else if (SUF == 2 && SUT == 6){
    fff(document.getElementById("txtinput").value);
}
else if (SUF == 2 && SUT == 7){
   ggg(document.getElementById("txtinput").value);
}

// THIRD CHOICE END






if(SUF == 3 && SUT == 0){
    aaaa(document.getElementById("txtinput").value);
} 
else if (SUF == 3 && SUT == 1){
    bbbb(document.getElementById("txtinput").value);
}
else if (SUF == 3 && SUT == 2){
   cccc(document.getElementById("txtinput").value);
}
else if (SUF == 3 && SUT == 4){
   dddd(document.getElementById("txtinput").value);
}
else if (SUF == 3 && SUT == 5){
  eeee(document.getElementById("txtinput").value);
}
else if (SUF == 3 && SUT == 6){
    ffff(document.getElementById("txtinput").value);
}
else if (SUF == 3 && SUT == 7){
   gggg(document.getElementById("txtinput").value);
}

// FOURTH CHOICE END





if(SUF == 4 && SUT == 0){
    aaaaa(document.getElementById("txtinput").value);
} 
else if (SUF == 4 && SUT == 1){
    bbbbb(document.getElementById("txtinput").value);
}
else if (SUF == 4 && SUT == 2){
   ccccc(document.getElementById("txtinput").value);
}
else if (SUF == 4 && SUT == 3){
   ddddd(document.getElementById("txtinput").value);
}
else if (SUF == 4 && SUT == 5){
  eeeee(document.getElementById("txtinput").value);
}
else if (SUF == 4 && SUT == 6){
    fffff(document.getElementById("txtinput").value);
}
else if (SUF == 4 && SUT == 7){
   ggggg(document.getElementById("txtinput").value);
}

// FIFTH CHOICE END








if(SUF == 5 && SUT == 0){
    aaaaaa(document.getElementById("txtinput").value);
} 
else if (SUF == 5 && SUT == 1){
    bbbbbb(document.getElementById("txtinput").value);
}
else if (SUF == 5 && SUT == 2){
   cccccc(document.getElementById("txtinput").value);
}
else if (SUF == 5 && SUT == 3){
   dddddd(document.getElementById("txtinput").value);
}
else if (SUF == 5 && SUT == 4){
  eeeeee(document.getElementById("txtinput").value);
}
else if (SUF == 5 && SUT == 6){
    ffffff(document.getElementById("txtinput").value);
}
else if (SUF == 5 && SUT == 7){
   gggggg(document.getElementById("txtinput").value);
}

// SIXTH CHOICE END






if(SUF == 6 && SUT == 0){
    aaaaaaa(document.getElementById("txtinput").value);
} 
else if (SUF == 6 && SUT == 1){
    bbbbbbb(document.getElementById("txtinput").value);
}
else if (SUF == 6 && SUT == 2){
   ccccccc(document.getElementById("txtinput").value);
}
else if (SUF == 6 && SUT == 3){
   ddddddd(document.getElementById("txtinput").value);
}
else if (SUF == 6 && SUT == 4){
  eeeeeee(document.getElementById("txtinput").value);
}
else if (SUF == 6 && SUT == 5){
    fffffff(document.getElementById("txtinput").value);
}
else if (SUF == 6 && SUT == 7){
   ggggggg(document.getElementById("txtinput").value);
}

// SEVENTH CHOICE END





if(SUF == 7 && SUT == 0){
    aaaaaaaa(document.getElementById("txtinput").value);
} 
else if (SUF == 7 && SUT == 1){
    bbbbbbbb(document.getElementById("txtinput").value);
}
else if (SUF == 7 && SUT == 2){
   cccccccc(document.getElementById("txtinput").value);
}
else if (SUF == 7 && SUT == 3){
   dddddddd(document.getElementById("txtinput").value);
}
else if (SUF == 7 && SUT == 4){
  eeeeeeee(document.getElementById("txtinput").value);
}
else if (SUF == 7 && SUT == 5){
    ffffffff(document.getElementById("txtinput").value);
}
else if (SUF == 7 && SUT == 6){
   gggggggg(document.getElementById("txtinput").value);
}

// EIGHTH CHOICE END
}






function a(enteredValue){
    var mm = 0;
    mm = enteredValue / 1000;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function b(enteredValue){
    var mm = 0;
    mm = enteredValue / 60000;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function c(enteredValue){
    var mm = 0;
    mm = enteredValue /  3.6e+6;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function d(enteredValue){
    var mm = 0;
    mm = enteredValue / 8.64e+7;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function e(enteredValue){
    var mm = 0;
    mm = enteredValue / 6.048e+8;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function f(enteredValue){
    var mm = 0;
    mm = enteredValue / 2.628e+9;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function g(enteredValue){
    var mm = 0;
    mm = enteredValue / 3.154e+10;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  FIRST CHOICE END //




function aa(enteredValue){
    var mm = 0;
    mm = enteredValue * 1000;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bb(enteredValue){
    var mm = 0;
    mm = enteredValue / 60;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function cc(enteredValue){
    var mm = 0;
    mm = enteredValue /  3600;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function dd(enteredValue){
    var mm = 0;
    mm = enteredValue / 86400;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ee(enteredValue){
    var mm = 0;
    mm = enteredValue / 604800;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ff(enteredValue){
    var mm = 0;
    mm = enteredValue / 2.628e+6;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function gg(enteredValue){
    var mm = 0;
    mm = enteredValue / 3.154e+7;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  SECOND CHOICE END //






function aaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 60000;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 60;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ccc(enteredValue){
    var mm = 0;
    mm = enteredValue /  60;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ddd(enteredValue){
    var mm = 0;
    mm = enteredValue / 1440;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eee(enteredValue){
    var mm = 0;
    mm = enteredValue / 10080;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function fff(enteredValue){
    var mm = 0;
    mm = enteredValue / 43800;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ggg(enteredValue){
    var mm = 0;
    mm = enteredValue / 525600;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  THIRD CHOICE END //




function aaaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 3.6e+6;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 3600;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function cccc(enteredValue){
    var mm = 0;
    mm = enteredValue * 60;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function dddd(enteredValue){
    var mm = 0;
    mm = enteredValue / 24;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eeee(enteredValue){
    var mm = 0;
    mm = enteredValue / 168;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ffff(enteredValue){
    var mm = 0;
    mm = enteredValue / 730;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function gggg(enteredValue){
    var mm = 0;
    mm = enteredValue / 8760;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  FOURTH CHOICE END //





function aaaaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 8.64e+7;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbbbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 86400;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ccccc(enteredValue){
    var mm = 0;
    mm = enteredValue * 1440;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ddddd(enteredValue){
    var mm = 0;
    mm = enteredValue * 24;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eeeee(enteredValue){
    var mm = 0;
    mm = enteredValue / 7;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function fffff(enteredValue){
    var mm = 0;
    mm = enteredValue / 30.417;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ggggg(enteredValue){
    var mm = 0;
    mm = enteredValue / 365;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  FIFFTH CHOICE END //




function aaaaaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 6.048e+8;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbbbbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 604800;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function cccccc(enteredValue){
    var mm = 0;
    mm = enteredValue * 10080;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function dddddd(enteredValue){
    var mm = 0;
    mm = enteredValue * 168;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eeeeee(enteredValue){
    var mm = 0;
    mm = enteredValue * 7;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ffffff(enteredValue){
    var mm = 0;
    mm = enteredValue / 4.345;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function gggggg(enteredValue){
    var mm = 0;
    mm = enteredValue / 52.143;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  SIXTH CHOICE END //







function aaaaaaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 2.628e+9;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbbbbbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 2.628e+6;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ccccccc(enteredValue){
    var mm = 0;
    mm = enteredValue * 43800;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function ddddddd(enteredValue){
    var mm = 0;
    mm = enteredValue * 730;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eeeeeee(enteredValue){
    var mm = 0;
    mm = enteredValue * 30.417;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function fffffff(enteredValue){
    var mm = 0;
    mm = enteredValue * 4.345;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ggggggg(enteredValue){
    var mm = 0;
    mm = enteredValue / 12;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  SEVENTH CHOICE END //









function aaaaaaaa(enteredValue){
    var mm = 0;
    mm = enteredValue * 3.154e+10;
    document.getElementById("lblresult").innerHTML = mm;
 }  


function bbbbbbbb(enteredValue){
    var mm = 0;
    mm = enteredValue * 3.154e+7;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function cccccccc(enteredValue){
    var mm = 0;
    mm = enteredValue * 525600;
    document.getElementById("lblresult").innerHTML = mm;
 }  

 function dddddddd(enteredValue){
    var mm = 0;
    mm = enteredValue * 8760;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function eeeeeeee(enteredValue){
    var mm = 0;
    mm = enteredValue * 365;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function ffffffff(enteredValue){
    var mm = 0;
    mm = enteredValue * 52.143;
    document.getElementById("lblresult").innerHTML = mm;
 } 

 function gggggggg(enteredValue){
    var mm = 0;
    mm = enteredValue * 12;
    document.getElementById("lblresult").innerHTML = mm;
 } 

//  EIGHTH CHOICE END //