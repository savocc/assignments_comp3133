import { Component, OnInit } from '@angular/core';
import {gql, Apollo} from 'apollo-angular';
import { Hotel } from '../Models/Hotel';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotels: Hotel[];
  selectedCity:string = '';
  selectedName:string = '';
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }
searchByHotel()
{
  this.apollo
  .query<any>({
    query: 
    gql`
    query ($city:String!){ 
    getHotelByCity(city:$city){
    hotel_id,
    hotel_name,
    email,
    postal_code,
    city,
    street,
    price
  }
}`,
variables:
{
city: this.selectedCity
}})
  .subscribe(
    ({ data, loading }) => {
      this.hotels = data.getHotelByCity;
      this.loading = loading;
    },
    error => {
      this.loading = false;
      this.error = error;
    }
  );

}
searchByName()
{
  this.apollo
  .query<any>({
    query: 
    gql`
    query ($hotel_name:String!){ 
    getHotelByName(hotel_name:$hotel_name){
    hotel_id,
    hotel_name,
    email,
    postal_code,
    city,
    street,
    price
  }
}`,
variables:
{
  hotel_name: this.selectedName
}})
  .subscribe(
    ({ data, loading }) => {
      this.hotels = data.getHotelByName;
      this.loading = loading;
    },
    error => {
      this.loading = false;
      this.error = error;
    }
  );

}
  ngOnInit(): void {
    this.apollo
      .query<any>({
        query: 
        gql`
        {
          getHotel {
              hotel_id,
              hotel_name,
              email,
              postal_code,
              city,
              street,
              price
          }
        }
      `})
      .subscribe(
        ({ data, loading }) => {
          this.hotels = data.getHotel;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }
}
