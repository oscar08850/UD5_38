import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  characters: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      (result) => {
        this.characters = result;
      },
      (error) => {
        console.log('Error en el metaverso!');
      }
    );
  }

}
