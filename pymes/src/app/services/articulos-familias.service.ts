import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from "@angular/common/http";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticulosFamiliasService {
  resourceUrl: string;
  constructor(private httpClient: HttpClient) {
    //this.resourceUrl = "http://labsys.frc.utn.edu.ar:8080/api/ArticulosFamilias/";
    this.resourceUrl = "https://bitgocba.duckdns.org/api/articulosfamilias/";

  }

  get() {
    return this.httpClient.get(this.resourceUrl);
  }
}
