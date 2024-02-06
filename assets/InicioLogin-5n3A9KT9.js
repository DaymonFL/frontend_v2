import{u as w,r as x,m as g,a as k,_ as S,V as C,b as F,c as f,d,e as I,f as h,g as T,h as D}from"./VTextField-3mF8LsWK.js";import{r as E,o as L,c as U,a as e,w as t,F as j,b as r,d as u,t as c,e as b}from"./index-DES5QqLj.js";/* empty css            */import{V as B,a as p,_ as v,b as _}from"./VCarouselItem-G_XY91k0.js";import{V as $,_ as y,a as N,b as q,c as V}from"./VList-9COB0R3z.js";import{V as z,a as K}from"./VSnackbar-uj1bykoV.js";const J={name:"InicioLogin",setup(){return{v$:w()}},data(){return{value:!0,show1:!1,snackbar:!1,textoTituloSnackbar:"",textoSnackbar:"",colorSnackbar:"",i:0,textoTitulo:"Sistema de Registro de Usuarios",form1:{user:"",pass:""},form1Default:{user:"",pass:""}}},validations(){return{form1:{user:{required:x,maxLength:g(15)},pass:{required:x,maxLength:g(10)}}}},computed:{userErrors(){const l=[];return this.v$.form1.user.$error&&(this.v$.form1.user.required&&l.push("Indicar un nombre de usuario"),this.v$.form1.user.maxLength&&l.push("El nombre de usuario no debe exceder los 15 caracteres")),l},passErrors(){const l=[];return this.v$.form1.pass.$error&&(this.v$.form1.pass.required&&l.push("Indicar una contraseña"),this.v$.form1.pass.maxLength&&l.push("La contraseña no debe exceder los 10 caracteres")),l}},methods:{async validarForm(){if(this.v$.$validate(),this.v$.form1.$invalid)console.log("Login todo mal");else{let l=new FormData;l.append("usuario",this.form1.user),l.append("contrasena",this.form1.pass);let s={usuario:this.form1.user,contrasena:this.form1.pass};const i=await this.$axios.post("/login/",s).then(function(a){return console.log(a.data),a.data}).catch(function(a){return console.log("Error: ",a.response.data),a.response.data});if(i.ok==!1)this.snackbar=!0,this.colorSnackbar="red-darken-2",this.textoTituloSnackbar="Error",this.textoSnackbar=i.msg,this.limpia();else{const a=k();a.creaMenu(i.menu[0].items),a.creaSesionUsuario(i.usuarioJson[0]),console.table(a.usuario),localStorage.idUsuario=JSON.stringify(i.usuarioJson[0].idUsuario),localStorage.setItem("links",JSON.stringify(i.menu[0].items)),localStorage.jwt=i.token,localStorage.admin=i.admin,localStorage.login=!1,console.log(i.link),E.push(i.link)}}},limpia(){this.v$.$reset(),this.$nextTick(()=>{this.form1=Object.assign({},this.form1Default)})}},mounted(){}},O=r("div",{class:"area"},[r("ul",{class:"circles"},[r("li"),r("li"),r("li"),r("li"),r("li"),r("li"),r("li"),r("li"),r("li"),r("li")])],-1),A=r("br",null,null,-1),M=r("br",null,null,-1),P=r("br",null,null,-1),R=r("br",null,null,-1),Y=r("br",null,null,-1),Q=r("br",null,null,-1),G=r("div",{class:"text-caption mx-3 my-0 py-0 text-right"},"1.0Beta",-1),H={class:"text-subtitle-1"};function W(l,s,i,a,o,m){return L(),U(j,null,[O,e(z,{justify:"space-around"},{default:t(()=>[e(C,{cols:"auto"},{default:t(()=>[e($,{modelValue:o.value,"onUpdate:modelValue":s[7]||(s[7]=n=>o.value=n),persistent:"",width:"600px"},{default:t(()=>[e(F,{class:"rounded-xl"},{default:t(()=>[e(B,{cycle:"",height:"180","hide-delimiters":"","hide-delimiter-background":"","show-arrows":!1},{default:t(()=>[e(p,{key:"1",cover:"",gradient:"to bottom, rgba(0,0,0,.9), rgba(0,0,0,.1)"},{default:t(()=>[e(f,{class:"mx-auto my-auto",cover:"","lazy-src":v,src:v},{default:t(()=>[e(d,{class:"my-auto text-white text-wrap text-center justify-center align-center flex-sm-grow-0",style:{width:"100%","white-space":"normal"}},{default:t(()=>[A,M,u(c(o.textoTitulo),1)]),_:1})]),_:1})]),_:1}),e(p,{key:"2",cover:"",gradient:"to bottom, rgba(0,0,0,.9), rgba(0,0,0,.1)"},{default:t(()=>[e(f,{class:"mx-auto",cover:"","lazy-src":y,src:y},{default:t(()=>[e(d,{class:"text-white text-wrap text-center justify-center align-center flex-sm-grow-0",style:{width:"100%","white-space":"normal"}},{default:t(()=>[P,R,u(c(o.textoTitulo),1)]),_:1})]),_:1})]),_:1}),e(p,{key:"3",cover:"",gradient:"to bottom, rgba(0,0,0,.9), rgba(0,0,0,.1)"},{default:t(()=>[e(f,{class:"mx-auto",cover:"","lazy-src":_,src:_},{default:t(()=>[e(d,{class:"text-white text-wrap text-center justify-center align-center flex-sm-grow-0",style:{width:"100%","white-space":"normal"}},{default:t(()=>[Y,Q,u(c(o.textoTitulo),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(d,{class:"text-center",style:{"font-size":"1em"}},{default:t(()=>[u(" Ingresar usuario y contraseña de acceso ")]),_:1}),e(I,{class:"text-center"},{default:t(()=>[e(N,null,{default:t(()=>[e(q,null,{default:t(()=>[e(h,{modelValue:o.form1.user,"onUpdate:modelValue":s[0]||(s[0]=n=>o.form1.user=n),counter:15,label:"Usuario","error-messages":m.userErrors,onChange:s[1]||(s[1]=n=>a.v$.form1.user.$touch()),onBlur:s[2]||(s[2]=n=>a.v$.form1.user.$touch()),color:"#32215C",maxlength:15,"prepend-icon":"mdi-account-circle",onKeypress:b(m.validarForm,["enter"]),required:""},null,8,["modelValue","error-messages","onKeypress"]),e(h,{modelValue:o.form1.pass,"onUpdate:modelValue":s[3]||(s[3]=n=>o.form1.pass=n),class:"mt-2",color:"#32215C",counter:10,maxlength:10,"append-icon":o.show1?"mdi-eye":"mdi-eye-off",type:o.show1?"text":"password","error-messages":m.passErrors,onChange:s[4]||(s[4]=n=>a.v$.form1.pass.$touch()),onBlur:s[5]||(s[5]=n=>a.v$.form1.pass.$touch()),"onClick:append":s[6]||(s[6]=n=>o.show1=!o.show1),label:"Contraseña","prepend-icon":"mdi-key",onKeypress:b(m.validarForm,["enter"]),required:""},null,8,["modelValue","append-icon","type","error-messages","onKeypress"]),e(T,{color:"#32215C",block:"",onClick:m.validarForm,class:"mt-2"},{default:t(()=>[u("Ingresar")]),_:1},8,["onClick"])]),_:1}),e(V)]),_:1})]),_:1}),e(V,{class:"mx-auto"}),e(d,{style:{"font-size":"0.87em"},class:"justify-center text-center text-wrap"},{default:t(()=>[r("strong",null,"Secretaría de Planeación e Informática de la Facultad de Química © "+c(new Date().getFullYear()),1),r("p",null,"UNAM "+c(new Date().getFullYear()),1)]),_:1}),G]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(K,{modelValue:o.snackbar,"onUpdate:modelValue":s[8]||(s[8]=n=>o.snackbar=n),vertical:"",timeout:2e3,color:o.colorSnackbar,location:"top",elevation:"24"},{actions:t(()=>[]),default:t(()=>[r("div",H,[e(D,{left:""},{default:t(()=>[u("mdi-information-outline")]),_:1}),u(" "+c(o.textoTituloSnackbar),1)]),r("p",null,c(o.textoSnackbar),1)]),_:1},8,["modelValue","color"])],64)}const oe=S(J,[["render",W]]);export{oe as default};
