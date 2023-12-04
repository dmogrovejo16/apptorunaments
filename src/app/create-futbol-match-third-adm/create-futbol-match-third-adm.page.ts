import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-futbol-match-third-adm',
  templateUrl: './create-futbol-match-third-adm.page.html',
  styleUrls: ['./create-futbol-match-third-adm.page.scss'],
})
export class CreateFutbolMatchThirdAdmPage implements OnInit {
  colors: string[] = ["1E1", "1E2", "1A1", "1A2", "1B1","1C1","1C2", "1D1", "1D2","1F1","1F2","1F3",
  "2E1", "2E2", "2A1", "2A2", "2B1","2C1","2C2", "2D1", "2D2","2F1","2F2","2F3",
  "3E1", "3E2", "3A1", "3A2", "3B1","3C1","3C2", "3D1", "3D2","3F1","3F2","3F3"];
  selectedColor: string = "";
  selectedTeam: string="";
  searchTerm: string = "";
  
  filteredColors: string[] = this.colors;
  constructor() { }

  ngOnInit() {
  }

  filterColors() {
    this.filteredColors = this.colors.filter((color) => color.toLowerCase().includes(this.searchTerm.toLowerCase()));
   
  }

  mostrar(){
    console.log("2",this.selectedTeam);
    console.log("1",this.selectedColor);
  }
}
