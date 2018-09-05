import styled from 'styled-components'

const StyledInput = styled.input`
background: ${props => props.theme.lightColor};
border: 1px solid ${props => props.theme.borderColor};
border-radius: 2px;
font-size: 16px;
display: block;
height: 30px;
padding-left: 2px;
max-width: 200px;
`

export default StyledInput