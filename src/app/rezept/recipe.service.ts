import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  findAllRecipes() {
    return this.http.get<Array<Recipe>>('http://localhost:8080/recipes');
  }

  createNewRecipe(recipe: Recipe) {
    return this.http.post<any>('http://localhost:8080/recipes', recipe);
  }

  deleteRecipe(id: number) {
    const url = 'http://localhost:8080/recipes/' + id;
    return this.http.delete<any>(url);
  }
}
