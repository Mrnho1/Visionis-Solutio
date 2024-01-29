import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { BannerComponent } from './components/banner/banner.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { GifComponent } from './components/gif/gif.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { ChamadaContatoComponent } from './components/chamada-contato/chamada-contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    BannerComponent,
    SobreComponent,
    GifComponent,
    SolucoesComponent,
    ChamadaContatoComponent,
    FooterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
