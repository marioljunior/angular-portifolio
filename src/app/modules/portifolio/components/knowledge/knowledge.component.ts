import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
        src:'assets/icons/knowledge/html5.svg',
        alt: 'Conhecimentos em HTML5',
    },
    {
      src:'assets/icons/knowledge/css3.svg',
      alt: 'Conhecimentos em CSS3',
    },
    {
      src:'assets/icons/knowledge/javascript.svg',
      alt: 'Conhecimentos em JS',
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt: 'Conhecimentos em Angular',
    },
    {
      src:'assets/icons/knowledge/nodejs.svg',
      alt: 'Conhecimentos em Node',
    },
  ]);
}
