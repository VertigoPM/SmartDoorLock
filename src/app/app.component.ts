import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DoorInfoCardComponent } from "./door-info-card/door-info-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, DoorInfoCardComponent]
})
export class AppComponent {
  title = 'SmartDoorLock';
}
