import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../rezept/recipe';
import {RecipeService} from '../../rezept/recipe.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-neuer-eintrag',
  templateUrl: './neuer-eintrag.component.html',
  styleUrls: ['./neuer-eintrag.component.css']
})
export class NeuerEintragComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(private recipeService: RecipeService, public snackBar: MatSnackBar) {
  }

  save(): void {
    // console.log('Titel: ' + this.recipe.title);
    // console.log('Rezept: ' + this.recipe.recipe);
    // console.log('Schwierigkeitsgrad: ' + this.recipe.level);
    console.log(JSON.stringify(this.recipe));

    this.recipeService.createNewRecipe(this.recipe).subscribe(data => {

      console.log(data);
      if (data != null) {
        this.snackBar.open('Gespeichert');
      } else {
        this.snackBar.open('Fehlgeschlagen');
      }

    });
  }

  discard(): void {
    this.recipe.title = null;
    this.recipe.recipe = null;
    this.recipe.level = null;
  }

  ngOnInit() {
  }

}
