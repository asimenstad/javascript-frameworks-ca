import React, { useState } from "react";
import * as S from "./ContactPage.styles";

function ContactPage() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  function onInputChange(e) {
    const inputValue = e.target.value;
    if (e.target.name === "name") {
      setName(inputValue);
    }
    if (e.target.name === "subject") {
      setSubject(inputValue);
    }
    if (e.target.name === "email") {
      setEmail(inputValue);
    }
    if (e.target.name === "body") {
      setBody(inputValue);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      name,
      subject,
      email,
      body,
    };
    console.log(data);
    e.target.reset();
  }

  return (
    <S.Main>
      <h1>Contact us</h1>
      <S.Form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Full name*</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            minLength={3}
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="subject">Subject*</label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            minLength={3}
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body*</label>
          <textarea
            name="body"
            id="body"
            cols="30"
            rows="10"
            minLength={3}
            required
            onChange={onInputChange}></textarea>
        </div>
        <button>Submit</button>
      </S.Form>
    </S.Main>
  );
}

export default ContactPage;
