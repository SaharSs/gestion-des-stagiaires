import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private as:AuthService,private fs:AngularFirestore,private route:Router) { }
  dataArray:any
  y:any
  dz:any
  f:any
  term=''
  ngOnInit(): void {
    this.y=localStorage.getItem('sl')
    this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
    this.f=data.length
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id,
          uid:element.payload.doc.get('uid'),
          firstName:element.payload.doc.get('firstName'),
          lastName:element.payload.doc.get('lastName'),
          adress:element.payload.doc.get('adress'),
         state:element.payload.doc.get('state'),
        
        
       
       }
       })
       let ki=this.dataArray.filter((e:any)=>e)
    for(let i=0;i<=this.f-1;i++)
    {
      if((ki[i].uid==this.y) && (ki[i].state==1)){
        setTimeout(() => {
           alert('accepted') }, 10
          )
        }    
      }
   
       
     })
     
     this.fs.collection("internship").snapshotChanges().subscribe((data)=>{
      this.dz= data.map(element=>{
        return{ 
          id:element.payload.doc.id,
       
        report:element.payload.doc.get('report')
        
       
       }
       })
      

     })
  }
update(id:any){
this.route.navigateByUrl('/request/'+id);
}

upload(event:any,id:any){

}
}
