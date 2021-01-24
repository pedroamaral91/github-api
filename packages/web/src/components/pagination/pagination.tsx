/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
import ReactPaginate from 'react-paginate';
import { useResponsive } from '../../hooks/useResponsive/useResponsive';
import { StyledPaginateContainer } from './styles';

interface PaginationProps {
  pagesQuantity: number;
  previousLabel?: string;
  nextLabel?: string;
  onPageChange: (selectedItem: { selected: number }) => void;
  currentPage?: number;
}

const ariaBuilder = (selected: any) => `page-${selected}`;

export const Pagination = ({
  pagesQuantity,
  previousLabel,
  nextLabel,
  currentPage,
  onPageChange,
}: PaginationProps): JSX.Element => {
  const { isLargerThanLg } = useResponsive();

  return (
    <StyledPaginateContainer aria-label="pagination-list">
      <ReactPaginate
        pageCount={pagesQuantity}
        previousLabel={previousLabel ?? (isLargerThanLg ? '< Previous' : '<')}
        nextLabel={nextLabel ?? (isLargerThanLg ? 'Next >' : '>')}
        breakLabel="..."
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        breakClassName="break-me"
        containerClassName="pagination"
        activeClassName="active"
        pageClassName="btn-page"
        previousClassName="btn-page btn-label"
        nextClassName="btn-page btn-label"
        pageLinkClassName="btn-link"
        previousLinkClassName="btn-link"
        nextLinkClassName="btn-link"
        onPageChange={onPageChange}
        ariaLabelBuilder={ariaBuilder}
        forcePage={currentPage}
      />
    </StyledPaginateContainer>
  );
};
