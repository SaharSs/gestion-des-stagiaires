import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  size:any
  da:any
  term:any
    constructor(private as:AuthService,private fs:AngularFirestore,
      private route:Router,
      private fst:AngularFireStorage) { }
  
 
  ngOnInit(): void {
    this.fs.collection("level").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.da= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         name:element.payload.doc.get('name'),
           }
       })
       
     })
   
  }
  updatep(id:any){
    this.route.navigate(['/level/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("level").doc(id).delete()
  }
  }
  
  addcat(j:any){
    let dta=j.value;
   
    this.fs.collection('level').add({
    
     name:dta.level,
    
    })
  }



}
