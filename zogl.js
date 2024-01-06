const fs = require('fs')
const path = require('path')
const nikc_wytm = __dirname
const vnwm_md = fs.readdirSync(nikc_wytm, { recursive: true }).filter(rn1 => /\.md$/.test(rn1))

vnwm_md.forEach(rn1 => {
    const yxna_bnll = path.join(nikc_wytm, rn1)
    fs.readFileSync(yxna_bnll).toString().replace(/\[.*\]\((.*)\)/g, (_, m1) => {
        const yxna_link = path.join(path.dirname(yxna_bnll), m1)
        if (!fs.existsSync(yxna_link)) {
            console.error(`link yxna ac zznq: ${yxna_link}, zf aqfc zjzj ${yxna_bnll}`)
        }
    })
})
console.log('Done.')
