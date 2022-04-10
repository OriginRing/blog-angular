import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {article, articleDetail, articleList} from "../interfaces/artilce";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  articleList():Observable<article[]>{
    return this.httpClient.get<articleList>('http://localhost:3000/list')
      .pipe(
        map(item => item.data || []),
        catchError(() => of([]))
      )
  }

  articleDetail(id: string):Observable<article>{
    return this.httpClient.get<articleDetail>(`http://localhost:3000/list/${id}`)
      .pipe(
        map(item => item.data || {}),
        catchError(() => of({}))
      )
  }
}
