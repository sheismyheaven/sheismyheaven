for(let i=0;i<35;i++){

const flower=document.createElement("div");

flower.innerHTML="🌷";

flower.style.position="absolute";

flower.style.left=Math.random()*100+"vw";

flower.style.top=Math.random()*100+"vh";

flower.style.fontSize=(20+Math.random()*30)+"px";

flower.style.opacity=0.35;

flower.style.animation=float ${5+Math.random()*8}s ease-in-out infinite;

document.body.appendChild(flower);

}

const style=document.createElement("style");

style.innerHTML=

@keyframes float{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-20px);

}

100%{

transform:translateY(0px);

}

}

;

document.head.appendChild(style);
