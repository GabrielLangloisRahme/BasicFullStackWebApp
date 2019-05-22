const sendgrid=require('sendgrid');

const helper=sendgrid.mail; // const {helper} from sendgrid would be es6 version of this

const keys=require('../config/keys');

class Mailer extends helper.Mail {

    constructor({subject,recipients},content) {

        super();

        // this is mailer specific type of code now, the stuff they want

        this.sgApi=sendgrid(keys.sendGridKey);

        // this is the email the email is sent by
        this.from_email = new helper.Email('no-reply@emaily.com');
        this.subject=subject;
        this.body = new helper.Content('text/html', content);
        this.recipients=this.formatAddresses(recipients);

        // addContent is a property of help.Mail
        this.addContent(this.body);

        // this enables click tracking for each individual email

        this.addClickTracking();

        this.addRecipients();
    }

    formatAddresses(recipients) {

        return recipients.map(({email}) => {
            return new helper.Email(email);
        });
    }

    addClickTracking(){
        const trackingSettings=new helper.TrackingSettings();
        const clickTracking=new helper.ClickTracking(true,true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient=>{
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send () {
        const request=this.sgApi.emptyRequest({
            method:"POST",
            path:'/v3/mail/send',
            body:this.toJSON()
        });

        // this sends the request back to mail provider sengrid

        const response = await this.sgApi.API(request);

        return response;

    }

}

module.exports=Mailer;