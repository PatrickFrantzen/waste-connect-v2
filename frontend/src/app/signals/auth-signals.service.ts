import { Injectable, signal } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthSignalsService {

    tokenSignal = signal(''); 
    firstLoginSignal = signal<boolean | undefined>(undefined);
    adminSignal = signal<boolean | undefined>(undefined);
}