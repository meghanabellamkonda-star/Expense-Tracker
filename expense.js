const amount=document.getElementById('amount');
const date=document.getElementById('date');
const type=document.getElementById('type');
const button=document.getElementById("plus");
const income=document.getElementById('income');
const expense=document.getElementById('expense');
const balance=document.getElementById('balance');

let totincome=0;
let totexpense=0;
let totbalance=0;
const today=new Date();
today.setHours(0,0,0,0);
button.addEventListener('click',()=>{
    if(amount.value==='' || date.value==='' || type.value==='')
    {
        alert('enter all required fileds');
    }
    else if(new Date(date.value)>today)
    {
        alert('Future dates are not allowed');
    }
    else{
        const table=document.getElementById('transaction-table');
        const header=document.getElementById('header-row');
        const data=document.createElement('tr');
        let dr=[];
         dr[0]=document.createElement('td');
        dr[0].textContent=amount.value;
       dr[1]= document.createElement('td');
       dr[1].textContent=type.value;
        dr[2]=document.createElement('td');
    dr[2].textContent=date.value;
       dr[3]=document.createElement('td');
       const btn=document.createElement('button');
      btn.textContent='Delete';
         btn.style.backgroundColor='rgb(16, 108, 151)';
         btn.style.color='white';
         btn.style.border=0;
         btn.style.padding="5px";
      dr[3].appendChild(btn);

        for(let i=0;i<dr.length;i++)
        {dr[i].style.fontSize = "1.3rem";
            data.appendChild(dr[i]);
        }
        const inputtype=type.value;
        const transactionamt=amount.value;
        table.appendChild(data);
        if(inputtype==='income')
        {
            totincome+=Number(transactionamt);
        }
        else{
            totexpense+=Number(transactionamt);
        }
        btn.addEventListener('click',()=>{
            table.removeChild(data);
  if(inputtype==='income')
        {
            totincome-=Number(transactionamt);
        }
        else{
            totexpense-=Number(transactionamt);
        }
        document.getElementById('income').innerHTML = totincome;
document.getElementById('expense').innerHTML = totexpense;
document.getElementById('balance').innerHTML = totincome - totexpense;
        });
        document.getElementById('income').innerHTML=totincome;
        document.getElementById('expense').innerHTML=totexpense;
        totbalance=totincome-totexpense;
        document.getElementById('balance').innerHTML=totbalance;
        amount.value="";
        date.value='';
    }
}

);