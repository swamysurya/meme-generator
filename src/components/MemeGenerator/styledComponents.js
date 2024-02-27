import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
    display:flex;
    flex-direction:column;
    font-family:"Open Sans"
    justify-content:flex-start;
    align-items:center;
<<<<<<< HEAD
    border-style:solid;
    padding:5rem;

    @media screen and (min-width:768px){
        flex-direction:row;
        gap:3rem;
    }
    
=======
    
    padding:4rem;
>>>>>>> main
`
export const MemeHeading = styled.h1`
    color:#35469c;
    font-size:26px;
    text-align:center;
<<<<<<< HEAD
=======
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

>>>>>>> main
`
export const MemeImage = styled.div`
    background-image:url(${props => props.imageUrl});
    height:300px;
<<<<<<< HEAD
    background-size:cover;
    display:${props => (props.smallscreenimage ? 'flex' : 'none')};
=======
    font-size:${props => props.font + 'px'};
    background-size:cover;
    display:flex;
>>>>>>> main
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    color:#ffffff;
<<<<<<< HEAD

    @media screen and (min-width:768px){
        display:${props => (props.largescreenimage ? 'flex' : 'none')};
        width:400px;
=======
    margin:1rem 0rem;
    order:-1;

    @media screen and (min-width:768px){
        width:400px;
        margin:2rem;
        order:2;
>>>>>>> main
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
<<<<<<< HEAD
    font-size:${props => props.font + 'px'};
    font-weight:600;
    width:90%;
    border-style:solid;
=======
    font-weight:600;
    width:90%;
>>>>>>> main
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
