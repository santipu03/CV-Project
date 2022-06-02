import React, { useState } from 'react'
import ExperienceItem from './ExperienceItem'
import uniqid from 'uniqid'
import { Button } from './Styles/Button.style'
import { SectionTitle } from './Styles/SectionTitle.style'
import styled from 'styled-components'

export default function ExperienceSection (props) {
  const [itemsArray, setItemsArray] = useState([])

  const handleAddEducation = () => {
    setItemsArray((prevState) => [
      ...prevState,
      {
        id: uniqid(),
        companyName: '',
        companyPosition: '',
        firstDayJob: '',
        lastDayJob: ''
      }
    ])
  }

  const handleDeleteEducation = (id) => {
    setItemsArray((prevState) => [
      ...prevState.filter((item) => item.id !== id)
    ])
  }

  const handleInputChange = (e, id) => {
    setItemsArray((prevState) => {
      const newArray = prevState.map((item) => {
        if (item.id === id) {
          return { ...item, [e.target.id]: e.target.value }
        }
        return item
      })
      return newArray
    })
  }

  const experienceItems = itemsArray.map((item) => (
    <ExperienceItem
      key={item.id}
      id={item.id}
      companyName={item.companyName}
      companyPosition={item.companyPosition}
      firstDayJob={item.firstDayJob}
      lastDayJob={item.lastDayJob}
      isSubmitted={props.isSubmitted}
      onInputChange={handleInputChange}
      onDeleteItem={handleDeleteEducation}
    />
  ))

  if (!props.isSubmitted) {
    return (
      <section>
        <SectionTitle>Experience</SectionTitle>
        {experienceItems}
        <ButtonWrapper>
          <Button type="button" onClick={handleAddEducation} bgColor="add">
            Add
          </Button>
        </ButtonWrapper>
      </section>
    )
  } else {
    return (
      <section>
        <SectionTitle>Experience</SectionTitle>
        {experienceItems}
      </section>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`
