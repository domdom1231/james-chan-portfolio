const fs = require('fs');

// Read data
const dataJs = fs.readFileSync('/Users/chocolatejam/Desktop/James_Chan_Portfolio/data.js', 'utf8');
let siteData;
eval(dataJs.replace('const siteData =', 'siteData ='));

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
        const iconHtml = !isProject ? `<div class="logo-box"><img src="${item.companyIcon}" class="w-full h-full object-contain"></div>` : '';

        return `
            <div class="flex flex-col md:flex-row gap-6">
                ${iconHtml}
                <div class="flex-1">
                    <div class="flex justify-between items-start mb-2">
                        <h4 class="${isProject ? 'text-2xl' : 'text-xl'} font-bold">${item.role || item.name}</h4>
                        <span class="text-xs font-bold text-gray-300 uppercase tracking-widest">${item.period}</span>
                    </div>
                    ${!isProject ? `<div class="text-brand-muted font-medium mb-3">${item.company}</div>` : ''}
                    ${tagsHtml}
                    <p class="text-sm text-brand-muted leading-relaxed mb-4">${md(item.summary)}</p>
                    <button onclick="showDetail('${type}', ${index})" class="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-0.5 hover:opacity-50 transition-opacity">View Details</button>
                </div>
            </div>
        `;
    };

    const modalDataStr = JSON.stringify(d);

    return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${d.hero.name} | Portfolio</title>
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
        html { scroll-behavior: smooth; }
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
        <div class="modal-content" onclick="event.stopPropagation()">
            <button onclick="closeModal()" class="absolute top-6 right-6 text-gray-400 hover:text-black text-2xl">&times;</button>
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
                    <a href="#leadership" class="text-brand-muted hover:text-black">${d.nav.leadership}</a>
                    <a href="#projects" class="text-brand-muted hover:text-black">${d.nav.projects}</a>
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
                <p class="text-lg text-brand-text leading-relaxed">${d.about.description}</p>
            </div>
        </section>

        <section id="experience" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.experience.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.experience.items.map((i, idx) => renderEntry(i, idx, 'experience')).join('')}
            </div>
        </section>

        <section id="leadership" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.leadership.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.leadership.items.map((i, idx) => renderEntry(i, idx, 'leadership')).join('')}
            </div>
        </section>

        <section id="projects" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.projects.title}</div>
            <div class="md:col-span-3 space-y-12">
                ${d.projects.items.map((i, idx) => renderEntry(i, idx, 'projects')).join('')}
            </div>
        </section>

        <section id="skills" class="pt-10 border-t border-brand-border grid md:grid-cols-4 gap-8">
            <div class="text-xs font-bold uppercase tracking-widest text-gray-400">${d.skills.title}</div>
            <div class="md:col-span-3">
                <ul class="space-y-6">
                    ${d.skills.items.map(s => {
                        const parts = s.includes('：') ? s.split('：') : s.split(':');
                        return `
                        <li class="group flex items-baseline gap-6 border-b border-brand-border pb-6 last:border-0">
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
        const md = (t) => t ? t.replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>') : '';

        function showDetail(type, index) {
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
                <div class="flex items-center gap-4 mb-6">
                    <div class="logo-box"><img src="\${data.companyIcon}" class="w-full h-full object-contain"></div>
                    <div>
                        <h4 class="text-2xl font-bold">\${data.role}</h4>
                        <div class="text-brand-muted text-sm">\${data.company}</div>
                    </div>
                </div>
            \`;

            body.innerHTML = \`
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div class="lg:col-span-4">
                        \${headerHtml}
                        \${tagsHtml}
                        \${data.fileLink ? \`
                            <div class="mt-8 pt-6 border-t border-gray-100">
                                <a href="\${data.fileLink}" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-black hover:opacity-60 transition-opacity">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                    View Document
                                </a>
                            </div>
                        \` : ''}
                    </div>
                    <div class="lg:col-span-8 space-y-8">
                        <div>
                            <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">\${isProject ? 'Project Highlights' : 'Key Achievements'}</div>
                            <ul class="space-y-4">
                                \${(data.highlights || data.achievements || []).map(a => \`<li class="flex gap-3 text-[0.95rem] text-brand-muted leading-relaxed"><span class="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span><span>\${md(a)}</span></li>\`).join('')}
                            </ul>
                        </div>
                        \${data.takeaway ? \`
                            <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Key Takeaway</div>
                                <p class="text-[0.95rem] font-medium italic leading-relaxed text-brand-text">\${md(data.takeaway)}</p>
                            </div>
                        \` : ''}
                    </div>
                </div>
            \`;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('detail-modal').classList.remove('active');
            document.body.style.overflow = '';
        }
    </script>
</body>
</html>`;
}

fs.writeFileSync('/Users/chocolatejam/Desktop/James_Chan_Portfolio/index.html', generateHTML('en'));
fs.writeFileSync('/Users/chocolatejam/Desktop/James_Chan_Portfolio/zh.html', generateHTML('zh'));
console.log('Static pages generated successfully.');
