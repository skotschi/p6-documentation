import { Component, OnInit } from '@angular/core';
import { PageService } from '../../theme/services/page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

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

  ngOnInit() {
  }

}
