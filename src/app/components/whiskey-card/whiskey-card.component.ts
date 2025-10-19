import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-whiskey-card',
  imports: [FormsModule],
  templateUrl: './whiskey-card.component.html',
  styleUrl: './whiskey-card.component.css'
})
export class WhiskeyCardComponent implements OnInit {
  
  @Input() whiskey: any;


  isCountryExpanded = false;

  constructor(private notesService: NotesService) {}

    notes:any[] = []
    ngOnInit() {
      this.notes = this.notesService.getNotesByWhiskeySlug(this.whiskey.slug);
    }
  
  
  toggleCountry() {
    this.isCountryExpanded = !this.isCountryExpanded;
  }

  newNoteText: string = '';

  addNote(){
    if(this.newNoteText.trim() !== '') {
      this.notesService.createNote(this.whiskey.slug, this.newNoteText);
      this.newNoteText = '';
      this. notes = this.notesService.getNotesByWhiskeySlug(this.whiskey.slug);
  }
  }

  deleteNote(noteId: string) {
    this.notesService.deleteNote(noteId);
    this.notes = this.notesService.getNotesByWhiskeySlug(this.whiskey.slug);
  }
  editingNoteId: string | null = null;
  editingNoteText: string = '';

  startEditingNote(noteId: string) {
    const note = this.notes.find(n => n.id === noteId);
    if (note) {
      this.editingNoteId = noteId;
      this.editingNoteText = note.noteText;
    }
  }
  saveEditedNote() {
    if (this.editingNoteId) {
      this.notesService.updateNote(this.editingNoteId, this.editingNoteText);
      this.editingNoteId = null;
      this.editingNoteText = '';
      this.notes = this.notesService.getNotesByWhiskeySlug(this.whiskey.slug);
    }
  }

    cancelEditingNote() {
      this.editingNoteId = null;
      this.editingNoteText = '';
  }

}
