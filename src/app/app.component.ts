import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('pageTitle') pageTitle: ElementRef;

  ngOnInit() {
    this.pageTitle.nativeElement.textContent = "Let's shop!"
  }

  title = 'app';
}
