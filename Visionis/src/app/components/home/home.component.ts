import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.handleFragment();
      });

    const sr = ScrollReveal({ reset: true });

    const slideLeft = {
      distance: '50px', // Ajuste a distância conforme necessário
      origin: 'left', // Ou 'top', 'left', 'right'
      opacity: 0, // Ajuste a opacidade conforme necessário
    };
    const slideUp = {
      distance: '200px',
      origin: 'bottom',
      opacity: 0,
    };

    sr.reveal('.principal-texto', { ...slideLeft, duration: 3000, delay: 200 });
    sr.reveal('.secao2', { ...slideUp, duration: 3000 });
    sr.reveal('.secao3', {
      distance: '250px',
      rotate: { x: 80, y: 0, z: 0 },
      duration: 3000,
    });
    sr.reveal('.secao4', {
      rotate: { x: 80, y: 0, z: 0 },
      duration: 3000,
    });
    sr.reveal('.secao5', {
      rotate: { x: 80, y: 0, z: 0 },
      duration: 3000,
    });
  }

  private handleFragment(): void {
    const fragment = this.getCurrentFragment();
    if (fragment) {
      this.scrollToSection(fragment);
    }
  }

  private getCurrentFragment(): string {
    const urlTree = this.router.parseUrl(this.router.url);
    return urlTree.fragment || '';
  }

  private scrollToSection(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }
}
