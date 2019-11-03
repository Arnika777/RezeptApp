import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../../rezept/recipe.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {

  title = 'Startseite';
  list = [];

  constructor(private recipeService: RecipeService) {
  }

  fetchData(): void {
    this.recipeService.findAllRecipes().subscribe(data => {
      this.list = data;
      for (const entry of this.list) {
        console.log(entry); // 1, "string", false
      }
    });
  }

  delete(id) {
    console.log(id);
    
    this.recipeService.deleteRecipe(id).subscribe(data => {
      console.log(data);
      this.fetchData();
    });
  }

  ngOnInit() {
    this.fetchData();
  }

}
