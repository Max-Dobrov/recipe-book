import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onPageChanging = new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pageName: string) {
    this.onPageChanging.emit(pageName)
  }

}
