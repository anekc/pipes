import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombreRaro = 'AleJaNdRo aRtEaGA';
nombre: string = 'Alejandro Arteaga';

arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

PI: number = Math.PI;
porcentaje: number = 0.328373;

salario: number = 1234.456;

fecha: Date = new Date();

idioma: string = 'es';
activar: boolean = true;

videoUrl: string = 'https://www.youtube.com/embed/x2Y5ozcs870';

valorPromesa = new Promise<string> ( (resolve) => {
 setTimeout(() => {
   resolve('llegaron los datos');

 }, 4500);

});


heroe = {
  nombre: 'Logan',
  clave: 'Wolverine',
  direccion: '5th avenue'
       };
}
