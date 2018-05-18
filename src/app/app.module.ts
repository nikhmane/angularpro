import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { CryptoserviceService } from './cryptoservice.service';
import { MarketComponent } from './market/market.component';



const appRoutes:Routes = [
  {path: 'navigation', component:NavigationComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'signin', component:SigninComponent},
  {path: 'market', component:MarketComponent},
  {path:'',redirectTo:'/', pathMatch:'full'}, 
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegisterComponent,
    SigninComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CryptoserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
