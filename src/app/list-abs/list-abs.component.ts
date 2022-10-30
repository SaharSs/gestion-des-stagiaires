import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-list-abs',
  templateUrl: './list-abs.component.html',
  styleUrls: ['./list-abs.component.css']
})
export class ListAbsComponent implements OnInit {

  constructor(private as:AuthService,private fs:AngularFirestore,
    private route:Router,
  ) { }
size:any
dataArray:any
term='';
  ngOnInit(): void {
    this.fs.collection("absence").snapshotChanges().subscribe((data)=>{
      this.size=data.length;
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
          Cin:element.payload.doc.get('Cin'),
          comment:element.payload.doc.get('comment'),
          date:element.payload.doc.get('date'),       
          end:element.payload.doc.get('end'),
          fav:element.payload.doc.get('fav'),
          firstName:element.payload.doc.get('firstName'),
          lastName:element.payload.doc.get('lastName'),
          start:element.payload.doc.get('start')
          
       }
       })
  })
}

}
