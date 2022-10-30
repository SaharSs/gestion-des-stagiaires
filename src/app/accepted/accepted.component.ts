import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {

  dataArray:any
  size:any
  x:any
  term:any
  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.dataArray= data.map(element=>{
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
         cv:element.payload.doc.get('cv'),
         speciality:element.payload.doc.get('speciality'),
         state:element.payload.doc.get('state'),
        
       }
       })
      

     })
     
     
    
   
   
    }
  
    ab(id:any){
      this.route.navigate(['/accepted/'+id])
      }
    
}
