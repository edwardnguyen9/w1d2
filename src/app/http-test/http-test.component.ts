import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  private jsonString: String;
  constructor(private http: Http) { }

  getJson() {
  this.http.get('tsconfig.json').
  subscribe(
    (res: Response) => { // Parameter of subscribe is a function with paramenter res, type Response
    const json = res.json(); // After => is the body of the mentioned function
    console.log(json);
    this.jsonString = JSON.stringify(json);
    });
  }

  getData() {
    this.http.get('http://media.mw.metropolia.fi/wbma/media/').subscribe(
      (res: Response) => {
        const json = res.json();
        console.log(json);
        this.jsonString = json;
      }
    )
  }

  ngOnInit() {
    this.getData();
  }

}
