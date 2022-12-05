import PropTypes from 'prop-types';
import { SectionItem } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionItem>
      <h1>{title}</h1>
      {children}
    </SectionItem>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
