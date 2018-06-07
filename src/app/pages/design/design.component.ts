import { Component, OnInit } from '@angular/core';
import { PagesService } from '../../theme/services/pages.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  articlePath:string;
  articleMD:string;

  constructor(private pagesService: PagesService,
              route: ActivatedRoute) { 
    // when route parameters are available OR change
    route.params.subscribe((params) => {
      this.articlePath = params.article;

      this.pagesService.loadMarkDownFromPath(this.articlePath).then(
        (md) => {
          this.articleMD = md
        }
      )
    })
  }

  ngOnInit() {
  }

}
