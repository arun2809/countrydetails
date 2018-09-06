import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  public regionselector:any;
  public nameOfcountry:any;
  public langdata:any;
public currency_data:any;
  constructor(public _http:HttpClient) 
  {

   }
 
   regionapi(regionselector)
   {
     return this._http.get('https://restcountries.eu/rest/v2/region/' + regionselector)
   }

   countryname(nameOfcountry)
   {
     return this._http.get('https://restcountries.eu/rest/v2/name/' + nameOfcountry)
   }


  langfilter(langdata)
  {
return this._http.get('https://restcountries.eu/rest/v2/lang/'+ langdata)
  }

  currencyfilter(currency_data)
  {
  return this._http.get('https://restcountries.eu/rest/v2/currency/' + currency_data)
  }

}
