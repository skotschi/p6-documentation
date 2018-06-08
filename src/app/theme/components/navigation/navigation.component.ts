import { Component, OnInit } from '@angular/core';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation:any;
  isOpen: boolean = false;
  constructor(private pagesService: PageService) {
    pagesService.loadPageFromPath('navigation').then((page) => {
      console.log(page)
      this.navigation = page.data.menu
    })
  }

  isObject(val) { 
    return val instanceof Object; 
  }

  getMenuName(item) {
    return item[Object.keys(item)[0]]
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  ngOnInit() {
  }

}
