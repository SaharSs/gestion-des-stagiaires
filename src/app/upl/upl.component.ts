import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upl',
  templateUrl: './upl.component.html',
  styleUrls: ['./upl.component.css']
})
export class UplComponent implements OnInit {
  keyParams:any
  dataProduct={
   start:'',
   end:'',
   relationship:'',

    
  }
  successUpdate:string=""

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
    
    })
 
  }
  update(f:any){
    this.fs.collection("internship").doc(this.keyParams).update({
      start:this.dataProduct.start,
      end:this.dataProduct.end,
      relationship:this.dataProduct.relationship,
      topic:(f.value).topic,     
      tutor:(f.value).tutor
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["intern-list"])
   
    })
   
    
  }
  
}
