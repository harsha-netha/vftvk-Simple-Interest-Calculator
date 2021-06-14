function compute()
{
    var pp = document.getElementById("principal");
    var p =pp.value;
    if(p<=0 || p==''){
        alert ("Enter a positive number");
        pp.innerText='';
        pp.focus();
    }
    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = p * years * rate/100;
        var amt = p+interest;
        var year = new Date().getFullYear()+parseInt(years);   
        document.getElementById("result").innerHTML='If you deposit <span style=\'background-color:yellow;\'>'+p+'</span>,<br>an interest rate of <span style=\'background-color:yellow;\'>'+rate+'%</span>.<br>You will receive an amount of <span style=\'background-color:yellow;\'>'+interest+'</span>,<br>in the year <span style=\'background-color:yellow;\'>'+year+'</span>';
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value+'%';
    document.getElementById("rate_val").innerText=rateval;
}
