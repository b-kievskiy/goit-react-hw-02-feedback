import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = e => {
    let key = e.target.name;
    this.setState(prev => ({ [key]: prev[key] + 1 }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, item) => acc + item, 0);

  // countTotalFeedback() {
  //   const sum = Object.values( this.state).reduce((acc, item) => acc + item, 0);
  //   return sum;
  // };
  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    // const x = this.countPositiveFeedbackPercentage();
    // console.log(typeof x);
    const isFeedBack = Boolean(this.countTotalFeedback());
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions clickHandler={this.clickHandler} />
        </Section>
        <Section title={isFeedBack ? 'Statistic' : ''}>
          {isFeedBack && (
            <Statistics
              {...this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          )}
          {!isFeedBack && <Notification message="No feedback given" />}
        </Section>
      </>
    );
  }
}

export default App;
