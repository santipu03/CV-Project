import React, { useState } from 'react'
import { Form } from './Styles/Form.style'
import { Input, Textarea } from './Styles/Input.style'
import styled from 'styled-components'

export default function GeneralSection (props) {
  const [generalData, setGeneralData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    description: ''
  })

  const handleChangeInput = (e) => {
    setGeneralData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  if (!props.isSubmitted) {
    return (
      <section>
        <FirstSectionTitle>General Information</FirstSectionTitle>
        <Form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Input
              type="text"
              placeholder="Adam"
              id="firstName"
              value={generalData.firstName}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Input
              type={'text'}
              placeholder="Smith"
              id="lastName"
              value={generalData.lastName}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              type={'email'}
              placeholder="adamsmith@gmail.com"
              id="email"
              value={generalData.email}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <Input
              type={'number'}
              placeholder="686354264"
              id="phoneNumber"
              value={generalData.phoneNumber}
              onChange={handleChangeInput}
            ></Input>
          </div>
          <TextAreaWrapper>
            <label htmlFor="description">Brief Description</label>
            <Textarea
              placeholder="I am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing."
              id="description"
              value={generalData.description}
              onChange={handleChangeInput}
            ></Textarea>
          </TextAreaWrapper>
        </Form>
      </section>
    )
  } else {
    return (
      <section>
        <FirstSectionTitle>
          {generalData.firstName} {generalData.lastName}
        </FirstSectionTitle>
        <article>
          <DescriptionWrapper>
            &quot;{generalData.description}&quot;
          </DescriptionWrapper>
          <EmailPhoneWrapper>
            <div>
              <div className="email">Email</div>
              <div>{generalData.email}</div>
            </div>
            <div>
              <div className="phoneNumber">Phone Number</div>
              <div>{generalData.phoneNumber}</div>
            </div>
          </EmailPhoneWrapper>
        </article>
      </section>
    )
  }
}

const FirstSectionTitle = styled.div`
  border: none;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
  padding: 20px 0;
`

const TextAreaWrapper = styled.div`
  grid-column: 1/3;
  grid-row: 3/5;

  @media (max-width: 600px) {
    grid-column: 1/2;
    grid-row: 5/7;
  }
`

const DescriptionWrapper = styled.div`
  font-style: italic;
  text-align: center;
`

const EmailPhoneWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 30px;

  @media (max-width: 800px) {
    gap: 50px;
  }
  @media (max-width: 500px) {
    gap: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  & .email,
  & .phoneNumber {
    padding-bottom: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    font-size: 0.8rem;
  }
`
