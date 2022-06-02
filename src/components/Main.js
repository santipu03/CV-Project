import React, { useState } from 'react'
import GeneralSection from './GeneralSection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import CardFooter from './CardFooter'
import { Card } from './Styles/Card.style'
import { MainContainer } from './Styles/MainContainer.style'

export default function Main (props) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setIsSubmitted(!isSubmitted)
  }

  return (
    <MainContainer>
      <Card>
        <GeneralSection isSubmitted={isSubmitted} />
        <ExperienceSection isSubmitted={isSubmitted} />
        <EducationSection isSubmitted={isSubmitted} />
        <CardFooter onSubmitBtn={handleSubmit} isSubmitted={isSubmitted} />
      </Card>
    </MainContainer>
  )
}
