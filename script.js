var IMG={bide1:"bide1.webp",bide2:"bide2.webp",bide3:"bide3.webp",bide4:"bide4.webp",bide5:"bide5.webp",edu1:"edu1.webp",edu2:"edu2.webp",edu3:"edu3.webp",edu4:"edu4.webp",agri1:"agri1.webp",agri2:"agri2.webp",agri3:"agri3.webp",agri4:"agri4.webp"};

var WA="22893506074";
document.querySelectorAll("[data-wa]").forEach(function(a){
a.href="https://wa.me/"+WA;
var icon=a.querySelector("svg");
if(icon){icon.setAttribute("viewBox","0 0 24 24");icon.setAttribute("fill","none");icon.setAttribute("aria-hidden","true");
icon.innerHTML='<path d="M20.2 3.8A11.4 11.4 0 0 0 3.8 19.6L3 22l3.1-.8A11.4 11.4 0 1 0 20.2 3.8Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.1 6.7c-.3-.2-.7-.2-1 0l-.9.7c-.5.4-.7 1.1-.5 1.8a11.6 11.6 0 0 0 9.1 9.1c.7.2 1.4 0 1.8-.5l.7-.9c.2-.3.2-.7 0-1l-1.7-1.5c-.3-.3-.7-.3-1-.1l-1.2.8a8.5 8.5 0 0 1-3.6-3.6l.8-1.2c.2-.3.2-.7-.1-1L8.1 6.7Z" fill="currentColor"/>'}
});

