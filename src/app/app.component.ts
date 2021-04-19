import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {LoadingService} from './service/loading-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loadingSub: Subscription
  isLoading: boolean = false

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.loadingSub = this.loadingService.getLoading().subscribe(loading => {
      this.isLoading = loading
    })
  }
}
