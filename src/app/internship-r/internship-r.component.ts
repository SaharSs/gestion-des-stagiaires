import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsService } from '../services/us.service';

@Component({
  selector: 'app-internship-r',
  templateUrl: './internship-r.component.html',
  styleUrls: ['./internship-r.component.css']
})
export class InternshipRComponent implements OnInit {
  task:AngularFireUploadTask | undefined
  ref!:AngularFireStorageReference
  persentages:any
  @ViewChild('fileUpload', { static: false })
  fileUpload: ElementRef | undefined
  
  constructor(private us:UsService,
    private as:AuthService,private fs:AngularFirestore,private route:Router) { }
  dataArray:any
  y:any
  size:any
  u:any
  ngOnInit(): void {
    this.fs.collection("internshipr").snapshotChanges().subscribe((data)=>{
      this.size=data.length
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          state:element.payload.doc.get('state'),
          uid:element.payload.doc.get('uid')
       }
      
       })
      for(let i=0;i<=this.size;i++){
       
        if((this.dataArray[i]['uid'])==(localStorage.getItem('sl'))){
          console.log(this.dataArray[i]['uid']) 
      if(this.dataArray[i]['state']!==0){
       
        this.route.navigateByUrl('/request')
      }else{
        this.u="refused"
      }
    }}

     })
  }
  addf(f:any) {
    let e= (f.value).e,
    d= (f.value).d,
    cv = this.fileUpload?.nativeElement?.files[0],
    firstName=(f.value).firstName,
    lastName=(f.value).lastName,
    Cin=(f.value).Cin,
    tel=(f.value).tel,
    email=(f.value).email,
    p=(f.value).p,
    relationship=(f.value).relationship,
    adress=(f.value).local,
    name=(f.value).name,
    adressl=(f.value).adressl,
    tell=(f.value).tell,
    se=(f.value).se,
    level=(f.value).level,
    speciality=(f.value).speciality,
    t=(f.value).t
    this.us.add(e,d,relationship);
    this.us.adds(firstName,lastName,Cin ,tel,email,
    p,adress,name,adressl,tell,se,level, cv,speciality,t);
    this.route.navigateByUrl('request')
    
  }
      
}
