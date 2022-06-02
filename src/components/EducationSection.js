import React, { useState } from 'react'
import EducationItem from './EducationItem'
import uniqid from 'uniqid'
import { Button } from './Styles/Button.style'
import { SectionTitle } from './Styles/SectionTitle.style'
import styled from 'styled-components'

export default function EducationSection (props) {
  const [itemsArray, setItemsArray] = useState([])

  const handleAddEducation = () => {
    setItemsArray((prevState) => [
      ...prevState,
      {
        id: uniqid(),
        schoolName: '',
        degree: '',
        firstDayDegree: '',
        lastDayDegree: ''
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

  const educationItems = itemsArray.map((item) => (
    <EducationItem
      key={item.id}
      id={item.id}
      schoolName={item.schoolName}
      degree={item.degree}
      firstDayDegree={item.firstDayDegree}
      lastDayDegree={item.lastDayDegree}
      isSubmitted={props.isSubmitted}
      onInputChange={handleInputChange}
      onDeleteItem={handleDeleteEducation}
    />
  ))

  if (!props.isSubmitted) {
    return (
      <section>
        <SectionTitle>Education</SectionTitle>
        {educationItems}
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
        <SectionTitle>Education</SectionTitle>
        {educationItems}
      </section>
    )
  }
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`
