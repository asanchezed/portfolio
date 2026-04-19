import { Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-cover-letter',
  imports: [CommonModule],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
  animations: [fadeUp]
})
export class CoverLetter {
  languageService = inject(LanguageService);
  private http = inject(HttpClient);
  private sanitizer = inject(DomSanitizer);

  isExpanded = signal(false);
  html = signal<SafeHtml | null>(null);
  loading = signal(false);

  constructor() {
    effect(() => {
      this.languageService.currentLanguage();
      if (this.isExpanded()) {
        this.loadMarkdown();
      }
    });
  }

  toggle() {
    const next = !this.isExpanded();
    this.isExpanded.set(next);
    if (next && !this.html()) {
      this.loadMarkdown();
    }
  }

  private loadMarkdown() {
    const lang = this.languageService.currentLanguage();
    const url = lang === 'es'
      ? 'assets/cover-letter/carta-motivacion.es.md'
      : 'assets/cover-letter/cover-letter.en.md';

    this.loading.set(true);
    this.http.get(url, { responseType: 'text' }).subscribe({
      next: (md) => {
        const parsed = marked.parse(md) as string;
        this.html.set(this.sanitizer.bypassSecurityTrustHtml(parsed));
        this.loading.set(false);
      },
      error: () => {
        this.html.set(null);
        this.loading.set(false);
      }
    });
  }
}
