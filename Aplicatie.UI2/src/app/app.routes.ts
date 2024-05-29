import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AngajatiListComponent } from './components/angajati/angajati-list/angajati-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddAngajatiComponent } from './components/angajati/add-angajati/add-angajati.component';

export const routes: Routes = [
    {
        path: 'angajati',
        component: AngajatiListComponent
    },
    {
        path: 'angajati/add-angajati',
        component: AddAngajatiComponent
    }
]

@NgModule({
    declarations: [
        // Remove the declaration of AngajatiListComponent from here
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        HttpClientModule,
        AngajatiListComponent // Add AngajatiListComponent to the imports array
    ],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutesModule { }