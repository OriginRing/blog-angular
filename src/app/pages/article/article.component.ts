import { Component, OnInit } from '@angular/core';
import {article} from "../../interfaces/artilce";
import {ArticleService} from "../../services/article.service";
import {ActivatedRoute} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.less']
})
export class ArticleComponent implements OnInit {
  detail: article = {};
  private destroy$ = new Subject<void>();
  constructor(private articleService: ArticleService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe( ({id}) => {
      this.articleService.articleDetail(id).subscribe( item => {
        this.detail = item;
      })

    })
  }

}
