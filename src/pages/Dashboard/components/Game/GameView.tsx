import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Slide from '@material-ui/core/Slide'
import { Transitions } from '@material-ui/core'
import StartButton from '@pages/Dashboard/components/StartButton'
import GameSlot from '@pages/Dashboard/components/Game/GameSlot'
import styled from 'styled-components'

const Transition = React.forwardRef(function Transition (
  props: Transitions & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

interface GameProps {
  open: boolean
  slots: number[]
  handleOpen: () => void
  handleClose: () => void
  handleSpin: () => void
  handleWin: () => void
}

const GameView: FC<GameProps> = ({
  open, slots, handleOpen,
  handleClose, handleSpin, handleWin
}): JSX.Element => {
  return (
    <>
      <StartButton handleClick={handleOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth='lg'
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <GameContent>
          <GameSlot result={slots[0]} />
          <GameSlot result={slots[1]} />
          <GameSlot result={slots[2]} />
        </GameContent>
        <DialogActions>
          <Button onClick={handleSpin} color='primary'>
            Spin
          </Button>
          <Button onClick={handleWin} color='primary'>
            Fake win!
          </Button>
          <Button onClick={handleClose} variant='contained' color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default GameView

const GameContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 2rem;
`
