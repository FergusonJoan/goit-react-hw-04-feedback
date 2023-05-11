import { useState } from 'react';
import './index.js';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Section, Statistics, Notification } from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const grade = {
    good,
    neutral,
    bad,
  };

  const onLeaveFeedback = grade => {
    switch (grade) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const totalFeedback = countTotalFeedback();
  const options = Object.keys(grade);
  const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
