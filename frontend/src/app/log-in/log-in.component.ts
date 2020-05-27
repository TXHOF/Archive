import { Component, OnInit, Inject } from "@angular/core";
import { FormControl, FormBuilder, Validators } from "@angular/forms";
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  name = new FormControl("");

  credentials = {username: '', password: ''};

  error = false;

  constructor(@Inject(AppService) private app: AppService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.error=false;
    this.app.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    this.error=true;
    return false;
  }

  ngOnInit(): void {}
}
