(function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"238d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"light"}},[n("b-navbar-brand",{attrs:{href:"#"}},[e._v("โรงพยาบาลพุทธชินราช พิษณุโลก")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}})],1),n("HelloWorld")],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("h4",[e._v("เกณฑ์การประเมินความเสี่ยงของการได้รับเชื้อไวรัสโคโรน่า 2019")]),e._m(0),e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-list-group",[n("b-list-group-item",[n("b-form-group",{attrs:{label:"1. จังหวัดเสี่ยงตามประกาศของ ศบค."},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"radio-group-1",options:e.options1,"aria-describedby":r,name:"radio-options1"},model:{value:e.selected1,callback:function(t){e.selected1=t},expression:"selected1"}})]}}],null,!1,2106511437)})],1),n("b-list-group-item",[n("b-form-group",{attrs:{label:"2. ความหนาแน่นของสถานที่เสี่ยง. (จังหวัดสีส้ม - สีแดง)"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"radio-group-2",options:e.options2,"aria-describedby":r,name:"radio-options2"},model:{value:e.selected2,callback:function(t){e.selected2=t},expression:"selected2"}})]}}],null,!1,544995437)})],1),n("b-list-group-item",[n("b-form-group",{attrs:{label:"3. การระบายอากาศของสถานที่เสี่ยง. (จังหวัดสีส้ม - สีแดง)"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"radio-group-3",options:e.options3,"aria-describedby":r,name:"radio-options3"},model:{value:e.selected3,callback:function(t){e.selected3=t},expression:"selected3"}})]}}],null,!1,3186127885)})],1),n("b-list-group-item",[n("b-form-group",{attrs:{label:"4. ระยะเวลาที่ใช้ในสถานที่เสี่ยง.  (จังหวัดสีแดง)"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"radio-group-4",options:e.options4,"aria-describedby":r,name:"radio-options4"},model:{value:e.selected4,callback:function(t){e.selected4=t},expression:"selected4"}})]}}],null,!1,3714260269)})],1),n("b-list-group-item",[n("b-form-group",{attrs:{label:"5. ลักษณะการพูดคุยในสถานที่เสียง."},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-radio-group",{attrs:{id:"radio-group-5",options:e.options5,"aria-describedby":r,name:"radio-options5"},model:{value:e.selected5,callback:function(t){e.selected5=t},expression:"selected5"}})]}}],null,!1,2977232077)})],1)],1),n("br"),n("b-row",[n("b-col",[n("b-button",{attrs:{size:"lg",block:"",variant:"success",type:"submit"}},[n("b-icon",{attrs:{icon:"box-arrow-in-up-right"}}),e._v("ส่งผลตรวจสอบ ")],1)],1)],1),n("br")],1):e._e()],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{src:"https://klongchu.github.io/budhosp-questionnaire-covid19/img/map_covid19.13a86c27.jpg",alt:"",width:"100%",srcset:""}})])}],s={name:"HelloWorld",props:{msg:String},data:function(){return{show:!0,selected1:1,options1:[{text:"พื้นที่สีเหลือง (1-10 ราย)",value:1,variant:"danger"},{text:"พื้นที่สีส้ม (11-50 ราย)",value:2,variant:"danger"},{text:"พื้นที่สีแดง (มากกว่า 50 ราย)",value:3,variant:"danger"}],selected2:1,options2:[{text:"ห่างกันมากกว่า 1 เมตร",value:1},{text:"ห่างกันน้อยกว่า 1 เมตร แต่ไม่เบียดเสียด",value:2},{text:"เบียดเสียดหรือห่างกันน้อยกว่า 30 ชม",value:3}],selected3:1,options3:[{text:"ทำกิจกรรมในที่โล่งไม่มีเครื่องปรับอากาศ",value:1},{text:"สถานที่ปิดติดเครื่องปรับอากาศและมีการระบายอากาศเพียงพอ",value:2},{text:"สถานที่ปิดติดเครื่องปรับอากาศและไม่มีการระบายอากาศ",value:3}],selected4:1,options4:[{text:"น้อยกว่า 30 นาที",value:1},{text:"30 นาที - 1 ชั่วโมง",value:2},{text:"มากกว่า 1 ชั่วโมง",value:3}],selected5:1,options5:[{text:"พูดคุยธรรมดา + ใส่ Mask",value:1},{text:"มีการใช้เสียงดัง หรือตะโกนบางช่วง",value:2},{text:"มีการร้องตะโกนเกือบตลอดเวลา",value:3}],sum:0}},methods:{onSubmit:function(e){var t=this;e.preventDefault(),this.$swal({title:"ยืนยันส่งแบบสอบถาม Covid 19?",text:"ยืนยันส่งแบบสอบถาม Covid 19!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"ยืนยัน",cancelButtonText:"ยกเลิก"}).then((function(e){if(e.isConfirmed)switch(t.sum=parseInt(t.selected1+t.selected2+t.selected3+t.selected4+t.selected5),console.warn(t.sum),!0){case t.sum<=6:t.$swal({title:"ความเสี่ยงต่ำ",text:"",html:"<p style='text-align: center'>สังเกตอาการตนเอง 14 วัน สามารถทำงานได้ตามปกติ และยึดหลัก DMHTT</p> <p style='text-align: left'> • D – Distancing - เว้นระยะระหว่างกัน หลีกเลี่ยงการสัมผัสกับผู้อื่น </p><p style='text-align: left'> • M – Mask wearing – สวมหน้ากากอนามัยตลอดเวลา</p><p style='text-align: left'> • H – Hand washing – ล้างมือบ่อย ๆ </p><p style='text-align: left'> • T – Testing – ตรวจวัดอุณหภูมิร่างกาย </p><p style='text-align: left'> • T – Thaichana – ติดตั้งและใช้แอปพลิเคชั่นไทยชนะ</p>",imageUrl:"",imageHeight:200,imageAlt:"ความเสี่ยงต่ำ"});break;case t.sum>=7&&t.sum<=11:t.$swal({title:"ความเสี่ยงปานกลาง",text:"",html:"<p style='text-align: center'>ให้ไปรับการ swab ที่โรงพยาบาลใกล้บ้าน เพื่อตรวจหาเชื้อ COVID-19 ถ้าได้ผลลบสามารถทำงานได้ตามปกติ และยึดหลัก DMHTT</p> <p style='text-align: left'> • D – Distancing - เว้นระยะระหว่างกัน หลีกเลี่ยงการสัมผัสกับผู้อื่น </p><p style='text-align: left'> • M – Mask wearing – สวมหน้ากากอนามัยตลอดเวลา</p><p style='text-align: left'> • H – Hand washing – ล้างมือบ่อย ๆ </p><p style='text-align: left'> • T – Testing – ตรวจวัดอุณหภูมิร่างกาย </p><p style='text-align: left'> • T – Thaichana – ติดตั้งและใช้แอปพลิเคชั่นไทยชนะ</p>",imageUrl:"",imageHeight:200,imageAlt:"ความเสี่ยงต่ำ"});break;case t.sum>11:t.$swal("ความเสี่ยงสูง","ให้ไปรับการ swab ที่โรงพยาบาลใกล้บ้าน เพื่อตรวจหาเชื้อ COVID-19 กักตัวอยู่บ้าน 10 วัน และ swab ซ้ำในวันที่ 5","error");break;default:console.log("F")}}))},onReset:function(e){e.preventDefault()},onCancel:function(){console.log("User cancelled the loader.")}}},u=s,c=(n("e840"),n("2877")),d=Object(c["a"])(u,l,i,!1,null,"3fe97564",null),p=d.exports,f={name:"App",components:{HelloWorld:p}},b=f,g=(n("034f"),Object(c["a"])(b,o,a,!1,null,null,null)),m=g.exports,v=n("5f5b"),h=n("b1e0"),x=n("5886");n("f9e3"),n("2dd8"),n("4413");r["default"].use(x["default"]),r["default"].use(v["a"]),r["default"].use(h["a"]),new r["default"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){},e840:function(e,t,n){"use strict";n("238d")}});
//# sourceMappingURL=app.1293002f.js.map