const btn = document.querySelector('button.clickbtn');
btn.addEventListener('click',function(){
    let ary = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let clr = '#';
    for(i=0; i<6; i++){
        let num = Math.round(Math.random()*15);
        let randary = ary[num];
        clr += randary;
    }
    document.querySelector('body').style.backgroundColor = clr;
    document.querySelector('.wrp p').innerHTML = clr;
});