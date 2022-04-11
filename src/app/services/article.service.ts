import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {article, articleDetail, articleList} from "../interfaces/artilce";
import {url} from "@my/util/url";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpClient: HttpClient) { }

  articleList():Observable<article[]>{
    console.log(url())
    return this.httpClient.get<articleList>(`${url()}/list`)
      .pipe(
        map(item => item.data || []),
        catchError(() => of([]))
      )
  }

  articleDetail(id: string):Observable<article>{
    return this.httpClient.get<articleDetail>(`${url()}/list/${id}`)
      .pipe(
        map(item => item.data || {}),
        catchError(() => of({}))
      )
  }
}