function T(name,inner){return {n:name,s:'<svg viewBox="0 0 48 48" aria-hidden="true">'+inner+'</svg>'}}
function tx(t,sz,fill,x,y,anc,fam){return '<text x="'+(x||24)+'" y="'+(y||31)+'" font-size="'+sz+'" font-weight="800" fill="'+fill+'" text-anchor="'+(anc||"middle")+'" font-family="'+(fam||"Arial,sans-serif")+'">'+t+'</text>'}
var rr=function(c,r){return '<rect x="5" y="5" width="38" height="38" rx="'+(r||9)+'" fill="'+c+'"/>'};
var L={
html:T("HTML",'<path d="M8 5l3 34 13 4 13-4 3-34z" fill="#E34F26"/><path d="M24 8v31l10.5-3 2.6-28z" fill="#EF652A"/>'+tx("5",20,"#fff",24,29)),
css:T("CSS",'<path d="M8 5l3 34 13 4 13-4 3-34z" fill="#1572B6"/><path d="M24 8v31l10.5-3 2.6-28z" fill="#33A9DC"/>'+tx("3",20,"#fff",24,29)),
js:T("JavaScript",'<rect x="5" y="5" width="38" height="38" fill="#F7DF1E"/>'+tx("JS",17,"#000",41,40,"end")),
ts:T("TypeScript",'<rect x="5" y="5" width="38" height="38" rx="3" fill="#3178C6"/>'+tx("TS",17,"#fff",41,40,"end")),
react:T("React",'<g fill="none" stroke="#61DAFB" stroke-width="2.4"><ellipse cx="24" cy="24" rx="19" ry="7.5"/><ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(60 24 24)"/><ellipse cx="24" cy="24" rx="19" ry="7.5" transform="rotate(120 24 24)"/></g><circle cx="24" cy="24" r="3.6" fill="#61DAFB"/>'),
vite:T("Vite",'<defs><linearGradient id="vg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#41D1FF"/><stop offset="1" stop-color="#BD34FE"/></linearGradient></defs><polygon points="5,8 43,8 24,43" fill="url(#vg)"/><polygon points="29,3 19,25 26,25 22,41 35,18 27,18" fill="#FFD62E"/>'),
bs:T("Bootstrap 5",rr("#7952B3")+tx("B",28,"#fff",24,34)),
php:T("PHP",'<ellipse cx="24" cy="24" rx="20" ry="12" fill="#777BB4"/>'+tx("php",16,"#fff",24,29)),
laravel:T("Laravel",rr("#FF2D20",10)+tx("L",28,"#fff",24,34,"middle","Georgia,serif")),
py:T("Python",'<path d="M24 5c-9 0-8 4-8 4v5h8v2H12S6 16 6 24s5 8 5 8h3v-4s0-5 5-5h8s5 0 5-5V10s1-5-8-5z" fill="#3776AB"/><path d="M24 43c9 0 8-4 8-4v-5h-8v-2h12s6 1 6-7-5-8-5-8h-3v4s0 5-5 5h-8s-5 0-5 5v8s-1 5 8 5z" fill="#FFD43B"/><circle cx="19" cy="10" r="1.8" fill="#fff"/><circle cx="29" cy="38" r="1.8" fill="#fff"/>'),
qt:T("PySide6 / Qt",rr("#41CD52",10)+tx("Qt",21,"#fff",24,31)),
sqlite:T("SQLite",'<path d="M9 12v24c0 3.5 6.7 6 15 6s15-2.5 15-6V12z" fill="#0F80CC"/><ellipse cx="24" cy="12" rx="15" ry="6" fill="#4FB3E8"/>'),
mysql:T("MySQL",rr("#00758F",9)+tx("MySQL",11.5,"#fff",24,29)),
pg:T("PostgreSQL",rr("#336791",12)+tx("Pg",21,"#fff",24,31)),
git:T("Git",'<rect x="9" y="9" width="30" height="30" rx="5" fill="#F05032" transform="rotate(45 24 24)"/><g stroke="#fff" stroke-width="2.6" fill="#fff"><line x1="24" y1="15" x2="24" y2="33" fill="none"/><line x1="24" y1="22" x2="33" y2="28" fill="none"/><circle cx="24" cy="15" r="3.2"/><circle cx="24" cy="33" r="3.2"/><circle cx="33" cy="28" r="3.2"/></g>'),
gh:T("GitHub",'<circle cx="24" cy="24" r="20" fill="#24292F"/>'+tx("GH",16,"#fff",24,30)),
figma:T("Figma",'<rect x="13" y="4" width="11" height="10" rx="5" fill="#F24E1E"/><rect x="24" y="4" width="11" height="10" rx="5" fill="#FF7262"/><rect x="13" y="14" width="11" height="10" rx="5" fill="#A259FF"/><circle cx="29.5" cy="19" r="5.5" fill="#1ABCFE"/><rect x="13" y="24" width="11" height="10" rx="5" fill="#0ACF83"/><path d="M13 34h11v5a5.5 5.5 0 0 1-11 0z" fill="#0ACF83"/>'),
wp:T("WordPress",'<circle cx="24" cy="24" r="20" fill="#21759B"/>'+tx("W",27,"#fff",24,33,"middle","Georgia,serif")),
odoo:T("Odoo",rr("#714B67",9)+tx("odoo",14,"#fff",24,29))
};
var G=[["Front-end",["html","css","js","ts","react","vite","bs"]],["Back-end et bases de données",["php","laravel","py","sqlite","mysql","pg"]],["CMS et ERP",["wp","odoo"]],["Desktop",["qt"]],["Design et collaboration",["figma","git","gh"]]];
var tg=document.getElementById("toolgroups");
function toolNode(k,hidden){var d=document.createElement("div");d.className="tool";d.innerHTML=L[k].s;var l=document.createElement("span");l.textContent=L[k].n;d.appendChild(l);if(hidden){d.setAttribute("aria-hidden","true");d.style.setProperty("--fl",(Math.random()*3.2).toFixed(2)+"s")}return d}
var mqReduced=matchMedia("(prefers-reduced-motion:reduce)").matches,mqStates=[];
function buildToolgroups(){
tg.textContent="";mqStates.length=0;
G.forEach(function(g,gi){
var w=document.createElement("div");w.className="grp m-rev";w.style.setProperty("--mi",gi+1);
var h=document.createElement("h3");h.textContent=g[0];
var gr=document.createElement("div");
if(mqReduced){gr.className="tools";g[1].forEach(function(k){gr.appendChild(toolNode(k))})}
else{
gr.className="tools mq";if(gi%2)gr.classList.add("mq-rev");
gr.style.setProperty("--mq-dur",(30+gi*6)+"s");
var track=document.createElement("div");track.className="mq-track";
var s1=document.createElement("div");s1.className="mq-set";
g[1].forEach(function(k,ki){var d=toolNode(k);d.style.setProperty("--fl",(ki%8)*.45+"s");s1.appendChild(d)});
track.appendChild(s1);gr.appendChild(track);
mqStates.push({k:g[1],s1:s1,gr:gr,dup:null})}
w.append(h,gr);tg.appendChild(w)});
if(!mqReduced)requestAnimationFrame(fillMq);
}
function fillMq(){
mqStates.forEach(function(st){
while(st.s1.children.length>st.k.length)st.s1.lastChild.remove();
var guard=0;
while(st.s1.offsetWidth<st.gr.clientWidth-1&&guard++<30){st.k.forEach(function(k){st.s1.appendChild(toolNode(k,true))})}
if(st.dup)st.dup.remove();
st.dup=st.s1.cloneNode(true);st.dup.classList.add("mq-dup");st.dup.setAttribute("aria-hidden","true");
st.s1.parentNode.appendChild(st.dup);
});
}
var mqRz=0;addEventListener("resize",function(){clearTimeout(mqRz);mqRz=setTimeout(fillMq,180)});
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fillMq);
buildToolgroups();

