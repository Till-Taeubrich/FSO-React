import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div class="statistics">
      <FeedbackCounter text="good" count={good} />
      <FeedbackCounter text="neutral" count={neutral} />
      <FeedbackCounter text="bad" count={bad} />
      <FeedbackCounter text="all" count={good + neutral + bad} />
      <FeedbackCounter
        text="average"
        count={(good - bad) / (good + neutral + bad)}
      />
      <FeedbackCounter
        text="positive"
        count={(good / (good + neutral + bad)) * 100 + '%'}
      />
    </div>
  );
};

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
    <div className="feedback-section">
      <div class="feedback-selection">
        <Header text="give feedback" />
        <div class="feedback-buttons">
          <FeedbackButton
            text="good"
            incrementFeedbackCount={incrementFeedbackCount}
            feedbackType={good}
            feedbackFunction={setGood}
          />
          <FeedbackButton
            text="neutral"
            incrementFeedbackCount={incrementFeedbackCount}
            feedbackType={neutral}
            feedbackFunction={setNeutral}
          />
          <FeedbackButton
            text="bad"
            incrementFeedbackCount={incrementFeedbackCount}
            feedbackType={bad}
            feedbackFunction={setBad}
          />
        </div>
        <div class="feedback-display">
          <Header text="statistics" />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </div>
    </div>
  );
}

export default App