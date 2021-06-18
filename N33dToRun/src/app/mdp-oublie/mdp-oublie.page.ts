import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.page.html',
  styleUrls: ['./mdp-oublie.page.scss'],
})
export class MdpOubliePage implements OnInit {

  constructor( public authService: AuthService ) {  }

  ngOnInit() {
  }

}
