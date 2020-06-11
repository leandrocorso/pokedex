import styled from 'styled-components';

export default styled.div`${({ theme: { spacing } }) => `
    padding: ${spacing['$container-padding']}
`}`;
