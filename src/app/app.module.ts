import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApicallService } from './apicall.service';
import { HttpClientModule } from '@angular/common/http';



import { RouterModule } from '@angular/router';
import { RegionComponent } from './region/region.component';

@NgModule({
  declarations: [
    AppComponent,
    
    RegionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    RouterModule.forRoot([
       {path:'region',component:RegionComponent},
       {path:'regionalcountry',component:RegionComponent},
      {path:'',component:RegionComponent}
     
    
    ])
  ],
  providers: [ApicallService,RegionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
