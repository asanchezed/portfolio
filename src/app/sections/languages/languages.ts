import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-languages',
  imports: [CommonModule],
  templateUrl: './languages.html',
  styleUrl: './languages.scss',
  animations: [fadeUp]
})
export class Languages {
  languageService = inject(LanguageService);
}