var P=[
{n:"Bidè Entreprise",c:"Pressing à domicile",d:"Vitrine, espace client avec suivi de commande et tableau de bord administrateur pour un pressing de Lomé.",t:["Bootstrap 5","JavaScript"],k:"#C85F25",img:[{s:IMG.bide1,c:"Accueil",bg:"#fff"},{s:IMG.bide2,c:"Nouvelle commande",bg:"#fff"},{s:IMG.bide3,c:"Suivi de commande",bg:"#fff"},{s:IMG.bide4,c:"Gestion des commandes",bg:"#fff"},{s:IMG.bide5,c:"Statistiques",bg:"#fff"}]},
{n:"EduPaie",c:"Application de bureau",d:"Suivi des frais de scolarité : élèves, paiements, soldes et reçus PDF numérotés.",t:["PySide6","SQLite"],k:"#4A4844",img:[{s:IMG.edu1,c:"Tableau de bord"},{s:IMG.edu2,c:"Fiche élève"},{s:IMG.edu3,c:"Enregistrer un paiement",bg:"#E4E8EE"},{s:IMG.edu4,c:"Reçu PDF",bg:"#D5DBE5"}]},
{n:"AGRI-TOGO",c:"Site vitrine",d:"Site d’une coopérative agricole togolaise : produits, actualités et contact.",t:["HTML","CSS","JavaScript"],k:"#2F6B3A",img:[{s:IMG.agri1,c:"Accueil",bg:"#fff"},{s:IMG.agri2,c:"Produits",bg:"#fff"},{s:IMG.agri3,c:"À propos",bg:"#fff"},{s:IMG.agri4,c:"Contact",bg:"#fff"}]}
];
var S={"KabaMarket":["Boutiques","Catalogue","Panier","Commande"],"LOGIFLOW":["Transitaire","Transporteur","Client"],"Plateforme transitaire":["Client","Transitaire","Port de Lomé"],"La 8ème Merveille":["Biens","Détails","Contact"],"Bidè Entreprise":["Dépôt","Lavage","Prêt","Livraison"],"Frais de scolarité":["Élève","Paiement","Reçu numéroté"]};
var hero=document.getElementById("proj"),idx=document.getElementById("idx"),scr=document.getElementById("scr"),cur=0,timer=0,paused=false,rows=[],
rm=matchMedia("(prefers-reduced-motion:reduce)").matches,N=P.length;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
P.forEach(function(p,j){var li=el("li"),b=el("button","row",p.n);b.type="button";if(p.img)b.style.setProperty("--dur",p.img.length*2800+"ms");b.appendChild(el("span",null,p.c));
b.onclick=function(){show(j)};li.appendChild(b);idx.appendChild(li);rows.push(b)});
var capEl=document.querySelector("#proj .cap"),lastJ=-1,lastK=0;
function shots(j,p){var n=p.img.length,k=0,wrap=el("div","shot"),imgs=[],dots=[],cap=el("span","shcap"),pg=el("div","shpg");
p.img.forEach(function(m,i){var im=new Image();im.src=m.s;im.alt=p.n+" : "+m.c;im.decoding="async";im.style.background=m.bg||"#0C0907";wrap.appendChild(im);imgs.push(im);
var d=el("button","shd");d.type="button";d.setAttribute("aria-label",m.c);d.onclick=function(){clearTimeout(timer);go(i)};pg.appendChild(d);dots.push(d)});
wrap.append(cap,pg);scr.appendChild(wrap);
function go(i){k=i;lastJ=j;lastK=i;imgs.forEach(function(im,x){im.classList.toggle("on",x===i);dots[x].classList.toggle("on",x===i)});cap.textContent=p.img[i].c}
function adv(){if(k+1<n){go(k+1);timer=setTimeout(adv,2800)}else show((cur+1)%N)}
go(lastJ===j?lastK:0);if(!rm&&!paused)timer=setTimeout(adv,2800)}
function show(j){
cur=j;clearTimeout(timer);
rows.forEach(function(r,k){if(k===j)r.setAttribute("aria-current","true");else r.removeAttribute("aria-current");r.style.animation="none"});
void idx.offsetWidth;rows.forEach(function(r){r.style.animation=""});
var p=P[j];scr.innerHTML="";scr.style.setProperty("--k",p.k);capEl.textContent=p.img?"Captures de l'application":"Maquette illustrative";if(p.img){shots(j,p);return}
var tabs=el("div","tabs"),dots=el("span","dots");dots.append(el("i"),el("i"),el("i"));
var tab=el("span","tab");tab.append(el("i","fav"),el("span","tt",p.n));tabs.append(dots,tab);
var bar=el("div","bar");bar.append(el("span","nvb","‹ ›"),el("span","url",p.n+" · aperçu"));
var steps=S[p.n]||[],pg=el("div","pg"),nv=el("div","nv2"),lg=el("span","lg"),ul=el("ul");
steps.slice(0,3).forEach(function(x){ul.appendChild(el("li",null,x))});
nv.append(lg,el("b",null,p.n),ul,el("span","cta2","Ouvrir"));
var hr=el("div","hr"),hl=el("div"),st=el("div","st");p.t.forEach(function(x){st.appendChild(el("i",null,x))});
hl.append(el("p","hh",p.d),st);
var art=el("div","art"),mc=el("div","mc");mc.append(el("i"),el("i"),el("i"));art.append(el("div","o1"),el("div","o2"),mc);hr.append(hl,art);
var cs=el("div","cs");cs.style.setProperty("--n",steps.length);
steps.forEach(function(x,i){var c=el("div","c");c.style.animationDelay=(.15+i*.16)+"s";c.append(el("span","n",i+1),el("b",null,x),el("i"),el("i"));cs.appendChild(c)});
pg.append(nv,hr,cs);scr.append(tabs,bar,pg);
if(!rm&&!paused)timer=setTimeout(function(){show((cur+1)%N)},5200)}
hero.addEventListener("mouseover",function(e){if(e.target.closest(".idx,.stage")&&!paused){paused=true;clearTimeout(timer);hero.classList.add("paused")}});
hero.addEventListener("mouseout",function(e){if(paused&&!(e.relatedTarget&&e.relatedTarget.closest&&e.relatedTarget.closest(".idx,.stage"))){paused=false;hero.classList.remove("paused");show(cur)}});
hero.addEventListener("focusin",function(e){if(e.target.closest(".idx,.stage")){paused=true;clearTimeout(timer);hero.classList.add("paused")}});
hero.addEventListener("focusout",function(e){if(!e.relatedTarget||!e.relatedTarget.closest(".idx,.stage")){paused=false;hero.classList.remove("paused");show(cur)}});
show(0);
// MOTION : parallax multi-plans des formes de fond
var sh=document.querySelector(".shapes"),pls=[].slice.call(document.querySelectorAll(".shapes .pl"));
if(sh&&!matchMedia("(prefers-reduced-motion:reduce)").matches)addEventListener("scroll",function(){var y=scrollY;sh.style.transform="translateY("+(-y*.12)+"px)";pls.forEach(function(p){p.style.transform="translateY("+(-y*(+p.dataset.k))+"px)"})},{passive:true});

