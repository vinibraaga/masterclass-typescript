interface IMailTo {
    name: String;
    email: String;
}

interface IMailMessage {
    subject: String;
    body: String;
    attachment?: String[];
}

class EmailService {
    sendMail(to: IMailTo, message: IMailMessage) {
        console.log(`Email enviado para ${to.name}: ${message.subject}` )
    }
}

export default EmailService;