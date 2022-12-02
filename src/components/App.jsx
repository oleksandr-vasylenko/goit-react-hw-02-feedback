import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
// import { Statistics } from './Statistics';

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
          <ul options={Object.keys(this.state)}>
            <FeedbackOptions
              options={this.state}
              // onLeaveFeedback={}
            />
          </ul>
        </div>

        {/* <div>
          <h2>Statistics</h2>
          <Statistics good={this.good} neutral={this.neutral} bad={this.bad} />
        </div> */}
      </section>
    );
  }

  // countTotalFeedback();

  // countPositiveFeedbackPercentage();
}

console.log('hello');
