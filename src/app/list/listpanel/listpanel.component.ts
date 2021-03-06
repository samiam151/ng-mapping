import { Component, OnInit, Input } from '@angular/core';
import { Business } from '../../models/business';


@Component({
  selector: 'business-panel',
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
