import { Component, OnInit } from '@angular/core';
import { TipocambioService } from 'src/app/service/tipocambio.service';
import { Convert } from 'src/app/model/convert';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {

  request: Convert;
  response: Response;

  constructor(private tipocambioService: TipocambioService) { }

  ngOnInit() {
    this.request = new Convert();
    this.request.origen = "PEN";
    this.request.destino = "USD";
    this.request.monto = 0;
    this.response = new Response();
  }

  doConvert() {
    this.tipocambioService.convert(this.request).subscribe(data => this.response = data);
  }

}
