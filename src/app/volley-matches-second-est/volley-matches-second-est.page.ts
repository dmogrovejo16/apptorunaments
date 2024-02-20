<<<<<<< HEAD
import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-volley-matches-second-est',
  templateUrl: './volley-matches-second-est.page.html',
  styleUrls: ['./volley-matches-second-est.page.scss'],
})
export class VolleyMatchesSecondEstPage implements OnInit {

<<<<<<< HEAD
  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
  nombreTorneo:any;
  partidos: any[] = [];

  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) {
    this.isButton1Disabled=this.isButton2Disabled;

   }


  ngOnInit() {
    this.nombreTorneo=localStorage.getItem("NombreTorneo")?.toUpperCase();
console.log(this.nombreTorneo);
    this._apiService.getMatchesFirst().subscribe((res:any)=>{
      console.log(res);
      this.partidos = res.filter((partido: any) => partido.nombreTorneo == this.nombreTorneo && partido.disciplina == "Volley");
    },(error: any)=>{ 
            alert('ERROR');
            console.log("ERROR ===", error);
          })

    

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
  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
