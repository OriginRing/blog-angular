import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.less']
})
export class PaginationComponent implements OnInit, OnChanges{
  @Input() total = 0
  @Input() page = 1
  @Output() articleListChange = new EventEmitter<number>();
  pagination: number[] = []
  constructor() { }

  ngOnInit(): void {

  }

  paginationClick(num: number) :void {
    this.articleListChange.emit(num)
  }

  pre(): void {
    this.page > 1 ? this.articleListChange.emit(this.page - 1) : '';
  }

  preDisable(): boolean {
    return this.page <= 1;
  }

  next(): void {
    this.page < this.total ? this.articleListChange.emit(this.page + 1) : '';
  }

  nextDisable(): boolean {
    return this.page >= this.total;
  }

  ngOnChanges(): void {
    this.pagination = [];
    if (this.total>5) {
      if (this.page <= 3) {
        this.pagination = [1, 2, 3, 4, 5, 0, this.total]
      } else if (this.page >= this.total-3) {
        this.pagination = [1, 0, this.total-4, this.total-3, this.total-2, this.total-1, this.total]
      } else {
        this.pagination = [1, 0, this.page-2, this.page-1, this.page, this.page+1, this.page+2, 0, this.total]
      }
    } else {
      for (let i = 1; i <= this.total; i++) {
        this.pagination.push(i)
      }
    }
  }

}
