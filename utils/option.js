module.exports.options = {
    format: "A4",
    orientation: "portrait",
    border: "10px",
    header: {
        height: "45px",
        contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    },
    footer: {
        height: "20px",
        contents: {
            // first: 'Cover page',
            // 2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #09c;">{{page}}</span>/<span style="color: #09c;">{{pages}}</span>', // fallback value
            // last: 'Last Page'
        }
    }
};