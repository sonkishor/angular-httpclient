import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent {
  books: any[] = [];

  constructor(private api: RestService) {}

  ngOnInit() {
    // Call getBooks() when the component initializes
    this.getBooks();
  }

  getBooks() {
    // Call the API service method to get smartphone data
    this.api.getSmartphone().subscribe(
      (data: any) => {
        // Clear existing books array
        this.books = [];
        // Push each book item into the books array
        for (const d of data) {
          this.books.push(d);
        }
        console.log(this.books);
      },
      (error) => {
        // Handle any errors that occur during the API call
        console.error('Error fetching books:', error);
      }
    );
  }
}
