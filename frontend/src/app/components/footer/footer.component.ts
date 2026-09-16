import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink]
})
export class FooterComponent {
  router = inject(Router);

  navigateToDSGVO() {
    this.router.navigate(['/dsgvo']); 
  }

  navigateToImpressum() {
    this.router.navigate(['/impressum']); 
  }

}
