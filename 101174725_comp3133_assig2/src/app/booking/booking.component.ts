import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Booking } from '../Models/booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookings: Booking[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: gql`
          {
            getBookings {
                hotel_id,
                user_id,
                date,
                start,
                end
            }
          }
        `
      })
      .subscribe(
        ({ data, loading }) => {
          this.bookings = data.getBookings;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }
}
