import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';
import { Schema, Compound } from './dtos';
import compounds from '../assets/compounds.json'
import schema from '../assets/schema.json'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {
    this.getSchema().subscribe(() => console.log('Schema loaded'));
    this.getCompounds().subscribe(() => console.log('Compounds loaded'));
  }

  public getSchema(): Observable<Schema> {
    return of(schema)

    // Unable to use HTTP to retrieve local files without running into CORS issues, hence import file directly
    // return this.http.get<Schema>("assets/schema.json");
  }

  public getCompounds(): Observable<Compound[]> {
    return of(compounds)

    // Unable to use HTTP to retrieve local files without running into CORS issues, hence import file directly
    // return this.http.get<Compound[]>("assets/compounds.json");
  }
}