document.getElementById("theme").onclick=function(){
var r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
r.dataset.theme=dark?"light":"dark"};

var sendLink=document.getElementById("send"),qa=document.getElementById("qa"),qe=document.getElementById("qe");
var Q=[
{v:"un site vitrine",t:"Site vitrine",q:[
{k:"act",t:"text",q:"Quelle est votre activité ?"},
{k:"pg",t:"sel",q:"Combien de pages environ ?",o:["1 à 3 pages","4 à 6 pages","7 pages ou plus","Je ne sais pas encore"]},
{k:"txt",t:"rad",q:"Avez-vous déjà un logo et des textes ?",o:["Oui","En partie","Non"]},
{k:"dom",t:"rad",q:"Avez-vous un nom de domaine ?",o:["Oui","Non","Je ne sais pas"]}]},
{v:"une plateforme web",t:"Plateforme web",q:[
{k:"who",t:"multi",q:"Qui utilisera la plateforme ?",o:["Vos clients","Votre équipe","Des partenaires","Un administrateur"]},
{k:"goal",t:"area",q:"Quelle tâche doit-elle simplifier ?"},
{k:"cur",t:"text",q:"Comment faites-vous aujourd'hui ? (Excel, papier, autre)"},
{k:"acc",t:"rad",q:"Faut-il des comptes avec connexion ?",o:["Oui","Non","Je ne sais pas"]}]},
{v:"une application mobile",t:"Application mobile",q:[
{k:"os",t:"multi",q:"Sur quels téléphones ?",o:["Android","iPhone"]},
{k:"goal",t:"area",q:"Que doit faire l'application en priorité ?"},
{k:"off",t:"rad",q:"Doit-elle fonctionner sans internet ?",o:["Oui","Non","Je ne sais pas"]},
{k:"pub",t:"rad",q:"Voulez-vous la publier sur le Play Store ou l'App Store ?",o:["Oui","Non","À discuter"]}]},
{v:"une boutique en ligne",t:"E-commerce",q:[
{k:"sell",t:"text",q:"Que vendez-vous ?"},
{k:"nb",t:"sel",q:"Combien de produits environ ?",o:["Moins de 20","20 à 100","Plus de 100"]},
{k:"pay",t:"multi",q:"Quels paiements voulez-vous accepter ?",o:["Mobile money","Carte bancaire","Paiement à la livraison"]},
{k:"liv",t:"rad",q:"La livraison est-elle à gérer sur le site ?",o:["Oui","Non"]},
{k:"mk",t:"rad",q:"Plusieurs vendeurs sur la même boutique ?",o:["Oui","Non"]}]},
{v:"une application de bureau",t:"Application de bureau",q:[
{k:"do",t:"area",q:"Que doit gérer le logiciel ? (paiements, stock, reçus…)"},
{k:"pc",t:"sel",q:"Sur combien d'ordinateurs ?",o:["1","2 à 5","Plus de 5"]},
{k:"print",t:"rad",q:"Faut-il imprimer des reçus ou des factures ?",o:["Oui","Non"]},
{k:"share",t:"rad",q:"Les données doivent-elles être partagées entre ordinateurs ?",o:["Oui","Non","Je ne sais pas"]}]},
{v:"une maquette UI/UX",t:"Design UI/UX",q:[
{k:"for",t:"multi",q:"La maquette est pour :",o:["Un site web","Une application mobile","Un logiciel"]},
{k:"scr",t:"sel",q:"Combien d'écrans environ ?",o:["1 à 5","6 à 15","Plus de 15","Je ne sais pas"]},
{k:"id",t:"rad",q:"Avez-vous déjà un logo et des couleurs ?",o:["Oui","Non"]}]}
];
var COMMON={t:"Pour finir",q:[
{k:"nom",t:"text",q:"Votre nom"},
{k:"when",t:"sel",q:"Pour quand en avez-vous besoin ?",o:["Dès que possible","Dans le mois","Dans 2 à 3 mois","Pas de date précise"]},
{k:"more",t:"area",q:"Autre chose à me dire ?"}]};
function field(pid,q){
var id="q-"+pid+"-"+q.k,w=el("div","qf"),c;
if(q.t==="text"||q.t==="area"||q.t==="sel"){
var l=el("label",null,q.q);l.htmlFor=id;w.appendChild(l);
if(q.t==="text"){c=el("input");c.type="text"}
else if(q.t==="area"){c=el("textarea");c.rows=3}
else{c=el("select");c.appendChild(new Option("Choisir",""));q.o.forEach(function(o){c.appendChild(new Option(o,o))})}
c.id=id;c.dataset.q=q.q;w.appendChild(c)}
else{
w.appendChild(el("p","ql",q.q));
var g=el("div","opts sm");g.setAttribute("role","group");g.setAttribute("aria-label",q.q);
q.o.forEach(function(o){var lb=el("label"),inp=el("input");inp.type=q.t==="rad"?"radio":"checkbox";inp.name=id;inp.value=o;inp.dataset.q=q.q;lb.append(inp,el("span",null,o));g.appendChild(lb)});
w.appendChild(g)}
return w}
function panel(pid,def){
var fs=el("fieldset","qp"),lg=el("legend",null,def.t);fs.hidden=true;fs.appendChild(lg);
def.q.forEach(function(q){fs.appendChild(field(pid,q))});qa.appendChild(fs);return fs}
Q.forEach(function(d,i){d.p=panel(i,d)});
var common=panel("c",COMMON);
function collect(p){
var seen={};
[].forEach.call(p.querySelectorAll("[data-q]"),function(c){
var k=c.dataset.q,box=(c.type==="radio"||c.type==="checkbox");
if(box?c.checked:c.value.trim()){(seen[k]=seen[k]||[]).push(box?c.value:c.value.trim())}});
return Object.keys(seen).map(function(k){return k+" : "+seen[k].join(", ")})}
function updateSend(){
var on=[].slice.call(document.querySelectorAll("#types input:checked")),
base="Bonjour Alexis, j'aimerais discuter d'un projet",any=on.length>0;
Q.forEach(function(d){d.p.hidden=!on.some(function(x){return x.value===d.v})});
common.hidden=!any;qe.hidden=any;
if(!any){sendLink.href="https://wa.me/"+WA+"?text="+encodeURIComponent(base+".");return}
var msg=base+" : "+on.map(function(x){return x.value}).join(", ")+".";
Q.forEach(function(d){if(!d.p.hidden){var a=collect(d.p);if(a.length)msg+="\n\n"+d.t+"\n- "+a.join("\n- ")}});
var c=collect(common);if(c.length)msg+="\n\n"+c.join("\n");
sendLink.href="https://wa.me/"+WA+"?text="+encodeURIComponent(msg)}
document.querySelector(".need").addEventListener("change",updateSend);
document.querySelector(".need").addEventListener("input",updateSend);
updateSend();

