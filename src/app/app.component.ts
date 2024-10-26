import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PicturepostComponent } from './picturepost/picturepost.component';
import { ShowComponent } from './show/show.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './filter.pipe';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,HomeComponent,FilterPipe, ReactiveFormsModule,ShowComponent,PicturepostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emporiam';
}
