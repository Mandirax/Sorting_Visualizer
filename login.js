function check(){
    var u=document.forms["myform"]["name"].value;
    var p1=document.forms["myform"]["pass1"].value;
    var p2=document.forms["myform"]["pass2"].value;
    var rem=document.getElementById("rem");
    const errorEle=document.getElementById("error");
    let msg=[]
   

        if(u==''){
            msg.push("*Name is required");
            
        }
        if(p1=='' || p2=='')
        msg.push("*Password is required");
       
       
        if(msg.length>0){
            errorEle.innerText=msg.join(',');
            msg=[]
            
        }
        if(u!="" && p1==p2 && p1!="" ){
            window.location.href="sort.html";
       
        
    }
   
    

    
}