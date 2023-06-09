import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent
  },
  {
    path: 'recipe',
    component: RecipeListComponent
  },
  {
    path: 'recipe/create',
    component: RecipeFormComponent
  },
  {
    path: 'recipe/edit/:id',
    component: RecipeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
