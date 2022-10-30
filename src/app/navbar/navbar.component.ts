import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsService } from '../services/us.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isuser:any;
  isAdmin:any;
  isre:any
  userData:any;
  us:any
  constructor(private fs:AngularFireAuth,private route:Router,
    public as:AuthService,private uss:UsService) { 
    this.as.user.subscribe((data) => {
      if (data) {
        
        this.isuser = true;
        this.as.use = data.uid;
      localStorage.setItem('user', this.as.use);
      this.uss.getUserData().subscribe(dat=>{
        this.us=dat
       if (this.us['role']=='admin')
        {
          console.log(this.us['role'])
         this.isAdmin = true;
       }
       else{
         this.isAdmin = false;
       }
       if(this.us['role']=='responsible'){
        this.isre = true;
       }else{
        this.isre = false;
       }
      })  
      } else {
        this.isuser = false;
        this.as.use= '';
      
      }
    })

  }
  ngOnInit(): void {
  }

  logout(){
  
  
    this.fs.signOut().then(()=>{
      
      localStorage.removeItem('user');
      
      localStorage.removeItem('sl')
      localStorage.removeItem('vs');
      localStorage.removeItem('gt');
      localStorage.removeItem('ls');
      this.route.navigate(['/nb']);
   
     
    
    }).then(()=>{
      window.location.reload()
    });
}}
