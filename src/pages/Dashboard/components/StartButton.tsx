import React, { FC } from 'react'
import styled from 'styled-components'
import play from '@assets/images/play_button.svg'
import { Typography, withTheme } from '@material-ui/core'

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const StartButton: FC<{handleClick: () => void}> = ({ handleClick }): JSX.Element => {
  return (
    <StartButtonWrapper>
      <StartButtonContent onClick={handleClick}>
        <StartButtonBackground />
        <StartButtonText variant='h4'>
          Start
        </StartButtonText>
      </StartButtonContent>
    </StartButtonWrapper>
  )
}

export default StartButton

export const StartButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  height: 25rem;
`

export const StartButtonContent = styled.button`
  background: transparent;
  box-shadow: none;
  border: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16rem;
  height: 16rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  svg {
    transition: all 0.3s ease-in-out;
  }
  
  &:hover {
    transform: scale(1.1);
    
    svg {
      transform: rotate(20deg);
    }
  }
  
  &:focus {
    transform: scale(1) !important;
  }
`

const StartButtonBackground = styled(play)`
  position: absolute;
  width: 16rem;
  height: 16rem;
`

const StartButtonText = withTheme(
  styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.main};
    font-weight: bold !important;
    line-height: 1 !important;
    transform: translateY(4px) !important;
  `
)
