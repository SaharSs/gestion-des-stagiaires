import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit {

  keyParams:any
  dataProduct={
    firstName:'',
    lastName:'',
    comment:'',
    Cin:'',
    end:'',
    fav:'',
    start:''
    }
   successUpdate:string=""
 
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })
  }

  ngOnInit(): void {
   
    this.fs.collection('absence').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())

      this.dataProduct.Cin=data.get('Cin')
      this.dataProduct.comment=data.get('comment')
      
      this.dataProduct.end=data.get('end')
      this.dataProduct.fav=data.get('fav')
      this.dataProduct.firstName=data.get('firstName')
      this.dataProduct.lastName=data.get('lastName')
      this.dataProduct.start=data.get('start')
      
      })
 
  }

  update(f:any){
    this.fs.collection("absence").doc(this.keyParams).update({
       firstName:this.dataProduct.firstName,
       lastName:this.dataProduct.lastName,
       Cin:this.dataProduct.Cin,
       end:this.dataProduct.end,     
       fav:this.dataProduct.fav,     
       start:this.dataProduct.start,
       date:(f.value).date,
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["ad-absence"])
   
    })
   
    
  }




}
