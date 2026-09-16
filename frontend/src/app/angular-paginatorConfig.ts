import { MatPaginatorIntl } from "@angular/material/paginator";

export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = 'Einträge pro Seite:';
    customPaginatorIntl.nextPageLabel = 'Nächste Seite';
    customPaginatorIntl.previousPageLabel = 'Vorherige Seite';
    customPaginatorIntl.firstPageLabel = 'Erste Seite';
    customPaginatorIntl.lastPageLabel = 'Letzte Seite';
    customPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length === 0 || pageSize === 0) {
          return `0 von ${length}`;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} von ${length}`;
      };
    return customPaginatorIntl;
}