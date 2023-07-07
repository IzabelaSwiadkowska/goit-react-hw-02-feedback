import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOpions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countPositiveFeedbacksPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedbacks()) * 100);
  };
  countTotalFeedbacks = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  handleLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedbacks();
    const positiveFeedbacks = this.countPositiveFeedbacksPercentage();

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleLeaveFeedback}
        />
        <Section title="Statistics" />
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedbacks}
          />
        )}
      </div>
    );
  }
}
