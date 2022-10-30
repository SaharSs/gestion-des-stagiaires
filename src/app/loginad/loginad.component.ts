import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginad',
  templateUrl: './loginad.component.html',
  styleUrls: ['./loginad.component.css']
})
export class LoginadComponent implements OnInit {

  mes:string='';
  nl:any
  gt:any=[]
  datap={
    firstName:" ",
    role:" " ,
  } 
    constructor(private as:AuthService,
      private fs:AngularFirestore,
      private fst:AngularFireAuth,private route:Router) { }
  
    ngOnInit(): void {
     
        
    }
    login(f:any){
  let data=f.value
  this.as.signin(data.email,data.password).then((dat)=>{
    this.nl=dat.user?.uid
    localStorage.setItem("sl",this.nl);
    this.fs.collection('users').ref.doc(this.nl).get().then(data=>{
      
    
        this.datap.firstName=data.get('firstName')
        
        this.datap.role=data.get("role");
       
        localStorage.setItem( "ls",this.datap.firstName);
      
        localStorage.setItem( "vs",this.datap.role);
        if(data.get("role")==="intern" || data.get("role")==="responsible"){
        
          this.fst.signOut().then(()=>{
            localStorage.removeItem('sl');
            localStorage.removeItem('user');
            localStorage.removeItem('ls');
            localStorage.removeItem('vs');
            localStorage.removeItem('gt');
            this.route.navigate(['/login']);
            window.location.reload();
  
            
           
          
          })
          
        }else{
          
          this.route.navigateByUrl("/nb")
          
        
        }
        
       
  })
  })
  }
 




}
