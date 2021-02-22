import { Component } from '@angular/core';
import { CategoryService } from './services/category.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table';
  categories;
  tempCategories;
  filterText:string= ""
  constructor(private categoryService: CategoryService) {
    this.getData()
  }
  public getData() {
    this.categoryService.getCategory().then(data => {
      this.categories = data
      this.tempCategories = JSON.parse(JSON.stringify(this.categories))
    })
  }
  public filterCategories() {
    this.categories = JSON.parse(JSON.stringify(this.tempCategories))
    this.categories = this.categories.filter(x => x.toLowerCase().includes(this.filterText.toLowerCase()))
  }
}
