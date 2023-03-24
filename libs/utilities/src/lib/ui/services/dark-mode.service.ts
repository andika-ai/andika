import { Injectable } from '@angular/core';

@Injectable()
export class DarkModeService {

    private isDarkModeEnabled = false;

    constructor() {
        this.isDarkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.toggleDarkMode(this.isDarkModeEnabled);
    }

    toggleDarkMode(isEnabled: boolean): void {
        this.isDarkModeEnabled = isEnabled;
        if (isEnabled) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }

    getIsDarkModeEnabled(): boolean {
        return this.isDarkModeEnabled;
    }

}