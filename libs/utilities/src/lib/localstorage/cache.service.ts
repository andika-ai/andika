import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: Map<string, any> = new Map<string, any>();

  constructor() { }

  setItem(key: string, value: any): void {
    this.cache.set(key, value);
  }

  getItem(key: string): any {
    return this.cache.get(key);
  }

  removeItem(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
