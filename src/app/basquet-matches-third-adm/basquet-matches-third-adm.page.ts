<<<<<<< HEAD
import { Component,ElementRef, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

=======
import { Component, ElementRef, OnInit } from '@angular/core';
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-basquet-matches-third-adm',
  templateUrl: './basquet-matches-third-adm.page.html',
  styleUrls: ['./basquet-matches-third-adm.page.scss'],
})
export class BasquetMatchesThirdAdmPage implements OnInit {
  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
<<<<<<< HEAD
  nombreTorneo:any;
  id: any;
  Eq1: any;
  Eq2: any;
  partidos: any[] = [];
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {this.isButton1Disabled=this.isButton2Disabled; }

  ngOnInit() {

    this.nombreTorneo=localStorage.getItem("NombreTorneo")?.toUpperCase();

    this._apiService.getMatchesThird().subscribe((res:any)=>{
      console.log(res);
      this.partidos = res.filter((partido: any) => partido.nombreTorneo == this.nombreTorneo && partido.disciplina == "Basquetball");
        },(error: any)=>{ 
            alert('ERROR');
            console.log("ERROR ===", error);
          })


=======

  constructor(private el: ElementRef) {

    this.isButton1Disabled=this.isButton2Disabled;
   }

  ngOnInit() {
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
    const elementosConClase: NodeList = this.el.nativeElement.querySelectorAll('.princ');

        elementosConClase.forEach((nodo: Node) => {
          // Verifica si el nodo es un elemento HTMLElement
          if (nodo.nodeType === Node.ELEMENT_NODE) {
            const elemento: HTMLElement = nodo as HTMLElement;
    
            // Obtén el texto dentro del elemento
            const textoDelDiv: string| null = elemento.textContent;
    
           
           
            // Ahora puedes hacer lo que quieras con el texto, por ejemplo, imprimirlo en la consola
            console.log('Texto dentro del div:', textoDelDiv);

            if(textoDelDiv=="Nombre 1"){
              this.isButton1Disabled=false;
              this.isButton2Disabled=true;
                  }

                  if(textoDelDiv!="Nombre 1"){
                    this.isButton1Disabled=false;
                    this.isButton2Disabled=false;
                        }


          }
        });
<<<<<<< HEAD
  }

  enviarID(id: any, Eq1:any, Eq2:any){
    this.id=id;
    this.Eq1=Eq1;
    this.Eq2=Eq2;
    console.log(this.id);
    console.log(this.Eq1);
    console.log(this.Eq2);
    localStorage.setItem("idPartido",this.id);
    localStorage.setItem("Equipo1",this.Eq1);
    localStorage.setItem("Equipo2",this.Eq2);
      }

  handleRefresh(event:any) {
    this.ngOnInit();
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 1500);
  }

}

=======

  }

  onButtonClick() {
    
  }

}
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
