D=o=n=p=0,a.style.cssText='height:100%;image-rendering:pixelated;image-rendering:-moz-crisp-edges';t=(x,y)=>(x+360)%360,T=(x,y)=>0<x&&x<y;m=(x,y)=>(x=(y/60|0)*6+(t(x)/60|0))*28%64<39-x/4;u=150,onkeydown=onkeyup=(x,y)=>c[39-x.which]=x.type[5];setInterval(x=(x,y)=>{v=!c[2]-!c[0];s=t(s+v*4);z=D+=n=-Math.min(c[1]&&u&&u--?2:8,1-n);p+=110<D-p?D-p-110:D-p<5&&D-p-5;I=1228<D?D=c[n=0]=1230:0,((z/60|0)-19||o%60<30)&&m(98+s,D)&&T(D%60-30-n,1-n)&&T((s+38)%60,52)&&(D+=30-D%60,n=13);0<D||(n=13,D=-2);(x=(x,y)=>{w=new ImageData(120,160);for(x=120*160;x--;)y=160-(x/120|0),e=t(~v?x%120-53:69-x%120),z=p+y,l=T(f=z-D+!I*Math.sin(x%120/2)*(14-Math.hypot(n))/8|0,24)&&T(x%120-52,16)&&!(f<0||47-e<f*2||f<18-e*3&&e*5-4<f||37-f<e*2&&f<e+4)?e+7-f?30-f<e*2&&f<e+4?18:3-(x+z)%2/3:5:z<0?z+6:1230<z?I?(x%120-60)/(100-y)*5+o/5&1&&5-x*x/Math.PI%1:1:Math.sin(r=Math.acos(x%120/60%2-1))*9-12+(e=t((1-r/Math.PI)*180+s|0),f=(z/60|0)-19||o%60<30?z:z%12+60,f<42&&T(e-126,24)&&e%3+1||m(e,f)&&T(f%60-24,6)&&T(e%60,36)&&10||m(e,f)&&T(f%60-30,24)&&T(e%60-6,24)||T(f/6%51,1)&&7||f%6&&(e+(f/6&1)*6)%12&&((1+e+(f/6&1)*6)%12&&8||6))*2-(g=f*360+e)*g/Math.PI%1*2,d=Math.min(1,-Math.min(0,Math.hypot(60-x%120,12-z+D)/12-2))*u*l/80,w.data.set([9*d+l*8,6*d+l*8,6*l+d+l*8,6*60],x*4);c.putImageData(w,0,0)})(o++)},s=33)