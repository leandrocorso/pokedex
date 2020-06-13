import styled from 'styled-components';
import { FilterTitle } from 'components';

const DataGrid = styled.div``;

const List = styled.div``;

const Key = styled.strong`${({ theme: { colors } }) => `
  color: ${colors['$text-black']};
  font-size: 0.75rem;
  width: 85px;
  text-transform: capitalize;
`}`;

const Item = styled.li`${({ theme: { colors, spacing } }) => `
  align-items: center;
  color: ${colors['$text-grey']};
  display: flex;
  font-size: 1rem;
  margin-bottom: ${spacing['$double-spacing']};
  margin-top: ${spacing['$double-spacing']};
`}`;

const Title = styled(FilterTitle)`${({ type, theme: { colors, spacing } }) => `
  color: ${colors[`$type-${type}`]};
  margin-bottom: ${spacing['$double-spacing']};
  margin-top: ${spacing['$double-spacing']};
`}`;


export default DataGrid;
export {
  List, Key, Item, Title,
};
