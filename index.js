const urlp=new URLSearchParams(window.location.search);
const olink=urlp.get('olink');
function f1(){
    document.getElementById("lin").href=olink;
}
function form(){
    document.getElementById('form1').style.display='block';
}

var fun1=urlp.get('fun1');
 var fun2=urlp.get('fun2');
 var fun3=urlp.get('fun3');
var fun4=urlp.get('fun4');

 var fun5=urlp.get('fun5');
 function create(){
    var fun=[];
localStorage.setItem('fun',JSON.stringify(fun));
var src=[1,1,1,1,1];
 var brray=JSON.stringify(src);
 localStorage.setItem('src',brray);
 }
 
 
function events(){
    var retrievedS=JSON.parse(localStorage.getItem("src"));
    var retrievedF=JSON.parse(localStorage.getItem('fun'));
var i;
    if(fun1!=null) {
        for(i=0;i<retrievedF.length;i++){
            if(retrievedF[i]===fun1)break;
      }
    if(i===retrievedF.length){
        retrievedF.push(fun1);
         localStorage.setItem('fun',JSON.stringify(retrievedF));}}
else if(fun2!=null){
    for(i=0;i<retrievedF.length;i++){
        if(retrievedF[i]===fun2)break;
  }
if(i===retrievedF.length){
    retrievedF.push(fun2);
     localStorage.setItem('fun',JSON.stringify(retrievedF));}}
 else if(fun3!=null){
    for(i=0;i<retrievedF.length;i++){
        if(retrievedF[i]===fun3)break;
  }
if(i===retrievedF.length){
    retrievedF.push(fun3);
     localStorage.setItem('fun',JSON.stringify(retrievedF));}
 }
 else if(fun4!=null){
    for(i=0;i<retrievedF.length;i++){
        if(retrievedF[i]===fun4)break;
  }
if(i===retrievedF.length){
    retrievedF.push(fun4);
     localStorage.setItem('fun',JSON.stringify(retrievedF));}
 }
 else if(fun5!=null){
    for(i=0;i<retrievedF.length;i++){
        if(retrievedF[i]===fun5)break;
  }
if(i===retrievedF.length){
    retrievedF.push(fun5);
     localStorage.setItem('fun',JSON.stringify(retrievedF));}
 }
else var i;
   
var retrievedFun=JSON.parse(localStorage.getItem('fun'));
var l=retrievedFun.length;
    var i=0;
    for(i=0;i<l;i++){
    if(retrievedFun[i]==="c1()")
       { document.getElementById("event").onclick=c1();}

   else if(retrievedFun[i]==="c2()")
       { document.getElementById("event").onclick=c2();}
 else if(retrievedFun[i]==="c3()")
        document.getElementById("event").onclick=c3();

  else if(retrievedFun[i]==="c4()")
        document.getElementById("event").onclick=c4();

    else if(retrievedFun[i]==="c5()")
        document.getElementById("event").onclick=c5();
    else i=i;
}

} 

