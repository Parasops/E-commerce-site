import React from 'react'
const Contact = () => {
  return (
    <div className="Contact">
      <main>
          <h1>Contact Us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type = "text" required placeholder='ABC'></input>
            </div>

            <div>
              <label>Email</label>
              <input type = "Email" required placeholder='ABC@xyz.com'></input>
            </div>

            <div>
              <label>Message</label>
              <input type = "Message" required placeholder='Query...'></input>
            </div>

            <button type = "submit">Send</button>
          </form>
      </main>
    </div>
      
  )
}

export default Contact;