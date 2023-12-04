import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-volley-matches-third-adm',
  templateUrl: './volley-matches-third-adm.page.html',
  styleUrls: ['./volley-matches-third-adm.page.scss'],
})
export class VolleyMatchesThirdAdmPage implements OnInit {

  isButton1Disabled: boolean;
  isButton2Disabled: boolean=true;
  constructor(private el: ElementRef) { 

    this.isButton1Disabled=this.isButton2Disabled;


  }

  ngOnInit() {
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
