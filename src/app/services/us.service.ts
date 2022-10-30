import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UsService {
  task:AngularFireUploadTask | undefined
  ref:AngularFireStorageReference | undefined
  persentages :any 
  constructor(private fst:AngularFirestore,private as:AuthService,
     private storage: AngularFireStorage) { }
  getUserData() {
    return this.fst.doc('users/' + this.as.use).valueChanges();
  }
  add(e:Date,d:Date,relationship:string){
    this.fst.collection('internship').doc().set({
                    topic:'-',
                     start:e,
                     end:d,
                     relationship:relationship,
                     tutor:'-',
                     report:'-',
                     certificate:'-',
                     state:0,
                     uid:localStorage.getItem('sl')
                    })
   
  
}
adds(firstName:string,  lastName:string , Cin:number ,tel:number,email:string,
  p:string,adress:string,name:string,adressl:string,tell:number,se:string,level:string,
  cv:File,speciality:string,t:Date){
    const id=Math.random().toString(36).substring(2)
    this.ref=this.storage.ref(id)
    this.task=this.ref.put(cv)
    this.persentages=this.task.percentageChanges()
    this.task.then((data)=>{
    data.ref.getDownloadURL().then((photoUrl) => {
  
   this.fst.collection('internshipr').doc().set({
                    firstName:firstName,
                    lastName:lastName,
                    Cin:Cin,
                    tel:tel,
                    email:email,
                    p:p,
                    adress:adress,
                    name:name,
                    adressl:adressl,
                    tell:tell,
                    se:se,
                    level:level,
                    cv:photoUrl,
                    speciality:speciality,
                    state:2,
                    uid:localStorage.getItem('sl'),
                    t:t
                  });
              
                });
              }) 

}

addNewo(fav:any,comment:string,date:Date,start:string,end:string,firstName:any,lastName:any,Cin:any) {
             
  this.fst.collection('absence').doc().set({
                    fav:fav,
                    comment:comment,
                    firstName:firstName,
                    lastName:lastName,
                    Cin:Cin,
                    start:start,
                    end:end,
                    date:date
                  });
                
        }

}
