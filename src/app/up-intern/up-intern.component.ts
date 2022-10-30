import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-up-intern',
  templateUrl: './up-intern.component.html',
  styleUrls: ['./up-intern.component.css']
})
export class UpInternComponent implements OnInit {

keyParams:any
    dataProduct={
     start:'',
     end:'',
     relationship:'',
     uid:''
      
    }
    successUpdate:string=""
  size:any
  dataArray:any
    constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
      private route:Router) { 
      this.parms.params.subscribe(query=>{
        return this.keyParams=query['key']
      })
    }
  
  
    ngOnInit(): void {
      this.fs.collection('internship').ref.doc(this.keyParams).get().then(data=>{
        console.log(data.data())
  
        this.dataProduct.start=data.get('start')
        this.dataProduct.end=data.get('end')
        this.dataProduct.relationship=data.get('relationship')
        this.dataProduct.uid=data.get('uid')
       
      })
      this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
        this.size=data.length
        this.dataArray= data.map(element=>{
          return{ 
            id:element.payload.doc.id ,
            firstName:element.payload.doc.get('firstName') 
         }
        
         })
   
    })
  }
    
    update(f:any){
      this.fs.collection("internship").doc(this.keyParams).update({
        start:this.dataProduct.start,
        end:this.dataProduct.end,
        relationship:this.dataProduct.relationship,
        topic:(f.value).topic,     
        tutor:(f.value).tutor,
        uid:(f.value).uid
      }).then(()=>{
        this.successUpdate="updated!"
       this.route.navigate(["intern-list"])
     
      })
     
      
    }
  

}
