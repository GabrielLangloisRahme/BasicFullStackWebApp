
// In email need to use absolute domain and not relative links (the end parts, like in other links)

const keys=require('../../config/keys')

module.exports=(survey)=> {
    return `
    <html>
      <body>       
    <h3> I'd like your input!</h3>
    <p>Please answer the following question:</p>
    <p>${survey.body}</p>
    <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
    </div>
    <div>
        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
    </div>
    
    </div>
    </body>
    </html>

    `
};