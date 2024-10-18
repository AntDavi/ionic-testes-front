import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnMode, NgxDatatableModule } from '@swimlane/ngx-datatable';
import { IonGrid, IonRow, IonCol, IonCard } from "@ionic/angular/standalone";

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss'],
  standalone: true,
  imports: [IonCard, IonCol, IonRow, IonGrid, NgxDatatableModule]
})
export class DatatableComponent  implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  ColumnMode = ColumnMode;
  loadingIndicator!: boolean;
  temp!: any[];
  rows!: any[];

  constructor() { }

  ngOnInit() {
    this.loadingIndicator = true;
    this.temp = [
      { id: 1, name: 'Austin', gender: 'Masculino', company: 'Swimlane' },
      { id: 2, name: 'Sophia', gender: 'Feminino', company: 'TechCorp' },
      { id: 3, name: 'Liam', gender: 'Masculino', company: 'Innovatech' },
      { id: 4, name: 'Olivia', gender: 'Feminino', company: 'HealthPlus' },
      { id: 5, name: 'Noah', gender: 'Masculino', company: 'EduWorld' },
      { id: 6, name: 'Emma', gender: 'Feminino', company: 'GreenEnergy' },
      { id: 7, name: 'James', gender: 'Masculino', company: 'FinTech' },
      { id: 8, name: 'Ava', gender: 'Feminino', company: 'BioLabs' },
      { id: 9, name: 'Lucas', gender: 'Masculino', company: 'AutoDrive' },
      { id: 10, name: 'Mia', gender: 'Feminino', company: 'Foodies' },
      { id: 11, name: 'Ethan', gender: 'Masculino', company: 'TravelCo' },
      { id: 12, name: 'Isabella', gender: 'Feminino', company: 'FashionHub' },
      { id: 13, name: 'Mason', gender: 'Masculino', company: 'BuildIt' },
      { id: 14, name: 'Amelia', gender: 'Feminino', company: 'Artistry' },
      { id: 15, name: 'Logan', gender: 'Masculino', company: 'GameZone' },
      { id: 16, name: 'Harper', gender: 'Feminino', company: 'MediaWorks' },
      { id: 17, name: 'Alexander', gender: 'Masculino', company: 'TechSolutions' },
      { id: 18, name: 'Evelyn', gender: 'Feminino', company: 'Wellness' },
      { id: 19, name: 'Daniel', gender: 'Masculino', company: 'AgriTech' },
      { id: 20, name: 'Charlotte', gender: 'Feminino', company: 'EduCare' },
    ];
    this.rows = [...this.temp];
    this.loadingIndicator = false;
  }

}
