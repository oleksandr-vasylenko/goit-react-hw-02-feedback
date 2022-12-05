import PropTypes from 'prop-types';
import { SectionItem, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionItem>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionItem>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
