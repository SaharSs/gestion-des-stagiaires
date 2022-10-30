import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  size:any
da:any
term:any
  constructor(private as:AuthService,private fs:AngularFirestore,
    private route:Router,
    private fst:AngularFireStorage) { }

  ngOnInit(): void {
    this.fs.collection("topic").snapshotChanges().subscribe((data)=>{
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
    this.route.navigate(['/topic/'+id])
   
  }
  delete(id:any){
    if (confirm('Are you sure?')){
    this.fs.collection("topic").doc(id).delete()
  }
  }
  
  addcat(j:any){
    let dta=j.value;
    console.log(dta.categories);
    this.fs.collection('topic').add({
    
     name:dta.topic,
    
    })
  }

 
}
