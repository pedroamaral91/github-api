import styled from 'styled-components'

export const StyledPaginateContainer = styled.div`
  .pagination {
    color: #0d71f0;
    list-style: none;
    display: flex;
    box-sizing: border-box;
  }
  .break-me {
    cursor: default;
  }
  .active {
    border-color: transparent;
    background-color: #0d71f0;
    color: #ffffff;
  }
  .btn-page {
    /* width: 30px; */
    padding: 1px 5px;
    border-radius: 5px;
    margin-left: 2px;
    margin-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-label {
    width: inherit;
    min-width: 30px;
  }
  .btn-link {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
