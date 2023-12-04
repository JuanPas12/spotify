import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = {
    defaultOptions: [], accessLink: []
  }
  customOptions: Array<any> = []
  constructor (private router:Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/', 'tracks']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Favorites',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query:{hola:'Hola Mundo'}
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create list',
        icon: 'uil-plus-square'
      },
      {
        name: 'Songs you like',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My list º1',
        router: ['/']
      },
      {
        name: 'My list º2',
        router: ['/']
      },
      {
        name: 'My list º3',
        router: ['/']
      },
      {
        name: 'My list º4',
        router: ['/']
      }
    ]
  }

  goTo($event: any): void{
    this.router.navigate(['/', 'favorites'],{
      queryParams: {
        key1:'value1',
        key2:'value2'
      }
    });
    console.log($event)
  }
}
