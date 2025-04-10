import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-i18n';
  links = [
    { title: $localize`:@@linkDocs:Explore the Docs`, link: 'https://angular.dev' },
    { title: $localize`:@@linkTutorials:Learn with Tutorials`, link: 'https://angular.dev/tutorials' },
    { title: $localize`:@@linkCliDocs:CLI Docs`, link: 'https://angular.dev/tools/cli' },
    { title: $localize`:@@linkLanguageService:Angular Language Service`, link: 'https://angular.dev/tools/language-service' },
    { title: $localize`:@@linkDevTools:Angular DevTools`, link: 'https://angular.dev/tools/devtools' },
  ]
}