(function(){var nav=document.querySelector("header.top nav"),ind=nav.querySelector(".ind"),links=[].slice.call(nav.querySelectorAll("a")),cur=null;
function place(a){if(!a){ind.classList.remove("on");return}var nr=nav.getBoundingClientRect(),ar=a.getBoundingClientRect();ind.style.width=ar.width+"px";ind.style.transform="translateX("+(ar.left-nr.left+nav.scrollLeft)+"px)";ind.classList.add("on")}
function set(a){cur=a;links.forEach(function(l){l.removeAttribute("aria-current")});if(a){a.setAttribute("aria-current","true");if(nav.scrollWidth>nav.clientWidth){var nr=nav.getBoundingClientRect(),ar=a.getBoundingClientRect(),left=nav.scrollLeft+ar.left-nr.left-(nav.clientWidth-ar.width)/2;nav.scrollTo({left:Math.max(0,Math.min(left,nav.scrollWidth-nav.clientWidth)),behavior:"smooth"})}}place(a)}
if("IntersectionObserver"in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var l=nav.querySelector('a[href="#'+e.target.id+'"]');if(l)set(l)}})},{rootMargin:"-45% 0px -50% 0px"});
["apropos","projets","services","parcours"].forEach(function(id){var el=document.getElementById(id);if(el)io.observe(el)});
var hero=document.getElementById("hero");if(hero)new IntersectionObserver(function(es){if(es[0].isIntersecting)set(null)},{rootMargin:"-45% 0px -50% 0px"}).observe(hero)}
nav.addEventListener("scroll",function(){place(cur)},{passive:true});
addEventListener("resize",function(){place(cur)});
})();

