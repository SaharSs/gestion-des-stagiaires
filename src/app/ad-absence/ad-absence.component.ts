import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ad-absence',
  templateUrl: './ad-absence.component.html',
  styleUrls: ['./ad-absence.component.css']
})
export class AdAbsenceComponent implements OnInit {
size:any
da:any
term:any
  constructor(private as:AuthService,private fs:AngularFirestore,
    private route:Router,
    private fst:AngularFireStorage) { }

  ngOnInit(): void {
    this.fs.collection("absence").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.da= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          firstName:element.payload.doc.get('firstName'),
          lastName:element.payload.doc.get('lastName'),
          start:element.payload.doc.get('start'),       
          end:element.payload.doc.get('end'),
          Cin:element.payload.doc.get('Cin'),
          comment:element.payload.doc.get('comment'),
          date:element.payload.doc.get('date'),
          fav:element.payload.doc.get('fav'),
         
       }
       })
       
     })
   
    }
    delete(id:any){
      if (confirm('Are you sure?')){
      this.fs.collection("absence").doc(id).delete()
    }
    }
  
    updatep(id:any){
      this.route.navigate(['/ad-absence/'+id])
    }
 
}
