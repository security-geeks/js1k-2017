o=[h=m=n=D=0];a.style='width:480px;height:640px;image-rendering:pixelated';g=(x,y,z)=>(x+360)%360,k=(x,y,z)=>x<y&&y<z;M=(x,y,z)=>x/60|0,s=(x,y,z)=>(z=M(y)*6+M(x))*28%64<39-z/4;for(x=1230*360;x--;)y=x/360|0,o[x]=y<42&&k(126,g(x),P=150)?g(x)&3:s(g(x),y)&&(k(24,y%60,30)&&k(0,g(x)%60,36)?9:k(30,y%60,54)&&k(6,g(x)%60,30))||(k(0,y/6%51,1)?7:y%6&&(g(x)+(y/6&1)*6)%12?(1+g(x)+(y/6&1)*6)%12?8:6:0);onkeydown=onkeyup=(x,y,z)=>c[39-x.which]=x.type[5];setInterval(x=(x,y,z)=>{I=!c[2]-!c[0];i=g(i+I*4);z=h+=n=-Math.min(c[1]&&P&&P--?2:8,1-n);D+=110<(y=h-D)?y-110:y<5&&y-5;p=1228<h?h=c[n=0]=1230:0,(M(z)-19||m%60<30)&&s(g(98+i),h)&&k(n,h%60-30,1)&&k(0,(i+38)%60,52)&&(h+=30-h%60,n=13);0<h||(n=13,h=-2);(x=(x,y,z)=>{w=new ImageData(120,160);for(x=120*160;x--;)y=x/-120+159|0,e=g(~I?x%120-53:69-x%120),z=D+y,l=k(0,f=z-h+!p*Math.sin(x%120/2)*(14-Math.hypot(n))/8|0,24)&&k(52,x%120,68)&&!(f<0||47-e<f*2||f/3<6-e&&e*5-4<f||37-f<e*2&&f<e+4)?e+7-f?30-f<e*2&&f<e+4?7:2:4:z<0?-z/2:1230<z?p?(x%120-60)/(100-y)*5+m/5&1&&4:1:Math.sin(r=Math.acos(x%120/60%2-1))*8-6+o[(M(z)-19||m%60<30?z:z%12+60)*360+g((1-r/Math.PI)*180+i|0)],d=Math.min(1,-Math.min(0,Math.hypot(60-x%120,12-z+h)/12-2))*P*l/50,w.data.set([9*d+l*8,6*d+l*8,l*8+d+l*8,255],x*4);c.putImageData(w,0,0)})(m++)},i=33)