var oldNum=0, newNum=0;

var opr=0;

var textvalue=0;




function zeroToNine(i){
    
if(textvalue===0){
    textvalue=i;
    document.getElementById("a").value= textvalue;
}
else{
    textvalue="" +textvalue + i;
    document.getElementById("a").value= textvalue;
}
}

function operator(j){

    if(opr==0){
        opr= j;    
        oldNum= textvalue;
        textvalue= 0;
    }
    else
    {
        oldNum=document.getElementById("a").value;
            //eval(oldnum+opr+textvalue);
         opr=j;        
         textvalue=0;
       
    }
    


    
}
function equals(){
newNum=document.getElementById("a").value;
textvalue=eval(oldNum+opr+newNum);
  document.getElementById("a").value= textvalue;
   textvalue=0;
    
 
}


    
    
