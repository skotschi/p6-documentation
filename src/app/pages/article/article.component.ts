import { Component, OnInit } from '@angular/core';
import { PageService } from '../../theme/services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  articlePath:string;
  author:string;
  articleMD:string;

  constructor(private pageService: PageService,
              route: ActivatedRoute) { 
    // when route parameters are available OR change
    route.params.subscribe((params) => {
      this.articlePath = params.article;

      this.pageService.loadPageFromPath(this.articlePath).then(
        (page) => {
          this.articleMD = page.md
          this.author = page.data.author
        }
      )
    })
  }

}
