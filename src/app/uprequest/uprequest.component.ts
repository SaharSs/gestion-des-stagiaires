import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uprequest',
  templateUrl: './uprequest.component.html',
  styleUrls: ['./uprequest.component.css']
})
export class UprequestComponent implements OnInit {

  keyParams:any
  dataProduct={
   firstName:'',
   lastName:'',
   email:'',
   Cin:'',
   tel:'',
   date:'',
   adress:''
   }
  successUpdate:string=""

  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,
    private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })
  }

  ngOnInit(): void {
    this.fs.collection('internshipr').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())

      this.dataProduct.firstName=data.get('firstName')
      this.dataProduct.lastName=data.get('lastName')
      this.dataProduct.email=data.get('email')
      this.dataProduct.Cin=data.get('Cin')
      this.dataProduct.tel=data.get('tel')
      this.dataProduct.date=data.get('date')
      this.dataProduct.adress=data.get('adress')
    
    })
 
  }
  update(f:any){
    this.fs.collection("internshipr").doc(this.keyParams).update({
      firstName:this.dataProduct.firstName,
      lastName:this.dataProduct.lastName,
      email:this.dataProduct.email,
      Cin:this.dataProduct.Cin,     
      date:this.dataProduct.date,
      tel:this.dataProduct.tel,     
      adress:this.dataProduct.adress,     
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["intern-list"])
   
    })
   
    
  }


}
