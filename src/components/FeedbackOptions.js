export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(feedback => {
        return (
          <li key={feedback}>
            <button onClick={() => onLeaveFeedback(feedback)}>
              {feedback}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
