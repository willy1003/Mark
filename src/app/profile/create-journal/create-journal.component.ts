import { Component, OnInit } from '@angular/core';
import { Journal } from '../models/journal.models'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.css']
})
export class CreateJournalComponent implements OnInit {
	journalModel: Journal;
	createJournalForm: FormGroup;
  constructor(
  	private formBuilder: FormBuilder,
  	) { 
  	this.journalModel = new Journal;
  }

  ngOnInit(): void {
  this.createJournalForm = this.formBuilder.group({       
  	id: this.journalModel.id,       
  	name: this.journalModel.name,       
  	description: this.journalModel.description,       
  	content: this.journalModel.content,



  });

}
  createJournalFormSubmit() {
    console.log('test');

	}
}
