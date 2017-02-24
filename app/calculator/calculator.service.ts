import { Injectable, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class CalculatorService {

    waterDwelling: any;
    waterBath: any;
    waterDishwasher: any;
    waterLaundry: any;
    totalWaterUsage: any;

    waterDwellingUpdated = new EventEmitter<any>();
    waterBathUpdated = new EventEmitter<any>();
    waterDishwasherUpdated = new EventEmitter<any>();
    waterLaundryUpdated = new EventEmitter<any>();
    totalWaterUsageUpdated = new EventEmitter<any>();

    constructor() {
        this.waterDwelling = 0;
        this.waterBath = 0;
        this.waterDishwasher = 0;
        this.waterLaundry = 0;
        this.totalWaterUsage = 0;
    }

    setCalculation(router:Router, counter:number){
    }

    setWaterDwelling(num: number): void {
        this.waterDwelling = num;
        this.waterDwellingUpdated.emit(num);

    }
    getWaterDwelling(): number {
        return this.waterDwelling
    }

    setWaterBath(num: number): void {
        this.waterBath = num;
        this.waterBathUpdated.emit(num);
    }
    getWaterBath(): number {
        return this.waterBath;
    }

    setWaterDishwasher(num: number): void {
        this.waterDishwasher = num;
        this.waterDishwasherUpdated.emit(num);

    }
    getWaterDishwasher(): number {
        return this.waterDishwasher;
    }

    setWaterLaundry(num: number): void {
        this.waterLaundry = num;
        this.waterLaundryUpdated.emit(num);

    }
    getWaterLaundry(): number {
        return this.waterLaundry
    }

    setTotalWaterUsage(num: number): void {
        this.totalWaterUsage = num;
        this.totalWaterUsageUpdated.emit(num);
    }

    getTotalWaterUsage(): number {
        return this.totalWaterUsage;
    }
}