const fs = require('fs')
module.exports = (options = {}) => {
    const { packagePath, outParams } = options
    return {
        transformIndexHtml (html) {
            let injectHtml = '\n<script>\n'
            injectHtml += `console.log('Packaging time: ${new Date().toLocaleString()}');\n`
            if (packagePath) {
                let packageJson = null
                let outParamsVal = []
                try {
                    packageJson = JSON.parse(fs.readFileSync(packagePath).toString())
                } catch (error) {
                    console.log('Sorry！package.json path error, plase use path.resolve.');
                }
                if (Array.isArray(outParams)) {
                    outParamsVal = outParams.map(key => packageJson[key])
                }
                outParamsVal.forEach((val, index) => {
                    if (val) {
                        injectHtml += `console.log('${outParams[index]}: ${val}');\n`
                    }
                })
            }
            injectHtml += '</script>\n'
            return `${html.slice(0, html.indexOf('</body>'))} ${injectHtml} ${html.slice(html.indexOf('</body>'), html.length)}`
        }
    }
}