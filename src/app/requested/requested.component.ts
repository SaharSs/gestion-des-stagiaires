import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-requested',
  templateUrl: './requested.component.html',
  styleUrls: ['./requested.component.css']
})
export class RequestedComponent implements OnInit {
  ers:any
  size:any
  x:any
  fe:any
  categories:any
  term:any
  /*[style.background-color]="(item.state == 2 ? 'yellow' : 'red')"*/
  constructor(private as:AuthService,private fs:AngularFirestore,
    private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.ers= data.map(element=>{
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
     
     
     this.fs.collection("categories").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.categories= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         name:element.payload.doc.get('name'),
        

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
      this.route.navigate(['/requested/'+id])
     
    }
  
    accept(id:any){
      let ki=this.ers.filter((e:any)=>e)
    for(let j=0;j<=this.size-1;j++)
    {
     
      if((ki[j].id==id)&&(ki[j].state!=1)){
     
      
      ki[j].state=1
      this.fs.collection('internshipr').doc(ki[j].id).update({
  
  
        state:ki[j].state,
       
      
      })
     
      }
    
     }
    }
refuse(id:any){
  let ki=this.ers.filter((e:any)=>e)
    for(let i=0;i<=this.size-1;i++)
    {
     
      if((ki[i].id==id)&&(ki[i].state!=0)){
     
      
      ki[i].state=0
      this.fs.collection('internshipr').doc(ki[i].id).update({
  
  
        state:ki[i].state,
       
      
      })
     
      }
    
     }
    
}
}
