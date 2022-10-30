import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registerad',
  templateUrl: './registerad.component.html',
  styleUrls: ['./registerad.component.css']
})
export class RegisteradComponent implements OnInit {

  
  constructor(private as:AuthService,
    private fs:AngularFirestore,private route:Router ) { }

  ngOnInit(): void {
  
  }
  register(f:any){
    let data=f.value
  this.as.signup(data.email,data.password).then((dat)=>{
    this.fs.collection('users').doc(dat.user?.uid).set(   { 
      firstName:data.firstName,
      lastName:data.lastName,
      email:data.email,
      password:data.password,
     
      role:data.role,
      uid:dat.user?.uid
      
      
           }).then(()=>{
  
            this.route.navigateByUrl('/loginad')
          
          })
        
  
  
  }).catch(()=>{
    console.log("error !")
  })
  
  }
}
