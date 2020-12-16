import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { Etudiant } from '../models/etudiant';
import {retry, catchError} from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
base_path= 'http://localhost:3000/etudiants';
  constructor(private http:HttpClient) { }
httpOptions = {
headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
creerEtudiant(element): Observable<Etudiant>{
  return this.http
  .post<Etudiant>(this.base_path, JSON.stringify(element), this.httpOptions)
  .pipe(
  retry(2),
  catchError(this.traitementErreur)
  )

}
trouverEtudiant_ID(id): Observable<Etudiant>{
  return this.http
  .get<Etudiant>(this.base_path)
  .pipe(
  retry(2),
  catchError(this.traitementErreur)
  )

}
afficherListe(): Observable<Etudiant>{
  return this.http
  .get<Etudiant>(this.base_path)
  .pipe(
  retry(2),
  catchError(this.traitementErreur)
  )
}
updateEtudiant(id,element): Observable<Etudiant>{
  return this.http
  .put<Etudiant>(this.base_path + '/' + id, JSON.stringify(element),this.httpOptions)
  .pipe(
  retry(2),
  catchError(this.traitementErreur)
  )

}
supprimerEtudiant(id){
  return this.http
  .delete<Etudiant>(this.base_path + '/' + id,this.httpOptions)
  .pipe(
  retry(2),
  catchError(this.traitementErreur)
  )

}
traitementErreur(erreur: HttpErrorResponse){
if (erreur.error instanceof ErrorEvent){
  console.error('une error',erreur.error.message)

}
else {
  console.error(`code renvoyé  par le backend ${erreur.status},`+` le corps était : ${erreur.error}`);
}
  return throwError('quelque chose est arrivé; veuilez  reessayer plus tard.');
}
}
