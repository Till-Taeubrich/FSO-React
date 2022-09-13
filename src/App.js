import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>
      {text}
    </h2>
  )
}

const FeedbackButton = ({text, incrementFeedbackCount, feedbackType, feedbackFunction}) => {
  return (
    <button onClick={incrementFeedbackCount(feedbackType, feedbackFunction)} >
      {text}
    </button>
  )
}

const FeedbackCounter = ({text, count}) => {
  return (
    <div>
      {text} {count}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementFeedbackCount = (feedbackType, feedbackFunction) => () => {
    feedbackFunction(feedbackType + 1);
  }

  return (
    <div className='feedback-section'>
      <div class="feedback-selection">
        <Header text='give feedback' />
        <div class="feedback-buttons">
          <FeedbackButton text='good' incrementFeedbackCount={incrementFeedbackCount} feedbackType={good} feedbackFunction={setGood}/>
          <FeedbackButton text='neutral' incrementFeedbackCount={incrementFeedbackCount} feedbackType={neutral} feedbackFunction={setNeutral}/>
          <FeedbackButton text='bad' incrementFeedbackCount={incrementFeedbackCount} feedbackType={bad} feedbackFunction={setBad}/>
        </div>
      </div>
      <div class="feedback-display">
        <Header text='statistics' />
        <FeedbackCounter text='good' count={good}  />
        <FeedbackCounter text='neutral' count={neutral} />
        <FeedbackCounter text='bad' count={bad} />
      </div>
    </div>
  )
}

export default App