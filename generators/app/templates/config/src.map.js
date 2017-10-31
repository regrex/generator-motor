module.exports = {
    directories: {
        scripts: "src",
        pages: "src/templates"
    },
    scripts: {
        vendors: [
            "react",
            "react-dom"
        ],
        demo: "src/containers/demo.jsx"
    },
    pages: {
        "demo.html": {
            scripts: {
                body: [ "vendors", "demo" ]
            }
        }
    }
}