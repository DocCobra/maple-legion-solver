import { Route } from '@angular/router';
import { UiComponent } from '@maple-legion-solver/ui';

export const appRoutes: Route[] = [
  { path: '**', component: UiComponent }
];
