var datos=[];
var impar=[];
var par=[];
let respar=document.createElement('h1');
let resImpar=document.createElement('h2');

window.onload=function(){
    var datos=[];
}



for(let i=0;i<10;i++){
    let numero=prompt("escribe el valor" + datos.length);
    if(numero!="" && numero>0){
        if(numero%2==0){
            par.push(numero);
        }else{
            impar.push(numero);
        }
        datos.push(numero);
    console.log("el array es" +datos);
    }else{
        alert("escribe un valor correcto");      

    }


};

for(let num of par){
    document.body.append(num);
};
for(let num of impar){
    document.body.append(num);
};

   
