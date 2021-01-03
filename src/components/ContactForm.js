import React from "react";
import styled from "styled-components";

const ContactForm = () => {
    return (
        <Form id="contact-form"  method="POST">
            <Input>
                <label htmlFor="name">Name</label>
                <input type="text" />
            </Input>
            <Input>
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" aria-describedby="emailHelp" />
            </Input>
            <Input>
                <label htmlFor="message">Message</label>
                <textarea rows="5"></textarea>
            </Input>
            <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
    )
}

const Input = styled.div`
    display: flex;
    flex-direction: column;
    width:600px;
    label {
        color: white;
        padding-top: 1rem;
    }
    input[type=text] {
        border: 2px 0 solid yellow;
        padding: 12px 20px;
        border-radius: 10%;
        width: 100%;
        height: 30px;
    }
    input:focus {
        background-color: #416CD5;
        color: yellow;
    }
    input[type=email] {
        border: 2px 0 solid yellow;
        padding: 12px 20px;
        border-radius: 10%;
        width: 100%;
        height: 30px;
    }
    textarea {
        width: 100%;
        height: 150px;
        padding: 12px 20px;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        background-color: #f8f8f8;
        resize: none;
    }
    textarea:focus {
        background-color: #416CD5;
        color: yellow;
    }
`;

const Form = styled.form`
    button{
        margin-top: 1rem;
    }
`;

export default ContactForm

