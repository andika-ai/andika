import {AfterViewInit, Component,  OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatTableDataSource } from '@angular/material/table';
import {
  faSearch,
  faStar
} from '@fortawesome/free-solid-svg-icons';

export interface Document {
  name: string;
  words: number;
  modified: string;
  favorite: boolean;
}


const ELEMENT_DATA: Document[] = [
  { name: 'Document 1', words: 100, modified: '2023-05-01', favorite: true },
  { name: 'Document 2', words: 200, modified: '2023-05-02', favorite: false },
  { name: 'Document 3', words: 150, modified: '2023-05-03', favorite: true },
  { name: 'Document 4', words: 120, modified: '2023-05-04', favorite: false },
  { name: 'Document 5', words: 180, modified: '2023-05-05', favorite: true },
  { name: 'Document 6', words: 220, modified: '2023-05-06', favorite: false },
  { name: 'Document 7', words: 160, modified: '2023-05-07', favorite: true },
  { name: 'Document 8', words: 240, modified: '2023-05-08', favorite: false },
  { name: 'Document 9', words: 130, modified: '2023-05-09', favorite: true },
  { name: 'Document 10', words: 190, modified: '2023-05-10', favorite: false },
];


const PAGE_SIZE = 10; // Number of items per page
const pageIndex = 0; // Index of the current page
const startIndex = pageIndex * PAGE_SIZE;
const endIndex = startIndex + PAGE_SIZE;

const paginatedData = ELEMENT_DATA.slice(startIndex, endIndex);
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  // standalone: true,
  // imports: [MatTableModule, MatPaginatorModule,MatFormFieldModule, MatInputModule, MatTableModule],
})
export class DocumentsComponent implements OnInit, AfterViewInit {
  faSearch = faSearch;
  faStar = faStar;
  displayedColumns: string[] = ['name', 'words', 'modified', 'favourite','actions'];
  dataSource = new MatTableDataSource<Document>(ELEMENT_DATA);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;




  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.isLoadingResults = false;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  downloadDocument(row: any){
    console.log('downlaod')
  }
  deleteDocument(row: any){
    console.log('downlaod')
  }

  updateDocument(row: any){
    console.log('downlaod')
  }

}
