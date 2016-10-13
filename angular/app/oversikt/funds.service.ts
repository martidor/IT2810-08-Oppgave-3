import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()

export class FundService {

    funds:Array<any>;

    constructor(private http:Http)
        {
            //console.log(">>friend.service.ts:constructor--")
            http.request('./../../../dummy-funds.json')
                    .subscribe(response => this.funds = response.json());
    }

        getFunds()
        {
            //console.log(">>friend.service.ts:getFriends--")
            console.log(this.funds)
            return this.funds;
        }
}
