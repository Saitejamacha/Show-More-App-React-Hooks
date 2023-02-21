import {useState} from 'react'

import {
  AppContainer,
  TextCon,
  Heading,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isBtnClicked, btnStatus] = useState(true)

  const onClickBtnStatus = () => {
    btnStatus(prevState => !prevState)
  }

  const btnText = isBtnClicked ? 'Read More' : 'Read Less'

  const shortText = reactHooksDescription.slice(0, 170)

  const displayText = isBtnClicked ? shortText : reactHooksDescription

  return (
    <AppContainer>
      <Heading>React Hooks</Heading>
      <Description>React hooks are a new addition to react</Description>
      <TextCon>
        <Image
          alt="react hooks"
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        />
        <Description>{displayText}</Description>
        <Button onClick={onClickBtnStatus}>{btnText}</Button>
      </TextCon>
    </AppContainer>
  )
}

export default ReadMore
