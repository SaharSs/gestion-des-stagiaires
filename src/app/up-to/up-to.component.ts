import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-up-to',
  templateUrl: './up-to.component.html',
  styleUrls: ['./up-to.component.css']
})
export class UpToComponent implements OnInit {

  
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
    this.fs.collection('topic').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())
       this.dataProduct.name=data.get('name')
    
    })
    
  }


update(){
  this.fs.collection("topic").doc(this.keyParams).update({
    
   name:this.dataProduct.name,
   
  }).then(()=>{
    this.successUpdate="updated!"
   this.route.navigate(["topic"])
 
  })
}


}
