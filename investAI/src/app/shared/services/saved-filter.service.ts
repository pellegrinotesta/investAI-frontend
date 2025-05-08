import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedFilterService {

  private map: Map<string, any> = new Map<string, any>();

  constructor() { }

  save(key: string, value: any): void {
    this.map.set(key, value);
  }

  get(key: string): any {
    return this.map.get(key);
  }

  delete(key: string): void {
    this.map.delete(key);
  }

  keys(): string[] {
    return Array.from(this.map.keys());
  }

  values(): any[] {
    return Array.from(this.map.values());
  }

  clear(): void {
    this.map.clear();
  }
  
}
