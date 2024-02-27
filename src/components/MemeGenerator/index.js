import {Component} from 'react'
import {
  MemeGeneratorContainer,
  MemeHeading,
  MemeImage,
  InputContainer,
  LabelElement,
  InputElement,
  FontSelectElement,
  MemeText,
  GenerateButton,
  FormConTainer,
  MemeAndFormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topText: '',
    bottomText: '',
    fontActiveInputId: fontSizesOptionsList[0].optionId,
    submittedData: null,
  }

  onHandleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageInput, topText, bottomText, fontActiveInputId} = this.state
    if (imageInput === '' || topText === '' || bottomText === '') {
      return
    }
    this.setState({
      submittedData: {
        imageInput,
        topText,
        bottomText,
        fontActiveInputId,
      },
    })
  }

  renderMeme = () => {
    const {submittedData} = this.state
    return (
      submittedData && (
        <MemeImage
          imageUrl={submittedData.imageInput}
          font={submittedData.fontActiveInputId}
          data-testid="meme"
        >
          <MemeText>{submittedData.topText}</MemeText>
          <MemeText>{submittedData.bottomText}</MemeText>
        </MemeImage>
      )
    )
  }

  renderInputEle = (label, stateName, placeholder, inputValue) => (
    <InputContainer>
      <LabelElement htmlFor={label}>{label}</LabelElement>
      <InputElement
        id={label}
        type="text"
        name={stateName}
        placeholder={placeholder}
        value={inputValue}
        onChange={this.onHandleChange}
      />
    </InputContainer>
  )

  renderFormContainer = () => {
    const {imageInput, topText, bottomText, fontActiveInputId} = this.state
    return (
      <FormConTainer onSubmit={this.onSubmitForm}>
        {this.renderInputEle(
          'Image URL',
          'imageInput',
          'Enter the image URL',
          imageInput,
          this.onChangeImageInput,
        )}
        {this.renderInputEle(
          'Top Text',
          'topText',
          'Enter the Top Text',
          topText,
          this.onChangeTopTextInput,
        )}
        {this.renderInputEle(
          'Bottom Text',
          'bottomText',
          'Enter the Bottom Text',
          bottomText,
          this.onChangeBottomText,
        )}
        <InputContainer>
          <LabelElement htmlFor="font">Font Size</LabelElement>
          <FontSelectElement
            id="font"
            name="fontActiveInputId"
            value={fontActiveInputId}
            onChange={this.onHandleChange}
          >
            {fontSizesOptionsList.map(eachFont => (
              <option key={eachFont.optionId} value={eachFont.optionId}>
                {eachFont.displayText}
              </option>
            ))}
          </FontSelectElement>
        </InputContainer>
        <GenerateButton type="submit">Generate</GenerateButton>
      </FormConTainer>
    )
  }

  render() {
    const {imageInput, topText, bottomText, fontActiveInputId, submittedData} =
      this.state
    return (
      <MemeGeneratorContainer>
        <MemeHeading>Meme Generator</MemeHeading>
        <MemeAndFormContainer>
          {this.renderFormContainer()}
          {this.renderMeme()}
        </MemeAndFormContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
