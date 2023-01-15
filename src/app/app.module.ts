import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSearchComponent } from './components/user-search/user-search.component';

import { NgZorroAntdModule } from './antd-module/ng-zorro-antd.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RepoDetailsComponent } from './components/repo-details/repo-details.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorComponent } from './components/error/error.component';
import { EmptyComponent } from './components/empty/empty.component';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, UserSearchComponent, UserDetailsComponent, RepoDetailsComponent, RepoListComponent, PaginationComponent, LoaderComponent, ErrorComponent, EmptyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
