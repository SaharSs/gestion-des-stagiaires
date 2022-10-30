import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AnyNaptrRecord } from 'dns';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ad-req',
  templateUrl: './ad-req.component.html',
  styleUrls: ['./ad-req.component.css']
})
export class AdReqComponent implements OnInit {
size:any
dt:any
term:any
ui:any
  constructor(private as:AuthService,private fs:AngularFirestore,
    private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.dt= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         firstName:element.payload.doc.get('firstName'),
         lastName:element.payload.doc.get('lastName'),
         Cin:element.payload.doc.get('Cin'),       
         tel:element.payload.doc.get('tel'),
         email:element.payload.doc.get('email'),
         p:element.payload.doc.get('p'),
         adress:element.payload.doc.get('adress'),
         name:element.payload.doc.get('name'),
         adressl:element.payload.doc.get('adressl'),
         tell:element.payload.doc.get('tell'),
         se:element.payload.doc.get('se'),
         level:element.payload.doc.get('level'),
         date:element.payload.doc.get('date'),
         cv:element.payload.doc.get('cv'),
         speciality:element.payload.doc.get('speciality'),
         state:element.payload.doc.get('state'),
          uid:element.payload.doc.get('uid')

       }
       })
      

     })

    
   
   
    }

    
  
    delete(id:any){
      if (confirm('Are you sure?')){
      this.fs.collection("internshipr").doc(id).delete()
    }
    }
      
    updatec(id:any){
      this.route.navigate(['/ad-req/'+id])
     
    }
    addNewuser(f:NgForm) {
      let data=f.value;
      this.as.signup(data.email,data.password).then((dat)=>{
        this.fs.collection('users').doc(dat.user?.uid).set({ 
          firstName:data.firstName,
         lastName:data.firstName,
          Cin:data.Cin,
          password:data.password,
          role:data.role,
          
    
          
        }).then(()=>{
          this.ui=dat.user?.uid
          localStorage.setItem('sl',this.ui)
          localStorage.setItem('ls',data.flName)
          localStorage.setItem('gt',data.adress)
    this.route.navigate(['/'])
    window.location.reload();
        })
      })
    
     
      }
    
}
