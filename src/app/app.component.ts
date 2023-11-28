import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'spotify';

  name: string = 'Juan Pablo'
  age : number = 23
  phone: null = null
  phone1: undefined = undefined

  //any permite almacenar cualquier tipo de datos
  datum: any

  car: CarModel = {
    brand: 'Ford',
    model: 'Focus',
    year: 2023
  }

  //listCars:Array<any> = [1, 'hola', null, {}]
  listCars:Array<CarModel> = [
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2024
    },
    {
      brand: 'Mercedes Benz',
      model: 'AMG',
      year: 2023
    }
  ]

  //se pueden poner 2 tipos de datos
  status:string | number = 'fail'
}

interface CarModel {
  brand:string
  model:string
  year?:number
}