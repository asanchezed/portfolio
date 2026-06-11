import { Component, effect, inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  html = signal<SafeHtml | null>(null);
  loading = signal(false);

  constructor() {
    effect(() => {
      this.languageService.currentLanguage();
      if (this.isBrowser) {
        this.loadMarkdown();
      }
    });
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
        // Wrap each h2-led block in a card so sections can be styled individually
        const wrapped = parsed
          .split(/(?=<h2)/)
          .filter((chunk) => chunk.trim())
          .map((chunk) => `<div class="cl-section">${chunk}</div>`)
          .join('');
        this.html.set(this.sanitizer.bypassSecurityTrustHtml(wrapped));
        this.loading.set(false);
      },
      error: () => {
        this.html.set(null);
        this.loading.set(false);
      }
    });
  }
}
