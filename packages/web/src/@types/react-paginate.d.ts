import 'react-paginate'

declare module 'react-paginate' {
  export interface ReactPaginateProps extends ReactPaginateProps {
    ariaLabelBuilder: (selected: any) => string;
  }
}

declare const ReactPaginate: React.ComponentClass<ReactPaginateProps>

export default ReactPaginate
