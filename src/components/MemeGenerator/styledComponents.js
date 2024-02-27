import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-family:"Open Sans"
    justify-content:flex-start;
    align-items:center;
    
    padding:4rem;
`
export const MemeHeading = styled.h1`
    color:#35469c;
    font-size:26px;
    text-align:center;
    @media screen and (min-width:768px){
        margin-right:auto;
    }
`

export const MemeAndFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    
    width:100%;
    @media screen and (min-width:768px){
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
    }

`
export const MemeImage = styled.div`
    background-image:url(${props => props.imageUrl});
    height:300px;
    font-size:${props => props.font + 'px'};
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    color:#ffffff;
    margin:1rem 0rem;
    order:-1;

    @media screen and (min-width:768px){
        width:400px;
        margin:2rem;
        order:2;
    }    
`
export const InputContainer = styled.div`
    padding:10px 0px;
    display:flex;
    flex-direction:column;
    gap:5px;
    width:100%
`
export const LabelElement = styled.label`
    color:#7e858e;
`
export const InputElement = styled.input`
    height:30px;
    border-width:1px;
    outline:none;
    border-color:#d7dfe9;
`
export const FontSelectElement = styled.select`
    height:30px;
    border-width:1px;
    outline:none;
    border-color:#d7dfe9;
`
export const MemeText = styled.p`
    font-weight:600;
    width:90%;
    text-align:center
`
export const GenerateButton = styled.button`
    outline:none;
    border:none;
    background-color:#0b69ff;
    color:#ffffff;
    padding:10px 20px;
    border-radius:5px;
`
export const FormConTainer = styled.form`
    width:90%;
    @media screen and (min-width:768px){
        width:45%
    }

`
