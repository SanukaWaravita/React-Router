import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder='Name'></input>
                <br/>
                <input type="email" placeholder='Email'/>
                <br/>
                <textarea plcaeholder="message"></textarea>
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm