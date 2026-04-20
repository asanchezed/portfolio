import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../language.service';
import { fadeUp } from '../../animations';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  animations: [fadeUp]
})
export class Projects {
  languageService = inject(LanguageService);
}
