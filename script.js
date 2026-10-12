const DEFAULT_DATA = {
  heroEyebrow:"PEDIATRIA • NEONATOLOGIA",
  heroTitle:"Um começo de vida com mais cuidado.",
  heroText:"Acolhimento, atenção e orientação para acompanhar a saúde do seu bebê e da sua criança em cada descoberta.",
  heroImage:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=85",
  aboutTitle:"Cuidar é estar presente em cada descoberta.",
  aboutText:"A NEOCARE nasceu para acompanhar famílias com informação confiável, atenção individualizada e acolhimento desde os primeiros dias de vida.",
  aboutImage:"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=900&q=85",
  whatsapp:"5527992876334", phone:"(27) 3208-5888 · (27) 99287-6334",
  email:"neocareclinicapediatrica@gmail.com", hours:"Consulte a disponibilidade com nossa equipe.",
  address:"Consulte nossa localização pelo Google Maps.", maps:"https://maps.google.com/",
  instagram:"https://www.instagram.com/neocare.clinicapediatrica/",
  insuranceText:"Entre em contato para confirmar os convênios atendidos e as condições para cada tipo de consulta.",
  insurances:["Consulte a equipe","Atendimento particular"],
  doctors:[{name:"Dra. Lorena Tonetto",role:"PEDIATRIA E NEONATOLOGIA",description:"Acompanhamento da saúde e do desenvolvimento infantil, com cuidado próximo à família.",image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=85"}],
  specialties:[{icon:"♡",name:"Pediatria",description:"Acompanhamento da saúde, crescimento e desenvolvimento infantil."},{icon:"✧",name:"Neonatologia",description:"Cuidado especializado para os primeiros dias e fases da vida do bebê."},{icon:"☼",name:"Orientação às famílias",description:"Apoio e informação para dúvidas comuns sobre os cuidados com a criança."}],
  articles:[{category:"PRIMEIROS CUIDADOS",title:"Como acolher as dúvidas dos primeiros dias?",description:"Informação confiável ajuda a família a viver cada etapa com mais tranquilidade.",image:"https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80",url:"https://www.instagram.com/neocare.clinicapediatrica/"},{category:"DESENVOLVIMENTO",title:"Cada fase tem suas descobertas",description:"O acompanhamento infantil ajuda a observar o crescimento e tirar dúvidas.",image:"https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=700&q=80",url:"https://www.instagram.com/neocare.clinicapediatrica/"},{category:"ORIENTAÇÃO",title:"Quando conversar com a pediatra?",description:"Tenha um espaço de confiança para conversar sobre a saúde do seu pequeno.",image:"https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=700&q=80",url:"https://www.instagram.com/neocare.clinicapediatrica/"}]
};
const readData=()=>{try{return {...DEFAULT_DATA,...JSON.parse(localStorage.getItem("neocareSiteData")||"{}")}}catch(e){return DEFAULT_DATA}};
const data=readData();
const setText=(id,value)=>{const el=document.getElementById(id);if(el&&value!==undefined)el.textContent=value};
const setImg=(id,url)=>{const el=document.getElementById(id);if(el&&url)el.src=url};
const setHref=(id,url)=>{const el=document.getElementById(id);if(el&&url)el.href=url};
setText("heroEyebrow",data.heroEyebrow);setText("heroTitle",data.heroTitle);setText("heroText",data.heroText);
setText("aboutTitle",data.aboutTitle);setText("aboutText",data.aboutText);setText("phoneText",data.phone);setText("emailText",data.email);setText("hoursText",data.hours);setText("addressText",data.address);setText("insuranceText",data.insuranceText);
setImg("heroImage",data.heroImage);setImg("aboutImage",data.aboutImage);
setHref("heroWhatsapp",`https://wa.me/${String(data.whatsapp).replace(/\D/g,"")}`);setHref("contactWhatsapp",`https://wa.me/${String(data.whatsapp).replace(/\D/g,"")}`);
setHref("mapsLink",data.maps);setHref("instagramLink",data.instagram);setText("year",new Date().getFullYear());
const doctorsGrid=document.getElementById("doctorsGrid");
doctorsGrid.innerHTML=(data.doctors||[]).map(d=>`<article class="doctor-card"><div class="doctor-photo"><img src="${esc(d.image)}" alt="${esc(d.name)}"></div><div class="doctor-info"><span class="role">${esc(d.role)}</span><h3>${esc(d.name)}</h3><p>${esc(d.description)}</p><a class="card-link" href="#contato">Conheça a profissional →</a></div></article>`).join("");
document.getElementById("specialtiesGrid").innerHTML=(data.specialties||[]).map(s=>`<article class="specialty-card"><span class="specialty-icon">${esc(s.icon||"♡")}</span><h3>${esc(s.name)}</h3><p>${esc(s.description)}</p></article>`).join("");
document.getElementById("insuranceTags").innerHTML=(data.insurances||[]).map(s=>`<span class="tag">${esc(s)}</span>`).join("");
document.getElementById("articlesGrid").innerHTML=(data.articles||[]).map(a=>`<article class="article-card"><a href="${esc(a.url||data.instagram)}" target="_blank" rel="noreferrer"><img src="${esc(a.image)}" alt=""><div class="article-info"><small>${esc(a.category)}</small><h3>${esc(a.title)}</h3><p>${esc(a.description)}</p><span class="text-link">Ver conteúdo ↗</span></div></a></article>`).join("");
function esc(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));