let flag=2;
slideshow(flag);
function slideshow(num){
    let slides=document.getElementsByClassName('img-slider');
    if(num==slides.length)
    {
        flag=0;
        num=0;
    }
    if(num<0)
    {
        flag=slides.length-1;
        num=slides.length-1;
    }
    for(let y of slides)
    {
        y.style.display="none";
    }
    slides[num].style.display="block";
}
function next(a){
    flag=flag+a;
    slideshow(flag);
}