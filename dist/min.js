S=60;I=x=>(x+360)%360;l=(x,y,z)=>x<y&&y<z;u=(x,y)=>l(0,y/6%51,1)?70:y%6&&(x+(y/6|0)%2*6)%12&&(u(x+1,y)?80:S);R=x=>x/S|0;B=[M=Math];for(r=i=120;n=v=r--;)B[r]=r*28%64<39-r/4;for(t=[e=360];e--;)for(t[e]=[f=s=1231];f--;)t[e][f]=f&&f<42&l(126,e,150)?40-e%3:B[R(f)*6+R(e)]&&(l(24,f%S,30)&l(0,e%S,36)?90:l(30,f%S,54)&l(6,e%S,30))||u(e,f);k=M.min;p=-20;h=[];onkeydown=onkeyup=e=>{h[$=e.which-37]=e.type[5]};setInterval(e=>{P=!h[0]-!h[2];o=I(o+P*4);r=-k(h[1]&&i&&i--?5:10,1-r);n+=r;p+=(y=n-p)>110?y-110:y<5?y-5:0;if(v=n>1228)n=h[2]=s,r=0;if(r<0&B[R(n)*6+R(I(98+o))]&l(r,n%S-30,1)&l(0,(o+38)%S,52))n+=30-n%S,r=14;r=n>0?r:14;(x=>{for(;x--;)for(e=I(~P?x-53:69-x),y=160;y--;)f=y+p-n,w=l(n,y+p,n+24)&l(52,x,68)&!(f<0|47-e<f*2|f<20-e*3&f>e*5-4|e*2>37-f&e+4>f)?e+7-f?e*2>30-f&e+4>f?99:9:30:p<-y?9+y+p:p+y>s?v?M.atan2(120-y,x-S)*8+o/9*M.PI&1&&40:10:M.sin(a=M.acos(x/S%2-1))*40-S+t[I((1-a/M.PI)*180+o|0)][y+p],d=k(1,-k(0,M.hypot(S-x,n-y-p+12)/12-2))*i,c.fillStyle=`hsl(${240+d},25%,${w+d/6}%)`,c.fillRect(x*4,640-y*4,4,4)})(120)},o=42)