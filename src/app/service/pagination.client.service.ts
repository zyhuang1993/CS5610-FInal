import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() {
  }

  getPager(currentPage) {
    const totalPages = 30;
    const pageSize = 10;
    let startPage: number;
    let endPage: number;
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
    console.log('startpage:' + startPage);
    console.log('current:' + currentPage);
    console.log('end:' + endPage);
    const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
      currentPage,
      totalPages,
      pageSize,
      startPage,
      endPage,
      pages
    };
  }
}
