import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/compat/app';
@Component({
  selector: 'app-intern-list',
  templateUrl: './intern-list.component.html',
  styleUrls: ['./intern-list.component.css']
})
export class InternListComponent implements OnInit {
  dataArray:any
  size:any
  task:AngularFireUploadTask | undefined
ref:AngularFireStorageReference | undefined
persentages:any
term:any
@ViewChild('report', { static: false })
report: ElementRef | undefined
  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router,
    private fst:AngularFireStorage) { }

  ngOnInit(): void {
    this.fs.collection("internship").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          certificate:element.payload.doc.get('certificate'),
          end:element.payload.doc.get('end'),
          relationship:element.payload.doc.get('relationship'),       
          report:element.payload.doc.get('report'),
          start:element.payload.doc.get('start'),
          topic:element.payload.doc.get('topic'),
          tutor:element.payload.doc.get('tutor'),
          state:element.payload.doc.get('state')
          
       }
       })
       for(let i=0;i<=this.size-1;i++)
       {
         console.log(firebase.firestore.FieldValue.serverTimestamp())
        if(firebase.firestore.FieldValue.serverTimestamp()>=this.dataArray[i].end){
        console.log("atttttes")
        }
        } 
         

     })
   
    }
    delete(id:any){
      if (confirm('Are you sure?')){
      this.fs.collection("internship").doc(id).delete()
    }
    }
    done(id:any){
      let ki=this.dataArray.filter((e:any)=>e)
    for(let i=0;i<=this.size-1;i++)
    {
     
      if((ki[i].id==id)&&(ki[i].state!=1)){
       ki[i].state=1
      this.fs.collection('internship').doc(ki[i].id).update({
  
  
        state:ki[i].state,
       
      
      })
     
      }
    
     }
    }
    updatep(id:any){
      this.route.navigate(['/intern-list/'+id])
    }
    upload(event:any,lm:any){
      const id=Math.random().toString(36).substring(2)
      this.ref=this.fst.ref(id)
      this.task=this.ref.put(event.target.files[0])
      this.persentages=this.task.percentageChanges()
      this.task.then((data)=>{
        data.ref.getDownloadURL().then(url=>{
          this.fs.collection("internship").doc(lm).update({
            report:url
          }).then(()=>{
            window.location.reload()
          })

        })
      })
  }
}
