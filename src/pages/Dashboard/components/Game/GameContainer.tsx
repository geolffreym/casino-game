import React, { FC } from 'react'
import { connect, RootStateOrAny } from 'react-redux'
import { getRandomNumberBetween, getUniqueID } from '@src/utils'
import { setBalance } from '@state/actions/balanceActions'
import { setActivity } from '@state/actions/activityActions'
import { Activity, ActivityState } from '@state/reducers/activityReducers'
import GameView from '@pages/Dashboard/components/Game/GameView'

interface GameProps {
  balance: number
  setBalance: (balance: any) => {}
  setActivity: (activity: Activity[]) => {}
}

/* eslint-disable  @typescript-eslint/explicit-function-return-type */
const GameContainer: FC<GameProps & ActivityState> = ({ setBalance, balance, activity, setActivity }): JSX.Element => {
  const [open, setOpen] = React.useState(false)
  const [slots, setSlots] = React.useState([0, 0, 0])

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const groupReward = (random: number[]) => {
    return random.reduce((old: any, x: number) => {
      old[x] = (old[x] || 0) + 1
      return old
    }, {})
  }

  const calcReward = (rewards: any) => {
    let score = 0
    Object.keys(rewards).forEach((n: any) => {
      if (rewards[n] === 2) {
        score += 0.5
      } else if (rewards[n] === 3) {
        score += (parseInt(n) === 1 ? 5 : 2)
      }
    })

    return score
  }

  const handleSpin = () => {
    const first = getRandomNumberBetween(1, 4)
    const second = getRandomNumberBetween(1, 4)
    const third = getRandomNumberBetween(1, 4)
    const newSlots = [first, second, third]
    const rewards = groupReward(newSlots)
    const score = calcReward(rewards)
    const id = getUniqueID()
    const time = new Date().toLocaleString()
    const newActivity = { id, result: newSlots, time }

    if (!(balance > 2)) return setSlots([0, 0, 0])

    setActivity([newActivity, ...activity])
    setBalance((balance + score) - 2)
    setSlots(newSlots)
  }

  const handleWin = () => {
    const id = getUniqueID()
    const time = new Date().toLocaleString()
    const newActivity = { id, result: [1, 1, 1], time }
    setActivity([newActivity, ...activity])
    setSlots([1, 1, 1])
    setBalance(balance + 3)
  }

  return (
    <GameView {...{ open, slots, handleOpen, handleClose, handleSpin, handleWin }} />
  )
}

const mapStateToProps = (state: RootStateOrAny): { balance: number } & ActivityState => {
  return {
    balance: state.balance.balance,
    activity: state.activity.activity
  }
}

export const Game = connect(
  mapStateToProps,
  { setBalance, setActivity }
)(GameContainer)
