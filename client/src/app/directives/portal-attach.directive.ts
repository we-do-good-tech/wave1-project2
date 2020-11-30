import { Directive, Input, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { PortalService } from '../services/portal.service';

@Directive({
    selector: '[appPortalAttach]'
})
export class PortalAttachDirective implements OnInit, OnDestroy {

    constructor(private portalService: PortalService, private template: TemplateRef<any>) { }


    @Input('appPortalAttach') targetName: string

    ngOnInit(): void {
        this.portalService.attach(this.targetName, this.template)
    }

    ngOnDestroy(): void {
        this.portalService.clear(this.targetName)
    }
}
