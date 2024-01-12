import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  openPopover() {
    // Implementa la lógica para abrir el popover según sea necesario
    console.log('Popover abierto');
  }
  @Input() description: string="";
  @Input() description1: string="";
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}
  closePopover() {
    // Implementa lógica para cerrar el popover según sea necesario
    this.popoverController.dismiss();
  }
}
