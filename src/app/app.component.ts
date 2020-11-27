import { OnInit, Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AppService } from './app.service';
import { Compound, Schema } from './dtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private appService : AppService 
  ) { }

  compounds: Compound[] = [];
  schema: Schema = {} as Schema;
  gridOptions: GridOptions = {} as GridOptions;

  ngOnInit(){
    this.gridOptions = {
      rowHeight: 300,
      masterDetail: true,
      columnDefs: [
        { field: 'compound_id', headerName: 'Compound ID', width:150, cellRenderer: 'agGroupCellRenderer' },
        { field: 'image', headerName: 'Image', width:310, cellRenderer: (params) => {
          return `<img src="./assets/${params.value}" width=300px height=300px/>`;
        }},
        { field: 'molecular_formula', headerName: 'Formula', width:200 },
        { field: 'molecular_weight', headerName: 'Weight', type: 'numericColumn', width:200 },
        { field: 'num_rings', headerName: 'Num Rings', type: 'numericColumn', width:150 },
        { field: 'ALogP', headerName: 'ALogP', type: 'numericColumn', width:100 },
        { field: 'smiles', headerName: 'SMILES', width:500 },
      ],
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true,
      },
      detailCellRendererParams: {
        detailGridOptions: {
            columnDefs: [
                { field: 'result_id', headerName: 'Result ID', width:120 },
                { field: 'target', headerName: 'Target', width: 350 },
                { field: 'result', headerName: 'Result', width:120 },
                { field: 'operator', headerName: 'Operator', width:120 },
                { field: 'value' , headerName: 'Value', type: 'numericColumn', width:100 },
                { field: 'unit', headerName: 'Unit', width:120 },
            ],
            defaultColDef: {
              sortable: true,
              resizable: true,
              filter: true,
            },
        },
        getDetailRowData: (params: any) => {
            params.successCallback(params.data.assay_results);
        },
      },
    }

    this.appService.getCompounds().subscribe((compounds: Compound[]) => {
      this.compounds = compounds
    });
  }
}