function c1(){
var retrievedArray=JSON.parse(localStorage.getItem('src'));
var i;
for( i=0;i<5;i++){
   
    if( retrievedArray[i]===1||retrievedArray[i]==="classic1.jpg")break;
    
    
}
retrievedArray[i]="classic1.jpg";
localStorage.setItem('src',JSON.stringify(retrievedArray));
document.getElementById("c"+(i+1)).src="classic1.jpg";
document.getElementById("bin"+(i+1)).src="bin.png";
document.getElementById("value"+(i+1)   ).innerHTML="Price:$7.41";
}
function c2(){
    var retrievedArray=JSON.parse(localStorage.getItem('src'));

    var i;
    for( i=0;i<5;i++){
    
        if( retrievedArray[i]===1||retrievedArray[i]==="classic2.jpg")break;
        
        
    }
    retrievedArray[i]="classic2.jpg";
localStorage.setItem('src',JSON.stringify(retrievedArray));
    document.getElementById("c"+(i+1)).src="classic2.jpg";
    document.getElementById("bin"+(i+1)).src="bin.png";
    document.getElementById("value"+(i+1)   ).innerHTML="Price:$1.97";
    }
    function c3(){
        var retrievedArray=JSON.parse(localStorage.getItem('src'));
        var i;
        for( i=0;i<5;i++){
    
            if( retrievedArray[i]===1||retrievedArray[i]==="classic3.jpg")break;
            
            
        }
        retrievedArray[i]="classic3.jpg";
localStorage.setItem('src',JSON.stringify(retrievedArray));
        document.getElementById("c"+(i+1)).src="classic3.jpg";
        document.getElementById("bin"+(i+1)).src="bin.png";
        document.getElementById("value"+(i+1)   ).innerHTML="Price:$1.99";
        }
        function c4(){
            var retrievedArray=JSON.parse(localStorage.getItem('src'));

            var i;
            for( i=0;i<5;i++){
    
                if( retrievedArray[i]===1||retrievedArray[i]==="hot-sale1.jpg")break;
                
                
            }
            retrievedArray[i]="hot-sale1.jpg";
            localStorage.setItem('src',JSON.stringify(retrievedArray));
            document.getElementById("c"+(i+1)).src="hot-sale1.jpg";
            document.getElementById("bin"+(i+1)).src="bin.png";
            document.getElementById("value"+(i+1)   ).innerHTML="Price:$6.13";
            }
            function c5(){
                var retrievedArray=JSON.parse(localStorage.getItem('src'));
                var i;
                for( i=0;i<5;i++){
    
                    if( retrievedArray[i]===1||retrievedArray[i]==="hot-sale2.jpg")break;
                    
                    
                }
                retrievedArray[i]="hot-sale2.jpg";
                localStorage.setItem('src',JSON.stringify(retrievedArray));
                document.getElementById("c"+(i+1)).src="hot-sale2.jpg";
                document.getElementById("bin"+(i+1)).src="bin.png";
                document.getElementById("value"+(i+1)   ).innerHTML="Price:$2.3";
                }
   
                function d1(){
                    document.getElementById("c"+1).src="";
                                document.getElementById("bin"+1).src="";
                                document.getElementById("value"+1   ).innerHTML="";
                                var i;
                                var array=JSON.parse(localStorage.getItem("src"));
                                array[0]=0;
                               
                                var brray=JSON.parse(localStorage.getItem("fun"));
                                var l=brray.length;

                    for(i=1;i<l;i++){
 brray[i-1]=brray[i];
 array[i-1]=array[i];

                    }      
                    brray.pop();
                   for(i;i<5;i++) array[i]=0;
                    localStorage.setItem("fun",JSON.stringify(brray));
                    localStorage.setItem("src",JSON.stringify(array));
                
                }
                function d2(){
                    document.getElementById("c"+2).src="";
                    document.getElementById("bin"+2).src="";
                    document.getElementById("value"+2   ).innerHTML="";
                    var i;
                    var array=JSON.parse(localStorage.getItem("src"));
                    array[1]=0;
                   
                    var brray=JSON.parse(localStorage.getItem("fun"));
                    var l=brray.length;

        for(i=2;i<l;i++){
brray[i-1]=brray[i];
array[i-1]=array[i];

        }      
        brray.pop();
        for(i;i<5;i++) array[i]=0;
        localStorage.setItem("fun",JSON.stringify(brray));
        localStorage.setItem("src",JSON.stringify(array));
    
                
                }function d3(){
                    document.getElementById("c"+3).src="";
                                document.getElementById("bin"+3).src="";
                                document.getElementById("value"+3   ).innerHTML="";
                                var i;
                                var array=JSON.parse(localStorage.getItem("src"));
                                array[2]=0;
                               
                                var brray=JSON.parse(localStorage.getItem("fun"));
                                var l=brray.length;

                    for(i=3;i<l;i++){
 brray[i-1]=brray[i];
 array[i-1]=array[i];

                    }      
                    brray.pop();
                    for(i;i<5;i++)   array[i]=0;
                    localStorage.setItem("fun",JSON.stringify(brray));
                    localStorage.setItem("src",JSON.stringify(array));
                
                
                }function d4(){
                    document.getElementById("c"+4).src="";
                    document.getElementById("bin"+4).src="";
                    document.getElementById("value"+4   ).innerHTML="";
                    var i;
                    var array=JSON.parse(localStorage.getItem("src"));
                    array[3]=0;
                   
                    var brray=JSON.parse(localStorage.getItem("fun"));
                    var l=brray.length;

        for(i=4;i<l;i++){
brray[i-1]=brray[i];
array[i-1]=array[i];

        }      
        brray.pop();
        for(i;i<5;i++) array[i]=0;
        localStorage.setItem("fun",JSON.stringify(brray));
        localStorage.setItem("src",JSON.stringify(array));
    
                
                }function d5(){
                    document.getElementById("c"+5).src="";
                    document.getElementById("bin"+5).src="";
                    document.getElementById("value"+5   ).innerHTML="";
                    var i;
                    var array=JSON.parse(localStorage.getItem("src"));
                    array[4]=0;
                   
                    var brray=JSON.parse(localStorage.getItem("fun"));

           
        brray.pop();
        for(i;i<5;i++)  array[i]=0;
        localStorage.setItem("fun",JSON.stringify(brray));
        localStorage.setItem("src",JSON.stringify(array));
    
                
                }
function sum(){
var a=JSON.parse(localStorage.getItem("fun"));
var l=a.length;
var array=JSON.parse(localStorage.getItem("src"));
var i;
var totals=0;
for(i=0;i<l;i++){
    if(array[i]!=0)
switch(a[i]){
    case "c1()":totals+=7.41;break;
    case "c2()":totals+=1.97;break;
    case "c3()":totals+=1.99;break;
    case "c4()":totals+=6.13;break; 
    case "c5()":totals+=2.3;break;
  
}
}
totals=Math.round(totals*100)/100;
document.getElementById("totals").innerHTML="$"+totals;
}
                
