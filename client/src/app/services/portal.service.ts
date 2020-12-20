import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PortalService {

    // STILL NOT USED

    targets: Map<string, ViewContainerRef>

    constructor() {
        this.targets = new Map<string, ViewContainerRef>()
    }

    addTarget(targetName: string, viewContainer: ViewContainerRef): void {
        this.targets.set(targetName, viewContainer)
    }

    getTarget(targetName: string): ViewContainerRef {
        return this.targets.has(targetName) ? this.targets.get(targetName) : null
    }

    attach(targetName: string, template: TemplateRef<any>): void {
        this.getTarget(targetName)?.createEmbeddedView(template)
    }

    clear(targetName: string) {
        this.getTarget(targetName)?.clear()
    }

}
