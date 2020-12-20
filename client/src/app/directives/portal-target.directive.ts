import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { PortalService } from '../services/portal.service';

@Directive({
    selector: '[appPortalTarget]'
})
export class PortalTargetDirective implements OnInit {

    // STILL NOT USED

    constructor(private portalService: PortalService, private viewContainer: ViewContainerRef) { }

    @Input('appPortalTarget') targetName: string

    ngOnInit(): void {
        this.portalService.addTarget(this.targetName, this.viewContainer)
    }

}
