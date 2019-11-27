import React from 'react';
import { Form, FormGroup, Label, Input, Button, Collapse, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faCheckCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            subject: "",
            message: "",
            formIsOpen: false,
            alert: false,
            icon: faPaperPlane
        };
    };

    handleChange(param, event) {
        this.setState({
            [param]: event.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(state => {
            return {
                icon: faSpinner
            }
        })
        const { name, email, subject, message } = this.state;
        let templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        const that = this;
        emailjs.send("default_service", "contact_form", templateParams, "user_vvVMAM3dPTISfiJe1ihMJ")
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                that.success();
            }, function(error) {
                console.log('FAILED...', error);
                that.failAlert()
            });
        this.resetForm();
    };
    resetForm = () => {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };
    toggleForm = () => {
        this.setState({
            formIsOpen: !this.state.formIsOpen
        })
    };
    success = () => {
        this.setState(state => {
            return {
                icon: faCheckCircle
            }
        })
        setTimeout( this.normalize, 1000)
    };
    normalize = () => {
        this.setState(state => {
            return {
                icon: faPaperPlane
            }
        })
    }
    failAlert = () => {
        this.setState({
            alert: !this.state.alert
        })
    };
    render() {
        return ( 
            <div className = "contact connect" >
            <h3 className = "connectHeader" > Contact Me </h3>    
            <Alert color = "danger"
            isOpen = { this.state.alert }
            toggle = { this.failAlert } >
            Uh Oh!!!Something went wrong and the email was not sent.Please
            try again. 
            </Alert>    
            <div id = "head" >
            <h6 id = "emailInfo" > Click to send me an email </h6>  
            <Button outline color = 'info'
            size = 'small'
            onClick = { this.toggleForm } >
            <FontAwesomeIcon icon = { faEnvelope }
            size = '1x'
            />
            </Button>{' '}  
            </div>    
            <Collapse isOpen = { this.state.formIsOpen } >
            <Form id = "contactForm"
            onSubmit = { this.handleSubmit.bind(this) } >
            <FormGroup controlid = 'formBasicName' >
            <Label> Name </Label>   
            <Input type = 'text'
            name = 'name'
            value = { this.state.name }
            onChange = { this.handleChange.bind(this, 'name') }
            className = 'text-primary'
            placeholder = 'Jon Doe'
            required 
            />
            </FormGroup>    
            <FormGroup controlid = "formBasicEMail" >
            <Label> Email </Label>   
            <Input type = 'email'
            name = 'email'
            value = { this.state.email }
            onChange = { this.handleChange.bind(this, 'email') }
            className = 'text-primary'
            placeholder = "jondoe@somemail.com"
            required 
            />
            </FormGroup>    
            <FormGroup controlid = 'formBasicSubject' >
            <Label > Subject </Label>    
            <Input type = 'text'
            name = 'subject'
            value = { this.state.subject }
            onChange = { this.handleChange.bind(this, 'subject') }
            className = 'text-primary'
            placeholder = 'I have an idea for a project'
            required 
            />
            </FormGroup>    
            <FormGroup controlid = 'formBasicMessage' >
            <Label className = '' > Message </Label>    
            <Input type = 'textarea'
            name = 'messaget'
            value = { this.state.message }
            onChange = { this.handleChange.bind(this, 'message') }
            className = 'text-primary'
            placeholder = 'And it goes something like this ...'
            required 
            />
            </FormGroup>    
            <Button outline color = 'info'
            block type = 'submit'
            className = 'primary'
            value = 'Send' >
            Send 
            <FontAwesomeIcon icon = { this.state.icon }
            />    
            </Button> {' '}  
            </Form>     
            </Collapse>    
            </div>
        )
    }
};

export default ContactForm;