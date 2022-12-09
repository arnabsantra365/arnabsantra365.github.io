function enabled(ok){
    console.log(ok.value);
    if(ok.value=="Same"){
    document.getElementById('auto2').classList.remove('new2');
    document.getElementById('auto5').classList.add('new5');
  }
  else{
    document.getElementById('auto2').classList.add('new2');
    document.getElementById('auto5').classList.remove('new5');
  }
  }
function disablebutton(dis){
  console.log(dis.value);
  if(dis.value=="Sup"){
    document.getElementById('auto').classList.remove('new');
    document.getElementById('auto1').classList.add('new1');
    document.getElementById('auto3').classList.remove('new3');
    document.getElementById('auto4').classList.add('new4');
  }
  else{
    document.getElementById('auto1').classList.remove('new1');
    document.getElementById('auto').classList.add('new');
    document.getElementById('auto4').classList.remove('new4');
    document.getElementById('auto3').classList.add('new3');
  }
}
  let resetButton;
function answer(){

const primary1 =parseFloat(document.querySelector('.pvolt').value);
const secondary1 =parseFloat(document.querySelector('.svolt').value);
const kva1 =parseFloat(document.querySelector('.kva').value);

const selectElement1 = document.querySelector('#select2');
      output1 = selectElement1.value;
const selectElement = document.querySelector('#select1');
      output = selectElement.value;
      if (output=="Same")
      {
        if( output1=="Sup")
        {
        let sum=primary1+secondary1;
        let i1=kva1/primary1;
        let i2=kva1/secondary1;
        let iprimary=i1+i2;
        if(document.querySelector('#select3').value=="Sp1"){
        let isecondary=i2;
        let kvaAuto=(i1+i2)*primary1;
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+" "+primary1+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+primary1+"+"+secondary1+"="+sum+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"+"+i2.toFixed(2)+")"+"*"+primary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+i1.toFixed(2)+"+"+i2.toFixed(2)+"="+iprimary.toFixed(2)+"A";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+" "+isecondary.toFixed(2)+"A";
        }
        else{
          let isecondary=i1;
        let kvaAuto=(i1+i2)*secondary1;
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+" "+secondary1+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+primary1+"+"+secondary1+"="+sum+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"+"+i2.toFixed(2)+")"+"*"+secondary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+i1.toFixed(2)+"+"+i2.toFixed(2)+"="+iprimary.toFixed(2)+"A";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+" "+isecondary.toFixed(2)+"A";

        }
      }
        else{
        
        let sum=primary1+secondary1;
        let i1=kva1/primary1;
        let i2=kva1/secondary1;
        let isecondary=i1+i2;

        if(document.querySelector('#select4').value=="Sd2"){
        let iprimary=i1;
        let kvaAuto=(i1+i2)*secondary1;
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+primary1+"+"+secondary1+"="+sum+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+" "+secondary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"+"+i2.toFixed(2)+")"+"*"+secondary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+i1.toFixed(2)+"+"+i2.toFixed(2)+"="+isecondary.toFixed(2)+"A";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+" "+iprimary.toFixed(2)+"A";
        }
        else{
          let iprimary=i2;
        let kvaAuto=(i1+i2)*primary1;
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+primary1+"+"+secondary1+"="+sum+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+" "+primary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"+"+i2.toFixed(2)+")"+"*"+primary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+i1.toFixed(2)+"+"+i2.toFixed(2)+"="+isecondary.toFixed(2)+"A";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+" "+iprimary.toFixed(2)+"A";
        }
        }
      }
     else 
      {
        if( output1=="Sup")
        {
        let diff=Math.abs(primary1-secondary1);
        let i1=kva1/primary1;
        let i2=kva1/secondary1;
        let isecondary=Math.abs(i1-i2);
        if(document.querySelector('#select5').value=="Sp3"){
          let iprimary=i2;
        let kvaAuto=primary1*isecondary;
       
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+" "+diff+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+primary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"-"+i2.toFixed(2)+")"+"*"+primary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+i1.toFixed(2)+"-"+i2.toFixed(2)+"="+iprimary.toFixed(2)+"A";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+" "+isecondary+"A";
        }
        else{
          let iprimary=i1;
        let kvaAuto=isecondary*secondary1;
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+" "+diff+"Volts";
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+secondary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"-"+i2.toFixed(2)+")"+"*"+secondary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+i1.toFixed(2)+"-"+i2.toFixed(2)+"="+iprimary.toFixed(2)+"A";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+" "+isecondary+"A";
        }
      }
    
        
        else{
        
        let diff=Math.abs(primary1-secondary1);
        let i1=kva1/primary1;
        let i2=kva1/secondary1;
        let iprimary=Math.abs(i1-i2);
       
       
        if (document.querySelector('#select6').value=="Sp4")
        {
          let isecondary=i2;
        let kvaAuto=primary1*iprimary;
        document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+" "+diff+"Volts";
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+primary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"-"+i2.toFixed(2)+")"+"*"+primary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.scurrent').textContent = "maximum primary current rating of Auto-Transformer:"+i1.toFixed(2)+"-"+i2.toFixed(2)+"="+isecondary.toFixed(2)+"A";
      document.querySelector('.pcurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+" "+iprimary+"A";
        }
        else{
          let isecondary=i1;
        let kvaAuto=secondary1*iprimary;
      document.querySelector('.secondary').textContent = "maximum secondary voltage rating:"+" "+diff+"Volts";
      document.querySelector('.primary').textContent = "maximum primary voltage rating:"+secondary1+"Volts";
      document.querySelector('.power').textContent = "power rating of Auto:"+"("+i1.toFixed(2)+"-"+i2.toFixed(2)+")"+"*"+secondary1+"="+kvaAuto.toFixed(2)+"KVA";
      document.querySelector('.scurrent').textContent = "maximum secondary current rating of Auto-Transformer:"+i1.toFixed(2)+"-"+i2.toFixed(2)+"="+isecondary.toFixed(2)+"A";
      document.querySelector('.pcurrent').textContent = "maximum primary current rating of Auto-Transformer:"+" "+iprimary+"A";
        }
        }
        }
      }
