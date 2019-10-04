import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FilterPipe } from 'ngx-filter-pipe';

import { BenefitsService } from '../common/services/benefits.service';
import { benefits } from '../common/models/benefits.model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefit: benefits = new benefits();
  cardTheme = false;
  titleFilter: any = { title: '' };

  constructor(public getBen: BenefitsService, private filterPipe: FilterPipe) { }

  ngOnInit() {
    // this.cardTheme = true;
    this.getBen.getBenefits().subscribe( (res) => {
      this.benefit = res;
      console.log(this.filterPipe.transform(this.benefit.benefit, { title: 'hsa'}));
    });
  }
  changeTheme() {
    this.cardTheme = !this.cardTheme;
  }
  drop(event: CdkDragDrop<benefits[]>) {
    moveItemInArray(this.benefit.benefit, event.previousIndex, event.currentIndex);
  }
  markRead(index) {
    this.benefit.benefit.splice(index,1);
  }

}