// MOTION PREMIUM ================================================
(function(){
var root=document.documentElement;
if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
var started=false;
function go(){if(started)return;started=true;root.style.overflow="";root.classList.add("m-go")}
setTimeout(go,4500); /* sécurité : le héros s'affiche toujours */
setTimeout(function(){var c=document.querySelector(".m-curtain");if(c)c.remove();root.style.overflow=""},5600);
try{
root.classList.add("m");

/* 1) rideau d'intro avec compteur */
root.style.overflow="hidden";
var cur=document.createElement("div");cur.className="m-curtain";cur.setAttribute("aria-hidden","true");
cur.innerHTML='<div class="mc-in"><span class="mc-mono">K</span><b>KoSam</b><span class="mc-line"><i></i></span></div><span class="mc-n">0</span>';
document.body.appendChild(cur);
var cn=cur.querySelector(".mc-n"),cb=cur.querySelector(".mc-line i"),t0=performance.now(),D=1150;
(function tick(t){var k=Math.min((t-t0)/D,1),e=1-Math.pow(1-k,3);cn.textContent=Math.round(e*100);cb.style.transform="scaleX("+e+")";
 if(k<1)requestAnimationFrame(tick);else{cur.classList.add("go");setTimeout(go,380);setTimeout(function(){cur.remove()},1400)}})(t0);

/* 3) titres de section : mot par mot */
function splitWords(el){var i=0;(function walk(node){[].slice.call(node.childNodes).forEach(function(c){
 if(c.nodeType===3){var f=document.createDocumentFragment();
  c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;
   if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(" "));return}
   var w=document.createElement("span");w.className="w";var wi=document.createElement("span");wi.className="wi";
   wi.style.setProperty("--wi",i++);wi.textContent=p;w.appendChild(wi);f.appendChild(w)});
  node.replaceChild(f,c)}
 else if(c.nodeType===1)walk(c)})})(el)}
