import React, { FC } from 'react'
import styled from 'styled-components'
import { Typography, withTheme } from '@material-ui/core'
import Diamond from '@assets/images/diamond.svg'
import Heart from '@assets/images/heart.svg'
import Spades from '@assets/images/spades.svg'
import Clover from '@assets/images/clover.svg'

const GameSlot: FC<{ result: number }> = ({ result }): JSX.Element => {
  const getSlot = () => {
    switch (result) {
      case 1: return <GameSlotSpades />
      case 2: return <GameSlotClover />
      case 3: return <GameSlotDiamond />
      case 4: return <GameSlotHeart />
      default: return <GameSlotText variant='h3'>?</GameSlotText>
    }
  }

  return (
    <GameSlotWrapper>
      <GameSlotItem>
        {getSlot()}
      </GameSlotItem>
    </GameSlotWrapper>
  )
}

const GameSlotWrapper = withTheme(
  styled.div`
      width: 8rem;
      height: 14rem;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      border: 2px solid ${({ theme }) => theme.palette.primary.main}
    `
)

const GameSlotItem = styled.div`
  width: 3rem;
  height: 3rem;
  
  svg {
    width: 100%;
    height: 100%;
  }
`

const GameSlotText = withTheme(
  styled(Typography)`
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    user-select: none;
  `
)

const GameSlotHeart = withTheme(
  styled(Heart)`
      fill: ${({ theme }) => theme.palette.primary.main}
    `
)

const GameSlotDiamond = withTheme(
  styled(Diamond)`
      fill: ${({ theme }) => theme.palette.primary.main}
    `
)

const GameSlotClover = styled(Clover)`
  color: #333;
`

const GameSlotSpades = styled(Spades)`
  color: #333;
`

export default GameSlot
