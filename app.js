(function(){var KEY='dashboard-layout-deck-v1',DECK='dashboard-layout-deck',CARDS=[],st={ans:{},notes:{},pos:0,skipped:[]};
try{var s=JSON.parse(localStorage.getItem(KEY));if(s&&s.ans)st=s}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
var $=function(i){return document.getElementById(i)},stage=$('stage');
// wireframes: frame 60x100
function R(x,y,w,h,c){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="1.5" fill="'+(c||'#e5e5e5')+'"/>'}
var K='#171717',G='#d4d4d4',A='#0B6E4F',U='#dc2626',B='#155dfc';
function lines(y,n,w){var s='';for(var i=0;i<n;i++)s+=R(6,y+i*5,(w||48)-(i%3)*6,2.5,G);return s}
function rows(y,n,dot){var s='';for(var i=0;i<n;i++){s+=R(6,y+i*8,48,6,'#f5f5f5');if(dot)s+='<circle cx="10" cy="'+(y+3+i*8)+'" r="1.6" fill="'+[A,'#d97706',G][i%3]+'"/>';s+=R(dot?14:9,y+2+i*8,26,2,G)+'<path d="M49 '+(y+2+i*8)+'l2 1.5-2 1.5" stroke="#737373" stroke-width=".7" fill="none"/>'}return s}
var V={
topbar:[R(6,8,48,4,G)+R(6,16,30,5,K)+lines(26,10),R(4,4,52,8,'#f5f5f5')+R(6,6,10,4,K)+R(24,6.5,14,3,G)+R(46,6,8,4,A)+R(6,18,30,5,K)+lines(28,9)],
titlefirst:[lines(8,7)+R(6,46,40,6,K)+lines(56,6),R(6,8,40,6,K)+R(6,18,48,6,'#f5f5f5')+R(9,20,24,2,G)+lines(30,10)],
collapse:[R(6,8,30,5,K)+R(6,16,48,40,'#f5f5f5')+lines(18,7,46)+lines(60,5),R(6,8,30,5,K)+R(6,16,48,7,'#f5f5f5')+R(9,18.5,22,2,G)+'<path d="M49 18l2 2 2-2" stroke="#737373" stroke-width=".8" fill="none"/>'+lines(28,10)],
stamp:[rows(10,8),rows(10,8)],
sticky:[R(6,8,30,5,K)+lines(18,14),R(0,0,60,8,'#fff')+R(4,2,8,4,K)+R(20,3,18,2,G)+'<line x1="0" y1="8" x2="60" y2="8" stroke="#e5e5e5"/>'+lines(14,15)],
pill:[R(6,8,30,5,K)+R(6,16,48,18,'#fef2f2')+lines(18,3,46)+lines(40,8),R(6,8,30,5,K)+R(40,8,14,5,U)+lines(18,12)],
order:[R(6,8,30,5,K)+R(6,16,48,10,'#f5f5f5')+R(6,30,48,10,'#eaeaea')+R(6,44,48,10,'#fef2f2')+R(6,58,48,10,'#f5f5f5'),R(6,8,30,5,K)+R(6,16,48,7,'#f5f5f5')+R(6,26,48,7,'#fef2f2')+R(6,36,48,10,'#eaeaea')+R(6,50,48,10,'#f5f5f5')+R(6,64,48,10,'#f5f5f5')],
featured:[R(6,6,48,22,'#ecfdf5')+R(6,31,48,22,'#ecfdf5')+R(6,58,30,5,K)+lines(68,5),R(6,8,30,5,K)+R(6,17,48,6,'#f5f5f5')+R(6,27,48,18,'#ecfdf5')+R(10,38,14,4,A)+lines(50,8)],
rows:[R(6,8,48,20,'#f5f5f5')+lines(10,3,44)+R(6,32,48,20,'#f5f5f5')+lines(34,3,44)+R(6,56,48,20,'#f5f5f5')+lines(58,3,44),rows(8,10)],
seeall:[rows(8,11),rows(8,5)+R(6,50,48,6,'#fff')+R(20,52,20,2,K)],
dots:[rows(8,10),rows(8,10,1)],
rhythm:[R(6,6,30,5,K)+lines(13,3)+R(6,32,30,4,K)+lines(38,2)+R(6,48,30,4,K)+lines(70,3),R(6,6,30,5,K)+lines(15,3)+R(6,33,30,4,K)+lines(41,3)+R(6,60,30,4,K)+lines(68,3)],
tiles:[R(6,8,30,5,K)+R(8,18,10,6,G)+R(30,22,14,4,G)+R(12,32,8,8,G)+lines(46,8),R(6,8,30,5,K)+R(6,17,14,12,'#f5f5f5')+R(23,17,14,12,'#f5f5f5')+R(40,17,14,12,'#f5f5f5')+R(9,20,6,4,K)+R(26,20,6,4,K)+R(43,20,6,4,K)+lines(34,10)],
az:[rows(8,10),R(36,4,18,4,'#fff')+R(38,5,12,2,B)+rows(12,10)],
chips:[R(6,8,30,5,K)+lines(18,12),R(6,8,30,5,K)+R(6,17,12,5,'#fff')+R(20,17,14,5,'#fff')+R(36,17,12,5,'#fff')+'<rect x="6" y="17" width="12" height="5" fill="none" stroke="#171717" stroke-width=".6"/><rect x="20" y="17" width="14" height="5" fill="none" stroke="#d4d4d4" stroke-width=".6"/><rect x="36" y="17" width="12" height="5" fill="none" stroke="#d4d4d4" stroke-width=".6"/>'+rows(26,7)],
carousel:[R(6,6,48,16,'#f5f5f5')+R(6,25,48,16,'#f5f5f5')+R(6,44,48,16,'#f5f5f5')+R(6,63,48,16,'#f5f5f5'),R(6,10,40,40,'#f5f5f5')+R(49,10,11,40,'#f5f5f5')+R(10,40,14,4,A)+'<circle cx="24" cy="56" r="1.5" fill="#171717"/><circle cx="30" cy="56" r="1.5" fill="#d4d4d4"/><circle cx="36" cy="56" r="1.5" fill="#d4d4d4"/>'+lines(64,5)],
type:['<rect x="6" y="6" width="44" height="10" fill="#171717"/>'+R(6,20,20,2,G)+R(6,26,48,4,K)+lines(34,6),R(6,8,34,6,K)+R(6,20,24,3.5,K)+lines(27,4)+R(6,50,24,3.5,K)+lines(57,4)],
measure:[lines(10,14,54),R(10,10,40,0.1,'#fff')+lines(10,14,36)],
grid:['<g transform="translate(0,20)">'+R(2,0,56,6,'#f5f5f5')+R(2,9,56,6,'#f5f5f5')+R(2,18,56,6,'#f5f5f5')+R(2,27,56,6,'#f5f5f5')+'</g>','<g transform="translate(0,20)">'+R(6,0,15,14,'#f5f5f5')+R(23,0,15,14,'#f5f5f5')+R(40,0,15,14,'#f5f5f5')+R(6,17,15,14,'#f5f5f5')+R(23,17,15,14,'#f5f5f5')+R(40,17,15,14,'#f5f5f5')+'</g>'],
twocol:[R(6,8,30,5,K)+R(6,16,48,10,'#f5f5f5')+R(6,29,48,10,'#f5f5f5')+R(6,42,48,10,'#f5f5f5')+R(6,55,48,10,'#f5f5f5'),R(6,8,30,5,K)+R(6,16,23,22,'#f5f5f5')+R(31,16,23,22,'#f5f5f5')+R(6,41,23,22,'#f5f5f5')+R(31,41,23,22,'#f5f5f5')],
rail:[R(6,8,30,5,K)+lines(18,12),R(2,6,10,60,'#f5f5f5')+R(3,10,8,2,K)+R(3,15,8,2,G)+R(3,20,8,2,G)+R(16,8,30,5,K)+lines(18,12)],
phone:[lines(6,17),R(6,6,30,5,K)+rows(14,5)+R(6,80,48,8,'#fff')+R(36,82,16,4,A)],
icons:[rows(8,10),(function(){var s='';for(var i=0;i<9;i++)s+=R(6,8+i*8,48,6,'#f5f5f5')+'<circle cx="10" cy="'+(11+i*8)+'" r="2" fill="none" stroke="#171717" stroke-width=".6"/>'+R(15,10+i*8,24,2,G);return s})()],
color:[R(0,0,60,100,'#f5f5f5')+R(6,8,48,12,B)+R(6,24,48,12,U)+R(6,40,48,12,'#d97706')+R(6,56,48,12,A),R(6,8,30,5,K)+R(6,16,10,4,A)+lines(24,6)+R(6,56,48,0.8,A)+lines(60,5)],
hover:[R(6,10,48,16,'#f5f5f5')+R(6,30,48,16,'#f5f5f5')+R(6,50,48,16,'#f5f5f5'),R(6,10,48,16,'#f5f5f5')+'<rect x="5" y="28" width="50" height="18" rx="2" fill="#fff" stroke="#155dfc" stroke-width=".8"/>'+R(6,50,48,16,'#f5f5f5')],
footer:[R(0,0,60,10,'#f5f5f5')+R(44,2,12,6,K)+lines(16,13),lines(6,12)+R(20,72,20,6,'#fff')+'<rect x="20" y="72" width="20" height="6" fill="none" stroke="#171717" stroke-width=".6"/>'+R(18,86,24,2,G)]};
function svg(k,i){var v=V[k]||V.rows;return '<svg viewBox="0 0 60 100" role="img" aria-label="'+(i?'After':'Before')+' wireframe"><rect x=".5" y=".5" width="59" height="99" rx="4" fill="#fff" stroke="#d4d4d4"/><clipPath id="c'+k+i+'"><rect x="1" y="1" width="58" height="98" rx="4"/></clipPath><g clip-path="url(#c'+k+i+')">'+v[i]+'</g></svg>'}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var NOTE='<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/></svg>';
function render(){var n=CARDS.length,a=Object.keys(st.ans).length;$('ans').textContent=a+' Answered';$('pb').style.width=(100*a/n)+'%';
 if(st.pos>=n){var sk=CARDS.filter(function(c){return !st.ans[c.id]});if(sk.length&&st.queue==null){} $('play').style.display='none';$('done').classList.add('on');$('count').textContent=n+' / '+n;summary();var sent=st.submitted&&st.sentCount===a;$('dh').textContent=sent?(a<n?'Answers Sent':'All Done'):'All Done';$('dp').textContent=sent?(a<n?'Sent '+a+' Answers To Coach. The '+(n-a)+' Unanswered Cards Come Back Next Time You Open Or Refresh The Deck.':'All Answers Sent To Coach.'):'Your answers are saved on this device. Tap Submit to send them to Coach.';return}
 $('play').style.display='';$('done').classList.remove('on');$('count').textContent=(st.pos+1)+' / '+n;var c=CARDS[st.pos];
 stage.innerHTML='<article class="card" id="cd"><div class="meta"><span class="tag '+(c.tag==='All'?'all':'')+'">'+esc(c.tag==='All'?'All Dashboards':c.tag)+'</span><span class="th">'+esc(c.theme)+'</span></div><h2>'+esc(c.title)+'</h2><p>'+esc(c.text)+'</p><div class="viz"><figure>'+svg(c.viz,0)+'<figcaption>Before</figcaption></figure><figure>'+svg(c.viz,1)+'<figcaption>After</figcaption></figure></div><button class="nb mw-hover'+(st.notes[c.id]?' has':'')+'" id="nb" type="button">'+NOTE+(st.notes[c.id]?'Edit Note':'Add Note')+'</button><div id="nw" hidden><textarea id="nt" placeholder="Optional note for Coach" aria-label="Note">'+esc(st.notes[c.id]||'')+'</textarea></div><span class="stamp" id="sp"></span></article>';
 var nb=$('nb'),nw=$('nw'),nt=$('nt');nb.onclick=function(){nw.hidden=!nw.hidden;if(!nw.hidden)nt.focus()};nt.oninput=function(){var v=nt.value.trim();if(v)st.notes[c.id]=v;else delete st.notes[c.id];save()};drag($('cd'))}
function answer(v){var c=CARDS[st.pos];if(!c)return;var cd=$('cd');if(v){st.ans[c.id]={answer:v,t:new Date().toISOString()}}
 if(cd){var dx=v==='no'?-1:v==='yes'||v==='love'?1:0;cd.style.transform='translate('+(dx*120)+'%,'+(dx?0:-30)+'px) rotate('+(dx*12)+'deg)';cd.style.opacity=0}
 st.pos++;if(st.submitted)while(st.pos<CARDS.length&&st.ans[CARDS[st.pos].id])st.pos++;save();setTimeout(render,v?200:120)}
function drag(el){var x0=null,y0,dx=0,sp=$('sp');
 el.addEventListener('pointerdown',function(e){if(e.target.closest('button,textarea'))return;x0=e.clientX;y0=e.clientY;dx=0;el.classList.add('drag');try{el.setPointerCapture(e.pointerId)}catch(_){}});
 el.addEventListener('pointermove',function(e){if(x0==null)return;dx=e.clientX-x0;el.style.transform='translateX('+dx+'px) rotate('+dx/20+'deg)';sp.style.opacity=Math.min(1,Math.abs(dx)/90);if(dx>0){sp.textContent='YES';sp.style.color=sp.style.borderColor='#0B6E4F';sp.style.left='16px';sp.style.right='auto'}else{sp.textContent='NO';sp.style.color=sp.style.borderColor='#737373';sp.style.right='16px';sp.style.left='auto'}});
 function end(){if(x0==null)return;x0=null;el.classList.remove('drag');if(Math.abs(dx)>90)answer(dx>0?'yes':'no');else{el.style.transform='';sp.style.opacity=0}}
 el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end)}
function counts(){var o={yes:0,love:0,maybe:0,no:0};for(var k in st.ans)o[st.ans[k].answer]++;return o}
function results(){return CARDS.map(function(c){var a=st.ans[c.id];return{id:c.id,title:c.title,tag:c.tag,theme:c.theme,answer:a?a.answer:null,note:st.notes[c.id]||'',t:a?a.t:null}})}
function notesText(){return CARDS.filter(function(c){return st.notes[c.id]}).map(function(c){return c.id+' '+c.title+': '+st.notes[c.id]}).join('\n')}
function summary(){var o=counts();$('sum').innerHTML=['Love','Yes','Maybe','No'].map(function(k){return '<div><b>'+o[k.toLowerCase()]+'</b>'+k+'</div>'}).join('');var sk=CARDS.length-Object.keys(st.ans).length;$('review').style.display=sk?'':'none';$('review').textContent='Review Skipped ('+sk+')'}
function payload(partial){var r=results(),un=r.filter(function(x){return !x.answer}).map(function(x){return x.id});return{answers:r,counts:counts(),answered:r.length-un.length,total:r.length,unanswered:un,partial:!!partial}}
document.querySelectorAll('.ab').forEach(function(b){b.onclick=function(){answer(b.dataset.a)}});
$('skip').onclick=function(){answer(null)};
$('review').onclick=function(){var i=CARDS.findIndex(function(c){return !st.ans[c.id]});if(i>=0){st.pos=i;save();render()}};
document.addEventListener('keydown',function(e){if(e.target.tagName==='TEXTAREA')return;if(e.key==='ArrowLeft')answer('no');if(e.key==='ArrowRight')answer('yes')});
$('early').onclick=function(){var b=this;b.disabled=true;var p={agent:'coach',app:'dashboard-layout-deck',deck:DECK,results:payload(true),notes:notesText(),partial:true,answered:payload(true).answered,total:CARDS.length,unanswered:payload(true).unanswered,sentAt:new Date().toISOString(),ua:navigator.userAgent};
 fetch(MWSubmit.url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(p)}).then(function(){toast('Sent')},function(){toast('Saved, Not Sent')}).then(function(){b.disabled=false;st.submitted=true;st.sentCount=Object.keys(st.ans).length;st.pos=CARDS.length;save();render();window.scrollTo(0,0)})};
function toast(t){var x=$('toast');x.textContent=t;x.style.display='block';setTimeout(function(){x.style.display='none'},2200)}
function txt(){var o=counts();return 'Dashboard Layout Deck: '+o.love+' Love, '+o.yes+' Yes, '+o.maybe+' Maybe, '+o.no+' No'}
$('copy').onclick=function(){var t=txt()+'\n'+results().filter(function(r){return r.answer}).map(function(r){return r.id+' '+r.answer+(r.note?' ('+r.note+')':'')+' '+r.title}).join('\n');
 (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){$('cmsg').textContent='Copied'},function(){var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');$('cmsg').textContent='Copied'}catch(e){$('cmsg').textContent='Copy failed'}ta.remove()})};
$('share').onclick=function(){var u=location.href.split('#')[0],t=txt();if(navigator.share)navigator.share({title:'Dashboard Layout Deck',text:t,url:u}).catch(function(){});else{(navigator.clipboard?navigator.clipboard.writeText(t+' '+u):Promise.reject()).then(function(){$('smsg').textContent='Link Copied'},function(){$('smsg').textContent=u})}};
fetch('cards.json').then(function(r){return r.json()}).then(function(d){CARDS=d.cards;if(st.submitted){var fi=CARDS.findIndex(function(c){return !st.ans[c.id]});if(fi>=0)st.pos=fi;save()}MWSubmit.button($('sub'),{agent:'coach',app:'dashboard-layout-deck',deck:DECK,getResults:function(){return payload(false)},getNotes:notesText});$('sub').addEventListener('click',function(){st.submitted=true;st.sentCount=Object.keys(st.ans).length;save()},true);render()});
})();
