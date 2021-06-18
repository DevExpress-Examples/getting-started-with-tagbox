import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AppService, Product } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    dataSource: DataSource;
    data: Product[];
    dropDownOptions: any;

    constructor(service: AppService) {
        this.data = service.getProducts();
        this.dataSource = new DataSource({
            store: {
                data: this.data, 
                type: 'array',
                key: "ID", 
            },
            group: "Category"
        });

        this.dropDownOptions = {
            height: 300
        };
    }

    onValueChanged(e) {
        console.log(e.previousValue);
        console.log(e.value);
    }
}
