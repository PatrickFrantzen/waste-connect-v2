export interface Emailbody {
    betreff: string;
    nachricht: string;
    ID: string;
}

export interface Email extends Emailbody {
    email: string;
    telefon?: string;
}