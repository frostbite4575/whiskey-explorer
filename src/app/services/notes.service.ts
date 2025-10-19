import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotesService {

 private getNotes(): any[] {
  const notesString = localStorage.getItem('notes');

  if(notesString === null) {
    return [];
  } else {
    return JSON.parse(notesString);
  }
}

private saveNotes(notes: any[]): void {
  localStorage.setItem('notes', JSON.stringify(notes));
}

 createNote(whiskeySlug: string, noteText: string): void {
const notes = this.getNotes();
const newNote = {
  id: Date.now().toString(),
  whiskeySlug: whiskeySlug,
  noteText: noteText,
  dateCreated: new Date().getTime(),
  dateUpdated: new Date().getTime()
}
notes.push(newNote );
this.saveNotes(notes);
}
getNotesByWhiskeySlug(whiskeySlug: string): any[] {
  const notes = this.getNotes();
  return notes.filter(note => note.whiskeySlug === whiskeySlug);
}

updateNote(noteId: string, noteText: string): void {
  const notes = this.getNotes();
  const noteToUpdate = notes.find(note => note.id === noteId);

  if(!noteToUpdate) {
    return;
  }
  noteToUpdate.noteText = noteText;
  noteToUpdate.dateUpdated = new Date().getTime();
  this.saveNotes(notes);
}
deleteNote(noteId: string): void {
  const notes = this.getNotes();
  const newNotes = notes.filter(note => note.id !== noteId);
  this.saveNotes(newNotes);
}
}