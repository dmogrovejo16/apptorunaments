import { Component, ElementRef, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

@Component({
  selector: 'app-volley-matches-second-adm',
  templateUrl: './volley-matches-second-adm.page.html',
  styleUrls: ['./volley-matches-second-adm.page.scss'],
})
export class VolleyMatchesSecondAdmPage implements OnInit {

  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
<<<<<<< HEAD
  nombreTorneo:any;
  partidos: any[] = [];
  constructor(private el: ElementRef, private http: HttpClient, public _apiService: ApiService) { 
=======
  constructor(private el: ElementRef) { 
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d

    this.isButton1Disabled=this.isButton2Disabled;


  }

  ngOnInit() {
<<<<<<< HEAD
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
}
>>>>>>> 06e10c9414a3eb8d40a49f06ec26724be12da97d
