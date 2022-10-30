import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-up-tu',
  templateUrl: './up-tu.component.html',
  styleUrls: ['./up-tu.component.css']
})
export class UpTuComponent implements OnInit {

  keyParams:any
  dataProduct={
    name:'',
  }
  successUpdate:string=""
  
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })
  }
  ngOnInit(): void {
    this.fs.collection('tutor').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
       this.dataProduct.name=data.get('name')
    
    })
    
  }


update(){
  this.fs.collection("tutor").doc(this.keyParams).update({
    
    name:this.dataProduct.name,
   
  }).then(()=>{
    this.successUpdate="updated!"
   this.route.navigate(["tutor"])
 
  })
}
}
