const fs = require('fs');

const path = require('path');
const siteData = require('./data.js');

function renderLogos(item) {
    const logos = item.logos || (item.companyIcon ? [{src: item.companyIcon, alt: item.company}] : []);
    return logos.length ? '<div class="entry-logos">' + logos.map(logo => '<div class="logo-box"><img src="' + logo.src + '" alt="' + logo.alt + '" class="w-full h-full object-contain"></div>').join('') + '</div>' : '';
}

const md = (t) => t ? t.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') : '';

function generateHTML(lang) {
    const d = siteData[lang];
    const isEn = lang === 'en';
    const otherLang = isEn ? 'zh' : 'en';
    const otherLangLink = isEn ? 'zh.html' : 'index.html';

    const renderEntry = (item, index, type) => {
        const tagsHtml = item.tags ? `
            <div class="flex flex-wrap gap-2 mb-4">
                ${item.tags.map(t => `<span class="px-2 py-0.5 bg-gray-50 text-gray-400 text-[9px] font-bold rounded-full border border-gray-100 uppercase tracking-tighter">${t}</span>`).join('')}
            </div>
        ` : '';
        const isProject = type === 'projects';
        const iconHtml = !isProject ? renderLogos(item) : '';

        return `
            <div class="flex flex-col md:flex-row gap-6">
                ${iconHtml}
                <div class="flex-1 min-w-0">
                    <div class="flex flex-col sm:flex-row sm:justify-between items-start gap-2 mb-2">
                        <h4 class="${isProject ? 'text-2xl' : 'text-xl'} font-bold">${item.role || item.name}</h4>
                        <span class="text-xs font-bold text-gray-300 uppercase tracking-widest">${item.period || ''}${item.location ? `<br>${item.location}` : ''}</span>
                    </div>
                    ${!isProject ? `<div class="text-brand-muted font-medium mb-3">${item.company}</div>` : ''}
                    ${tagsHtml}
                    <p class="text-sm text-brand-muted leading-relaxed mb-4">${md(item.summary)}</p>
                    <button onclick="showDetail('${type}', ${index})" class="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-0.5 hover:opacity-50 transition-opacity">${isEn ? 'View Details' : '查看詳細內容'}</button>
                </div>
            </div>
        `;
    };

    const modalDataStr = JSON.stringify(d).replace(/</g, '\\u003c');

    return `<!DOCTYPE html>
<html lang="${isEn ? 'en' : 'zh-Hant'}">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${d.metadata.title}</title>
    <meta name="description" content="${d.metadata.description}" />
    <meta property="og:title" content="${d.metadata.title}" />
    <meta property="og:description" content="${d.metadata.description}" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brand-bg': '#ffffff',
                        'brand-text': '#111111',
                        'brand-muted': '#666666',
                        'brand-border': '#eeeeee',
                        'brand-accent': '#000000',
                    },
                    fontFamily: {
                        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        html { scroll-behavior: smooth; scroll-padding-top: 90px; }
        .entry-logos { display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; }
        @media(max-width:767px) { .entry-logos { flex-direction: row; } .modal-content { padding: 30px 22px !important; } }
        @media(prefers-reduced-motion:reduce) { html { scroll-behavior: auto; } }
        button:focus-visible, a:focus-visible { outline: 2px solid #111; outline-offset: 4px; }
        body { background: #ffffff; color: #111111; line-height: 1.5; }
        b, strong { font-weight: 700; color: #000; }
        
        .logo-box {
            width: 80px; height: 80px; border-radius: 12px; background: #fff;
            border: 1px solid #eee; display: flex; align-items: center; justify-content: center;
            overflow: hidden; flex-shrink: 0; padding: 6px;
        }
        .logo-box img[src*="5b61b7104037"] { background-color: #000; width: 100%; height: 100%; object-fit: contain; margin: -6px; padding: 10px; }
        
        .modal {
            display: none; position: fixed; inset: 0; z-index: 100;
            background: rgba(0,0,0,0.4); backdrop-blur: 4px;
            align-items: center; justify-content: center; padding: 20px;
        }
        .modal.active { display: flex; }
        .modal-content {
            background: white; width: 100%; max-width: 800px; border-radius: 24px;
            padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            max-height: 90vh; overflow-y: auto; position: relative;
        }
    </style>
</head>
<body class="antialiased font-sans">
    <div id="detail-modal" class="modal" onclick="closeModal(event)">
        <div class="modal-content" role="dialog" aria-modal="true" aria-label="${isEn ? 'Experience and project details' : '經歷與專案詳細內容'}" onclick="event.stopPropagation()">
            <button id="modal-close" aria-label="${isEn ? 'Close' : '關閉'}" onclick="closeModal()" class="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl">&times;</button>
            <div id="modal-body"></div>
        </div>
    </div>

    <nav class="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-brand-border">
        <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" class="text-lg font-bold tracking-tight">James Chan</a>
            <div class="flex items-center gap-6 text-sm font-medium">
                <div class="hidden md:flex gap-6">
                    <a href="#about" class="text-brand-muted hover:text-black">${d.nav.about}</a>
                    <a href="#experience" class="text-brand-muted hover:text-black">${d.nav.experience}</a>
                    <a href="#projects" class="text-brand-muted hover:text-black">${d.nav.projects}</a>
                    <a href="#leadership" class="text-brand-muted hover:text-black">${d.nav.leadership}</a>
                    <a href="#skills" class="text-brand-muted hover:text-black">${d.nav.skills}</a>
                    <a href="#contact" class="text-brand-muted hover:text-black">${d.nav.contact}</a>
                </div>
                <a href="${otherLangLink}" class="border border-brand-border px-3 py-1 rounded-full text-[10px] font-bold tracking-widest hover:bg-gray-50 transition-colors inline-block">${d.nav.languageToggle}</a>
            </div>
        </div>
    </nav>

    <main class="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-24">
        <section class="py-10">
            <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">${d.hero.name}</h1>
            <h2 class="text-xl md:text-2xl text-brand-muted mb-8">${d.hero.title}</h2>
            <p class="max-w-2xl text-lg text-brand-muted">${d.hero.subtitle}</p>
        </section>

        <section id="about" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.about.title}</div>
            <div class="md:col-span-3">
                ${d.about.description.map(paragraph => `<p class="text-lg text-brand-text leading-relaxed mb-4">${paragraph}</p>`).join('')}
            </div>
        </section>

        <section id="experience" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.experience.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.experience.items.map((i, idx) => renderEntry(i, idx, 'experience')).join('')}
            </div>
        </section>

        <section id="projects" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.projects.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.projects.items.map((i, idx) => renderEntry(i, idx, 'projects')).join('')}
            </div>
        </section>

        <section id="leadership" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.leadership.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.leadership.items.map((i, idx) => renderEntry(i, idx, 'leadership')).join('')}
            </div>
        </section>

        <section id="skills" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.skills.title}</div>
            <div class="md:col-span-3">
                <ul class="space-y-6">
                    ${d.skills.items.map(s => {
                        const splitAt = s.indexOf('**', 2);
                        const parts = [s.slice(2, splitAt).replace(/[:：]$/, ''), s.slice(splitAt + 2).replace(/^[:：]\s*/, '')];
                        return `
                        <li class="group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6 border-b border-brand-border pb-6 last:border-0">
                            <span class="text-brand-text font-bold text-lg min-w-[200px] leading-none">${md(parts[0])}</span>
                            <span class="text-brand-muted font-medium text-base">${md(parts[1] || '')}</span>
                        </li>
                        `;
                    }).join('')}
                </ul>
            </div>
        </section>

        <section id="contact" class="pt-10 border-t border-brand-border">
            <h3 class="text-3xl font-bold mb-6">${d.contact.title}</h3>
            <p class="text-lg text-brand-muted mb-8">${d.contact.description}</p>
            <div class="flex flex-wrap gap-6">
                <a href="mailto:${d.contact.email}" class="text-lg font-bold underline underline-offset-4 decoration-1 hover:text-blue-600 transition-colors">${d.contact.email}</a>
                <a href="tel:${d.contact.phone.replace(/[^0-9+]/g, '')}" class="text-lg font-bold">${d.contact.phone}</a>
            </div>
        </section>
    </main>

    <footer class="py-10 text-center text-xs text-gray-400">
        &copy; <span id="year"></span> James Chan.
    </footer>

    <script>
        document.getElementById('year').innerText = new Date().getFullYear();
        const pageData = ${modalDataStr};
        const renderLogos = ${renderLogos.toString()};
        let modalTrigger = null;
        const md = (t) => t ? t.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>') : '';

        function showDetail(type, index) {
    modalTrigger = document.activeElement;
    const data = pageData[type].items[index];
    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('modal-body');

    const tagsHtml = data.tags ? \`
        <div class="flex flex-wrap gap-2 mb-6">
            \${data.tags.map(t => \`<span class="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] font-bold rounded uppercase tracking-wider">\${t}</span>\`).join('')}
        </div>
    \` : '';

    const isProject = type === 'projects';

    const headerHtml = isProject ? \`
        <div class="mb-6">
            <h4 class="text-3xl font-bold mb-2">\${data.name}</h4>
            <div class="text-brand-muted font-medium text-sm">\${data.period}</div>
        </div>
    \` : \`
        <div class="flex flex-col items-start gap-4 mb-6">
            \${renderLogos(data)}
            <div>
                <h4 class="text-2xl font-bold">\${data.role}</h4>
                <div class="text-brand-muted text-sm">\${data.company}</div>
                <div class="text-brand-muted text-xs mt-2">\${data.period || ''}\${data.location ? ' · ' + data.location : ''}</div>
            </div>
        </div>
    \`;

    const mediaLinksHtml = data.mediaLinks ? \`
        <div class="mt-8 pt-6 border-t border-gray-100">
            <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">${isEn ? 'Selected Work' : '相關作品'}</div>
            <div class="flex flex-col gap-3">
                \${data.mediaLinks.map(link => \`
                    <a href="\${link.href}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-60 transition-opacity">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        \${link.label}
                    </a>
                \`).join('')}
            </div>
        </div>
    \` : '';

    const resourceLinksHtml = data.fileLink || data.campaignLink ? \`
        <div class="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
            \${data.fileLink ? \`
                <a href="\${data.fileLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-60 transition-opacity">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    \${data.fileLink.endsWith('.html') ? ${isEn ? "'View Project' : 'View Document'" : "'查看專案' : '查看文件'"}}
                </a>
            \` : ''}
            \${data.campaignLink ? \`
                <a href="\${data.campaignLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-60 transition-opacity">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm8 8a3 3 0 11-6 0 3 3 0 016 0zm3.5-4.5h.01"></path>
                    </svg>
                    ${isEn ? 'View Campaign' : '查看活動'}
                </a>
            \` : ''}
        </div>
    \` : '';

    body.innerHTML = \`
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div class="lg:col-span-4">
                \${headerHtml}
                \${tagsHtml}
                \${mediaLinksHtml}
                \${resourceLinksHtml}
            </div>
            <div class="lg:col-span-8 space-y-8">
                <div>
                    <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">\${isProject ? ${isEn ? "'Project Highlights' : 'Key Achievements'" : "'專案重點' : '主要成果'"}}</div>
                    <ul class="space-y-4">
                        \${((data.highlights || data.achievements || []).length ? (data.highlights || data.achievements) : [data.summary]).map(a => \`<li class="flex gap-3 text-[0.95rem] text-brand-muted leading-relaxed"><span class="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span><span>\${md(a)}</span></li>\`).join('')}
                    </ul>
                </div>
                \${data.takeaway ? \`
                    <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">${isEn ? 'Key Takeaway' : '經驗收穫'}</div>
                        <p class="text-[0.95rem] font-medium italic leading-relaxed text-brand-text">\${md(data.takeaway)}</p>
                    </div>
                \` : ''}
            </div>
        </div>
    \`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal-close').focus();
}

        function closeModal() {
            document.getElementById('detail-modal').classList.remove('active');
            document.body.style.overflow = '';
            if (modalTrigger) modalTrigger.focus();
        }
        document.addEventListener('keydown', function(event) {
            const modal = document.getElementById('detail-modal');
            if (!modal.classList.contains('active')) return;
            if (event.key === 'Escape') { event.preventDefault(); closeModal(); }
            if (event.key === 'Tab') {
                const elements = modal.querySelectorAll('button, a[href]');
                const first = elements[0], last = elements[elements.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
            }
        });
    </script>
</body>
</html>`;
}

fs.writeFileSync(path.join(__dirname, 'index.html'), generateHTML('en'));
fs.writeFileSync(path.join(__dirname, 'zh.html'), generateHTML('zh'));
console.log('Static pages generated successfully.');
