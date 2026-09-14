const fs = require('node:fs');
const path = require('node:path');
const data = require('./data.js');
const root = __dirname;
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const md = value => esc(value).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
const safeLink = value => typeof value === 'string' && /^(https:\/\/|\.\/)/.test(value) && !/[\x00-\x20<>"\\]/.test(value);
const availableLink = value => safeLink(value) && (value.startsWith('https://') || fs.existsSync(path.resolve(root,value)));
function generateHTML(lang) {
 const d=data[lang], en=lang==='en';
 const ui=en ? {details:'View details',document:'View document',campaign:'View event',contact:'Get in touch',resume:'Download CV',skip:'Skip to content',nav:'Main navigation'} : {details:'查看詳細內容',document:'查看文件',campaign:'查看活動',contact:'聯絡我',resume:'下載履歷',skip:'跳至主要內容',nav:'主要導覽'};
 const order=['about','experience','projects','leadership','skills','contact'];
 const link=(href,label)=>availableLink(href)?`<a class="resource" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:'';
 const bullets=items=>`<ul class="contributions">${items.map(i=>`<li>${md(i)}</li>`).join('')}</ul>`;
 function entry(item,index,type){
  const experience=type==='experience', project=type==='projects';
  const contributions=item.achievements||item.highlights||[];
  const resources=link(item.fileLink,ui.document)+link(item.campaignLink,ui.campaign);
  return `<article class="entry ${experience?'experience-entry':''} ${experience&&index===0?'featured':''}">
   ${(item.logos||[]).length?`<div class="company-logos">${item.logos.map(logo=>`<img src="${esc(logo.src)}" alt="${esc(logo.alt)}" width="88" height="88" loading="lazy">`).join('')}</div>`:''}
   <div class="entry-top"><div><h3>${esc(project?item.name:item.company)}</h3>
   ${item.role?`<p class="role">${esc(item.role)}</p>`:''}
   ${item.descriptor?`<p class="descriptor">${esc(item.descriptor)}</p>`:''}</div>
   ${(item.period||item.location)?`<p class="dates">${esc(item.period)}${item.location?`<br>${esc(item.location)}`:''}</p>`:''}</div>
   <p class="tags">${(item.tags||[]).map(esc).join(' · ')}</p>
   ${item.metric?`<div class="metric"><strong>${esc(item.metric)}</strong><span>${esc(item.metricLabel)}</span></div>`:''}
   <p class="summary">${md(item.summary)}</p>
   ${experience?bullets(contributions):`<details><summary>${ui.details}</summary>${bullets(contributions)}${resources}</details>`}
   ${experience?resources:''}
  </article>`;
 }
 const contactLinks=link(d.contact.linkedin,'LinkedIn')+link(d.contact.resume,ui.resume);
 return `<!doctype html>
<html lang="${en?'en':'zh-Hant'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(d.metadata.title)}</title><meta name="description" content="${esc(d.metadata.description)}">
<meta property="og:title" content="${esc(d.metadata.title)}"><meta property="og:description" content="${esc(d.metadata.description)}"><meta property="og:type" content="website"><meta property="og:locale" content="${en?'en_US':'zh_TW'}">
<style>
:root{color-scheme:light;--ink:#172720;--muted:#526059;--line:#dce1dc;--accent:#315b45}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:105px}body{margin:0;background:#fcfcf9;color:var(--ink);font-family:Arial,"Noto Sans TC",sans-serif;line-height:1.7}a{color:inherit;text-underline-offset:5px}a:hover{color:var(--accent)}a:focus-visible,summary:focus-visible{outline:3px solid #597c62;outline-offset:5px}.skip{position:absolute;left:12px;top:-100px}.skip:focus{top:10px;z-index:10;background:white;padding:8px}nav{position:sticky;top:0;z-index:5;background:#fcfcf9f5;border-bottom:1px solid var(--line)}.nav-inner{max-width:1160px;margin:auto;padding:20px 32px;display:flex;align-items:center;gap:28px;justify-content:space-between}.brand{font-weight:700;text-decoration:none;white-space:nowrap}.nav-links{display:flex;gap:21px;flex-wrap:wrap;font-size:13px}.nav-links a{text-decoration:none}.language{border:1px solid var(--line);padding:4px 12px;text-decoration:none;font-size:12px;white-space:nowrap}main{max-width:1100px;margin:auto;padding:0 32px}h1,h2,h3,p{margin-top:0}h1{font-size:clamp(37px,5vw,68px);line-height:1.1;letter-spacing:-.045em;margin-bottom:25px;max-width:850px}h2{font-size:13px;letter-spacing:.09em;text-transform:uppercase;font-weight:600}h3{font-size:25px;line-height:1.3;letter-spacing:-.02em;margin-bottom:7px}.hero{padding:85px 0 72px}.eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:25px}.hero-title{font-size:clamp(21px,2.6vw,30px);line-height:1.4;max-width:850px;margin-bottom:20px}.hero-intro{max-width:720px;color:var(--muted);font-size:17px}.hero-links{display:flex;gap:25px;margin-top:28px;font-size:14px}.section{border-top:1px solid var(--line);padding:44px 0 58px;display:grid;grid-template-columns:170px minmax(0,1fr);gap:35px}.section>h2{color:var(--muted);padding-top:5px}.about p{font-size:16px;max-width:780px}.entry{padding:0 0 32px;margin-bottom:32px;border-bottom:1px solid var(--line)}.entry:last-child{border:0;padding-bottom:0;margin-bottom:0}.entry-top{display:flex;justify-content:space-between;gap:25px}.role{font-size:17px;margin-bottom:3px}.descriptor{font-size:16px;color:var(--muted);margin-bottom:3px}.dates{font-size:12px;color:var(--muted);flex-shrink:0;text-align:right;line-height:1.8}.tags{font-size:12px;color:var(--accent);margin:13px 0 18px;line-height:1.9}.summary{font-size:15px;color:var(--muted);margin-bottom:15px}.metric{display:flex;align-items:baseline;gap:20px;margin:22px 0;padding:20px 0;border-block:1px solid #c8d3c9}.metric strong{font-size:30px;line-height:1.2;letter-spacing:-.03em}.metric span{font-size:12px;color:var(--muted)}.contributions{padding-left:20px;margin:15px 0 0;font-size:14px;color:var(--muted)}.contributions li{padding-left:3px;margin-bottom:12px}.contributions strong{color:var(--ink)}.featured h3{font-size:29px}.featured{border-left:3px solid var(--accent);padding-left:25px}details summary{cursor:pointer;font-size:13px;text-decoration:underline;text-underline-offset:4px;list-style-position:inside}.resource{display:inline-block;margin:16px 22px 0 0;font-size:13px}.skills{list-style:none;padding:0;margin:0}.skills li{padding:0 0 20px;margin-bottom:20px;border-bottom:1px solid var(--line);font-size:14px;color:var(--muted)}.skills strong{display:block;font-size:16px;margin-bottom:8px;color:var(--ink)}.contact-copy{font-size:19px;max-width:750px}.contact-links{display:flex;gap:18px 26px;flex-wrap:wrap;align-items:baseline}.contact-links a{overflow-wrap:anywhere;font-size:15px}.contact-links .resource{margin:0}footer{max-width:1100px;margin:auto;padding:20px 32px 40px;color:var(--muted);font-size:12px;border-top:1px solid var(--line)}
.company-logos{display:flex;align-items:center;gap:14px;margin-bottom:18px}.company-logos img{width:88px;height:88px;object-fit:contain;background:white;border:1px solid var(--line);border-radius:8px;padding:4px}
@media(max-width:850px){.nav-inner{gap:16px;flex-wrap:wrap;padding:14px 22px}.nav-links{order:3;width:100%;gap:8px 20px}.section{grid-template-columns:1fr;gap:17px}.section>h2{margin-bottom:0}.hero{padding:55px 0}.language{margin-left:auto}html{scroll-padding-top:130px}}
@media(max-width:480px){main{padding:0 22px}.hero{padding:35px 0 40px}h1{font-size:39px}.hero-title{font-size:22px}.hero-intro{font-size:15px}.eyebrow{margin-bottom:16px}.entry-top{flex-direction:column;gap:8px}.dates{text-align:left;margin-bottom:0}.metric{align-items:flex-start;flex-direction:column;gap:8px}.metric strong{font-size:27px}.featured{padding-left:16px}h3,.featured h3{font-size:23px}.section{padding:30px 0 40px}.nav-links{font-size:12px;gap:8px 16px}.contact-copy{font-size:17px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
</style></head><body>
<a class="skip" href="#main">${ui.skip}</a><nav aria-label="${ui.nav}"><div class="nav-inner"><a class="brand" href="#main">James Chan</a><div class="nav-links">${order.map(s=>`<a href="#${s}">${esc(d.nav[s])}</a>`).join('')}</div><a class="language" href="${en?'zh.html':'index.html'}" lang="${en?'zh-Hant':'en'}" aria-label="${en?'切換至繁體中文':'Switch to English'}">${esc(d.nav.languageToggle)}</a></div></nav>
<main id="main"><header class="hero"><p class="eyebrow">${en?'National Taiwan University · Portfolio':'國立臺灣大學 · 個人作品集'}</p><h1>${esc(d.hero.name)}</h1><p class="hero-title">${esc(d.hero.title)}</p><p class="hero-intro">${esc(d.hero.subtitle)}</p><div class="hero-links"><a href="#experience">${esc(d.nav.experience)} ↓</a><a href="#contact">${ui.contact} ↗</a></div></header>
<section class="section" id="about"><h2>${esc(d.about.title)}</h2><div class="about">${d.about.description.map(p=>`<p>${esc(p)}</p>`).join('')}</div></section>
${['experience','projects','leadership'].map(type=>`<section class="section" id="${type}"><h2>${esc(d[type].title)}</h2><div>${d[type].items.map((i,n)=>entry(i,n,type)).join('')}</div></section>`).join('')}
<section class="section" id="skills"><h2>${esc(d.skills.title)}</h2><ul class="skills">${d.skills.items.map(s=>`<li>${md(s)}</li>`).join('')}</ul></section>
<section class="section" id="contact"><h2>${esc(d.contact.title)}</h2><div><p class="contact-copy">${esc(d.contact.description)}</p><div class="contact-links"><a href="mailto:${esc(d.contact.email)}">${esc(d.contact.email)}</a><a href="tel:${esc(d.contact.phone.replace(/[^0-9+]/g,''))}">${esc(d.contact.phone)}</a>${contactLinks}</div></div></section></main>
<footer>© ${new Date().getFullYear()} James Chan</footer></body></html>`;
}
for (const lang of ['en','zh']) fs.writeFileSync(path.join(root,lang==='en'?'index.html':'zh.html'),generateHTML(lang));
console.log('Generated index.html and zh.html.');
