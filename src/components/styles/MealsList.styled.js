import styled from 'styled-components';

const StyledMealsList = styled.div`
  .meals--list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;

    li {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 0.875rem;
      text-transform: uppercase;
      padding: 5px 12px;
      line-height: normal;
      background-color: ${({ theme }) => theme.Footer};
      color: ${({ theme }) => theme.text};
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export default StyledMealsList;
