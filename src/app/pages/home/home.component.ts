import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../services/article.service";
import {article} from "../../interfaces/artilce";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  list: article[] = [];
  total = 0;
  page = 1;
  pageSize = 5
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.articleList().subscribe(item => {
      this.list = item;
      this.total = Math.ceil(item.length / this.pageSize);
    })
  }

  articleListChange(num: number): void{
    this.page = num;
  }

}
