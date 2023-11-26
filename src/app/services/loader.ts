import { Component } from '@angular/core';
import { CommonserviceService } from './commonservice.service';


@Component({
    selector: 'app-loader',
    template: `<div *ngIf="CF.isLoader" class="loader-container">
    <div class="loader-text">Loading...</div>
</div>`,
})
export class loaderComponent {
    constructor(public CF: CommonserviceService) { }
}