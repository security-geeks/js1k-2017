D=o=n=p=0,a.style.cssText='height:100%;image-rendering:pixelated';t=(x,y,z)=>(x+360)%360,T=(x,y,z)=>x<y&&y<z;m=(x,y,z)=>(x=(y/60|0)*6+(t(x)/60|0))*28%64<39-x/4;u=150,onkeydown=onkeyup=(x,y,z)=>c[39-x.which]=x.type[5];setInterval(x=(x,y,z)=>{v=!c[2]-!c[0];s=t(s+v*4);z=D+=n=-Math.min(c[1]&&u&&u--?2:8,1-n);p+=110<D-p?D-p-110:D-p<5&&D-p-5;I=1228<D?D=c[n=0]=1230:0,((z/60|0)-19||o%60<30)&&m(98+s,D)&&T(n,D%60-30,1)&&T(0,(s+38)%60,52)&&(D+=30-D%60,n=13);0<D||(n=13,D=-2);(x=(x,y,z)=>{w=new ImageData(120,160);for(x=120*160;x--;)y=(x/-120|0)+160,e=t(~v?x%120-53:69-x%120),z=p+y,l=T(0,f=z-D+!I*Math.sin(x%120/2)*(14-Math.hypot(n))/8|0,24)&&T(52,x%120,68)&&!(f<0||47-e<f*2||f/3<6-e&&e*5-4<f||37-f<e*2&&f<e+4)?e+7-f?30-f<e*2&&f<e+4?18:3:5:z<0?z+6:1230<z?I?(x%120-60)/(100-y)*5+o/5&1&&5-x*x/Math.PI%1:1:Math.sin(r=Math.acos(x%120/60%2-1))*9-12+(e=t((1-r/Math.PI)*180+s|0),f=(z/60|0)-19||o%60<30?z:z%12+60,f<42&&T(126,e,150)&&e%3+1||m(e,f)&&T(24,f%60,30)&&T(0,e%60,36)&&10||m(e,f)&&T(30,f%60,54)&&T(6,e%60,30)||T(0,f/6%51,1)&&7||f%6&&(e+(f/6&1)*6)%12&&((1+e+(f/6&1)*6)%12&&8||6))*2-(g=f*360+e)*g/Math.PI%1*2,d=Math.min(1,-Math.min(0,Math.hypot(60-x%120,12-z+D)/12-2))*u*l/80,w.data.set([9*d+l*8,6*d+l*8,l*6+d+l*8,255],x*4);c.putImageData(w,0,0)})(o++)},s=33)