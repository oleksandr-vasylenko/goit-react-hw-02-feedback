import PropTypes from 'prop-types';
import { Buttons, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(feedback => {
        return (
          <li key={feedback}>
            <Buttons onClick={() => onLeaveFeedback(feedback)}>
              {feedback}
            </Buttons>
          </li>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
