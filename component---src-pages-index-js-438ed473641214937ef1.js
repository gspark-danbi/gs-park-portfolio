(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,a,t){"use strict";t.r(a);var n=t(7),i=t.n(n),o=t(0),r=t.n(o),l=t(146),c=t(171),s=t(148),m=t(147),d=t.n(m),p=t(154),u=t(155),h=t(157),g=t(156),f=(t(151),Object(l.default)((function(e){var a=e.className,t=e.title,n=e.name,i=e.icon;return r.a.createElement("div",{className:a,name:n},i,r.a.createElement("h1",{className:"header__title"},t))})).withConfig({displayName:"sectionTitle",componentId:"sc-1glycpz-0"})(["display:flex;flex-direction:row;align-items:center;margin-bottom:24px;.header__title{margin-bottom:0;margin-left:10px;}"])),b=function(e){e.title;var a=e.text,t=void 0===a?"":a;return r.a.createElement(o.Fragment,null,r.a.createElement(f,{title:"About",name:"about",icon:r.a.createElement(s.FaUserAlt,{size:28})}),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t}}))},_=function(e){var a=e.className,t=e.name;e.level;return r.a.createElement("div",{className:a},r.a.createElement("label",{htmlFor:t+"-bar"},t),r.a.createElement("div",{id:t+"-bar",className:"skill__bar"},r.a.createElement("div",{className:"skill__level"})))};_.displaName="SkillBar";var v=Object(l.default)(_).withConfig({displayName:"skill-bar",componentId:"sc-1tv82hj-0"})([".skill__bar{height:10px;background-color:lightgrey;margin-top:4px;padding:1px;}.skill__level{background-color:#25303B;width:","%;height:8px;}"],(function(e){return e.level||0})),x=function(e){var a=e.title,t=void 0===a?"Skills":a,n=e.skills,i=void 0===n?[]:n;return r.a.createElement(o.Fragment,null,r.a.createElement(f,{title:t,name:t.toLowerCase(),icon:r.a.createElement(s.FaUserGraduate,{size:28})}),i.map((function(e){return r.a.createElement(v,{key:e.name,name:e.name,level:e.level})})))},y=t(191),E=t.n(y);function k(){var e=E()(["\n  .timeline__item div.inner {\n    width: 40%;\n    margin: 5px 0 0 0;\n  }\n\n  .timeline__item div.inner h2:after {\n    display: block;\n    top: 20px;\n    left: unset;\n    right: -5px;\n  }\n  .timeline__item:nth-child(2n+2) div.inner h2:after {\n    left: -5px;\n  }\n\n  "]);return k=function(){return e},e}var N=Object(l.default)((function(e){var a=e.className;return r.a.createElement("div",{className:a},r.a.createElement(f,{title:"Experience",name:"experience",icon:r.a.createElement(s.FaSuitcase,{size:28})}),d.a.jobs&&d.a.jobs.map((function(e){return r.a.createElement("article",{key:e.begin.month+e.begin.year,className:"timeline__item"},r.a.createElement("div",{className:"inner"},r.a.createElement("span",{className:"timeline__date"},r.a.createElement("span",{className:"timeline__month"},e.begin.month),r.a.createElement("span",{className:"timeline__year"},e.begin.year)),r.a.createElement("h2",{className:"timeline__title"},e.occupation," at ",e.company," ",r.a.createElement("br",null),r.a.createElement("small",{className:"timeline__title--small"},e.location," "),r.a.createElement("small",{className:"timeline__title--small timeline__title--right"},"(",e.duration||"present",")")),r.a.createElement("p",null,e.description)))})))})).withConfig({displayName:"timeline",componentId:"sc-1p0hdle-0"})(["position:relative;:before{content:'';display:block;position:absolute;left:50%;top:0;margin:70px 0 0 -1px;width:1px;height:calc(100% - 70px);background:#25303b;}.timeline__item{width:100%;margin:0 0 20px 0;position:relative;}.timeline__item:after{content:'';display:block;clear:both;}.timeline__item div.inner{width:100%;float:left;margin:85px 0 0 0;border-radius:6px;border:1px solid #25303b;}.timeline__date{display:block;width:60px;padding:3px 5px;position:absolute;top:0;left:50%;margin:0 0 0 -30px;border-radius:100%;font-size:12px;font-weight:900;text-transform:uppercase;background:#25303b;color:#fff;box-shadow:0 0 0 7px #fff;}.timeline__date span{display:block;text-align:center;}.timeline__month{font-size:18px;padding-top:4px;}.timeline__year{font-size:10px;}.timeline__title{padding:15px;margin:0;color:#fff;font-size:20px;text-transform:uppercase;border-radius:3px 3px 0 0;position:relative;}.timeline__title:after{content:'';display:none;position:absolute;top:-5px;left:30%;width:10px;height:10px;transform:rotate(-45deg);}.timeline__item div.inner p{padding:15px;margin:0;font-size:14px;background:#fff;color:#656565;border-radius:0 0 6px 6px;}.timeline__item:nth-child(2n + 2) div.inner{float:right;}.timeline__title{background:#25303b;}.timeline__title:after{background:#25303b;}.timeline__title--small{font-size:10px;}.timeline__title--right{float:right;margin-top:8px;}",""],(function(e){return Object(c.config)().media.sm(k())})),w=t(192),C=t.n(w),S=(t(172),t(193)),j=t.n(S),D=t(194),F=t.n(D),L=Object(l.default)((function(e){var a=e.className;return r.a.createElement("div",{className:a},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))})).withConfig({displayName:"loader",componentId:"c3nj0n-0"})(["display:inline-block;position:relative;width:64px;height:64px;margin:0 auto;div{box-sizing:border-box;display:block;position:absolute;width:51px;height:51px;margin:6px;border:6px solid #25303B;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(0.5,0,0.5,1) infinite;border-color:#25303B transparent transparent transparent;}div:nth-child(1){animation-delay:-0.45s;}div:nth-child(2){animation-delay:-0.3s;}div:nth-child(3){animation-delay:-0.15s;}@keyframes lds-ring{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),I="https://api.github.com/users/"+d.a.githubUsername+"/repos?type=owner&sort=updated&per_page=5&page=1",z=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={repos:[],status:"loading"},t}i()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=j()(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F()(I);case 2:(a=e.sent).json&&a.json.length&&this.setState({repos:a.json,status:"ready"});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),t.render=function(){var e=this.state.status;return r.a.createElement("div",{className:this.props.className},r.a.createElement("h2",null,"Latest repositories on Github"),"loading"===e&&r.a.createElement("div",{className:"repositories__loader"},r.a.createElement(L,null)),"ready"===e&&this.state.repos&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"repositories__content"},this.state.repos.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement("div",{className:"repositories__repo"},r.a.createElement("a",{className:"repositories__repo-link",href:e.html_url},r.a.createElement("strong",null,e.name)),r.a.createElement("div",null,e.description),r.a.createElement("div",{className:"repositories__repo-date"},"Updated: ",new Date(e.updated_at).toUTCString()),r.a.createElement("div",{className:"repositories__repo-star"},"★ ",e.stargazers_count)),r.a.createElement("hr",null))})))))},a}(r.a.Component),P=(Object(l.default)(z).withConfig({displayName:"repositories",componentId:"sc-8n2gji-0"})(["position:relative;.repositories__content{margin-bottom:40px;}.repositories__repo{position:relative;}.repositories__repo-link{text-decoration:none;color:#25303B;}.repositories__repo-date{color:#bbb;font-size:10px;}.repositories__repo-star{position:absolute;top:0;right:0;}.repositories__loader{display:flex;}hr{margin-top:16px;}"]),Object(l.default)((function(e){var a=e.className;return r.a.createElement("div",{className:a},r.a.createElement(f,{title:"Education",name:"education",icon:r.a.createElement(s.FaUniversity,{size:28})}),r.a.createElement("div",{className:"education__content"},d.a.education&&d.a.education.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:e.field+"_"+e.degree},r.a.createElement("div",{className:"education__edu"},r.a.createElement("div",{className:"education__edu-header"},r.a.createElement("span",{className:"education__edu-school"},e.school),r.a.createElement("span",{className:"education__edu-date"},e.startYear," - ",e.endYear||"Present")),r.a.createElement("span",{className:"education__edu-studies"},e.field)),a<d.a.education.length-1&&r.a.createElement("hr",null))}))))})).withConfig({displayName:"education",componentId:"sc-1s7b1vv-0"})(["position:relative;.education__content{margin-bottom:40px;}.education__edu{display:flex;flex-direction:column;margin-bottom:20px;}.education__edu-header{display:flex;flex-direction:row;justify-content:space-between;}.education__edu-school{font-weight:bold;}.education__edu-date{color:#bbb;font-size:10px;}.education__edu-studies{font-size:16px;font-style:italic;}.education__lang{display:flex;align-items:center;}.education__lang__flag{margin:0;margin-right:6px;}.education__lang__text--noflag{margin-left:24px;}"])),O=Object(l.default)((function(e){var a=e.className;return r.a.createElement("div",{className:a},r.a.createElement(f,{title:"Hobbies",name:"hobbies",icon:r.a.createElement(s.FaCoffee,{size:28})}),r.a.createElement("div",{className:"hobbies__content"},d.a.hobbies&&d.a.hobbies.map((function(e){var a=t(148)[e.icon];return r.a.createElement("div",{className:"hobbies_item",key:e.name},r.a.createElement(a,{size:32}),r.a.createElement("span",null,e.name))}))))})).withConfig({displayName:"hobbies",componentId:"ce8v9b-0"})([".hobbies__content{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));}.hobbies_item{min-height:120px;display:flex;justify-content:center;align-items:center;flex-direction:column;margin:10px;text-align:center;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);border-radius:3px;}"]),A=(Object(l.default)((function(e){var a=e.className,t=Object(o.useState)(""),n=t[0],i=t[1];return r.a.createElement("div",{className:a},r.a.createElement(f,{title:"Contact",name:"contact",icon:r.a.createElement(s.FaEnvelope,{size:28})}),r.a.createElement("div",{className:"contact__content"},r.a.createElement("form",{name:"contact-form",method:"POST",className:"contact__form","data-netlify":"true"},r.a.createElement("div",{className:"contact__form__item"},r.a.createElement("label",{htmlFor:"name",className:"contact__form__label"},"Name:"),r.a.createElement("input",{type:"text",placeholder:"name",name:"name"})),r.a.createElement("div",{className:"contact__form__item"},r.a.createElement("label",{htmlFor:"category",className:"contact__form__label"},"Category:"),r.a.createElement("select",{value:n,name:"category",onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:"",disabled:!0},"Select category"),r.a.createElement("option",{value:"general"},"General inquiry"),r.a.createElement("option",{value:"job"},"Job offer"),r.a.createElement("option",{value:"training"},"Training offer"))),"training"===n&&r.a.createElement("div",{className:"contact__form__item"},r.a.createElement("label",{htmlFor:"location",className:"contact__form__label"},"Location:"),r.a.createElement("input",{type:"text",placeholder:"location",name:"location"})),"job"===n&&r.a.createElement("div",{className:"contact__form__item"},r.a.createElement("label",{htmlFor:"job_type",className:"contact__form__label"},"Job type:"),r.a.createElement("div",{className:"contact__form_radioContainer"},r.a.createElement("label",{htmlFor:"perm",className:"contact__form_radioLabel"},"Permanent"),r.a.createElement("input",{type:"radio",id:"perm",name:"job_type",value:"perm"})),r.a.createElement("div",{className:"contact__form_radioContainer"},r.a.createElement("label",{htmlFor:"contract",className:"contact__form_radioLabel"},"Contract"),r.a.createElement("input",{type:"radio",id:"contract",name:"job_type",value:"contract"}))),r.a.createElement("div",{className:"contact__form__item"},r.a.createElement("label",{htmlFor:"message",className:"contact__form__label"},"Message:"),r.a.createElement("textarea",{rows:"4",cols:"50",name:"message"})),r.a.createElement("button",{type:"submit"},"Send"))))})).withConfig({displayName:"contact",componentId:"fta7bx-0"})([".contact__form{display:flex;flex-direction:column;}.contact__form__item{margin:10px;display:flex;align-items:center;}.contact__form__label{min-width:150px;display:inline-block;}.contact__form_radioContainer{display:inline-block;margin-right:20px;}.contact__form_radioLabel{margin-right:5px;}"]),l.default.hr.withConfig({displayName:"pages__Separator",componentId:"g1kolw-0"})(["margin-top:24px;margin-bottom:16px;"])),B=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=d.a.siteTitle,a=d.a.keywords,t=d.a.authorAvatar;return r.a.createElement("div",{className:this.props.className},r.a.createElement(p.a,{location:this.props.location},r.a.createElement(h.a,{title:e,keywords:a}),r.a.createElement(u.a,{heroImg:d.a.siteCover,title:e}),r.a.createElement(g.a,{className:this.props.className},r.a.createElement(c.Container,{className:"page-content",fluid:!0},r.a.createElement(c.Row,null,r.a.createElement(c.Col,{xs:4,className:"avatar"},r.a.createElement("img",{className:"avatar__image",src:t,alt:"user avatar"}),r.a.createElement("div",{className:"social"},d.a.social.github&&r.a.createElement("a",{className:"social-link github",href:d.a.social.github,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.FaGithub,{className:"social-icon",size:"32"})),d.a.social.email&&r.a.createElement("a",{className:"social-link email",href:"mailto:"+d.a.social.email,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.FaEnvelope,{className:"social-icon",size:"32"})),d.a.resume&&r.a.createElement("a",{className:"social-link resume",href:""+d.a.resume,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.FaFileAlt,{className:"social-icon",size:"28"}))))),r.a.createElement(c.Row,null,r.a.createElement(c.Col,{xs:4,sm:4},r.a.createElement(b,{title:"About",text:d.a.authorDescription})),r.a.createElement(c.Col,{xs:4,sm:4},r.a.createElement(x,{title:"Skills",skills:d.a.skills}))),r.a.createElement(A,null),r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(A,null),r.a.createElement(P,null),r.a.createElement(A,null),r.a.createElement(O,null),r.a.createElement(A,null)))))},a}(r.a.Component);a.default=Object(l.default)(B).withConfig({displayName:"pages",componentId:"g1kolw-1"})([".page-content{max-width:100%;margin-bottom:40px;}.avatar{align-items:center;margin-bottom:24px;}.avatar__image{box-shadow:3px 3px 15px 0px rgba(0,0,0,0.75);max-width:200px;border-radius:100px;margin:0 auto 24px;}.social{margin-top:12px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-around;}.social-link{padding:8px;color:#555;}a.social-link.twitter:hover{color:#1da1f2;}a.social-link.github:hover{color:#24292e;}a.social-link.linkedin:hover{color:#0077b5;}a.social-link.email:hover{color:#c23a2b;}a.social-link.resume:hover{color:#40c22b;}"])},147:function(e,a){e.exports={siteTitle:"Gyeseong Park!",siteDescription:"This is my personal website",keyWords:["gatsbyjs","react","curriculum"],authorName:"Gyeseong Park",twitterUsername:"ajimenezdev",githubUsername:"gs-park",authorAvatar:"./images/gs-park.jpeg",authorDescription:"Back-end Developer <br/><br/> 현재 o2o서비스 플랫폼을 개발중에 있으며  ( Node.js, Graphql, React, Mysql ...) 환경에서 협업하고있습니다.  <br/><br/>\n  </strong>",skills:[{name:"Javascript, C#, Delphi, GraphQL, HTML, CSS",level:100},{name:"Node.js, PHP, jQuery, Bootstrap",level:100},{name:" Sequelize, DataLoader, Gatsby",level:100},{name:"MsSQL, MySQL, Apache",level:100},{name:"GitHub",level:100},{name:"AWS EC2, Linux, Windows",level:100}],jobs:[{company:"Danbi",begin:{month:"03",year:"2020"},duration:null,location:"Seoul",occupation:"Back-end developer",description:"ORDER.FI Ver 1.6: 앱 설치를 하지 않고 유무선 공유기를 통한 매장내 주문관리 플랫폼"},{company:"Danbi",begin:{month:"02",year:"2020"},duration:"1 month",location:"seoul",occupation:"Lead Developer",description:"AD.FI BrandGroup AMIN : 유무선 공유기를 통한 광고 플랫폼 관리자페이지 개발 ( 1인 PROJECT )"},{company:"Danbi",begin:{month:"11",year:"2019"},duration:"3 months",location:"seoul",occupation:"Lead Developer",description:"AD.FI : 유무선 공유기를 통한 광고 플랫폼 Ver 1.5 개발 ( Back-end: 참여율 100% , Front-end : 참여율 : 50% )"},{company:"Danbi",begin:{month:"09",year:"2019"},duration:"2 months",location:"seoul",occupation:"Lead Developer",description:"AD.FI Singapore Ver : 해외용 유무선 공유기 광고 플랫폼 개발 ( Back-end: 참여율 100% , Front-end : 참여율 : 50% )"},{company:"Danbi",begin:{month:"06",year:"2019"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"WAIT.FI  : 매장내 웨이팅 솔루션 시스템 ( Back-end: 참여율 100% , Front-end : 참여율 : 50% )"},{company:"Danbi",begin:{month:"03",year:"2019"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"ORDER.FI : 앱 설치를 하지 않고 유무선 공유기를 통한 매장내 주문관리 플랫폼 ( Back-end: 참여율 100% , Front-end : 참여율 : 100%, Windows APP : 참여율 100% )"},{company:"Danbi 외주",begin:{month:"12",year:"2018"},duration:"3 months",location:"Seoul",occupation:"Lead Developer ",description:"PAYCOOP SNS 쇼핑몰 : ( Back-end: 참여율 100% ) "},{company:"Danbi",begin:{month:"09",year:"2018"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"KIOSK : 제주도를 방문하는 해외 여행객들을 위한 무인 티켓 발권 앱  ( Back-end: 참여율 100% )"},{company:"Danbi 외주",begin:{month:"06",year:"2018"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"SQRAP : 유명 커뮤니티를 통합한 커뮤니티 ( Back-end: 참여율 100% )"},{company:"Danbi 외주",begin:{month:"05",year:"2018"},duration:"1 month",location:"Seoul",occupation:"Lead Developer",description:"Eco-peace : 홈페이지 제작 ( Back-end: 참여율 100% )"},{company:"Danbi 외주",begin:{month:"02",year:"2018"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"Helpus : 청소 예약 관리 APP ( Back-end: 참여율 100% )"},{company:"Danbi 외주",begin:{month:"08",year:"2017"},duration:"6 months",location:"Seoul",occupation:"Lead Developer",description:"Wenicle : 청소 예약 관리 APP ( Back-end: 참여율 100% )"},{company:"Danbi 외주",begin:{month:"07",year:"2017"},duration:"1 month",location:"Seoul",occupation:"Lead Developer",description:"C2 soft : Table Manager APP에서 사용할 비인증 결제 모듈 개발 ( 참여율 100% )"},{company:"Danbi 외주",begin:{month:"04",year:"2017"},duration:"3 months",location:"Seoul",occupation:"Lead Developer",description:"Red Table : 대학가 식당 오더 시스템 ( 참여율 100% )"},{company:"Danbi 외주",begin:{month:"11",year:"2016"},duration:"5 months",location:"Seoul",occupation:"Lead Developer",description:"CANDY ONE : 10대들을 위한 쇼핑몰 APP ( 참여율 100% )"},{company:"Danbi",begin:{month:"10",year:"2015"},duration:"1 YEAR",location:"Seoul",occupation:"Lead Developer",description:"Luyou : 해외 관광객들을 위한 메뉴 주문 결제 APP (Back-end 참여율 100% )"},{company:"GoldLime",begin:{month:"05",year:"2015"},duration:"5 months",location:"Seoul",occupation:"Lead Developer",description:"문질러 : 모바일 광고 APP (Back-end 참여율 60% )"},{company:"Hanjin.enc",begin:{month:"12",year:"2009"},duration:"5Years and 6months",location:"Seoul",occupation:"Lead Developer",description:"교통관제 시스템 : 교차로내 설치된 제어기 원격 관리 관제 시스템"}],publications:[{title:"React Native intermediate level",company_medium:"OpenWebinars",date:{month:"jun",year:"2019"},link:"https://openwebinars.net/cursos/react-native-intermedio/",description:"Online training recorded for spanish e-learning platform. The training is for developers who know a little bit of ReactNative and wants to learn more about the platform"},{title:"React Native for beginners",company_medium:"OpenWebinars",date:{month:"jun",year:"2019"},link:"https://openwebinars.net/cursos/react-native-principiantes/",description:"Online training recorded for spanish e-learning platform. The training is for JS developers willing to learn the basics of ReactNative"}],education:[{school:"ChungKang College of Cultural Industries",degree:"Bachelor degree",field:"Software Engineering",startYear:2004,endYear:2010}],languages:[{language:"Spanish",level:"Native tongue",code:"ES"},{language:"Catalan",level:"Native tongue"},{language:"English",level:"Fluid Written & Spoken",code:"GB"}],social:{twitter:"https://twitter.com/ajimenezdev/",linkedin:"https://www.linkedin.com/in/alvarojimenezmartin/",github:"https://github.com/gs-park/",email:"lovesun19@gmail.com"},hobbies:[{name:"Camping",icon:"FaFreeCodeCamp"},{name:"Music",icon:"FaItunesNote"},{name:"Book",icon:"FaBook"},{name:"Traveling",icon:"FaPlane"},{name:"Movies & Series",icon:"FaTv"}],siteUrl:"https://gspark-danbi.github.io/gs-park-portfolio/",pathPrefix:"/gs-park-portfolio",siteCover:"./images/cover2.jpg",googleAnalyticsId:"",background_color:"#ffffff",theme_color:"#25303B",display:"minimal-ui",icon:"src/favicon.png",resume:"/resume_alvaro_jimenez.pdf",headerLinks:[{label:"About",url:"about"},{label:"Skills",url:"skills"},{label:"Experience",url:"experience"},{label:"Education",url:"education"},{label:"Hobbies",url:"hobbies"}]}},149:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(0),i=t.n(n),o=t(4),r=t.n(o),l=t(33);t.d(a,"b",(function(){return l.withPrefix}));t(150);var c=i.a.createContext({}),s=function(e){return i.a.createElement(c.Consumer,null,(function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")}))};s.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},150:function(e,a,t){var n;e.exports=(n=t(162))&&n.default||n},154:function(e,a,t){"use strict";var n=t(0),i=t.n(n),o=t(4),r=t.n(o),l=t(147),c=t.n(l),s=t(146),m=t(148),d=t(164),p=c.a.headerLinks,u=s.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dsp75d-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:#25303b;"]),h=s.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dsp75d-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:#25303b;"]),g=s.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dsp75d-2"})(["display:flex;flex-direction:row;"]),f=Object(s.default)(d.Link).withConfig({displayName:"header__HeaderLink",componentId:"dsp75d-3"})(["position:relative;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;cursor:pointer;@media (max-width:900px){padding:14px;}"]),b=Object(s.default)((function(e){var a=e.className,t=Object(n.useState)(!1),o=t[0],r=t[1];return i.a.createElement(u,{className:a},i.a.createElement(h,{className:"header"},i.a.createElement(m.FaHome,{size:32,className:"header__homeIcon",onClick:function(){return d.animateScroll.scrollToTop()}}),i.a.createElement(g,{className:"header__LinkGroup "+(o?"header__LinkGroup-toggled":"")},p.map((function(e,a){return i.a.createElement(f,{smooth:!0,to:e.url,offset:-70,key:"header-link-"+a,onClick:function(){return r(!1)}},e.label)}))),i.a.createElement("div",{className:"header__smallScreen"},i.a.createElement(m.FaBars,{size:32,className:"header__smallScreen__menuIcon",onClick:function(){return r(!o)}}))))})).withConfig({displayName:"header",componentId:"dsp75d-4"})([".header{display:flex;}.header__smallScreen{display:none;}.header__homeIcon{color:white;cursor:pointer;margin:16px;}@media (max-width:900px){.header{height:auto;}.header__LinkGroup{display:none;}.header__LinkGroup-toggled{display:flex;flex-direction:column;margin-top:56px;flex:1;}.header__smallScreen{display:flex;justify-content:flex-end;margin:16px;}.header__smallScreen__menuIcon{color:white;cursor:pointer;}}"]),_=(t(168),function(e){var a=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{headerLinks:c.a.headerLinks}),i.a.createElement("div",null,a))});_.propTypes={children:r.a.node.isRequired};var v=_;t.d(a,"a",(function(){return v}))},155:function(e,a,t){"use strict";var n=t(7),i=t.n(n),o=t(0),r=t.n(o),l=t(149),c=t(147),s=t.n(c),m=t(146),d=m.default.div.withConfig({displayName:"hero__HeroContainer",componentId:"uqwd53-0"})(["position:relative;display:table;width:100%;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:cover;"]),p=m.default.div.withConfig({displayName:"hero__TitleContainer",componentId:"uqwd53-1"})(["display:table-cell;vertical-align:middle;text-align:center;width:100%;"]),u=m.default.h1.withConfig({displayName:"hero__HeroTitle",componentId:"uqwd53-2"})(["font-weight:700;font-size:3rem;margin:10px 60px;color:#fff;text-shadow:1px 1px 4px rgba(34,34,34,0.6);"]),h=function(e){function a(){return e.apply(this,arguments)||this}return i()(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.className;return r.a.createElement(d,{className:t},r.a.createElement(p,null,r.a.createElement(u,null,a)))},a}(r.a.Component),g=Object(m.default)(h).withConfig({displayName:"hero",componentId:"uqwd53-3"})([""," height:70vh;background-attachment:fixed;background-position:center;background-repeat:no-repeat;background-size:cover;"],(function(e){return"background-image: url("+(e.heroImg||Object(l.b)(s.a.siteCover))+");"}));t.d(a,"a",(function(){return g}))},156:function(e,a,t){"use strict";var n=t(146).default.main.attrs({role:"main"}).withConfig({displayName:"wrapper__Wrapper",componentId:"sc-10vqfep-0"})(["position:relative;border-radius:3px;width:80%;max-width:960px;border-bottom:1px solid #ebf2f6;word-wrap:break-word;background-color:#fff;margin:0px auto 30px auto;top:-100px;padding:50px;box-shadow:0 0 0 0,0 6px 12px rgba(0,0,0,0.1);min-height:150px;@media (max-width:780px){width:90%;padding:25px;}"]);t.d(a,"a",(function(){return n}))},157:function(e,a,t){"use strict";var n=t(163),i=t(0),o=t.n(i),r=t(4),l=t.n(r),c=t(169),s=t.n(c),m=t(149);function d(e){var a=e.description,t=e.lang,i=e.meta,r=e.keywords,l=e.title;return o.a.createElement(m.a,{query:u,render:function(e){var n=a||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:t},title:l,titleTemplate:"%s",meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(i)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=d,u="1025518380";t.d(a,"a",(function(){return p}))},162:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),i=t.n(n),o=t(4),r=t.n(o),l=t(56),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return t?i.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=s},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Gyeseong Park!",description:"This is my personal website",author:"Gyeseong Park"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-438ed473641214937ef1.js.map