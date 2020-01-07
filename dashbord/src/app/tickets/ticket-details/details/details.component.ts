import { Component, OnInit } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import * as $ from 'jquery';

declare let $: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
activeMore = false;
public btnText = "Read More +"
timeCal : any;
constructor() { }



viewMore(newText : string){
  this.activeMore = !this.activeMore;
  if(this.btnText== 'Read Less -'){
    this.btnText = 'Read More +';
  }
  else{
    this.btnText = newText;
  }
}

files: any = [];
public imagePath;
imgURL: any = [];

 uploadFile(event) {
   for (let index = 0; index < event.length; index++) {
     const element = event[index];
     this.files.push(element.name)
   }


   
   var reader = new FileReader();
   this.imagePath = event;
   reader.readAsDataURL(event[0]); 
   reader.onload = (_event) => { 
     this.imgURL = reader.result; 
   }


 }
 deleteAttachment(index) {
   //this.files.splice(index, 1)
   this.files.splice(index)
 }


 /***Quil Js Text Editor Configs****/
 
 editorStyle ={
   minHeight: '100px',
   height:'auto',
   //boxShadow:'inset -1px 7px 35px -22px #757375',
   borderRadius:'5px',
   //color:'#a1a1a1',
   fontSize:'15px',
   border:'1px solid #9e9e9e'
 }

 config = {
   toolbar : [
     ['bold', 'italic', 'underline'],        // toggled buttons
     [{ 'header': 1 }, { 'header': 2 }],               // custom button values
     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
     [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
     [{ 'align': [] }],
     ['link', 'image'],                         // link and image, video
     ['blockquote', 'code-block'],
   ]
 }
 clickTrue = false;
 showTool(){
   this.clickTrue = !this.clickTrue;
 }
 upld = false;
 showAtch(){
   this.upld = !this.upld;
 }

  ngOnInit() {
  }

}
