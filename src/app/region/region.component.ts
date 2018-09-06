import { Component, OnInit, Inject } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router} from '@angular/router'






@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  public Regional_zone = ["africa","Americas","asia","europe","oceania"]
  public countrydata;
  public reg:any;
  public name:any;
  // public imagearray:any = [{"url":"assets/africa.png"},{"url":"americas.png"},
  // {"url":"assets/asia.jpg"},{"url":"europe.png"},{"url":"assets/oceania.jpg"}]
  public imagearray:any = ["assets/africa.png","assets/americas.png"
  ,"assets/asia.jpg","assets/europe.png","assets/oceania.jpg"]

public countrynamedata:any;
public languagedata:any;
public languagedetails:any;

public currencydata:any;
public currencydetails:any;
  constructor(public apiserv:ApicallService,public _router:Router) 
  {

   }

  ngOnInit() 
  {



  this._router.navigateByUrl('/')  
    
   
  }
  

  countryzone(reg:any)
  {
      this.apiserv.regionapi(reg).subscribe(
        data=>{
          
     this.countrydata = data
          
          console.log(this.countrydata)
        
        }
      )
       
    }
    

    backtohome()
    {
      this._router.navigateByUrl('/region')
    }

    countrynamedetail(name:any)
    {

        this.apiserv.countryname(name).subscribe(
          data=>{
           this.countrynamedata = data
           console.log(this.countrynamedata)
          }
        )
    }

    languagefilter(languagedata)
    {
      this.apiserv.langfilter(languagedata).subscribe(
        data=>{
          this.languagedetails = data;
          console.log(this.languagedetails)

        }
      )
    }

    currencyfilter(currencydata)
    {
      this.apiserv.currencyfilter(currencydata).subscribe(
        data=>
        {
          this.currencydetails = data;
        }
      )
    }


   
  }
      






    // countryzone(reg:any)
    // {
  
    //   if(this.Regional_zone[0] == reg)
    //   {
    //     this.apiserv.regionapi(this.Regional_zone[0]).subscribe(
    //       data=>{
    //         this.countrydata = data;
    //         console.log(this.countrydata)
    //         return this.countrydata;
    //       }
    //     )
    //     this._router.navigateByUrl('/home')
        
    //   }
    //   else if(this.Regional_zone[1]== reg)
    //   {
    //     this.apiserv.regionapi(this.Regional_zone[1]).subscribe(
    //       data=>{
    //         this.countrydata = data;
    //         console.log(this.countrydata)
    //         return this.countrydata;
  
    //       }
    //     )
    //     this._router.navigateByUrl('/home')
        
    //   }
    //   else if(this.Regional_zone[2]== reg)
    //   {
    //     this.apiserv.regionapi(this.Regional_zone[2]).subscribe(
    //       data=>{
    //         this.countrydata = data;
    //         console.log(this.countrydata)
    //         return this.countrydata;
  
    //       }
    //     )
    //     this._router.navigateByUrl('/home')
        
    //   }
    //   else if(this.Regional_zone[3]== reg)
    //   {
    //     this.apiserv.regionapi(this.Regional_zone[3]).subscribe(
    //       data=>{
    //         this.countrydata = data;
    //         console.log(this.countrydata)
    //         return this.countrydata;
  
    //       }
    //     )
    //     this._router.navigateByUrl('/home')
        
    //   }
    //   else if(this.Regional_zone[4]== reg)
    //   {
    //     this.apiserv.regionapi(this.Regional_zone[4]).subscribe(
    //       data=>{
    //         this.countrydata = data;
    //         console.log(this.countrydata)
    //         return this.countrydata;
  
    //       }
    //     )
    //     this._router.navigateByUrl('/home')
        
    //   }
  
      
    //   else
    //   {
    //     this._router.navigateByUrl('')
    //   }
    //   }
    //   }


