import { Component, OnInit } from '@angular/core';
import { TipocambioService } from 'src/app/service/tipocambio.service';
import { Update } from 'src/app/model/update';
import { Response } from 'src/app/model/response';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  request: Update;
  response: Response;

  constructor(private tipocambioService: TipocambioService) { }

  ngOnInit() {
    this.request = new Update();
    this.request.origen = "PEN";
    this.request.destino = "USD";
    this.request.cambio = 0;
    this.response = new Response();
  }

  doUpdate() {
    this.tipocambioService.update(this.request).subscribe(data => this.response = data);
  }

}
