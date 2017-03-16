import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../../models/business';
import { TruncatePipe } from '../../pipes/truncate';

@Component({
  selector: 'business-detail',
  templateUrl: './listpanel.component.html',
  styleUrls: ['./listpanel.component.scss']
})
export class ListpanelComponent implements OnInit {
  private showInfoBool: boolean

  constructor() { }

  @Input() business: Business

  ngOnInit() {
  }

  public showInfo(){
    this.showInfoBool = !this.showInfoBool
  }

}
