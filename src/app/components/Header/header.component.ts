import { Component, Input } from '@angular/core';
import { Admin } from '../../types/Admin/Admin.types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
})
export class HeaderComponent {
       @Input() admin: Admin | null = null;
       
}
