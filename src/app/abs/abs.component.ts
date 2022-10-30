import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsService } from '../services/us.service';
@Component({
  selector: 'app-abs',
  templateUrl: './abs.component.html',
  styleUrls: ['./abs.component.css']
})
export class AbsComponent implements OnInit {
  dataProduct={
    firstName:'',
    lastName:'',
    Cin:'',
  }
  keyParams:any
  constructor(private us:UsService,private parms:ActivatedRoute,private fs:AngularFirestore,private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })
  }

  ngOnInit(): void {
    this.fs.collection('internshipr').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())

      this.dataProduct.firstName=data.get('firstName')
      this.dataProduct.lastName=data.get('lastName')
     this.dataProduct.Cin=data.get('Cin')
   
    })
  }
  add(f:any){
   let fav=(f.value).fav,
    comment=(f.value).comment,
    date=(f.value).e,
    start=(f.value).h,
    end=(f.value).he
   this.us.addNewo(fav,comment,date,start,end,this.dataProduct.firstName,this.dataProduct.lastName,this.dataProduct.Cin)
  
  }

}
