import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <section>
        <h1>Please Leave Feedback</h1>

        <div>
          <ul>
            <FeedbackOptions />
          </ul>
        </div>

        <div>
          <h2>Statistics</h2>
          <Statistics />
        </div>
      </section>
    );
  }

  // countTotalFeedback();

  // countPositiveFeedbackPercentage();
}
