function table(){
    document.getElementById("demo").innerHTML = "";
    let TableNo = document.getElementById("TabelNo").value;
    for(i=1;i<=10;i++){
        let innerP =  document.createElement('p');
        let TableInner =   TableNo+' * '+ i + ' = ' + TableNo*i
        innerP.innerHTML = TableInner;
        let demoId = document.getElementById('demo');
        demoId.appendChild(innerP);
        console.log(TableNo*i);
    }
}