import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div class="statistics">
      <StatisticLine text="good" count={good} />
      <StatisticLine text="neutral" count={neutral} />
      <StatisticLine text="bad" count={bad} />
      <StatisticLine text="all" count={good + neutral + bad} />
      <StatisticLine
        text="average"
        count={(good - bad) / (good + neutral + bad)}
      />
      <StatisticLine
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

const Button = ({text, incrementFeedbackCount, feedbackType, feedbackFunction}) => {
  return (
    <button onClick={incrementFeedbackCount(feedbackType, feedbackFunction)} >
      {text}
    </button>
  )
}

const StatisticLine = ({text, count}) => {
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
          <Button
            text="good"
            incrementFeedbackCount={incrementFeedbackCount}
            feedbackType={good}
            feedbackFunction={setGood}
          />
          <Button
            text="neutral"
            incrementFeedbackCount={incrementFeedbackCount}
            feedbackType={neutral}
            feedbackFunction={setNeutral}
          />
          <Button
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