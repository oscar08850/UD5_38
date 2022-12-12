import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  personajes:any = null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("../../assets/database.json").subscribe(
      result => {
        this.personajes=result;
      },
      error => {
        console.log("Error en el metaverso!")
      }

    )
  }
}
