const fs = require('fs')
const path = require('path')

const dataPath = path.resolve(__dirname, '../data/news.ts')
const content = fs.readFileSync(dataPath, 'utf8')

const slugRegex = /slug:\s*['\"]([^'\"]+)['\"]/g
const slugs = []
let match
while ((match = slugRegex.exec(content)) !== null) {
  slugs.push(match[1])
}

const base = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'http://localhost:3000'
const urls = [
  base,
  base + '/noticias',
  ...slugs.map(s => base + '/noticias/' + s),
  base + '/boletines',
  base + '/foro',
]

const lastMod = new Date().toISOString().split('T')[0]
const items = urls
  .map(u => {
    return `  <url><loc>${u}</loc><lastmod>${lastMod}</lastmod></url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`

const outPath = path.resolve(__dirname, '../public/sitemap.xml')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, sitemap, 'utf8')
console.log('Sitemap generated at', outPath)
