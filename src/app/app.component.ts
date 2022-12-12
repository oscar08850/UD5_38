import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD5_37';

  articulos:any = null;

  constructor(private http: HttpClient){}

  ngOnInit(){
    this.http.get("http://")
  }
}
