import { Component } from '@angular/core';
import { DataService} from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-crops-dashboard',
  templateUrl: './crops-dashboard.component.html',
  styleUrls: ['./crops-dashboard.component.scss']
})
export class CropsDashboardComponent {
    constructor(private dataService: DataService) {}
}
