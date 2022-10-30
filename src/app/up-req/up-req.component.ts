import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-up-req',
  templateUrl: './up-req.component.html',
  styleUrls: ['./up-req.component.css']
})
export class UpReqComponent implements OnInit {
  keyParams:any
  dataProduct={
    firstName:'',
    lastName:'',
    email:'',
    Cin:'',
    tel:'',
    date:'',
    adress:'',
    p:'',
    name:'',	
    adressl:'',
    tell:'',
    se:''	,
    level:'',
    speciality:'',	

    state:'',
    uid:''	
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
      this.dataProduct.p=data.get('p')
      this.dataProduct.name=data.get('name')
      this.dataProduct.adressl=data.get('adressl')
      this.dataProduct.level=data.get('level')
      this.dataProduct.tell=data.get('tell')
      this.dataProduct.se=data.get('se')
      this.dataProduct.speciality=data.get('speciality')
      this.dataProduct.state=data.get('state'),
      this.dataProduct.uid=data.get('uid')
      })
 
  }

  update(f:any){
    this.fs.collection("internshipr").doc(this.keyParams).update({
       firstName:this.dataProduct.firstName,
       lastName:this.dataProduct.lastName,
       email:this.dataProduct.email,
       Cin:this.dataProduct.Cin,     
       tel:this.dataProduct.tel,     
       p:(f.value).p,
       name:this.dataProduct.name,
       adressl:this.dataProduct.adressl,
       level:(f.value).level,
       tell:this.dataProduct.tell,
       date:(f.value).t,
       speciality:this.dataProduct.speciality,	
       state:this.dataProduct.state
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["requested"])
   
    })
   
    
  }





}
