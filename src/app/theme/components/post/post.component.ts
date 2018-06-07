import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import * as showdown from 'showdown';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges {
  html:string|SafeHtml;
  
  /** The post's content in markdown */
  @Input() contentMD:string

  constructor(private sanitizer: DomSanitizer) { }

  ngOnChanges() {
    this.convertMarkdown(this.contentMD);
  }



  private convertMarkdown(md:string) {
    let converter = new showdown.Converter({ tables: true, disableForced4SpacesIndentedSublists: true });
    this.html = this.sanitizer.bypassSecurityTrustHtml(converter.makeHtml(md));
  }

}
