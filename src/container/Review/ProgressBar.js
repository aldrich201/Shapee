import React from 'react';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

class StepProgressBar extends React.Component {

    render() {
      return (
          <div className="progress-bar">
                <ProgressBar
                    percent={
                        window.location.pathname === "/checkout" ? 0 : 
                        window.location.pathname === "/payment" ? 50 :
                        window.location.pathname === "/finish" ? 100 :
                        null
                    }
                    filledBackground="linear-gradient(to right, #FCFFFC, #D3AEA6)"
                    >
                <Step transition="scale">
                    {({ accomplished}) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <div className="index-title">
                                Review
                            </div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                {({ accomplished}) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <div className="index-title">
                                Payment
                            </div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                {({ accomplished}) => (
                        <div
                            className={`indexedStep ${accomplished ? "accomplished" : null}`}
                        >
                            <div className="index-title">
                                Finish
                            </div>
                        </div>
                    )}
                </Step>
                </ProgressBar>
          </div>
      );
    }
  }

export default StepProgressBar;
