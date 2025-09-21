import React from 'react'
import { ButtonStyled, ContainerStyled, TextStyled } from './Header.styled'

const Header = () => {
  return (
    <div> 
      <ContainerStyled>
        <TextStyled>
            Elevate your ride
        </TextStyled>
        <ButtonStyled>
            Shop now
        </ButtonStyled>
      </ContainerStyled>
    </div>
  )
}

export default Header