[].forEach.call(document.querySelectorAll("main h2"),function(h){
 h.setAttribute("aria-label",h.textContent.replace(/\s+/g," ").trim());
 splitWords(h);h.dataset.v="split";h.classList.add("m-rev")});

/* 4) révélations au scroll (variantes par type de bloc) */
function tag(sel,v,stag){[].forEach.call(document.querySelectorAll(sel),function(e,i){
 e.classList.add("m-rev");if(v)e.dataset.v=v;if(stag!==false)e.style.setProperty("--mi",i%8)})}
tag(".svc .sv","row");tag(".steps .step","step");tag(".steps","steps",false);tag(".edu > div","edu");
tag(".about p");tag(".proj");tag(".need");tag("footer .links");tag("footer .big");
var rev=[].slice.call(document.querySelectorAll(".m-rev")),io=null;
function show(x){if(x.classList.contains("in"))return;x.classList.add("in");if(io)io.unobserve(x);
 if(x.classList.contains("sv"))setTimeout(function(){x.classList.add("done")},2400)}
function chk(){rev.forEach(function(x){if(x.classList.contains("in"))return;var r=x.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight*.94)show(x)})}
if("IntersectionObserver"in window){
 io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)show(e.target)})},{threshold:.08,rootMargin:"0px 0px -6% 0px"});
 rev.forEach(function(x){io.observe(x)});
}else{rev.forEach(show)}
addEventListener("scroll",chk,{passive:true});addEventListener("resize",chk);setTimeout(chk,500);

