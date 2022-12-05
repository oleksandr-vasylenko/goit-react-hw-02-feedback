import PropTypes from 'prop-types';
import { Button, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(feedback => {
        return (
          <li key={feedback}>
            <Button onClick={() => onLeaveFeedback(feedback)}>
              {feedback}
            </Button>
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
