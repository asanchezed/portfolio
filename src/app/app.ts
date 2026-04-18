import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';
import { LanguageService } from './language.service';
import { Hero } from './sections/hero/hero';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Languages } from './sections/languages/languages';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [CommonModule, Hero, Experience, Skills, Contact, Education, Languages]
})
export class App {
  theme = inject(ThemeService);
  language = inject(LanguageService);
  languageService = inject(LanguageService);
  showStickyHeader = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Show sticky header when scrolled past hero section (approximately 100vh)
    this.showStickyHeader = window.scrollY > window.innerHeight * 0.8;
  }

  toggleTheme() {
    this.theme.toggle();
  }

  print() {
    window.print();
  }
}