/* 5) barre de progression de lecture */
var pb=document.createElement("div");pb.className="m-bar";pb.setAttribute("aria-hidden","true");document.body.appendChild(pb);
var tk=false;function upd(){tk=false;var h=root.scrollHeight-innerHeight;pb.style.transform="scaleX("+(h>0?Math.min(scrollY/h,1):0).toFixed(4)+")"}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(upd)}},{passive:true});addEventListener("resize",upd);upd();

/* 6) curseur : anneau qui suit la souris et grossit sur les éléments cliquables */
if(matchMedia("(pointer:fine)").matches){
 var ring=document.createElement("div");ring.className="m-cur";ring.setAttribute("aria-hidden","true");document.body.appendChild(ring);
 var tx=0,ty=0,cx=0,cy=0,shown=false;
 addEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY;if(!shown){shown=true;cx=tx;cy=ty;ring.classList.add("on")}
  ring.classList.toggle("hov",!!(e.target.closest&&e.target.closest("a,button,label,.row,.nc,.sv")))},{passive:true});
 document.documentElement.addEventListener("mouseleave",function(){ring.classList.remove("on");shown=false});
 (function loop(){var dx=tx-cx,dy=ty-cy;if(Math.abs(dx)>.1||Math.abs(dy)>.1){cx+=dx*.18;cy+=dy*.18;ring.style.transform="translate3d("+cx.toFixed(1)+"px,"+cy.toFixed(1)+"px,0)"}requestAnimationFrame(loop)})();
}

/* 7) boutons magnétiques (pointeur fin uniquement) */
if(matchMedia("(pointer:fine)").matches){
 [].forEach.call(document.querySelectorAll(".btn,.cta-h"),function(b){
  b.addEventListener("mousemove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+((e.clientX-r.left-r.width/2)/r.width*10).toFixed(1)+"px,"+((e.clientY-r.top-r.height/2)/r.height*7).toFixed(1)+"px)"});
  b.addEventListener("mouseleave",function(){b.style.transform=""});
 });
}
}catch(err){
 /* en cas de problème : on retire le motion, le site reste 100 % visible */
 root.classList.remove("m");root.classList.add("m-go");root.style.overflow="";
 var cc=document.querySelector(".m-curtain");if(cc)cc.remove();
 if(window.console)console.warn("motion désactivé :",err);
}
})();