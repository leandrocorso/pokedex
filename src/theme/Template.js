import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Header } from 'components';

const StyledTemplate = styled.div`${({ theme: { colors } }) => `
`}`;

const Template = ({ children }) => (
  <StyledTemplate>
    <Header />
    {children}
  </StyledTemplate>
);

// Prop types

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
