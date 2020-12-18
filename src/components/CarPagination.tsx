import { PaginationRenderItemParams } from '@material-ui/lab';
import { ParsedUrlQuery, stringify } from 'querystring';
import Link from 'next/link';
import { getAsString } from '../getAsString';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { forwardRef } from 'react';
import { useRouter } from 'next/router';

export function CarPagination({totalPages}: {totalPages: number}) {
    const {query} = useRouter();
    
    return <Pagination
    page={parseInt(getAsString(query.page) || '1')}
    count={totalPages}
    renderItem={(item) => (
      <PaginationItem
        component={MaterialUiLink}
        query={query}
        item={item}
        {...item}
      />
    )}
  />
}

export interface MaterialUiLinkProps {
    item: PaginationRenderItemParams;
    query: ParsedUrlQuery;
  }

const MaterialUiLink = forwardRef<HTMLAnchorElement,MaterialUiLinkProps> (({ item, query, ...props }, ref) => (
    <Link
    href={{
      pathname: '/cars',
      query: { ...query, page: item.page },
    }}>
    <a {...props}></a>
  </Link>
));