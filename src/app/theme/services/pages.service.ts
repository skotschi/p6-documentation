import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import * as frontmatter from 'front-matter';


@Injectable()
export class PagesService {

  constructor(private http: Http) { }

  loadMarkDownFromPath(pagePath: string): Promise<any> {
    return this.http
      .get('assets/articles/' + pagePath + '.md')
      .toPromise()
      .then(
        (text) => {
          return text = text['_body'];
        },
      );
  }

  loadPageFromPath(page: string): Promise<{md: string, data: any}> {
    return this.loadMarkDownFromPath(page).then((result) => {
      const parse = frontmatter(result);
      return {
        md: parse.body,
        data: parse.attributes
      };
    });
  }

}
